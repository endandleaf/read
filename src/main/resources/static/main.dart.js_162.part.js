((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_162",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={Ay:function Ay(){},Mb:function Mb(d){this.$ti=d},aMG:function aMG(d){this.a=d},aMH:function aMH(d,e){this.a=d
this.b=e},
bsZ(d){var x=J.U(d),w=x.h(d,"title")
w=w==null?null:J.ah(w)
if(w==null)w=""
x=x.h(d,"url")
x=x==null?null:J.ah(x)
return new A.mP(w,x==null?"":x)},
mP:function mP(d,e){this.a=d
this.b=e},
Zi:function Zi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btk(d,e,f,g){var x,w={}
w.a=d
x=new A.ZZ(g.i("ZZ<0>"))
x.apQ(e,f,w,g)
return x},
ZZ:function ZZ(d){var _=this
_.b=_.a=$
_.c=null
_.d=!1
_.$ti=d},
ayj:function ayj(d,e){this.a=d
this.b=e},
ayi:function ayi(d){this.a=d},
Pj:function Pj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1
_.r=_.f=null
_.w=g},
b09:function b09(){},
a7a:function a7a(d){this.b=this.a=$
this.$ti=d},
a7b:function a7b(){},
aqP(d,e){return A.bE0(d,e)},
bE0(d,e){var x=0,w=B.i(y.E),v,u,t,s,r,q,p
var $async$aqP=B.d(function(f,g){if(f===1)return B.e(g,w)
while(true)switch(x){case 0:if(!d.qS("ws")&&!d.qS("wss"))throw B.j(B.ej(d,"url","only ws: and wss: schemes are supported"))
u=self
t=u.WebSocket
s=d.j(0)
u=new u.Array()
r=new t(s,u)
r.binaryType="arraybuffer"
q=new A.vO(r,B.lj(null,null,null,!1,y.D))
u=new B.aa($.ag,y.j)
p=new B.aT(u,y.V)
if(J.m(r.readyState,1))p.cY(0,q)
else if(J.m(r.readyState,2)||J.m(r.readyState,3)){B.n(r.readyState)
p.ih(new A.Dp())}else new B.rd(r,"open",!1,y.C).ga0(0).aN(new A.aqQ(p,q),y.H)
t=y.C
s=y.H
new B.rd(r,"error",!1,t).ga0(0).aN(new A.aqR(p,q),s)
B.P2(r,"message",new A.aqS(q),!1,y.m)
new B.rd(r,"close",!1,t).ga0(0).aN(new A.aqT(p,q),s)
v=u
x=1
break
case 1:return B.f(v,w)}})
return B.h($async$aqP,w)},
vO:function vO(d,e){this.a=d
this.b=e},
aqQ:function aqQ(d,e){this.a=d
this.b=e},
aqR:function aqR(d,e){this.a=d
this.b=e},
aqS:function aqS(d){this.a=d},
aqT:function aqT(d,e){this.a=d
this.b=e},
bns(){return new A.Do()},
r4:function r4(){},
D0:function D0(d){this.a=d},
zS:function zS(d){this.a=d},
Ah:function Ah(d,e){this.a=d
this.b=e},
Dp:function Dp(){},
Do:function Do(){},
bre(d){var x=null,w=$.ag,v=new A.a7a(y.Z),u=y.X,t=B.lj(x,x,x,!0,u),s=B.lj(x,x,x,!0,u)
v.a=A.btk(new B.d7(s,B.w(s).i("d7<1>")),new B.EZ(t),!0,u)
v.b=A.btk(new B.d7(t,B.w(t).i("d7<1>")),new B.EZ(s),!1,u)
v=new A.ang(new B.aT(new B.aa(w,y.U),y.h),v)
v.apF(d)
return v},
ang:function ang(d,e){var _=this
_.e=_.d=null
_.f=d
_.r=e
_.w=$},
ank:function ank(d){this.a=d},
anh:function anh(d){this.a=d},
ani:function ani(d){this.a=d},
anj:function anj(d,e){this.a=d
this.b=e},
anl:function anl(d){this.a=d},
akc:function akc(d,e){this.b=d
this.a=e},
a8r:function a8r(d){this.a=d},
Vq(d){var x=0,w=B.i(y.J),v,u,t,s,r,q,p,o,n,m
var $async$Vq=B.d(function(e,f){if(e===1)return B.e(f,w)
while(true)switch(x){case 0:q=y.N
p=B.a1(["bookSourceUrl",d],q,q)
n=C.q
m=C.t
x=3
return B.c(G.cN(D.bG("/getBookSourcesExploreUrl"),p),$async$Vq)
case 3:o=n.W(0,m.W(0,f))
q=J.U(o)
if(q.h(o,"isSuccess")){q=q.h(o,"data")
u=J.U(q)
t=u.h(q,"found")
t=t==null?null:J.ah(t)
if(t==null)t=""
s=u.h(q,"loginUrl")
s=s==null?null:J.ah(s)
if(s==null)s=""
r=u.h(q,"loginUi")
r=r==null?null:J.ah(r)
if(r==null)r=""
q=u.h(q,"checkKeyWord")
q=q==null?null:J.ah(q)
v=new A.Zi(t,q==null?"":q,s,r)
x=1
break}else throw B.j(B.aF(E.c1(q.h(o,"errorMsg"))))
case 1:return B.f(v,w)}})
return B.h($async$Vq,w)},
bvE(d){var x,w=D.bn8()
if(w==null)return null
x=F.nd()
if(x==null)return null
return C.d.nA(x,"http","ws")+"/api/4"+("/"+d+"?id="+w)}},E,F,G,D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[27],A)
E=c[95]
F=c[99]
G=c[97]
D=c[87]
A.Ay.prototype={
B(d,e){this.a.B(0,e)},
dD(d,e){this.a.dD(d,e)},
ad(d){return this.a.ad(0)},
$ie4:1}
A.Mb.prototype={
lR(d){var x=B.bi("subscription"),w=B.lj(new A.aMG(x),null,null,!0,this.$ti.y[1])
x.b=d.fF(new A.aMH(this,w),w.gqk(w),w.glP())
return new B.d7(w,B.w(w).i("d7<1>"))}}
A.mP.prototype={}
A.Zi.prototype={}
A.ZZ.prototype={
apQ(d,e,f,g){var x=this,w=$.ag
x.a!==$&&B.bK()
x.a=new A.Pj(d,x,new B.aT(new B.aa(w,y.d),y.c),e)
if(f.a.ghm())f.a=new A.Mb(g.i("@<0>").bM(g).i("Mb<1,2>")).lR(f.a)
w=B.lj(null,new A.ayj(f,x),null,!0,g)
x.b!==$&&B.bK()
x.b=w},
a55(){var x,w
this.d=!0
x=this.c
if(x!=null)x.ap(0)
w=this.b
w===$&&B.b()
w.ad(0)}}
A.Pj.prototype={
B(d,e){if(this.e)throw B.j(B.a2("Cannot add event after closing."))
if(this.d)return
this.a.a.B(0,e)},
dD(d,e){if(this.e)throw B.j(B.a2("Cannot add event after closing."))
if(this.d)return
this.axL(d,e)},
kk(d){return this.dD(d,null)},
axL(d,e){var x=this
if(x.w){x.a.a.dD(d,e)
return}x.c.hB(d,e)
x.a56()
x.b.a55()
x.a.a.ad(0).fQ(new A.b09())},
ad(d){var x=this
if(x.e)return x.c.a
x.e=!0
if(!x.d){x.b.a55()
x.c.cY(0,x.a.a.ad(0))}return x.c.a},
a56(){this.d=!0
var x=this.c
if((x.a.a&30)===0)x.dR(0)
return},
$ie4:1}
A.a7a.prototype={}
A.a7b.prototype={}
A.vO.prototype={
a19(d,e){var x=this.b
if((x.b&4)!==0)return
x.B(0,new A.Ah(d,e))
x.ad(0)},
YX(d){var x
if((this.b.b&4)!==0)throw B.j(A.bns())
x=B.bx(d)
x.toString
this.a.send(x)},
tB(d,e,f){return this.aNM(0,e,f)},
aNM(d,e,f){var x=0,w=B.i(y.H),v=this,u
var $async$tB=B.d(function(g,h){if(g===1)return B.e(h,w)
while(true)switch(x){case 0:u=v.b
if((u.b&4)!==0)throw B.j(A.bns())
u.ad(0)
v.a.close()
return B.f(null,w)}})
return B.h($async$tB,w)},
$ibnr:1}
A.r4.prototype={}
A.D0.prototype={
l(d,e){if(e==null)return!1
return e instanceof A.D0&&e.a===this.a},
gA(d){return C.d.gA(this.a)}}
A.zS.prototype={
l(d,e){var x,w,v,u
if(e==null)return!1
if(e instanceof A.zS&&e.a.length===this.a.length){for(x=this.a,w=x.length,v=e.a,u=0;u<w;++u)if(v[u]!==x[u])return!1
return!0}return!1},
gA(d){return B.hg(this.a)},
j(d){return"BinaryDataReceived("+B.n(this.a)+")"}}
A.Ah.prototype={
l(d,e){if(e==null)return!1
return e instanceof A.Ah&&e.a===this.a&&e.b===this.b},
gA(d){return B.hg([this.a,this.b])},
j(d){return"CloseReceived("+this.a+", "+this.b+")"}}
A.Dp.prototype={$ibV:1}
A.Do.prototype={}
A.ang.prototype={
ghO(){var x,w=this,v=w.w
if(v===$){x=w.r.b
x===$&&B.b()
x=x.a
x===$&&B.b()
v!==$&&B.aE()
v=w.w=new A.akc(w,x)}return v},
apF(d){d.h9(new A.ank(this),new A.anl(this),y.P)}}
A.akc.prototype={
ad(d){var x=this.b
x.e=x.d=null
return this.alj(0)}}
A.a8r.prototype={
j(d){return"WebSocketChannelException: "+this.a},
$ibV:1}
var z=a.updateTypes(["aP(bnr)","~(r4)"])
A.aMG.prototype={
$0(){return J.bqy(this.a.aH())},
$S:1}
A.aMH.prototype={
$1(d){var x,w,v,u
try{this.b.B(0,this.a.$ti.y[1].a(d))}catch(v){u=B.I(v)
if(y._.b(u)){x=u
w=B.b_(v)
this.b.dD(x,w)}else throw v}},
$S(){return this.a.$ti.i("~(1)")}}
A.ayj.prototype={
$0(){var x,w,v=this.b
if(v.d)return
x=this.a.a
w=v.b
w===$&&B.b()
v.c=x.fF(w.ghT(w),new A.ayi(v),w.glP())},
$S:0}
A.ayi.prototype={
$0(){var x=this.a,w=x.a
w===$&&B.b()
w.a56()
x=x.b
x===$&&B.b()
x.ad(0)},
$S:0}
A.b09.prototype={
$1(d){},
$S:9}
A.aqQ.prototype={
$1(d){this.a.cY(0,this.b)},
$S:8}
A.aqR.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.ih(new A.Dp())
else this.b.a19(1006,"error")},
$S:8}
A.aqS.prototype={
$1(d){var x,w,v=this.a.b
if((v.b&4)!==0)return
x=d.data
x.toString
w=B.bi("data")
if(typeof x==="string")w.b=new A.D0(B.bs(x))
else if(typeof x==="object"&&B.Bb(y.m.a(x),"ArrayBuffer"))w.b=new A.zS(B.fe(y.o.a(x),0,null))
else throw B.j(B.a2("unexpected message type: "+J.ae(x).j(0)))
v.B(0,w.aH())},
$S:38}
A.aqT.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.cY(0,this.b)
this.b.a19(d.code,d.reason)},
$S:8}
A.ank.prototype={
$1(d){var x=d.b,w=this.a
new B.d7(x,B.w(x).i("d7<1>")).dU(new A.anh(w))
x=w.r.a
x===$&&B.b()
x=x.b
x===$&&B.b()
new B.d7(x,B.w(x).i("d7<1>")).aU_(new A.ani(d),new A.anj(w,d))
w.f.dR(0)},
$S:z+0}
A.anh.prototype={
$1(d){var x,w,v
$label0$0:{x=d instanceof A.D0
w=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.B(0,w)
break $label0$0}x=d instanceof A.zS
v=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.B(0,v)
break $label0$0}if(d instanceof A.Ah){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.ad(0)}}},
$S:z+1}
A.ani.prototype={
$1(d){var x,w,v,u,t,s,r
try{$label1$1:{x=d
w=null
t=typeof x=="string"
if(t)w=x
if(t){t=this.a
s=w
if((t.b.b&4)!==0)B.a3(A.bns())
s=B.bx(s)
s.toString
t.a.send(s)
break $label1$1}v=null
t=y.p.b(x)
if(t)v=x
if(t){this.a.YX(v)
break $label1$1}u=null
t=y.L.b(x)
if(t)u=x
if(t){this.a.YX(new Uint8Array(B.ls(u)))
break $label1$1}t=B.ar("Cannot send "+J.ae(d).j(0))
throw B.j(t)}}catch(r){if(!(B.I(r) instanceof A.Do))throw r}},
$S:15}
A.anj.prototype={
$0(){var x=0,w=B.i(y.H),v=1,u,t=this,s,r,q
var $async$$0=B.d(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
s=t.a
x=6
return B.c(t.b.tB(0,s.d,s.e),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
q=u
if(!(B.I(q) instanceof A.Do))throw q
x=5
break
case 2:x=1
break
case 5:return B.f(null,w)
case 1:return B.e(u,w)}})
return B.h($async$$0,w)},
$S:1}
A.anl.prototype={
$1(d){var x,w=d instanceof B.Nh?d:new A.a8r(J.ah(d)),v=this.a
v.f.ih(w)
v=v.r.a
v===$&&B.b()
x=v.a
x===$&&B.b()
x.kk(w)
v=v.a
v===$&&B.b()
v.ad(0)},
$S:52};(function aliases(){var x=A.Ay.prototype
x.alj=x.ad})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.Ay,A.mP,A.Zi,A.a7b,A.Pj,A.a7a,A.vO,A.r4,A.Dp,A.a8r])
w(A.Mb,B.lk)
x(B.cC,[A.aMG,A.ayj,A.ayi,A.anj])
x(B.cb,[A.aMH,A.b09,A.aqQ,A.aqR,A.aqS,A.aqT,A.ank,A.anh,A.ani,A.anl])
x(A.a7b,[A.ZZ,A.ang])
x(A.r4,[A.D0,A.zS,A.Ah])
w(A.Do,A.Dp)
w(A.akc,A.Ay)})()
B.c8(b.typeUniverse,JSON.parse('{"Ay":{"e4":["1"]},"Mb":{"lk":["1","2"]},"Pj":{"e4":["1"]},"vO":{"bnr":[]},"D0":{"r4":[]},"zS":{"r4":[]},"Ah":{"r4":[]},"Dp":{"bV":[]},"Do":{"bV":[]},"akc":{"e4":["@"]},"a8r":{"bV":[]}}'))
B.fM(b.typeUniverse,JSON.parse('{"Ay":1,"Pj":1,"a7b":1}'))
var y=(function rtii(){var x=B.y
return{E:x("vO"),J:x("Zi"),m:x("aG"),L:x("E<o>"),o:x("op"),P:x("aP"),Z:x("a7a<v?>"),N:x("l"),_:x("oU"),p:x("cU"),D:x("r4"),V:x("aT<vO>"),c:x("aT<@>"),h:x("aT<~>"),C:x("rd<aG>"),j:x("aa<vO>"),d:x("aa<@>"),U:x("aa<~>"),X:x("v?"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_162",e:"endPart",h:b})})($__dart_deferred_initializers__,"qFoo8UN3uo3oRO2D5O96t4GgaQw=");