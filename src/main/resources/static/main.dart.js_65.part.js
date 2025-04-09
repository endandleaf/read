((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_65",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,F,G,H,A={
bn3(d,e,f,g,h){var x=B.bj("hue")
if(g===0)x.b=0
else if(g===d)x.b=60*C.c.bz((e-f)/h,6)
else if(g===e)x.b=60*((f-d)/h+2)
else if(g===f)x.b=60*((d-e)/h+4)
x.b=isNaN(x.aF())?0:x.aF()
return x.aF()},
bmN(d,e,f,g,h){var x,w,v,u,t,s,r
$label0$0:{if(e<60){x=new B.kU(f,g,0)
break $label0$0}if(e<120){x=new B.kU(g,f,0)
break $label0$0}if(e<180){x=new B.kU(0,f,g)
break $label0$0}if(e<240){x=new B.kU(0,g,f)
break $label0$0}if(e<300){x=new B.kU(g,0,f)
break $label0$0}x=new B.kU(f,0,g)
break $label0$0}w=x.a
v=null
u=null
t=x.b
s=x.c
u=s
v=t
r=w
return B.E(C.c.N(d*255),C.c.N((r+h)*255),C.c.N((v+h)*255),C.c.N((u+h)*255))},
biw(d){var x=d.a,w=(x>>>16&255)/255,v=(x>>>8&255)/255,u=(x&255)/255,t=Math.max(w,Math.max(v,u)),s=Math.min(w,Math.min(v,u)),r=t-s,q=A.bn3(w,v,u,t,r),p=(t+s)/2,o=p===1?0:B.M(r/(1-Math.abs(2*p-1)),0,1)
return new A.dI((x>>>24&255)/255,q,o,p)},
dI:function dI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbv(d,e,f,g,h,i,j,k,l,m){return new A.vs(g,h,!1,d,m,k,l,j,i,f,null)},
vs:function vs(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
MD:function MD(d){var _=this
_.f=_.e=_.d=!1
_.r=d
_.c=_.a=null},
aSW:function aSW(d){this.a=d},
aSU:function aSU(d){this.a=d},
aSP:function aSP(d){this.a=d},
aSQ:function aSQ(d){this.a=d},
aSO:function aSO(d,e){this.a=d
this.b=e},
aST:function aST(d){this.a=d},
aSR:function aSR(d){this.a=d},
aSS:function aSS(d,e){this.a=d
this.b=e},
aSV:function aSV(d,e){this.a=d
this.b=e},
byY(d){var x=B.B(y.c,y.y)
d.an(0,new A.aGq(x))
return x},
a24(d,e,f){return new A.x1(null,f,d,e,null)},
tP:function tP(d,e){this.a=d
this.b=e},
B7:function B7(d,e){var _=this
_.b=d
_.c=null
_.V$=0
_.R$=e
_.ba$=_.aX$=0},
aGq:function aGq(d){this.a=d},
aGp:function aGp(){},
x1:function x1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
OQ:function OQ(){this.c=this.a=this.d=null},
adN:function adN(){},
adO:function adO(){},
ag5:function ag5(){},
K0(d,e,f){if(e==null)if(d==null)return null
else return d.ar(0,1-f)
else if(d==null)return e.ar(0,f)
else return new B.H(E.oc(d.a,e.a,f),E.oc(d.b,e.b,f))},
bci(d,e,f,g,h){var x=h.a,w=h.b
return new B.lr(d,e,f,g,x,w,x,w,x,w,x,w,x===w)}},D
J=c[1]
B=c[0]
C=c[2]
E=c[120]
F=c[131]
G=c[124]
H=c[126]
A=a.updateHolder(c[105],A)
D=c[141]
A.dI.prototype={
aY(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return A.bmN(x.a,u,v,v*(1-Math.abs(C.c.bz(u/60,2)-1)),w-v/2)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.dI&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gA(d){var x=this
return B.a7(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"HSLColor("+B.n(x.a)+", "+B.n(x.b)+", "+B.n(x.c)+", "+B.n(x.d)+")"}}
A.vs.prototype={
a4(){return new A.MD(new H.bc(null,y.z))}}
A.MD.prototype={
ad(){this.aL()
$.cq.RG$.push(new A.aSW(this))
$.ab.ah$.d.a.f.B(0,this.ga_y())},
m(){$.ab.ah$.d.a.f.E(0,this.ga_y())
this.aH()},
a4d(d){this.FH(new A.aSU(this))},
asm(d){if(this.c==null)return
this.a4d(d)},
akC(d){if(!this.e)this.FH(new A.aSP(this))},
akE(d){if(this.e)this.FH(new A.aSQ(this))},
akA(d){var x,w=this
if(w.f!==d){w.FH(new A.aSO(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
a0N(d,e){var x,w,v,u,t,s,r=this,q=new A.aST(r),p=new A.aSS(r,new A.aSR(r))
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
FH(d){return this.a0N(null,d)},
aww(d){return this.a0N(d,null)},
b4(d){this.bo(d)
if(this.a.c!==d.c)$.cq.RG$.push(new A.aSV(this,d))},
gaky(){var x,w=this.c
w.toString
w=B.df(w,C.fC)
x=w==null?null:w.ch
$label0$0:{if(C.fb===x||x==null){w=this.a.c
break $label0$0}if(F.jS===x){w=!0
break $label0$0}w=null}return w},
G(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.gaky()
w=u.a
v=G.le(B.re(!1,x,w.ax,t,!0,!0,s,!0,t,u.gakz(),t,t,t,t),r,u.r,u.gakB(),u.gakD(),t)
s=w.c
if(s){r=w.w
r=r!=null&&r.a!==0}else r=!1
if(r){r=w.w
r.toString
v=E.uC(r,v)}if(s){s=w.x
s=s!=null&&s.gct(s)}else s=!1
if(s){s=u.a.x
s.toString
v=A.a24(v,t,s)}return v}}
A.tP.prototype={}
A.B7.prototype={
soy(d){var x=this
if(!E.aie(x.b,d)){x.b=d
x.c=null
x.aj()}},
ga06(){var x=this.c
return x==null?this.c=A.byY(this.b):x},
apy(d,e){var x,w,v,u=this.ga06().h(0,d.b)
if(u==null)u=B.a([],y.d)
u=B.a9(u,!0,y.q)
x=this.ga06().h(0,null)
C.b.M(u,x==null?B.a([],y.d):x)
x=u.length
w=0
for(;w<u.length;u.length===x||(0,B.X)(u),++w){v=u[w]
if(v.a.aEz(d,e))return v.b}return null},
aJX(d,e){var x,w,v,u,t,s,r,q,p=$.fH.wc$
p===$&&B.b()
x=this.apy(e,p)
if(x!=null){p=$.ab.ah$.d.c
w=p==null?null:p.e
if(w!=null){v=E.bas(w,x,y.v)
if(v!=null){w.aq(y.b)
p=B.baq(w)
u=p.aLE(v,x,w)
t=u.a
s=null
r=u.b
s=r
q=t
if(q)return v.Ul(x,s)}}}return C.h7},
$iao:1}
A.x1.prototype={
goy(){var x=this.c
return x==null?this.d:x.b},
a4(){return new A.OQ()}}
A.OQ.prototype={
m(){var x=this.d
if(x!=null){x.R$=$.an()
x.V$=0}this.aH()},
ad(){var x,w
this.aL()
x=this.a
if(x.c==null){w=new A.B7(D.jN,$.an())
this.d=w
w.soy(x.goy())}},
b4(d){var x,w,v=this
v.bo(d)
x=v.a
w=x.c
if(w!=d.c)if(w!=null){w=v.d
if(w!=null){w.R$=$.an()
w.V$=0}v.d=null}else if(v.d==null)v.d=new A.B7(D.jN,$.an())
w=v.d
if(w!=null)w.soy(x.goy())},
asZ(d,e){var x,w=d.e
if(w==null)return C.h7
x=this.a.c
if(x==null){x=this.d
x.toString}return x.aJX(w,e)},
G(d){var x=null,w=D.agb.j(0)
return B.re(!1,!1,this.a.e,w,x,x,x,!0,x,x,x,this.gasY(),x,x)}}
A.adN.prototype={}
A.adO.prototype={}
A.ag5.prototype={}
var z=a.updateTypes(["x(vs)","~(ng)","~(jP)","~(jQ)","~(x)","~(tv,aV)","C<tP>()","l8(ea,jK)","H?(H?,H?,z)"])
A.aSW.prototype={
$1(d){var x=$.ab.ah$.d.a.b
if(x==null)x=B.xH()
this.a.a4d(x)},
$S:4}
A.aSU.prototype={
$0(){var x=$.ab.ah$.d.a.b
switch((x==null?B.xH():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.aSP.prototype={
$0(){this.a.e=!0},
$S:0}
A.aSQ.prototype={
$0(){this.a.e=!1},
$S:0}
A.aSO.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aST.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.aSR.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.df(w,C.fC)
x=w==null?null:w.ch
$label0$0:{if(C.fb===x||x==null){w=d.c
break $label0$0}if(F.jS===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.aSS.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.aSV.prototype={
$1(d){this.a.aww(this.b)},
$S:4}
A.aGq.prototype={
$2(d,e){var x=d.gaQb(),w=this.a,v=0
for(;v<1;++v)J.dc(w.cD(0,x[v],new A.aGp()),new A.tP(d,e))},
$S:z+5}
A.aGp.prototype={
$0(){return B.a([],y.d)},
$S:z+6};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u,v=a.installStaticTearOff
var u
x(u=A.MD.prototype,"ga_y","asm",1)
x(u,"gakB","akC",2)
x(u,"gakD","akE",3)
x(u,"gakz","akA",4)
w(A.OQ.prototype,"gasY","asZ",7)
v(A,"R8",3,null,["$3"],["K0"],8,0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.v,[A.dI,A.ag5,A.adN])
w(B.O,[A.vs,A.x1])
w(B.S,[A.MD,A.OQ])
w(B.bC,[A.aSW,A.aST,A.aSR,A.aSS,A.aSV])
w(B.c9,[A.aSU,A.aSP,A.aSQ,A.aSO,A.aGp])
v(A.tP,A.ag5)
v(A.adO,A.adN)
v(A.B7,A.adO)
v(A.aGq,B.dd)
x(A.adN,B.aN)
x(A.adO,B.f5)
x(A.ag5,B.aN)})()
B.by(b.typeUniverse,JSON.parse('{"vs":{"O":[],"k":[]},"MD":{"S":["vs"]},"x1":{"O":[],"k":[]},"B7":{"ao":[]},"OQ":{"S":["x1"]}}'))
var y={v:B.w("aV"),d:B.w("u<tP>"),z:B.w("bc<S<O>>"),y:B.w("C<tP>"),b:B.w("q3"),q:B.w("tP"),c:B.w("t?")};(function constants(){D.DB=new B.p(0,4)
D.Ng=new B.r(167772160)
D.q8=new B.r(452984831)
D.jU=new B.p(0,2)
D.n1=new B.p(0,8)
D.jN=new B.ap(C.bV,[],B.w("ap<tv,aV>"))
D.agb=B.bu("x1")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_65",e:"endPart",h:b})})($__dart_deferred_initializers__,"/AFfMpvc7Z1fCcYVzUi0yGnxfww=");