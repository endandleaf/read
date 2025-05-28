#!/bin/bash

# === 配置项 ===
REPO_OWNER="autobcb"       # GitHub 仓库所有者
REPO_NAME="read"             # 仓库名称
GITHUB_TOKEN="github_pat_xxxxx"  # 访问令牌（建议通过环境变量设置）
DEPLOY_DIR="/root/read"                 # 部署目录
SERVICE_NAME="read"               # Docker 容器名称
LATEST_TAG_FILE="/tmp/latest.tag" # 本地版本记录文件
DOWNLOAD_DIR="/tmp"               # 临时下载目录

# === 初始化 ===
mkdir -p "$DOWNLOAD_DIR"
export PATH="$PATH:/usr/bin/unzip"  # 确保 unzip 可用

# === 获取最新版本信息 ===
get_latest_release() {
  local API_URL="https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest"
  local RESPONSE=$(curl -s -H "Authorization: token ${GITHUB_TOKEN}" "${API_URL}")
  
  local TAG=$(echo "$RESPONSE" | jq -r '.tag_name')
  local DOWNLOAD_URL=$(echo "$RESPONSE" | jq -r '.assets[3].browser_download_url')  # 第4个附件（假设为 zip 包）
  
  echo "$TAG $DOWNLOAD_URL"
}

# === 部署函数 ===
deploy_new_version() {
  local TAG=$1
  local URL=$2
  local TEMP_ZIP="$DOWNLOAD_DIR/web_latest.zip"

  # 1. 清理旧文件
  echo "==== 清理旧版本 ===="
  rm -rf "${DEPLOY_DIR}/libs" && echo "删除旧 libs 目录"
  rm -f "${DEPLOY_DIR}/read.jar" && echo "删除旧 read.jar"

  # 2. 下载新版本
  echo "==== 下载新版本 ==== ($TAG)"
  wget -c "$URL" -O "$TEMP_ZIP" || {
    echo "下载失败：$URL"
    return 1
  }

  # 3. 解压
  echo "==== 解压部署包 ===="
  unzip -q "$TEMP_ZIP" -d "$DOWNLOAD_DIR" || {
    echo "解压失败：$TEMP_ZIP"
    return 1
  }

  # 4. 移动文件
  echo "==== 移动文件 ===="
  mv -n "$DOWNLOAD_DIR/read.jar" "${DEPLOY_DIR}/" && echo "部署 read.jar 成功"
  mv -n "$DOWNLOAD_DIR/libs" "${DEPLOY_DIR}/" && echo "部署 libs 目录成功"

  # 5. 重启服务
  echo "==== 重启服务 ===="
  docker restart "$SERVICE_NAME" || {
    echo "重启容器 $SERVICE_NAME 失败"
    return 1
  }

  echo "==== 部署完成 === 版本：$TAG"
}

# === 主流程 ===
main() {
  # 检查依赖
  [ -z "$GITHUB_TOKEN" ] && { echo "错误：未设置 GITHUB_TOKEN 环境变量"; exit 1; }
  command -v jq >/dev/null || { echo "错误：未安装 jq，请执行 'apt/yum install jq'"; exit 1; }
  command -v docker >/dev/null || { echo "错误：未安装 docker"; exit 1; }

  # 获取最新版本
  local LATEST_INFO=$(get_latest_release)
  local LATEST_TAG=$(echo "$LATEST_INFO" | awk '{print $1}')
  local DOWNLOAD_URL=$(echo "$LATEST_INFO" | awk '{print $2}')

  # 检查更新
  if [ -f "$LATEST_TAG_FILE" ]; then
    local CURRENT_TAG=$(cat "$LATEST_TAG_FILE")
    if [ "$LATEST_TAG" == "$CURRENT_TAG" ]; then
      echo "当前已是最新版本：$CURRENT_TAG"
      exit 0
    fi
  fi

  # 执行部署
  echo "检测到新版本：$LATEST_TAG，开始部署..."
  deploy_new_version "$LATEST_TAG" "$DOWNLOAD_URL" && {
    echo "更新本地版本记录"
    echo "$LATEST_TAG" > "$LATEST_TAG_FILE"
  }
}

main