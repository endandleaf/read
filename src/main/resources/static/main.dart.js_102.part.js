((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_102",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
bJs(d,e,f,g,h){var x=B.ba("hue")
if(g===0)x.b=0
else if(g===d)x.b=60*C.d.aI((e-f)/h,6)
else if(g===e)x.b=60*((f-d)/h+2)
else if(g===f)x.b=60*((d-e)/h+4)
x.b=isNaN(x.aA())?0:x.aA()
return x.aA()},
bJa(d,e,f,g,h){var x,w,v,u,t,s,r
$label0$0:{if(e<60){x=new B.me(f,g,0)
break $label0$0}if(e<120){x=new B.me(g,f,0)
break $label0$0}if(e<180){x=new B.me(0,f,g)
break $label0$0}if(e<240){x=new B.me(0,g,f)
break $label0$0}if(e<300){x=new B.me(g,0,f)
break $label0$0}x=new B.me(f,0,g)
break $label0$0}w=x.a
v=null
u=null
t=x.b
s=x.c
u=s
v=t
r=w
return B.J(C.d.M(d*255),C.d.M((r+h)*255),C.d.M((v+h)*255),C.d.M((u+h)*255))},
bED(d){var x=d.a,w=(x>>>16&255)/255,v=(x>>>8&255)/255,u=(x&255)/255,t=Math.max(w,Math.max(v,u)),s=Math.min(w,Math.min(v,u)),r=t-s,q=A.bJs(w,v,u,t,r),p=(t+s)/2,o=p===1?0:B.T(r/(1-Math.abs(2*p-1)),0,1)
return new A.el((x>>>24&255)/255,q,o,p)},
el:function el(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGN(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new D.fH(0,x.gAF(x)):F.ry
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gAF(w)
w=new D.ct(x,v==null?F.u:v)}else if(w==null)w=E.r1
break
default:w=null}return new A.mX(d.a,d.f,d.b,d.e,w)},
aUh(d,e,f){var x,w,v,u,t,s,r=null
if(d==e)return d
x=d==null
if(!x&&e!=null){if(f===0)return d
if(f===1)return e}w=x?r:d.a
v=e==null
w=D.a2(w,v?r:e.a,f)
u=x?r:d.b
u=D.bEB(u,v?r:e.b,f)
t=x?r:d.c
t=D.bvY(t,v?r:e.c,f)
s=x?r:d.d
s=D.bvE(s,v?r:e.d,f)
x=x?r:d.e
x=D.fU(x,v?r:e.e,f)
x.toString
return new A.mX(w,u,t,s,x)},
c1e(d,e){return new A.amc(d,e)},
mX:function mX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amc:function amc(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.z=_.y=_.x=$
_.Q=null
_.a=e},
bn4:function bn4(){},
bn5:function bn5(d){this.a=d},
bn6:function bn6(d,e,f){this.a=d
this.b=e
this.c=f},
bws(d,e,f,g,h,i,j,k,l,m){return new A.yK(g,h,!1,d,m,k,l,j,i,f,null)},
yK:function yK(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
SF:function SF(d){var _=this
_.f=_.e=_.d=!1
_.r=d
_.c=_.a=null},
b83:function b83(d){this.a=d},
b81:function b81(d){this.a=d},
b7X:function b7X(d){this.a=d},
b7Y:function b7Y(d){this.a=d},
b7W:function b7W(d,e){this.a=d
this.b=e},
b80:function b80(d){this.a=d},
b7Z:function b7Z(d){this.a=d},
b8_:function b8_(d,e){this.a=d
this.b=e},
b82:function b82(d,e){this.a=d
this.b=e},
bZg(d){var x=B.D(y.I,y.T)
d.aq(0,new A.aUo(x))
return x},
a9Z(d,e,f){return new A.AD(null,f,d,e,null)},
wV:function wV(d,e){this.a=d
this.b=e},
FD:function FD(d,e){var _=this
_.b=d
_.c=null
_.U$=0
_.S$=e
_.bh$=_.b7$=0},
aUo:function aUo(d){this.a=d},
aUn:function aUn(){},
AD:function AD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
V2:function V2(){this.c=this.a=this.d=null},
amf:function amf(){},
amg:function amg(){},
aoF:function aoF(){},
FL:function FL(){},
l8:function l8(){},
pH:function pH(){},
PP:function PP(d,e,f,g,h){var _=this
_.p1=d
_.p2=e
_.c=_.b=_.a=_.CW=_.ay=null
_.d=$
_.e=f
_.r=_.f=null
_.w=g
_.z=_.y=null
_.Q=!1
_.as=!0
_.at=!1
_.$ti=h},
Vb:function Vb(){},
PB(d,e,f){if(e==null)if(d==null)return null
else return d.ad(0,1-f)
else if(d==null)return e.ad(0,f)
else return new B.Q(D.q7(d.a,e.a,f),D.q7(d.b,e.b,f))},
bxn(d,e,f,g,h){var x=h.a,w=h.b
return new B.mS(d,e,f,g,x,w,x,w,x,w,x,w,x===w)}},E,G,D,F,H
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[99],A)
E=c[145]
G=c[130]
D=c[123]
F=c[134]
H=c[125]
A.el.prototype={
bd(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return A.bJa(x.a,u,v,v*(1-Math.abs(C.d.aI(u/60,2)-1)),w-v/2)},
l(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.el&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gB(d){var x=this
return B.al(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"HSLColor("+B.q(x.a)+", "+B.q(x.b)+", "+B.q(x.c)+", "+B.q(x.d)+")"}}
A.mX.prototype={
HF(d,e){return this.e.fp(d,e)},
gdS(d){return this.e.glV()},
gOt(){return this.d!=null},
en(d,e){var x
$label0$0:{if(d instanceof D.aV){x=A.aUh(A.bGN(d),this,e)
break $label0$0}if(y.Q.b(d)){x=A.aUh(d,this,e)
break $label0$0}x=this.Ru(d,e)
break $label0$0}return x},
eo(d,e){var x
$label0$0:{if(d instanceof D.aV){x=A.aUh(this,A.bGN(d),e)
break $label0$0}if(y.Q.b(d)){x=A.aUh(this,d,e)
break $label0$0}x=this.Rv(d,e)
break $label0$0}return x},
l(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.am(e)!==B.V(x))return!1
return e instanceof A.mX&&J.o(e.a,x.a)&&J.o(e.b,x.b)&&J.o(e.c,x.c)&&B.dV(e.d,x.d)&&e.e.l(0,x.e)},
gB(d){var x=this,w=x.d
w=w==null?null:B.cZ(w)
return B.al(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
YY(d,e,f){return this.e.fp(new B.S(0,0,0+d.a,0+d.b),f).p(0,e)},
zj(d){return new A.amc(this,d)}}
A.amc.prototype={
aKZ(d,e){var x,w,v,u=this
if(d.l(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){x=$.ax().aE()
u.r=x
w=u.b.a
if(w!=null)x.sau(0,w)}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.sdT(w.vh(0,d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
u.z=B.a9(new B.ae(w,new A.bn4(),B.ag(w).i("ae<1,rn>")),!0,y.Z)}if(x.e.gjP())u.x=B.a9(new B.ae(w,new A.bn5(d),B.ag(w).i("ae<1,S>")),!0,y.A)
else u.y=B.a9(new B.ae(w,new A.bn6(u,d,e),B.ag(w).i("ae<1,a7b>")),!0,y.i)}w=x.e
if(!w.gjP())v=u.r!=null||u.w!=null
else v=!1
if(v)u.e=w.fp(d,e)
if(x.c!=null)u.f=w.kQ(d,e)
u.c=d
u.d=e},
aNV(d,e,f){var x,w,v,u,t=this
if(t.w!=null){x=t.b.e
if(x.gjP()){w=0
while(!0){v=t.w
v.toString
if(!(w<v))break
v=t.x
v===$&&B.b()
v=v[w]
u=t.z
u===$&&B.b()
x.kN(d,v,u[w],f);++w}}else{w=0
while(!0){x=t.w
x.toString
if(!(w<x))break
x=t.y
x===$&&B.b()
x=x[w]
v=t.z
v===$&&B.b()
d.h_(x,v[w]);++w}}}},
aK8(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.Q
if(x==null){x=w.a
x.toString
x=w.Q=v.EX(x)
v=x}else v=x
x=w.c
x.toString
v.wm(d,x,w.f,e)},
m(){var x=this.Q
if(x!=null)x.m()
this.a1t()},
ki(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new B.S(v,u,v+w.a,u+w.b),s=f.d
x.aKZ(t,s)
x.aNV(d,t,s)
if(x.r!=null){w=x.b.e
v=w.gjP()
u=x.r
if(v){u.toString
w.kN(d,t,u,s)}else{w=x.e
w===$&&B.b()
u.toString
d.h_(w,u)}}x.aK8(d,f)
x.b.e.hV(d,t,s)}}
A.yK.prototype={
X(){return new A.SF(new G.bq(null,y.z))}}
A.SF.prototype={
a3(){this.aC()
$.cO.k2$.push(new A.b83(this))
$.ad.ai$.d.a.f.C(0,this.ga6x())},
m(){$.ad.ai$.d.a.f.F(0,this.ga6x())
this.aN()},
abM(d){this.KJ(new A.b81(this))},
aDM(d){if(this.c==null)return
this.abM(d)},
auM(d){if(!this.e)this.KJ(new A.b7X(this))},
auO(d){if(this.e)this.KJ(new A.b7Y(this))},
auK(d){var x,w=this
if(w.f!==d){w.KJ(new A.b7W(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
a7Y(d,e){var x,w,v,u,t,s,r=this,q=new A.b80(r),p=new A.b8_(r,new A.b7Z(r))
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
KJ(d){return this.a7Y(null,d)},
aIb(d){return this.a7Y(d,null)},
bb(d){this.by(d)
if(this.a.c!==d.c)$.cO.k2$.push(new A.b82(this,d))},
gauI(){var x,w=this.c
w.toString
w=B.dy(w,C.hx)
x=w==null?null:w.ch
$label0$0:{if(C.fY===x||x==null){w=this.a.c
break $label0$0}if(F.kY===x){w=!0
break $label0$0}w=null}return w},
G(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.gauI()
w=u.a
v=H.mH(B.v8(!1,x,w.ax,t,!0,!0,s,!0,t,u.gauJ(),t,t,t,t),r,u.r,u.gauL(),u.gauN(),t)
s=w.c
if(s){r=w.w
r=r!=null&&r.a!==0}else r=!1
if(r){r=w.w
r.toString
v=D.xE(r,v)}if(s){s=w.x
s=s!=null&&s.gc1(s)}else s=!1
if(s){s=u.a.x
s.toString
v=A.a9Z(v,t,s)}return v}}
A.wV.prototype={}
A.FD.prototype={
sqB(d){var x=this
if(!D.ar1(x.b,d)){x.b=d
x.c=null
x.af()}},
ga79(){var x=this.c
return x==null?this.c=A.bZg(this.b):x},
aAG(d,e){var x,w,v,u=this.ga79().h(0,d.b)
if(u==null)u=B.a([],y.D)
u=B.a9(u,!0,y.M)
x=this.ga79().h(0,null)
C.b.H(u,x==null?B.a([],y.D):x)
x=u.length
w=0
for(;w<u.length;u.length===x||(0,B.a5)(u),++w){v=u[w]
if(v.a.aRv(d,e))return v.b}return null},
aXz(d,e){var x,w,v,u,t,s,r,q,p=$.hH.zG$
p===$&&B.b()
x=this.aAG(e,p)
if(x!=null){p=$.ad.ai$.d.c
w=p==null?null:p.e
if(w!=null){v=D.bvk(w,x,y.H)
if(v!=null){w.al(y.a)
p=B.bvi(w)
u=p.aZj(v,x,w)
t=u.a
s=null
r=u.b
s=r
q=t
if(q)return v.a_G(x,s)}}}return C.i3},
$iaw:1}
A.AD.prototype={
gqB(){var x=this.c
return x==null?this.d:x.b},
X(){return new A.V2()}}
A.V2.prototype={
m(){var x=this.d
if(x!=null){x.S$=$.an()
x.U$=0}this.aN()},
a3(){var x,w
this.aC()
x=this.a
if(x.c==null){w=new A.FD(E.kU,$.an())
this.d=w
w.sqB(x.gqB())}},
bb(d){var x,w,v=this
v.by(d)
x=v.a
w=x.c
if(w!=d.c)if(w!=null){w=v.d
if(w!=null){w.S$=$.an()
w.U$=0}v.d=null}else if(v.d==null)v.d=new A.FD(E.kU,$.an())
w=v.d
if(w!=null)w.sqB(x.gqB())},
aEq(d,e){var x,w=d.e
if(w==null)return C.i3
x=this.a.c
if(x==null){x=this.d
x.toString}return x.aXz(w,e)},
G(d){var x=null,w=E.akT.j(0)
return B.v8(!1,!1,this.a.e,w,x,x,x,!0,x,x,x,this.gaEp(),x,x)}}
A.amf.prototype={}
A.amg.prototype={}
A.aoF.prototype={}
A.FL.prototype={}
A.l8.prototype={
dW(d){var x=B.B(this),w=y.h
return new A.PP(B.D(x.i("l8.0"),w),B.D(y.B,w),this,C.aM,x.i("PP<l8.0,l8.1>"))}}
A.pH.prototype={
glb(d){return this.f8$.gba(0)},
j5(){J.eZ(this.glb(this),this.ga_k())},
c6(d){J.eZ(this.glb(this),d)},
LE(d,e){var x=this.f8$,w=x.h(0,e)
if(w!=null){this.rR(w)
x.F(0,e)}if(d!=null){x.n(0,e,d)
this.l8(d)}}}
A.PP.prototype={
gac(){return this.$ti.i("pH<1,2>").a(B.cd.prototype.gac.call(this))},
c6(d){this.p1.gba(0).aq(0,d)},
ls(d){this.p1.F(0,d.c)
this.mu(d)},
hU(d,e){this.u8(d,e)
this.abz()},
e6(d,e){this.qI(0,e)
this.abz()},
abz(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.e
j.toString
x=k.$ti
x.i("l8<1,2>").a(j)
w=k.p2
v=y.h
k.p2=B.D(y.B,v)
u=k.p1
x=x.c
k.p1=B.D(x,v)
for(v=j.ga1j(),t=v.length,s=0;s<t;++s){r=v[s]
q=j.adp(r)
p=q==null?null:q.a
o=u.h(0,r)
n=w.h(0,p)
if(n!=null)m=u.F(0,x.a(n.c))
else m=(o==null?null:o.gbA().a)==null?u.F(0,r):null
l=k.fG(m,q,r)
if(l!=null){k.p1.n(0,r,l)
if(p!=null)k.p2.n(0,p,l)}}u.gba(0).aq(0,k.gaV2())},
m6(d,e){this.$ti.i("pH<1,2>").a(B.cd.prototype.gac.call(this)).LE(d,e)},
ne(d,e){var x=this.$ti.i("pH<1,2>")
if(x.a(B.cd.prototype.gac.call(this)).f8$.h(0,e)===d)x.a(B.cd.prototype.gac.call(this)).LE(null,e)},
me(d,e,f){var x=this.$ti.i("pH<1,2>").a(B.cd.prototype.gac.call(this))
if(x.f8$.h(0,e)===d)x.LE(null,e)
x.LE(d,f)}}
A.Vb.prototype={
be(d,e){return this.a23(d,e)}}
var z=a.updateTypes(["C(yK)","rn(bC)","S(bC)","a7b(bC)","~(oZ)","~(l1)","~(l2)","~(C)","~(AC,bk)","y<wV>()","mA(eS,kW)","Q?(Q?,Q?,E)"])
A.bn4.prototype={
$1(d){return d.ko()},
$S:z+1}
A.bn5.prototype={
$1(d){return this.a.ey(d.b).fj(d.d)},
$S:z+2}
A.bn6.prototype={
$1(d){return this.a.b.e.fp(this.b.ey(d.b).fj(d.d),this.c)},
$S:z+3}
A.b83.prototype={
$1(d){var x=$.ad.ai$.d.a.b
if(x==null)x=B.Bj()
this.a.abM(x)},
$S:3}
A.b81.prototype={
$0(){var x=$.ad.ai$.d.a.b
switch((x==null?B.Bj():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.b7X.prototype={
$0(){this.a.e=!0},
$S:0}
A.b7Y.prototype={
$0(){this.a.e=!1},
$S:0}
A.b7W.prototype={
$0(){this.a.f=this.b},
$S:0}
A.b80.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.b7Z.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.dy(w,C.hx)
x=w==null?null:w.ch
$label0$0:{if(C.fY===x||x==null){w=d.c
break $label0$0}if(F.kY===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.b8_.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.b82.prototype={
$1(d){this.a.aIb(this.b)},
$S:3}
A.aUo.prototype={
$2(d,e){var x=d.gb3M(),w=this.a,v=0
for(;v<1;++v)J.cy(w.cX(0,x[v],new A.aUn()),new A.wV(d,e))},
$S:z+8}
A.aUn.prototype={
$0(){return B.a([],y.D)},
$S:z+9};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u,v=a.installStaticTearOff
var u
x(u=A.SF.prototype,"ga6x","aDM",4)
x(u,"gauL","auM",5)
x(u,"gauN","auO",6)
x(u,"gauJ","auK",7)
w(A.V2.prototype,"gaEp","aEq",10)
v(A,"XC",3,null,["$3"],["PB"],11,0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.v,[A.el,A.aoF,A.amf,A.l8,A.pH])
u(A.mX,D.k1)
u(A.amc,D.Cx)
v(B.cg,[A.bn4,A.bn5,A.bn6,A.b83,A.b80,A.b7Z,A.b8_,A.b82])
v(B.U,[A.yK,A.AD])
v(B.Z,[A.SF,A.V2])
v(B.cz,[A.b81,A.b7X,A.b7Y,A.b7W,A.aUn])
u(A.wV,A.aoF)
u(A.amg,A.amf)
u(A.FD,A.amg)
u(A.aUo,B.di)
u(A.Vb,B.aX)
u(A.FL,A.Vb)
u(A.PP,B.cd)
x(A.amf,B.b0)
x(A.amg,B.bj)
x(A.aoF,B.b0)
w(A.Vb,A.l8)})()
B.c_(b.typeUniverse,JSON.parse('{"mX":{"k1":[]},"yK":{"U":[],"n":[]},"SF":{"Z":["yK"]},"AD":{"U":[],"n":[]},"FD":{"bj":[],"aw":[]},"V2":{"Z":["AD"]},"FL":{"l8":["1","2"],"aX":[],"n":[]},"PP":{"cd":[],"bD":[],"K":[]}}'))
B.fY(b.typeUniverse,JSON.parse('{"FL":2,"Vb":2}'))
var y=(function rtii(){var x=B.z
return{h:x("bD"),H:x("bk"),D:x("w<wV>"),B:x("h7"),z:x("bq<Z<U>>"),T:x("y<wV>"),Z:x("rn"),i:x("a7b"),A:x("S"),a:x("t9"),M:x("wV"),I:x("x?"),Q:x("mX?")}})();(function constants(){E.qX=new B.Z7(2,"outer")
E.r1=new D.eG(F.u,F.u,F.u,F.u)
E.FK=new B.t(0,4)
E.Qp=new B.r(167772160)
E.mP=new B.r(452984831)
E.ip=new B.t(0,2)
E.or=new B.t(0,8)
E.kU=new B.aE(C.c8,[],B.z("aE<AC,bk>"))
E.akT=B.bw("AD")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_102",e:"endPart",h:b})})($__dart_deferred_initializers__,"ArMyMNPVUUrrDxhdjZz4mWvaOMY=");