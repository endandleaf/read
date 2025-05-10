((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_13",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={afw:function afw(d){this.a=0
this.b=d},b2p:function b2p(d){this.a=0
this.b=d},
c_L(d,e,f){var x,w
if(y.c.b(d)&&d.buffer.byteLength===d.length)return new A.aeS(d,e)
x=f-e
w=new Uint8Array(x)
C.m.d8(w,0,x,d,e)
return new A.aeS(w,0)},
bBW(){var x=$.ak.h(0,$.bN8())
return x==null?null:x},
aeS:function aeS(d,e){this.a=d
this.b=e}}
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[112],A)
A.afw.prototype={
B(d,e){var x,w,v=this,u=J.W(e),t=u.gt(e)
if(t===0)return
x=v.a+t
if(v.b.length<x)v.atl(x)
if(y.c.b(e))C.m.bM(v.b,v.a,x,e)
else for(w=0;w<t;++w)v.b[v.a+w]=u.h(e,w)
v.a=x},
atl(d){var x,w,v,u=d*2
if(u<1024)u=1024
else{x=u-1
x|=C.e.bj(x,1)
x|=x>>>2
x|=x>>>4
x|=x>>>8
u=((x|x>>>16)>>>0)+1}w=new Uint8Array(u)
v=this.b
C.m.bM(w,0,v.length,v)
this.b=w},
ahz(){var x,w,v=this,u=v.a
if(u===0)return $.BM()
x=v.b
w=B.en(x.buffer,x.byteOffset,u)
v.a=0
v.b=$.BM()
return w},
A2(){var x,w=this.a
if(w===0)return $.BM()
x=this.b
return new Uint8Array(B.hD(B.en(x.buffer,x.byteOffset,w)))},
gt(d){return this.a},
gaf(d){return this.a===0},
gc1(d){return this.a!==0},
N(d){this.a=0
this.b=$.BM()}}
A.b2p.prototype={
B(d,e){var x=y.c.b(e)?e:new Uint8Array(B.hD(e))
this.b.push(x)
this.a=this.a+x.length},
ahz(){var x,w,v,u,t,s,r,q=this,p=q.a
if(p===0)return $.BM()
x=q.b
w=x.length
if(w===1){v=x[0]
q.a=0
C.b.N(x)
return v}v=new Uint8Array(p)
for(u=0,t=0;t<x.length;x.length===w||(0,B.a3)(x),++t,u=r){s=x[t]
r=u+s.length
C.m.bM(v,u,r,s)}q.a=0
C.b.N(x)
return v},
A2(){var x,w,v,u,t,s,r=this.a
if(r===0)return $.BM()
x=new Uint8Array(r)
for(r=this.b,w=r.length,v=0,u=0;u<r.length;r.length===w||(0,B.a3)(r),++u,v=s){t=r[u]
s=v+t.length
C.m.bM(x,v,s,t)}return x},
gt(d){return this.a},
gaf(d){return this.a===0},
gc1(d){return this.a!==0},
N(d){this.a=0
C.b.N(this.b)}}
A.aeS.prototype={}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(B.u,[A.afw,A.b2p,A.aeS])})()
var y={c:B.z("cY")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cbv","BM",()=>B.N9(0))
x($,"ccG","bN8",()=>new B.u())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_13",e:"endPart",h:b})})($__dart_deferred_initializers__,"Ydb2Fz3II/Qi+KyEQzt35lGBt+U=");