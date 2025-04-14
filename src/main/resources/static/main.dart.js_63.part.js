((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_63",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,F,G,H,A={
bp7(d,e,f,g,h){var x=B.bj("hue")
if(g===0)x.b=0
else if(g===d)x.b=60*C.c.bD((e-f)/h,6)
else if(g===e)x.b=60*((f-d)/h+2)
else if(g===f)x.b=60*((d-e)/h+4)
x.b=isNaN(x.aF())?0:x.aF()
return x.aF()},
boR(d,e,f,g,h){var x,w,v,u,t,s,r
$label0$0:{if(e<60){x=new B.kY(f,g,0)
break $label0$0}if(e<120){x=new B.kY(g,f,0)
break $label0$0}if(e<180){x=new B.kY(0,f,g)
break $label0$0}if(e<240){x=new B.kY(0,g,f)
break $label0$0}if(e<300){x=new B.kY(g,0,f)
break $label0$0}x=new B.kY(f,0,g)
break $label0$0}w=x.a
v=null
u=null
t=x.b
s=x.c
u=s
v=t
r=w
return B.F(C.c.N(d*255),C.c.N((r+h)*255),C.c.N((v+h)*255),C.c.N((u+h)*255))},
bkB(d){var x=d.a,w=(x>>>16&255)/255,v=(x>>>8&255)/255,u=(x&255)/255,t=Math.max(w,Math.max(v,u)),s=Math.min(w,Math.min(v,u)),r=t-s,q=A.bp7(w,v,u,t,r),p=(t+s)/2,o=p===1?0:B.K(r/(1-Math.abs(2*p-1)),0,1)
return new A.dN((x>>>24&255)/255,q,o,p)},
dN:function dN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdw(d,e,f,g,h,i,j,k,l,m){return new A.vE(g,h,!1,d,m,k,l,j,i,f,null)},
vE:function vE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aUz:function aUz(d){this.a=d},
aUx:function aUx(d){this.a=d},
aUs:function aUs(d){this.a=d},
aUt:function aUt(d){this.a=d},
aUr:function aUr(d,e){this.a=d
this.b=e},
aUw:function aUw(d){this.a=d},
aUu:function aUu(d){this.a=d},
aUv:function aUv(d,e){this.a=d
this.b=e},
aUy:function aUy(d,e){this.a=d
this.b=e},
bB4(d){var x=B.B(y.c,y.y)
d.ap(0,new A.aHM(x))
return x},
a2Y(d,e,f){return new A.xe(null,f,d,e,null)},
u_:function u_(d,e){this.a=d
this.b=e},
Bk:function Bk(d,e){var _=this
_.b=d
_.c=null
_.T$=0
_.P$=e
_.ba$=_.aZ$=0},
aHM:function aHM(d){this.a=d},
aHL:function aHL(){},
xe:function xe(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Pg:function Pg(){this.c=this.a=this.d=null},
aeS:function aeS(){},
aeT:function aeT(){},
ahe:function ahe(){},
Kg(d,e,f){if(e==null)if(d==null)return null
else return d.aw(0,1-f)
else if(d==null)return e.aw(0,f)
else return new B.H(E.oj(d.a,e.a,f),E.oj(d.b,e.b,f))},
bek(d,e,f,g,h){var x=h.a,w=h.b
return new B.lx(d,e,f,g,x,w,x,w,x,w,x,w,x===w)}},D
J=c[1]
B=c[0]
C=c[2]
E=c[115]
F=c[127]
G=c[119]
H=c[121]
A=a.updateHolder(c[103],A)
D=c[138]
A.dN.prototype={
b2(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return A.boR(x.a,u,v,v*(1-Math.abs(C.c.bD(u/60,2)-1)),w-v/2)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.dN&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gA(d){var x=this
return B.a7(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"HSLColor("+B.n(x.a)+", "+B.n(x.b)+", "+B.n(x.c)+", "+B.n(x.d)+")"}}
A.vE.prototype={
a_(){return new A.N1(new H.bh(null,y.z))}}
A.N1.prototype={
aa(){this.aI()
$.cp.RG$.push(new A.aUz(this))
$.ab.ai$.d.a.f.C(0,this.ga02())},
m(){$.ab.ai$.d.a.f.F(0,this.ga02())
this.aA()},
a4J(d){this.FW(new A.aUx(this))},
ath(d){if(this.c==null)return
this.a4J(d)},
alr(d){if(!this.e)this.FW(new A.aUs(this))},
alu(d){if(this.e)this.FW(new A.aUt(this))},
alp(d){var x,w=this
if(w.f!==d){w.FW(new A.aUr(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
a1h(d,e){var x,w,v,u,t,s,r=this,q=new A.aUw(r),p=new A.aUv(r,new A.aUu(r))
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
FW(d){return this.a1h(null,d)},
axq(d){return this.a1h(d,null)},
b1(d){this.bm(d)
if(this.a.c!==d.c)$.cp.RG$.push(new A.aUy(this,d))},
galn(){var x,w=this.c
w.toString
w=B.dj(w,C.fF)
x=w==null?null:w.ch
$label0$0:{if(C.fe===x||x==null){w=this.a.c
break $label0$0}if(F.jX===x){w=!0
break $label0$0}w=null}return w},
G(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.galn()
w=u.a
v=G.ll(B.rp(!1,x,w.ax,t,!0,!0,s,!0,t,u.galo(),t,t,t,t),r,u.r,u.galq(),u.gals(),t)
s=w.c
if(s){r=w.w
r=r!=null&&r.a!==0}else r=!1
if(r){r=w.w
r.toString
v=E.uO(r,v)}if(s){s=w.x
s=s!=null&&s.gcu(s)}else s=!1
if(s){s=u.a.x
s.toString
v=A.a2Y(v,t,s)}return v}}
A.u_.prototype={}
A.Bk.prototype={
soB(d){var x=this
if(!E.ajp(x.b,d)){x.b=d
x.c=null
x.aj()}},
ga0B(){var x=this.c
return x==null?this.c=A.bB4(this.b):x},
aqu(d,e){var x,w,v,u=this.ga0B().h(0,d.b)
if(u==null)u=B.a([],y.d)
u=B.a9(u,!0,y.q)
x=this.ga0B().h(0,null)
C.b.L(u,x==null?B.a([],y.d):x)
x=u.length
w=0
for(;w<u.length;u.length===x||(0,B.X)(u),++w){v=u[w]
if(v.a.aFw(d,e))return v.b}return null},
aKY(d,e){var x,w,v,u,t,s,r,q,p=$.fO.wh$
p===$&&B.b()
x=this.aqu(e,p)
if(x!=null){p=$.ab.ai$.d.c
w=p==null?null:p.e
if(w!=null){v=E.bcs(w,x,y.v)
if(v!=null){w.am(y.b)
p=B.bcq(w)
u=p.aMK(v,x,w)
t=u.a
s=null
r=u.b
s=r
q=t
if(q)return v.UM(x,s)}}}return C.h9},
$iao:1}
A.xe.prototype={
goB(){var x=this.c
return x==null?this.d:x.b},
a_(){return new A.Pg()}}
A.Pg.prototype={
m(){var x=this.d
if(x!=null){x.P$=$.ak()
x.T$=0}this.aA()},
aa(){var x,w
this.aI()
x=this.a
if(x.c==null){w=new A.Bk(D.jS,$.ak())
this.d=w
w.soB(x.goB())}},
b1(d){var x,w,v=this
v.bm(d)
x=v.a
w=x.c
if(w!=d.c)if(w!=null){w=v.d
if(w!=null){w.P$=$.ak()
w.T$=0}v.d=null}else if(v.d==null)v.d=new A.Bk(D.jS,$.ak())
w=v.d
if(w!=null)w.soB(x.goB())},
atU(d,e){var x,w=d.e
if(w==null)return C.h9
x=this.a.c
if(x==null){x=this.d
x.toString}return x.aKY(w,e)},
G(d){var x=null,w=D.agt.j(0)
return B.rp(!1,!1,this.a.e,w,x,x,x,!0,x,x,x,this.gatT(),x,x)}}
A.aeS.prototype={}
A.aeT.prototype={}
A.ahe.prototype={}
var z=a.updateTypes(["y(vE)","~(nl)","~(jV)","~(jW)","~(y)","~(tF,aW)","E<u_>()","lf(ea,jR)","H?(H?,H?,z)"])
A.aUz.prototype={
$1(d){var x=$.ab.ai$.d.a.b
if(x==null)x=B.xU()
this.a.a4J(x)},
$S:4}
A.aUx.prototype={
$0(){var x=$.ab.ai$.d.a.b
switch((x==null?B.xU():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.aUs.prototype={
$0(){this.a.e=!0},
$S:0}
A.aUt.prototype={
$0(){this.a.e=!1},
$S:0}
A.aUr.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aUw.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.aUu.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.dj(w,C.fF)
x=w==null?null:w.ch
$label0$0:{if(C.fe===x||x==null){w=d.c
break $label0$0}if(F.jX===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.aUv.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.aUy.prototype={
$1(d){this.a.axq(this.b)},
$S:4}
A.aHM.prototype={
$2(d,e){var x=d.gaRn(),w=this.a,v=0
for(;v<1;++v)J.dp(w.cG(0,x[v],new A.aHL()),new A.u_(d,e))},
$S:z+5}
A.aHL.prototype={
$0(){return B.a([],y.d)},
$S:z+6};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u,v=a.installStaticTearOff
var u
x(u=A.N1.prototype,"ga02","ath",1)
x(u,"galq","alr",2)
x(u,"gals","alu",3)
x(u,"galo","alp",4)
w(A.Pg.prototype,"gatT","atU",7)
v(A,"RN",3,null,["$3"],["Kg"],8,0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.v,[A.dN,A.ahe,A.aeS])
w(B.O,[A.vE,A.xe])
w(B.R,[A.N1,A.Pg])
w(B.bP,[A.aUz,A.aUw,A.aUu,A.aUv,A.aUy])
w(B.cj,[A.aUx,A.aUs,A.aUt,A.aUr,A.aHL])
v(A.u_,A.ahe)
v(A.aeT,A.aeS)
v(A.Bk,A.aeT)
v(A.aHM,B.dx)
x(A.aeS,B.aO)
x(A.aeT,B.fg)
x(A.ahe,B.aO)})()
B.bH(b.typeUniverse,JSON.parse('{"vE":{"O":[],"k":[]},"N1":{"R":["vE"]},"xe":{"O":[],"k":[]},"Bk":{"ao":[]},"Pg":{"R":["xe"]}}'))
var y={v:B.w("aW"),d:B.w("u<u_>"),z:B.w("bh<R<O>>"),y:B.w("E<u_>"),b:B.w("qg"),q:B.w("u_"),c:B.w("t?")};(function constants(){D.DI=new B.p(0,4)
D.Nt=new B.r(167772160)
D.qg=new B.r(452984831)
D.jY=new B.p(0,2)
D.n5=new B.p(0,8)
D.jS=new B.ar(C.bX,[],B.w("ar<tF,aW>"))
D.agt=B.bw("xe")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_63",e:"endPart",h:b})})($__dart_deferred_initializers__,"hkRhe43tm5LOYHqB1kx63Oh+y9U=");