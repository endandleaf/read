((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_69",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,F,G,H,A={
br0(d,e,f,g,h){var x=B.bk("hue")
if(g===0)x.b=0
else if(g===d)x.b=60*C.c.bF((e-f)/h,6)
else if(g===e)x.b=60*((f-d)/h+2)
else if(g===f)x.b=60*((d-e)/h+4)
x.b=isNaN(x.aG())?0:x.aG()
return x.aG()},
bqK(d,e,f,g,h){var x,w,v,u,t,s,r
$label0$0:{if(e<60){x=new B.l3(f,g,0)
break $label0$0}if(e<120){x=new B.l3(g,f,0)
break $label0$0}if(e<180){x=new B.l3(0,f,g)
break $label0$0}if(e<240){x=new B.l3(0,g,f)
break $label0$0}if(e<300){x=new B.l3(g,0,f)
break $label0$0}x=new B.l3(f,0,g)
break $label0$0}w=x.a
v=null
u=null
t=x.b
s=x.c
u=s
v=t
r=w
return B.F(C.c.M(d*255),C.c.M((r+h)*255),C.c.M((v+h)*255),C.c.M((u+h)*255))},
bmr(d){var x=d.a,w=(x>>>16&255)/255,v=(x>>>8&255)/255,u=(x&255)/255,t=Math.max(w,Math.max(v,u)),s=Math.min(w,Math.min(v,u)),r=t-s,q=A.br0(w,v,u,t,r),p=(t+s)/2,o=p===1?0:B.M(r/(1-Math.abs(2*p-1)),0,1)
return new A.dS((x>>>24&255)/255,q,o,p)},
dS:function dS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfk(d,e,f,g,h,i,j,k,l,m){return new A.vU(g,h,!1,d,m,k,l,j,i,f,null)},
vU:function vU(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.ax=m
_.a=n},
Nk:function Nk(d){var _=this
_.f=_.e=_.d=!1
_.r=d
_.c=_.a=null},
aVz:function aVz(d){this.a=d},
aVx:function aVx(d){this.a=d},
aVs:function aVs(d){this.a=d},
aVt:function aVt(d){this.a=d},
aVr:function aVr(d,e){this.a=d
this.b=e},
aVw:function aVw(d){this.a=d},
aVu:function aVu(d){this.a=d},
aVv:function aVv(d,e){this.a=d
this.b=e},
aVy:function aVy(d,e){this.a=d
this.b=e},
bD2(d){var x=B.C(y.c,y.y)
d.ao(0,new A.aIp(x))
return x},
a3m(d,e,f){return new A.xw(null,f,d,e,null)},
uc:function uc(d,e){this.a=d
this.b=e},
Bz:function Bz(d,e){var _=this
_.b=d
_.c=null
_.R$=0
_.P$=e
_.b9$=_.aZ$=0},
aIp:function aIp(d){this.a=d},
aIo:function aIo(){},
xw:function xw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
PB:function PB(){this.c=this.a=this.d=null},
aff:function aff(){},
afg:function afg(){},
ahC:function ahC(){},
Kv(d,e,f){if(e==null)if(d==null)return null
else return d.aw(0,1-f)
else if(d==null)return e.aw(0,f)
else return new B.J(E.oA(d.a,e.a,f),E.oA(d.b,e.b,f))},
bg8(d,e,f,g,h){var x=h.a,w=h.b
return new B.lD(d,e,f,g,x,w,x,w,x,w,x,w,x===w)}},D
J=c[1]
B=c[0]
C=c[2]
E=c[131]
F=c[141]
G=c[134]
H=c[137]
A=a.updateHolder(c[116],A)
D=c[150]
A.dS.prototype={
b2(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return A.bqK(x.a,u,v,v*(1-Math.abs(C.c.bF(u/60,2)-1)),w-v/2)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.dS&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gA(d){var x=this
return B.aa(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"HSLColor("+B.n(x.a)+", "+B.n(x.b)+", "+B.n(x.c)+", "+B.n(x.d)+")"}}
A.vU.prototype={
Y(){return new A.Nk(new H.bi(null,y.z))}}
A.Nk.prototype={
a8(){this.aF()
$.ct.k2$.push(new A.aVz(this))
$.ae.al$.d.a.f.C(0,this.ga0r())},
m(){$.ae.al$.d.a.f.F(0,this.ga0r())
this.aA()},
a5a(d){this.Gh(new A.aVx(this))},
atP(d){if(this.c==null)return
this.a5a(d)},
alV(d){if(!this.e)this.Gh(new A.aVs(this))},
alX(d){if(this.e)this.Gh(new A.aVt(this))},
alT(d){var x,w=this
if(w.f!==d){w.Gh(new A.aVr(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
a1J(d,e){var x,w,v,u,t,s,r=this,q=new A.aVw(r),p=new A.aVv(r,new A.aVu(r))
if(d==null){x=r.a
x.toString
w=x}else w=d
v=q.$1(w)
u=p.$1(w)
if(e!=null)e.$0()
x=r.a
x.toString
t=q.$1(x)
x=r.a
x.toString
s=p.$1(x)
if(u!==s)r.a.y.$1(s)
if(v!==t){q=r.a.z
if(q!=null)q.$1(t)}},
Gh(d){return this.a1J(null,d)},
axW(d){return this.a1J(d,null)},
b1(d){this.bo(d)
if(this.a.c!==d.c)$.ct.k2$.push(new A.aVy(this,d))},
galR(){var x,w=this.c
w.toString
w=B.dq(w,C.fG)
x=w==null?null:w.ch
$label0$0:{if(C.ff===x||x==null){w=this.a.c
break $label0$0}if(F.jZ===x){w=!0
break $label0$0}w=null}return w},
G(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.galR()
w=u.a
v=G.ls(B.rE(!1,x,w.ax,t,!0,!0,s,!0,t,u.galS(),t,t,t,t),r,u.r,u.galU(),u.galW(),t)
s=w.c
if(s){r=w.w
r=r!=null&&r.a!==0}else r=!1
if(r){r=w.w
r.toString
v=E.v1(r,v)}if(s){s=w.x
s=s!=null&&s.gcq(s)}else s=!1
if(s){s=u.a.x
s.toString
v=A.a3m(v,t,s)}return v}}
A.uc.prototype={}
A.Bz.prototype={
soD(d){var x=this
if(!E.ajT(x.b,d)){x.b=d
x.c=null
x.ak()}},
ga1_(){var x=this.c
return x==null?this.c=A.bD2(this.b):x},
ar0(d,e){var x,w,v,u=this.ga1_().h(0,d.b)
if(u==null)u=B.a([],y.d)
u=B.a8(u,!0,y.q)
x=this.ga1_().h(0,null)
C.b.J(u,x==null?B.a([],y.d):x)
x=u.length
w=0
for(;w<u.length;u.length===x||(0,B.Z)(u),++w){v=u[w]
if(v.a.aGf(d,e))return v.b}return null},
aLD(d,e){var x,w,v,u,t,s,r,q,p=$.fU.wo$
p===$&&B.b()
x=this.ar0(e,p)
if(x!=null){p=$.ae.al$.d.c
w=p==null?null:p.e
if(w!=null){v=E.bei(w,x,y.v)
if(v!=null){w.aj(y.b)
p=B.beg(w)
u=p.aNn(v,x,w)
t=u.a
s=null
r=u.b
s=r
q=t
if(q)return v.V9(x,s)}}}return C.he},
$iap:1}
A.xw.prototype={
goD(){var x=this.c
return x==null?this.d:x.b},
Y(){return new A.PB()}}
A.PB.prototype={
m(){var x=this.d
if(x!=null){x.P$=$.aj()
x.R$=0}this.aA()},
a8(){var x,w
this.aF()
x=this.a
if(x.c==null){w=new A.Bz(D.jU,$.aj())
this.d=w
w.soD(x.goD())}},
b1(d){var x,w,v=this
v.bo(d)
x=v.a
w=x.c
if(w!=d.c)if(w!=null){w=v.d
if(w!=null){w.P$=$.aj()
w.R$=0}v.d=null}else if(v.d==null)v.d=new A.Bz(D.jU,$.aj())
w=v.d
if(w!=null)w.soD(x.goD())},
aur(d,e){var x,w=d.e
if(w==null)return C.he
x=this.a.c
if(x==null){x=this.d
x.toString}return x.aLD(w,e)},
G(d){var x=null,w=D.agK.j(0)
return B.rE(!1,!1,this.a.e,w,x,x,x,!0,x,x,x,this.gauq(),x,x)}}
A.aff.prototype={}
A.afg.prototype={}
A.ahC.prototype={}
var z=a.updateTypes(["y(vU)","~(nv)","~(k5)","~(k6)","~(y)","~(tU,aY)","B<uc>()","lm(eg,k1)","J?(J?,J?,z)"])
A.aVz.prototype={
$1(d){var x=$.ae.al$.d.a.b
if(x==null)x=B.yb()
this.a.a5a(x)},
$S:3}
A.aVx.prototype={
$0(){var x=$.ae.al$.d.a.b
switch((x==null?B.yb():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.aVs.prototype={
$0(){this.a.e=!0},
$S:0}
A.aVt.prototype={
$0(){this.a.e=!1},
$S:0}
A.aVr.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aVw.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.aVu.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.dq(w,C.fG)
x=w==null?null:w.ch
$label0$0:{if(C.ff===x||x==null){w=d.c
break $label0$0}if(F.jZ===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.aVv.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.aVy.prototype={
$1(d){this.a.axW(this.b)},
$S:3}
A.aIp.prototype={
$2(d,e){var x=d.gaS0(),w=this.a,v=0
for(;v<1;++v)J.cT(w.cH(0,x[v],new A.aIo()),new A.uc(d,e))},
$S:z+5}
A.aIo.prototype={
$0(){return B.a([],y.d)},
$S:z+6};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u,v=a.installStaticTearOff
var u
x(u=A.Nk.prototype,"ga0r","atP",1)
x(u,"galU","alV",2)
x(u,"galW","alX",3)
x(u,"galS","alT",4)
w(A.PB.prototype,"gauq","aur",7)
v(A,"S6",3,null,["$3"],["Kv"],8,0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.v,[A.dS,A.ahC,A.aff])
w(B.P,[A.vU,A.xw])
w(B.R,[A.Nk,A.PB])
w(B.bB,[A.aVz,A.aVw,A.aVu,A.aVv,A.aVy])
w(B.ci,[A.aVx,A.aVs,A.aVt,A.aVr,A.aIo])
v(A.uc,A.ahC)
v(A.afg,A.aff)
v(A.Bz,A.afg)
v(A.aIp,B.d7)
x(A.aff,B.aS)
x(A.afg,B.fn)
x(A.ahC,B.aS)})()
B.bv(b.typeUniverse,JSON.parse('{"vU":{"P":[],"k":[]},"Nk":{"R":["vU"]},"xw":{"P":[],"k":[]},"Bz":{"ap":[]},"PB":{"R":["xw"]}}'))
var y={v:B.w("aY"),d:B.w("u<uc>"),z:B.w("bi<R<P>>"),y:B.w("B<uc>"),b:B.w("qr"),q:B.w("uc"),c:B.w("t?")};(function constants(){D.E0=new B.p(0,4)
D.NU=new B.r(167772160)
D.qo=new B.r(452984831)
D.k_=new B.p(0,2)
D.nb=new B.p(0,8)
D.jU=new B.aq(C.bZ,[],B.w("aq<tU,aY>"))
D.agK=B.by("xw")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_69",e:"endPart",h:b})})($__dart_deferred_initializers__,"PPRdpOFDHSC73Fg7m6cCIBG3MbU=");