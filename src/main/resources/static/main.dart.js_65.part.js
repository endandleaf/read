((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_65",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,F,G,H,A={
boy(d,e,f,g,h){var x=B.bi("hue")
if(g===0)x.b=0
else if(g===d)x.b=60*C.c.bz((e-f)/h,6)
else if(g===e)x.b=60*((f-d)/h+2)
else if(g===f)x.b=60*((d-e)/h+4)
x.b=isNaN(x.aF())?0:x.aF()
return x.aF()},
boh(d,e,f,g,h){var x,w,v,u,t,s,r
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
return B.F(C.c.N(d*255),C.c.N((r+h)*255),C.c.N((v+h)*255),C.c.N((u+h)*255))},
bk1(d){var x=d.a,w=(x>>>16&255)/255,v=(x>>>8&255)/255,u=(x&255)/255,t=Math.max(w,Math.max(v,u)),s=Math.min(w,Math.min(v,u)),r=t-s,q=A.boy(w,v,u,t,r),p=(t+s)/2,o=p===1?0:B.M(r/(1-Math.abs(2*p-1)),0,1)
return new A.dK((x>>>24&255)/255,q,o,p)},
dK:function dK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcT(d,e,f,g,h,i,j,k,l,m){return new A.vB(g,h,!1,d,m,k,l,j,i,f,null)},
vB:function vB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
N1:function N1(d){var _=this
_.f=_.e=_.d=!1
_.r=d
_.c=_.a=null},
aU3:function aU3(d){this.a=d},
aU1:function aU1(d){this.a=d},
aTX:function aTX(d){this.a=d},
aTY:function aTY(d){this.a=d},
aTW:function aTW(d,e){this.a=d
this.b=e},
aU0:function aU0(d){this.a=d},
aTZ:function aTZ(d){this.a=d},
aU_:function aU_(d,e){this.a=d
this.b=e},
aU2:function aU2(d,e){this.a=d
this.b=e},
bAs(d){var x=B.B(y.c,y.y)
d.ao(0,new A.aHy(x))
return x},
a2O(d,e,f){return new A.xa(null,f,d,e,null)},
tY:function tY(d,e){this.a=d
this.b=e},
Bh:function Bh(d,e){var _=this
_.b=d
_.c=null
_.T$=0
_.S$=e
_.ba$=_.aX$=0},
aHy:function aHy(d){this.a=d},
aHx:function aHx(){},
xa:function xa(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Pf:function Pf(){this.c=this.a=this.d=null},
aeG:function aeG(){},
aeH:function aeH(){},
ah2:function ah2(){},
Kf(d,e,f){if(e==null)if(d==null)return null
else return d.av(0,1-f)
else if(d==null)return e.av(0,f)
else return new B.I(E.oh(d.a,e.a,f),E.oh(d.b,e.b,f))},
bdI(d,e,f,g,h){var x=h.a,w=h.b
return new B.lv(d,e,f,g,x,w,x,w,x,w,x,w,x===w)}},D
J=c[1]
B=c[0]
C=c[2]
E=c[121]
F=c[133]
G=c[125]
H=c[127]
A=a.updateHolder(c[109],A)
D=c[144]
A.dK.prototype={
b_(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return A.boh(x.a,u,v,v*(1-Math.abs(C.c.bz(u/60,2)-1)),w-v/2)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.dK&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gA(d){var x=this
return B.a7(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"HSLColor("+B.n(x.a)+", "+B.n(x.b)+", "+B.n(x.c)+", "+B.n(x.d)+")"}}
A.vB.prototype={
a0(){return new A.N1(new H.bd(null,y.z))}}
A.N1.prototype={
aa(){this.aI()
$.cn.RG$.push(new A.aU3(this))
$.ab.ah$.d.a.f.B(0,this.ga_P())},
m(){$.ab.ah$.d.a.f.E(0,this.ga_P())
this.aC()},
a4w(d){this.FQ(new A.aU1(this))},
at1(d){if(this.c==null)return
this.a4w(d)},
ald(d){if(!this.e)this.FQ(new A.aTX(this))},
alf(d){if(this.e)this.FQ(new A.aTY(this))},
alb(d){var x,w=this
if(w.f!==d){w.FQ(new A.aTW(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
a13(d,e){var x,w,v,u,t,s,r=this,q=new A.aU0(r),p=new A.aU_(r,new A.aTZ(r))
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
FQ(d){return this.a13(null,d)},
axa(d){return this.a13(d,null)},
aZ(d){this.bl(d)
if(this.a.c!==d.c)$.cn.RG$.push(new A.aU2(this,d))},
gal9(){var x,w=this.c
w.toString
w=B.dh(w,C.fD)
x=w==null?null:w.ch
$label0$0:{if(C.fc===x||x==null){w=this.a.c
break $label0$0}if(F.jU===x){w=!0
break $label0$0}w=null}return w},
G(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.gal9()
w=u.a
v=G.lh(B.rj(!1,x,w.ax,t,!0,!0,s,!0,t,u.gala(),t,t,t,t),r,u.r,u.galc(),u.gale(),t)
s=w.c
if(s){r=w.w
r=r!=null&&r.a!==0}else r=!1
if(r){r=w.w
r.toString
v=E.uM(r,v)}if(s){s=w.x
s=s!=null&&s.gct(s)}else s=!1
if(s){s=u.a.x
s.toString
v=A.a2O(v,t,s)}return v}}
A.tY.prototype={}
A.Bh.prototype={
soz(d){var x=this
if(!E.aje(x.b,d)){x.b=d
x.c=null
x.ai()}},
ga0n(){var x=this.c
return x==null?this.c=A.bAs(this.b):x},
aqd(d,e){var x,w,v,u=this.ga0n().h(0,d.b)
if(u==null)u=B.a([],y.d)
u=B.a9(u,!0,y.q)
x=this.ga0n().h(0,null)
C.b.M(u,x==null?B.a([],y.d):x)
x=u.length
w=0
for(;w<u.length;u.length===x||(0,B.X)(u),++w){v=u[w]
if(v.a.aFe(d,e))return v.b}return null},
aKF(d,e){var x,w,v,u,t,s,r,q,p=$.fL.we$
p===$&&B.b()
x=this.aqd(e,p)
if(x!=null){p=$.ab.ah$.d.c
w=p==null?null:p.e
if(w!=null){v=E.bbQ(w,x,y.v)
if(v!=null){w.al(y.b)
p=B.bbO(w)
u=p.aMr(v,x,w)
t=u.a
s=null
r=u.b
s=r
q=t
if(q)return v.Uy(x,s)}}}return C.h7},
$ian:1}
A.xa.prototype={
goz(){var x=this.c
return x==null?this.d:x.b},
a0(){return new A.Pf()}}
A.Pf.prototype={
m(){var x=this.d
if(x!=null){x.S$=$.ak()
x.T$=0}this.aC()},
aa(){var x,w
this.aI()
x=this.a
if(x.c==null){w=new A.Bh(D.jP,$.ak())
this.d=w
w.soz(x.goz())}},
aZ(d){var x,w,v=this
v.bl(d)
x=v.a
w=x.c
if(w!=d.c)if(w!=null){w=v.d
if(w!=null){w.S$=$.ak()
w.T$=0}v.d=null}else if(v.d==null)v.d=new A.Bh(D.jP,$.ak())
w=v.d
if(w!=null)w.soz(x.goz())},
atE(d,e){var x,w=d.e
if(w==null)return C.h7
x=this.a.c
if(x==null){x=this.d
x.toString}return x.aKF(w,e)},
G(d){var x=null,w=D.agh.j(0)
return B.rj(!1,!1,this.a.e,w,x,x,x,!0,x,x,x,this.gatD(),x,x)}}
A.aeG.prototype={}
A.aeH.prototype={}
A.ah2.prototype={}
var z=a.updateTypes(["x(vB)","~(nj)","~(jR)","~(jS)","~(x)","~(tC,aU)","D<tY>()","lb(eb,jN)","I?(I?,I?,z)"])
A.aU3.prototype={
$1(d){var x=$.ab.ah$.d.a.b
if(x==null)x=B.xR()
this.a.a4w(x)},
$S:4}
A.aU1.prototype={
$0(){var x=$.ab.ah$.d.a.b
switch((x==null?B.xR():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.aTX.prototype={
$0(){this.a.e=!0},
$S:0}
A.aTY.prototype={
$0(){this.a.e=!1},
$S:0}
A.aTW.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aU0.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.aTZ.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.dh(w,C.fD)
x=w==null?null:w.ch
$label0$0:{if(C.fc===x||x==null){w=d.c
break $label0$0}if(F.jU===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.aU_.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.aU2.prototype={
$1(d){this.a.axa(this.b)},
$S:4}
A.aHy.prototype={
$2(d,e){var x=d.gaR3(),w=this.a,v=0
for(;v<1;++v)J.de(w.cE(0,x[v],new A.aHx()),new A.tY(d,e))},
$S:z+5}
A.aHx.prototype={
$0(){return B.a([],y.d)},
$S:z+6};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u,v=a.installStaticTearOff
var u
x(u=A.N1.prototype,"ga_P","at1",1)
x(u,"galc","ald",2)
x(u,"gale","alf",3)
x(u,"gala","alb",4)
w(A.Pf.prototype,"gatD","atE",7)
v(A,"RJ",3,null,["$3"],["Kf"],8,0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.v,[A.dK,A.ah2,A.aeG])
w(B.N,[A.vB,A.xa])
w(B.P,[A.N1,A.Pf])
w(B.bC,[A.aU3,A.aU0,A.aTZ,A.aU_,A.aU2])
w(B.cc,[A.aU1,A.aTX,A.aTY,A.aTW,A.aHx])
v(A.tY,A.ah2)
v(A.aeH,A.aeG)
v(A.Bh,A.aeH)
v(A.aHy,B.df)
x(A.aeG,B.aO)
x(A.aeH,B.fc)
x(A.ah2,B.aO)})()
B.bA(b.typeUniverse,JSON.parse('{"vB":{"N":[],"k":[]},"N1":{"P":["vB"]},"xa":{"N":[],"k":[]},"Bh":{"an":[]},"Pf":{"P":["xa"]}}'))
var y={v:B.w("aU"),d:B.w("u<tY>"),z:B.w("bd<P<N>>"),y:B.w("D<tY>"),b:B.w("q7"),q:B.w("tY"),c:B.w("t?")};(function constants(){D.DH=new B.p(0,4)
D.Nl=new B.r(167772160)
D.qe=new B.r(452984831)
D.jW=new B.p(0,2)
D.n4=new B.p(0,8)
D.jP=new B.ap(C.bW,[],B.w("ap<tC,aU>"))
D.agh=B.bv("xa")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_65",e:"endPart",h:b})})($__dart_deferred_initializers__,"l+9lCh0IS89qKqynJYQCHzTeBLg=");