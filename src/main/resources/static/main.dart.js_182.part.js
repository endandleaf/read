((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_182",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={CY:function CY(){},Pj:function Pj(d){this.$ti=d},aTC:function aTC(d){this.a=d},aTD:function aTD(d,e){this.a=d
this.b=e},
bBq(d){var x=J.W(d),w=x.h(d,"title")
w=w==null?null:J.al(w)
if(w==null)w=""
x=x.h(d,"url")
x=x==null?null:J.al(x)
return new A.nw(w,x==null?"":x)},
nw:function nw(d,e){this.a=d
this.b=e},
a1F:function a1F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBN(d,e,f,g){var x,w={}
w.a=d
x=new A.a2m(g.i("a2m<0>"))
x.asH(e,f,w,g)
return x},
a2m:function a2m(d){var _=this
_.b=_.a=$
_.c=null
_.d=!1
_.$ti=d},
aDW:function aDW(d,e){this.a=d
this.b=e},
aDV:function aDV(d){this.a=d},
Sx:function Sx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1
_.r=_.f=null
_.w=g},
b7k:function b7k(){},
aaP:function aaP(d){this.b=this.a=$
this.$ti=d},
aaQ:function aaQ(){},
av_(d,e){return A.bP1(d,e)},
bP1(d,e){var x=0,w=B.j(y.E),v,u,t,s,r,q,p
var $async$av_=B.e(function(f,g){if(f===1)return B.f(g,w)
while(true)switch(x){case 0:if(!d.t1("ws")&&!d.t1("wss"))throw B.k(B.ec(d,"url","only ws: and wss: schemes are supported"))
u=self
t=u.WebSocket
s=d.j(0)
u=new u.Array()
r=new t(s,u)
r.binaryType="arraybuffer"
q=new A.xN(r,B.l3(null,null,null,!1,y.D))
u=new B.ad($.ak,y.j)
p=new B.aY(u,y.V)
if(J.o(r.readyState,1))p.dc(0,q)
else if(J.o(r.readyState,2)||J.o(r.readyState,3)){B.q(r.readyState)
p.il(new A.Gg())}else new B.t6(r,"open",!1,y.C).ga0(0).aR(new A.av0(p,q),y.H)
t=y.C
s=y.H
new B.t6(r,"error",!1,t).ga0(0).aR(new A.av1(p,q),s)
B.Sg(r,"message",new A.av2(q),!1,y.m)
new B.t6(r,"close",!1,t).ga0(0).aR(new A.av3(p,q),s)
v=u
x=1
break
case 1:return B.h(v,w)}})
return B.i($async$av_,w)},
xN:function xN(d,e){this.a=d
this.b=e},
av0:function av0(d,e){this.a=d
this.b=e},
av1:function av1(d,e){this.a=d
this.b=e},
av2:function av2(d){this.a=d},
av3:function av3(d,e){this.a=d
this.b=e},
bvh(){return new A.Gf()},
rY:function rY(){},
FS:function FS(d){this.a=d},
Cb:function Cb(d){this.a=d},
CG:function CG(d,e){this.a=d
this.b=e},
Gg:function Gg(){},
Gf:function Gf(){},
bzr(d){var x=null,w=$.ak,v=new A.aaP(y.Z),u=y.X,t=B.l3(x,x,x,!0,u),s=B.l3(x,x,x,!0,u)
v.a=A.bBN(new B.df(s,B.A(s).i("df<1>")),new B.HT(t),!0,u)
v.b=A.bBN(new B.df(t,B.A(t).i("df<1>")),new B.HT(s),!1,u)
v=new A.ar6(new B.aY(new B.ad(w,y.U),y.h),v)
v.asu(d)
return v},
ar6:function ar6(d,e){var _=this
_.e=_.d=null
_.f=d
_.r=e
_.w=$},
ara:function ara(d){this.a=d},
ar7:function ar7(d){this.a=d},
ar8:function ar8(d){this.a=d},
ar9:function ar9(d,e){this.a=d
this.b=e},
arb:function arb(d){this.a=d},
anX:function anX(d,e){this.b=d
this.a=e},
ac7:function ac7(d){this.a=d},
YL(d){var x=0,w=B.j(y.J),v,u,t,s,r,q,p,o,n,m
var $async$YL=B.e(function(e,f){if(e===1)return B.f(f,w)
while(true)switch(x){case 0:q=y.N
p=B.a6(["bookSourceUrl",d],q,q)
n=C.r
m=C.v
x=3
return B.c(G.d0(D.bU("/getBookSourcesExploreUrl"),p),$async$YL)
case 3:o=n.U(0,m.U(0,f))
q=J.W(o)
if(q.h(o,"isSuccess")){q=q.h(o,"data")
u=J.W(q)
t=u.h(q,"found")
t=t==null?null:J.al(t)
if(t==null)t=""
s=u.h(q,"loginUrl")
s=s==null?null:J.al(s)
if(s==null)s=""
r=u.h(q,"loginUi")
r=r==null?null:J.al(r)
if(r==null)r=""
q=u.h(q,"checkKeyWord")
q=q==null?null:J.al(q)
v=new A.a1F(t,q==null?"":q,s,r)
x=1
break}else throw B.k(B.aH(E.cf(q.h(o,"errorMsg"))))
case 1:return B.h(v,w)}})
return B.i($async$YL,w)},
bEb(d){var x,w=D.aUr()
if(w==null)return null
x=F.m0()
if(x==null)return null
return C.d.on(x,"http","ws")+"/api/4"+("/"+d+"?id="+w)}},E,F,G,D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[27],A)
E=c[98]
F=c[105]
G=c[101]
D=c[90]
A.CY.prototype={
B(d,e){this.a.B(0,e)},
dT(d,e){this.a.dT(d,e)},
ag(d){return this.a.ag(0)},
$iel:1}
A.Pj.prototype={
mC(d){var x=B.b5("subscription"),w=B.l3(new A.aTC(x),null,null,!0,this.$ti.y[1])
x.b=d.fZ(new A.aTD(this,w),w.grr(w),w.gmB())
return new B.df(w,B.A(w).i("df<1>"))}}
A.nw.prototype={}
A.a1F.prototype={}
A.a2m.prototype={
asH(d,e,f,g){var x=this,w=$.ak
x.a!==$&&B.bX()
x.a=new A.Sx(d,x,new B.aY(new B.ad(w,y.d),y.c),e)
if(f.a.ghN())f.a=new A.Pj(g.i("@<0>").bX(g).i("Pj<1,2>")).mC(f.a)
w=B.l3(null,new A.aDW(f,x),null,!0,g)
x.b!==$&&B.bX()
x.b=w},
a7q(){var x,w
this.d=!0
x=this.c
if(x!=null)x.ao(0)
w=this.b
w===$&&B.b()
w.ag(0)}}
A.Sx.prototype={
B(d,e){if(this.e)throw B.k(B.a1("Cannot add event after closing."))
if(this.d)return
this.a.a.B(0,e)},
dT(d,e){if(this.e)throw B.k(B.a1("Cannot add event after closing."))
if(this.d)return
this.aB4(d,e)},
kZ(d){return this.dT(d,null)},
aB4(d,e){var x=this
if(x.w){x.a.a.dT(d,e)
return}x.c.hY(d,e)
x.a7r()
x.b.a7q()
x.a.a.ag(0).h9(new A.b7k())},
ag(d){var x=this
if(x.e)return x.c.a
x.e=!0
if(!x.d){x.b.a7q()
x.c.dc(0,x.a.a.ag(0))}return x.c.a},
a7r(){this.d=!0
var x=this.c
if((x.a.a&30)===0)x.e1(0)
return},
$iel:1}
A.aaP.prototype={}
A.aaQ.prototype={}
A.xN.prototype={
a3l(d,e){var x=this.b
if((x.b&4)!==0)return
x.B(0,new A.CG(d,e))
x.ag(0)},
a_V(d){var x
if((this.b.b&4)!==0)throw B.k(A.bvh())
x=B.bG(d)
x.toString
this.a.send(x)},
uL(d,e,f){return this.aRL(0,e,f)},
aRL(d,e,f){var x=0,w=B.j(y.H),v=this,u
var $async$uL=B.e(function(g,h){if(g===1)return B.f(h,w)
while(true)switch(x){case 0:u=v.b
if((u.b&4)!==0)throw B.k(A.bvh())
u.ag(0)
v.a.close()
return B.h(null,w)}})
return B.i($async$uL,w)},
$ibvg:1}
A.rY.prototype={}
A.FS.prototype={
l(d,e){if(e==null)return!1
return e instanceof A.FS&&e.a===this.a},
gA(d){return C.d.gA(this.a)}}
A.Cb.prototype={
l(d,e){var x,w,v,u
if(e==null)return!1
if(e instanceof A.Cb&&e.a.length===this.a.length){for(x=this.a,w=x.length,v=e.a,u=0;u<w;++u)if(v[u]!==x[u])return!1
return!0}return!1},
gA(d){return B.hQ(this.a)},
j(d){return"BinaryDataReceived("+B.q(this.a)+")"}}
A.CG.prototype={
l(d,e){if(e==null)return!1
return e instanceof A.CG&&e.a===this.a&&e.b===this.b},
gA(d){return B.hQ([this.a,this.b])},
j(d){return"CloseReceived("+this.a+", "+this.b+")"}}
A.Gg.prototype={$ibM:1}
A.Gf.prototype={}
A.ar6.prototype={
gib(){var x,w=this,v=w.w
if(v===$){x=w.r.b
x===$&&B.b()
x=x.a
x===$&&B.b()
v!==$&&B.aL()
v=w.w=new A.anX(w,x)}return v},
asu(d){d.hy(new A.ara(this),new A.arb(this),y.P)}}
A.anX.prototype={
ag(d){var x=this.b
x.e=x.d=null
return this.ao7(0)}}
A.ac7.prototype={
j(d){return"WebSocketChannelException: "+this.a},
$ibM:1}
var z=a.updateTypes(["aS(bvg)","~(rY)"])
A.aTC.prototype={
$0(){return J.byK(this.a.az())},
$S:1}
A.aTD.prototype={
$1(d){var x,w,v,u
try{this.b.B(0,this.a.$ti.y[1].a(d))}catch(v){u=B.H(v)
if(y._.b(u)){x=u
w=B.b3(v)
this.b.dT(x,w)}else throw v}},
$S(){return this.a.$ti.i("~(1)")}}
A.aDW.prototype={
$0(){var x,w,v=this.b
if(v.d)return
x=this.a.a
w=v.b
w===$&&B.b()
v.c=x.fZ(w.gii(w),new A.aDV(v),w.gmB())},
$S:0}
A.aDV.prototype={
$0(){var x=this.a,w=x.a
w===$&&B.b()
w.a7r()
x=x.b
x===$&&B.b()
x.ag(0)},
$S:0}
A.b7k.prototype={
$1(d){},
$S:9}
A.av0.prototype={
$1(d){this.a.dc(0,this.b)},
$S:8}
A.av1.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.il(new A.Gg())
else this.b.a3l(1006,"error")},
$S:8}
A.av2.prototype={
$1(d){var x,w,v=this.a.b
if((v.b&4)!==0)return
x=d.data
x.toString
w=B.b5("data")
if(typeof x==="string")w.b=new A.FS(B.bC(x))
else if(typeof x==="object"&&B.DJ(y.m.a(x),"ArrayBuffer"))w.b=new A.Cb(B.en(y.o.a(x),0,null))
else throw B.k(B.a1("unexpected message type: "+J.aj(x).j(0)))
v.B(0,w.az())},
$S:36}
A.av3.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.dc(0,this.b)
this.b.a3l(d.code,d.reason)},
$S:8}
A.ara.prototype={
$1(d){var x=d.b,w=this.a
new B.df(x,B.A(x).i("df<1>")).dL(new A.ar7(w))
x=w.r.a
x===$&&B.b()
x=x.b
x===$&&B.b()
new B.df(x,B.A(x).i("df<1>")).aYa(new A.ar8(d),new A.ar9(w,d))
w.f.e1(0)},
$S:z+0}
A.ar7.prototype={
$1(d){var x,w,v
$label0$0:{x=d instanceof A.FS
w=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.B(0,w)
break $label0$0}x=d instanceof A.Cb
v=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.B(0,v)
break $label0$0}if(d instanceof A.CG){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.ag(0)}}},
$S:z+1}
A.ar8.prototype={
$1(d){var x,w,v,u,t,s,r
try{$label1$1:{x=d
w=null
t=typeof x=="string"
if(t)w=x
if(t){t=this.a
s=w
if((t.b.b&4)!==0)B.a4(A.bvh())
s=B.bG(s)
s.toString
t.a.send(s)
break $label1$1}v=null
t=y.p.b(x)
if(t)v=x
if(t){this.a.a_V(v)
break $label1$1}u=null
t=y.L.b(x)
if(t)u=x
if(t){this.a.a_V(new Uint8Array(B.hD(u)))
break $label1$1}t=B.av("Cannot send "+J.aj(d).j(0))
throw B.k(t)}}catch(r){if(!(B.H(r) instanceof A.Gf))throw r}},
$S:15}
A.ar9.prototype={
$0(){var x=0,w=B.j(y.H),v=1,u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
s=t.a
x=6
return B.c(t.b.uL(0,s.d,s.e),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
q=u
if(!(B.H(q) instanceof A.Gf))throw q
x=5
break
case 2:x=1
break
case 5:return B.h(null,w)
case 1:return B.f(u,w)}})
return B.i($async$$0,w)},
$S:1}
A.arb.prototype={
$1(d){var x,w=d instanceof B.Qu?d:new A.ac7(J.al(d)),v=this.a
v.f.il(w)
v=v.r.a
v===$&&B.b()
x=v.a
x===$&&B.b()
x.kZ(w)
v=v.a
v===$&&B.b()
v.ag(0)},
$S:34};(function aliases(){var x=A.CY.prototype
x.ao7=x.ag})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.u,[A.CY,A.nw,A.a1F,A.aaQ,A.Sx,A.aaP,A.xN,A.rY,A.Gg,A.ac7])
w(A.Pj,B.m1)
x(B.cI,[A.aTC,A.aDW,A.aDV,A.ar9])
x(B.co,[A.aTD,A.b7k,A.av0,A.av1,A.av2,A.av3,A.ara,A.ar7,A.ar8,A.arb])
x(A.aaQ,[A.a2m,A.ar6])
x(A.rY,[A.FS,A.Cb,A.CG])
w(A.Gf,A.Gg)
w(A.anX,A.CY)})()
B.cc(b.typeUniverse,JSON.parse('{"CY":{"el":["1"]},"Pj":{"m1":["1","2"]},"Sx":{"el":["1"]},"xN":{"bvg":[]},"FS":{"rY":[]},"Cb":{"rY":[]},"CG":{"rY":[]},"Gg":{"bM":[]},"Gf":{"bM":[]},"anX":{"el":["@"]},"ac7":{"bM":[]}}'))
B.fO(b.typeUniverse,JSON.parse('{"CY":1,"Sx":1,"aaQ":1}'))
var y=(function rtii(){var x=B.z
return{E:x("xN"),J:x("a1F"),m:x("aE"),L:x("y<p>"),o:x("p5"),P:x("aS"),Z:x("aaP<u?>"),N:x("l"),_:x("pE"),p:x("cY"),D:x("rY"),V:x("aY<xN>"),c:x("aY<@>"),h:x("aY<~>"),C:x("t6<aE>"),j:x("ad<xN>"),d:x("ad<@>"),U:x("ad<~>"),X:x("u?"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_182",e:"endPart",h:b})})($__dart_deferred_initializers__,"K+C1k9vOSTfzTWkDMrKrjKcs2D4=");