((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_67",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,F,G,H,A={
btk(d,e,f,g,h){var x=B.bl("hue")
if(g===0)x.b=0
else if(g===d)x.b=60*C.c.bI((e-f)/h,6)
else if(g===e)x.b=60*((f-d)/h+2)
else if(g===f)x.b=60*((d-e)/h+4)
x.b=isNaN(x.aG())?0:x.aG()
return x.aG()},
bt3(d,e,f,g,h){var x,w,v,u,t,s,r
$label0$0:{if(e<60){x=new B.l6(f,g,0)
break $label0$0}if(e<120){x=new B.l6(g,f,0)
break $label0$0}if(e<180){x=new B.l6(0,f,g)
break $label0$0}if(e<240){x=new B.l6(0,g,f)
break $label0$0}if(e<300){x=new B.l6(g,0,f)
break $label0$0}x=new B.l6(f,0,g)
break $label0$0}w=x.a
v=null
u=null
t=x.b
s=x.c
u=s
v=t
r=w
return B.D(C.c.M(d*255),C.c.M((r+h)*255),C.c.M((v+h)*255),C.c.M((u+h)*255))},
boJ(d){var x=d.a,w=(x>>>16&255)/255,v=(x>>>8&255)/255,u=(x&255)/255,t=Math.max(w,Math.max(v,u)),s=Math.min(w,Math.min(v,u)),r=t-s,q=A.btk(w,v,u,t,r),p=(t+s)/2,o=p===1?0:B.N(r/(1-Math.abs(2*p-1)),0,1)
return new A.dU((x>>>24&255)/255,q,o,p)},
dU:function dU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhr(d,e,f,g,h,i,j,k,l,m){return new A.w8(g,h,!1,d,m,k,l,j,i,f,null)},
w8:function w8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
NS:function NS(d){var _=this
_.f=_.e=_.d=!1
_.r=d
_.c=_.a=null},
aXs:function aXs(d){this.a=d},
aXq:function aXq(d){this.a=d},
aXl:function aXl(d){this.a=d},
aXm:function aXm(d){this.a=d},
aXk:function aXk(d,e){this.a=d
this.b=e},
aXp:function aXp(d){this.a=d},
aXn:function aXn(d){this.a=d},
aXo:function aXo(d,e){this.a=d
this.b=e},
aXr:function aXr(d,e){this.a=d
this.b=e},
bFF(d){var x=B.B(y.c,y.y)
d.ao(0,new A.aJH(x))
return x},
a40(d,e,f){return new A.xP(null,f,d,e,null)},
um:function um(d,e){this.a=d
this.b=e},
BT:function BT(d,e){var _=this
_.b=d
_.c=null
_.R$=0
_.P$=e
_.ba$=_.aX$=0},
aJH:function aJH(d){this.a=d},
aJG:function aJG(){},
xP:function xP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Q9:function Q9(){this.c=this.a=this.d=null},
afW:function afW(){},
afX:function afX(){},
ail:function ail(){},
L1(d,e,f){if(e==null)if(d==null)return null
else return d.aA(0,1-f)
else if(d==null)return e.aA(0,f)
else return new B.L(E.oN(d.a,e.a,f),E.oN(d.b,e.b,f))},
bif(d,e,f,g,h){var x=h.a,w=h.b
return new B.lI(d,e,f,g,x,w,x,w,x,w,x,w,x===w)}},D
J=c[1]
B=c[0]
C=c[2]
E=c[133]
F=c[144]
G=c[137]
H=c[140]
A=a.updateHolder(c[117],A)
D=c[161]
A.dU.prototype={
b3(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return A.bt3(x.a,u,v,v*(1-Math.abs(C.c.bI(u/60,2)-1)),w-v/2)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.dU&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gA(d){var x=this
return B.aa(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"HSLColor("+B.n(x.a)+", "+B.n(x.b)+", "+B.n(x.c)+", "+B.n(x.d)+")"}}
A.w8.prototype={
Y(){return new A.NS(new H.be(null,y.z))}}
A.NS.prototype={
aa(){this.aF()
$.cq.k2$.push(new A.aXs(this))
$.ac.af$.d.a.f.B(0,this.ga17())},
m(){$.ac.af$.d.a.f.F(0,this.ga17())
this.aB()},
a5U(d){this.GM(new A.aXq(this))},
auX(d){if(this.c==null)return
this.a5U(d)},
amY(d){if(!this.e)this.GM(new A.aXl(this))},
an_(d){if(this.e)this.GM(new A.aXm(this))},
amW(d){var x,w=this
if(w.f!==d){w.GM(new A.aXk(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
a2r(d,e){var x,w,v,u,t,s,r=this,q=new A.aXp(r),p=new A.aXo(r,new A.aXn(r))
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
GM(d){return this.a2r(null,d)},
az7(d){return this.a2r(d,null)},
b1(d){this.br(d)
if(this.a.c!==d.c)$.cq.k2$.push(new A.aXr(this,d))},
gamU(){var x,w=this.c
w.toString
w=B.dx(w,C.fO)
x=w==null?null:w.ch
$label0$0:{if(C.fm===x||x==null){w=this.a.c
break $label0$0}if(F.k2===x){w=!0
break $label0$0}w=null}return w},
G(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.gamU()
w=u.a
v=G.lx(B.rP(!1,x,w.ax,t,!0,!0,s,!0,t,u.gamV(),t,t,t,t),r,u.r,u.gamX(),u.gamZ(),t)
s=w.c
if(s){r=w.w
r=r!=null&&r.a!==0}else r=!1
if(r){r=w.w
r.toString
v=E.vb(r,v)}if(s){s=w.x
s=s!=null&&s.gcq(s)}else s=!1
if(s){s=u.a.x
s.toString
v=A.a40(v,t,s)}return v}}
A.um.prototype={}
A.BT.prototype={
soJ(d){var x=this
if(!E.akC(x.b,d)){x.b=d
x.c=null
x.aj()}},
ga1H(){var x=this.c
return x==null?this.c=A.bFF(this.b):x},
as8(d,e){var x,w,v,u=this.ga1H().h(0,d.b)
if(u==null)u=B.a([],y.d)
u=B.a8(u,!0,y.q)
x=this.ga1H().h(0,null)
C.b.J(u,x==null?B.a([],y.d):x)
x=u.length
w=0
for(;w<u.length;u.length===x||(0,B.Z)(u),++w){v=u[w]
if(v.a.aHz(d,e))return v.b}return null},
aN0(d,e){var x,w,v,u,t,s,r,q,p=$.fY.kf$
p===$&&B.b()
x=this.as8(e,p)
if(x!=null){p=$.ac.af$.d.c
w=p==null?null:p.e
if(w!=null){v=E.bgn(w,x,y.v)
if(v!=null){w.al(y.b)
p=B.bgl(w)
u=p.aOL(v,x,w)
t=u.a
s=null
r=u.b
s=r
q=t
if(q)return v.VK(x,s)}}}return C.hl},
$iam:1}
A.xP.prototype={
goJ(){var x=this.c
return x==null?this.d:x.b},
Y(){return new A.Q9()}}
A.Q9.prototype={
m(){var x=this.d
if(x!=null){x.P$=$.aj()
x.R$=0}this.aB()},
aa(){var x,w
this.aF()
x=this.a
if(x.c==null){w=new A.BT(D.jY,$.aj())
this.d=w
w.soJ(x.goJ())}},
b1(d){var x,w,v=this
v.br(d)
x=v.a
w=x.c
if(w!=d.c)if(w!=null){w=v.d
if(w!=null){w.P$=$.aj()
w.R$=0}v.d=null}else if(v.d==null)v.d=new A.BT(D.jY,$.aj())
w=v.d
if(w!=null)w.soJ(x.goJ())},
avA(d,e){var x,w=d.e
if(w==null)return C.hl
x=this.a.c
if(x==null){x=this.d
x.toString}return x.aN0(w,e)},
G(d){var x=null,w=D.agT.j(0)
return B.rP(!1,!1,this.a.e,w,x,x,x,!0,x,x,x,this.gavz(),x,x)}}
A.afW.prototype={}
A.afX.prototype={}
A.ail.prototype={}
var z=a.updateTypes(["y(w8)","~(nF)","~(kb)","~(kc)","~(y)","~(u4,b_)","C<um>()","lr(ek,k6)","L?(L?,L?,z)"])
A.aXs.prototype={
$1(d){var x=$.ac.af$.d.a.b
if(x==null)x=B.yu()
this.a.a5U(x)},
$S:4}
A.aXq.prototype={
$0(){var x=$.ac.af$.d.a.b
switch((x==null?B.yu():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.aXl.prototype={
$0(){this.a.e=!0},
$S:0}
A.aXm.prototype={
$0(){this.a.e=!1},
$S:0}
A.aXk.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aXp.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.aXn.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.dx(w,C.fO)
x=w==null?null:w.ch
$label0$0:{if(C.fm===x||x==null){w=d.c
break $label0$0}if(F.k2===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.aXo.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.aXr.prototype={
$1(d){this.a.az7(this.b)},
$S:4}
A.aJH.prototype={
$2(d,e){var x=d.gaTw(),w=this.a,v=0
for(;v<1;++v)J.cY(w.cO(0,x[v],new A.aJG()),new A.um(d,e))},
$S:z+5}
A.aJG.prototype={
$0(){return B.a([],y.d)},
$S:z+6};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u,v=a.installStaticTearOff
var u
x(u=A.NS.prototype,"ga17","auX",1)
x(u,"gamX","amY",2)
x(u,"gamZ","an_",3)
x(u,"gamV","amW",4)
w(A.Q9.prototype,"gavz","avA",7)
v(A,"SG",3,null,["$3"],["L1"],8,0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.v,[A.dU,A.ail,A.afW])
w(B.Q,[A.w8,A.xP])
w(B.S,[A.NS,A.Q9])
w(B.bB,[A.aXs,A.aXp,A.aXn,A.aXo,A.aXr])
w(B.ce,[A.aXq,A.aXl,A.aXm,A.aXk,A.aJG])
v(A.um,A.ail)
v(A.afX,A.afW)
v(A.BT,A.afX)
v(A.aJH,B.db)
x(A.afW,B.aS)
x(A.afX,B.b9)
x(A.ail,B.aS)})()
B.bt(b.typeUniverse,JSON.parse('{"w8":{"Q":[],"k":[]},"NS":{"S":["w8"]},"xP":{"Q":[],"k":[]},"BT":{"b9":[],"am":[]},"Q9":{"S":["xP"]}}'))
var y={v:B.w("b_"),d:B.w("t<um>"),z:B.w("be<S<Q>>"),y:B.w("C<um>"),b:B.w("qD"),q:B.w("um"),c:B.w("u?")};(function constants(){D.Eg=new B.q(0,4)
D.Oc=new B.r(167772160)
D.qB=new B.r(452984831)
D.k3=new B.q(0,2)
D.ni=new B.q(0,8)
D.jY=new B.ar(C.bZ,[],B.w("ar<u4,b_>"))
D.agT=B.bA("xP")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_67",e:"endPart",h:b})})($__dart_deferred_initializers__,"EGqzt6x+n2HrU+CjYjXgZdMtq+c=");