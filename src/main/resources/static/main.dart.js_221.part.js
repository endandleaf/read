((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_221",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={Gw:function Gw(){},L0:function L0(d){this.$ti=d},aJN:function aJN(d){this.a=d},aJO:function aJO(d,e){this.a=d
this.b=e},
bol(d){var x=J.a_(d),w=x.h(d,"title")
w=w==null?null:J.ag(w)
if(w==null)w=""
x=x.h(d,"url")
x=x==null?null:J.ag(x)
return new A.mp(w,x==null?"":x)},
mp:function mp(d,e){this.a=d
this.b=e},
XR:function XR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
boI(d,e,f,g){var x,w={}
w.a=d
x=new A.Yy(g.i("Yy<0>"))
x.amc(e,f,w,g)
return x},
Yy:function Yy(d){var _=this
_.b=_.a=$
_.c=null
_.d=!1
_.$ti=d},
avK:function avK(d,e){this.a=d
this.b=e},
avJ:function avJ(d){this.a=d},
abz:function abz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1
_.r=_.f=null
_.w=g},
aYa:function aYa(){},
a57:function a57(d){this.b=this.a=$
this.$ti=d},
a58:function a58(){},
anX(d,e){return A.bzg(d,e)},
bzg(d,e){var x=0,w=B.i(y.E),v,u,t,s,r,q,p
var $async$anX=B.d(function(f,g){if(f===1)return B.e(g,w)
while(true)switch(x){case 0:if(!d.q2("ws")&&!d.q2("wss"))throw B.j(B.eq(d,"url","only ws: and wss: schemes are supported"))
u=self
t=u.WebSocket
s=d.j(0)
u=new u.Array()
r=new t(s,u)
r.binaryType="arraybuffer"
q=new A.vr(r,B.l1(null,null,null,null,!1,y.D))
u=new B.a4($.ad,y.j)
p=new B.aT(u,y.V)
if(J.m(r.readyState,1))p.cW(0,q)
else if(J.m(r.readyState,2)||J.m(r.readyState,3)){B.n(r.readyState)
p.i8(new A.CD())}else new B.qJ(r,"open",!1,y.C).gZ(0).aK(new A.anY(p,q),y.H)
t=y.C
s=y.H
new B.qJ(r,"error",!1,t).gZ(0).aK(new A.anZ(p,q),s)
B.oA(r,"message",new A.ao_(q),!1,y.m)
new B.qJ(r,"close",!1,t).gZ(0).aK(new A.ao0(p,q),s)
v=u
x=1
break
case 1:return B.f(v,w)}})
return B.h($async$anX,w)},
vr:function vr(d,e){this.a=d
this.b=e},
anY:function anY(d,e){this.a=d
this.b=e},
anZ:function anZ(d,e){this.a=d
this.b=e},
ao_:function ao_(d){this.a=d},
ao0:function ao0(d,e){this.a=d
this.b=e},
biW(){return new A.CC()},
qB:function qB(){},
Cd:function Cd(d){this.a=d},
zh:function zh(d){this.a=d},
zH:function zH(d,e){this.a=d
this.b=e},
CD:function CD(){},
CC:function CC(){},
bmz(d){var x=null,w=$.ad,v=new A.a57(y.Z),u=y.X,t=B.l1(x,x,x,x,!0,u),s=B.l1(x,x,x,x,!0,u)
v.a=A.boI(new B.d3(s,B.x(s).i("d3<1>")),new B.Qz(t),!0,u)
v.b=A.boI(new B.d3(t,B.x(t).i("d3<1>")),new B.Qz(s),!1,u)
v=new A.ald(new B.aT(new B.a4(w,y.U),y.h),v)
v.am1(d)
return v},
ald:function ald(d,e){var _=this
_.e=_.d=null
_.f=d
_.r=e
_.w=$},
alh:function alh(d){this.a=d},
ale:function ale(d){this.a=d},
alf:function alf(d){this.a=d},
alg:function alg(d,e){this.a=d
this.b=e},
ali:function ali(d){this.a=d},
baK:function baK(d,e){this.b=d
this.a=e},
a6k:function a6k(d){this.a=d},
U_(d){var x=0,w=B.i(y.J),v,u,t,s,r,q,p,o,n,m
var $async$U_=B.d(function(e,f){if(e===1)return B.e(f,w)
while(true)switch(x){case 0:q=y.N
p=B.a9(["bookSourceUrl",d],q,q)
n=C.r
m=C.u
x=3
return B.c(G.cX(D.c3("/getBookSourcesExploreUrl"),p),$async$U_)
case 3:o=n.a3(0,m.a3(0,f))
q=J.a_(o)
if(q.h(o,"isSuccess")){q=q.h(o,"data")
u=J.a_(q)
t=u.h(q,"found")
t=t==null?null:J.ag(t)
if(t==null)t=""
s=u.h(q,"loginUrl")
s=s==null?null:J.ag(s)
if(s==null)s=""
r=u.h(q,"loginUi")
r=r==null?null:J.ag(r)
if(r==null)r=""
q=u.h(q,"checkKeyWord")
q=q==null?null:J.ag(q)
v=new A.XR(t,q==null?"":q,s,r)
x=1
break}else throw B.j(B.aO(E.cb(q.h(o,"errorMsg"))))
case 1:return B.f(v,w)}})
return B.h($async$U_,w)},
br3(d){var x,w=D.biB()
if(w==null)return null
x=F.op()
if(x==null)return null
return C.d.nb(x,"http","ws")+"/api/4"+("/"+d+"?id="+w)}},F,D,G
J=c[1]
B=c[0]
C=c[2]
E=c[132]
A=a.updateHolder(c[26],A)
F=c[134]
D=c[125]
G=c[130]
A.Gw.prototype={
B(d,e){this.a.B(0,e)},
ac(d){return this.a.ac(0)}}
A.L0.prototype={
rD(d){var x=B.bl("subscription"),w=B.l1(new A.aJN(x),null,null,null,!0,this.$ti.y[1])
x.b=d.fZ(new A.aJO(this,w),w.gpv(w),w.glA())
return new B.d3(w,B.x(w).i("d3<1>"))}}
A.mp.prototype={}
A.XR.prototype={}
A.Yy.prototype={
amc(d,e,f,g){var x=this,w=$.ad
x.a!==$&&B.bG()
x.a=new A.abz(d,x,new B.aT(new B.a4(w,y.d),y.c),e)
if(f.a.ghO())f.a=new A.L0(g.i("@<0>").bS(g).i("L0<1,2>")).rD(f.a)
w=B.l1(null,new A.avK(f,x),null,null,!0,g)
x.b!==$&&B.bG()
x.b=w},
a2Q(){var x,w
this.d=!0
x=this.c
if(x!=null)x.ar(0)
w=this.b
w===$&&B.b()
w.ac(0)}}
A.abz.prototype={
B(d,e){if(this.e)throw B.j(B.a1("Cannot add event after closing."))
if(this.d)return
this.a.a.B(0,e)},
el(d,e){if(this.e)throw B.j(B.a1("Cannot add event after closing."))
if(this.d)return
this.atG(d,e)},
k0(d){return this.el(d,null)},
atG(d,e){var x=this
if(x.w){x.a.a.el(d,e)
return}x.c.hc(d,e)
x.a2R()
x.b.a2Q()
x.a.a.ac(0).j2(new A.aYa())},
ac(d){var x=this
if(x.e)return x.c.a
x.e=!0
if(!x.d){x.b.a2Q()
x.c.cW(0,x.a.a.ac(0))}return x.c.a},
a2R(){this.d=!0
var x=this.c
if((x.a.a&30)===0)x.dB(0)
return}}
A.a57.prototype={}
A.a58.prototype={}
A.vr.prototype={
ZX(d,e){var x=this.b
if((x.b&4)!==0)return
x.B(0,new A.zH(d,e))
x.ac(0)},
WP(d){var x
if((this.b.b&4)!==0)throw B.j(A.biW())
x=B.bu(d)
x.toString
this.a.send(x)},
rI(d,e,f){return this.aJk(0,e,f)},
aJk(d,e,f){var x=0,w=B.i(y.H),v=this,u
var $async$rI=B.d(function(g,h){if(g===1)return B.e(h,w)
while(true)switch(x){case 0:u=v.b
if((u.b&4)!==0)throw B.j(A.biW())
u.ac(0)
v.a.close()
return B.f(null,w)}})
return B.h($async$rI,w)},
$ibiV:1}
A.qB.prototype={}
A.Cd.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.Cd&&e.a===this.a},
gA(d){return C.d.gA(this.a)}}
A.zh.prototype={
k(d,e){var x,w,v,u
if(e==null)return!1
if(e instanceof A.zh&&e.a.length===this.a.length){for(x=this.a,w=x.length,v=e.a,u=0;u<w;++u)if(v[u]!==x[u])return!1
return!0}return!1},
gA(d){return B.h9(this.a)},
j(d){return"BinaryDataReceived("+B.n(this.a)+")"}}
A.zH.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.zH&&e.a===this.a&&e.b===this.b},
gA(d){return B.h9([this.a,this.b])},
j(d){return"CloseReceived("+this.a+", "+this.b+")"}}
A.CD.prototype={$ibJ:1}
A.CC.prototype={}
A.ald.prototype={
ghr(){var x,w=this,v=w.w
if(v===$){x=w.r.b
x===$&&B.b()
x=x.a
x===$&&B.b()
v!==$&&B.aG()
v=w.w=new A.baK(w,x)}return v},
am1(d){d.h1(new A.alh(this),new A.ali(this),y.P)}}
A.baK.prototype={
ac(d){var x=this.b
x.e=x.d=null
return this.ahE(0)}}
A.a6k.prototype={
j(d){return"WebSocketChannelException: "+this.a},
$ibJ:1}
var z=a.updateTypes(["aI(biV)","~(qB)"])
A.aJN.prototype={
$0(){return J.blZ(this.a.aG())},
$S:2}
A.aJO.prototype={
$1(d){var x,w,v,u
try{this.b.B(0,this.a.$ti.y[1].a(d))}catch(v){u=B.K(v)
if(y._.b(u)){x=u
w=B.b3(v)
this.b.el(x,w)}else throw v}},
$S(){return this.a.$ti.i("~(1)")}}
A.avK.prototype={
$0(){var x,w,v=this.b
if(v.d)return
x=this.a.a
w=v.b
w===$&&B.b()
v.c=x.fZ(w.gjA(w),new A.avJ(v),w.glA())},
$S:0}
A.avJ.prototype={
$0(){var x=this.a,w=x.a
w===$&&B.b()
w.a2R()
x=x.b
x===$&&B.b()
x.ac(0)},
$S:0}
A.aYa.prototype={
$1(d){},
$S:6}
A.anY.prototype={
$1(d){this.a.cW(0,this.b)},
$S:10}
A.anZ.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.i8(new A.CD())
else this.b.ZX(1006,"error")},
$S:10}
A.ao_.prototype={
$1(d){var x,w,v=this.a.b
if((v.b&4)!==0)return
x=d.data
x.toString
w=B.bl("data")
if(typeof x==="string")w.b=new A.Cd(B.bH(x))
else if(typeof x==="object"&&B.Ay(y.m.a(x),"ArrayBuffer"))w.b=new A.zh(B.f8(y.o.a(x),0,null))
else throw B.j(B.a1("unexpected message type: "+J.ae(x).j(0)))
v.B(0,w.aG())},
$S:22}
A.ao0.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.cW(0,this.b)
this.b.ZX(d.code,d.reason)},
$S:10}
A.alh.prototype={
$1(d){var x=d.b,w=this.a
new B.d3(x,B.x(x).i("d3<1>")).ec(new A.ale(w))
x=w.r.a
x===$&&B.b()
x=x.b
x===$&&B.b()
new B.d3(x,B.x(x).i("d3<1>")).aPj(new A.alf(d),new A.alg(w,d))
w.f.dB(0)},
$S:z+0}
A.ale.prototype={
$1(d){var x,w,v
$label0$0:{x=d instanceof A.Cd
w=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.B(0,w)
break $label0$0}x=d instanceof A.zh
v=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.B(0,v)
break $label0$0}if(d instanceof A.zH){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.ac(0)}}},
$S:z+1}
A.alf.prototype={
$1(d){var x,w,v,u,t,s,r
try{$label1$1:{x=d
w=null
t=typeof x=="string"
if(t)w=x
if(t){t=this.a
s=w
if((t.b.b&4)!==0)B.a5(A.biW())
s=B.bu(s)
s.toString
t.a.send(s)
break $label1$1}v=null
t=y.p.b(x)
if(t)v=x
if(t){this.a.WP(v)
break $label1$1}u=null
t=y.L.b(x)
if(t)u=x
if(t){this.a.WP(new Uint8Array(B.l8(u)))
break $label1$1}t=B.as("Cannot send "+J.ae(d).j(0))
throw B.j(t)}}catch(r){if(!(B.K(r) instanceof A.CC))throw r}},
$S:12}
A.alg.prototype={
$0(){var x=0,w=B.i(y.H),v=1,u,t=this,s,r,q
var $async$$0=B.d(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
s=t.a
x=6
return B.c(t.b.rI(0,s.d,s.e),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
q=u
if(!(B.K(q) instanceof A.CC))throw q
x=5
break
case 2:x=1
break
case 5:return B.f(null,w)
case 1:return B.e(u,w)}})
return B.h($async$$0,w)},
$S:2}
A.ali.prototype={
$1(d){var x,w=d instanceof B.M5?d:new A.a6k(J.ag(d)),v=this.a
v.f.i8(w)
v=v.r.a
v===$&&B.b()
x=v.a
x===$&&B.b()
x.k0(w)
v=v.a
v===$&&B.b()
v.ac(0)},
$S:49};(function aliases(){var x=A.Gw.prototype
x.ahE=x.ac})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.Gw,A.mp,A.XR,A.a58,A.abz,A.a57,A.vr,A.qB,A.CD,A.a6k])
w(A.L0,B.oq)
x(B.ce,[A.aJN,A.avK,A.avJ,A.alg])
x(B.bB,[A.aJO,A.aYa,A.anY,A.anZ,A.ao_,A.ao0,A.alh,A.ale,A.alf,A.ali])
x(A.a58,[A.Yy,A.ald])
x(A.qB,[A.Cd,A.zh,A.zH])
w(A.CC,A.CD)
w(A.baK,A.Gw)})()
B.bt(b.typeUniverse,JSON.parse('{"L0":{"oq":["1","2"]},"vr":{"biV":[]},"Cd":{"qB":[]},"zh":{"qB":[]},"zH":{"qB":[]},"CD":{"bJ":[]},"CC":{"bJ":[]},"a6k":{"bJ":[]}}'))
B.fB(b.typeUniverse,JSON.parse('{"Gw":1,"abz":1,"a58":1}'))
var y=(function rtii(){var x=B.w
return{E:x("vr"),J:x("XR"),m:x("aA"),L:x("C<p>"),o:x("o_"),P:x("aI"),Z:x("a57<v?>"),N:x("l"),_:x("ow"),p:x("cM"),D:x("qB"),V:x("aT<vr>"),c:x("aT<@>"),h:x("aT<~>"),C:x("qJ<aA>"),j:x("a4<vr>"),d:x("a4<@>"),U:x("a4<~>"),X:x("v?"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_221",e:"endPart",h:b})})($__dart_deferred_initializers__,"j2m1CeTrkRKXDHlBdUb3++mXIrk=");