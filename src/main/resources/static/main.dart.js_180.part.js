((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_180",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={FN:function FN(){},Ke:function Ke(d){this.$ti=d},aHD:function aHD(d){this.a=d},aHE:function aHE(d,e){this.a=d
this.b=e},
bjH(d){var x=J.a1(d),w=x.h(d,"title")
w=w==null?null:J.al(w)
if(w==null)w=""
x=x.h(d,"url")
x=x==null?null:J.al(x)
return new A.ma(w,x==null?"":x)},
ma:function ma(d,e){this.a=d
this.b=e},
WO:function WO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bk2(d,e,f,g){var x,w={}
w.a=d
x=new A.Xr(g.i("Xr<0>"))
x.akv(e,f,w,g)
return x},
Xr:function Xr(d){var _=this
_.b=_.a=$
_.c=null
_.d=!1
_.$ti=d},
atZ:function atZ(d,e){this.a=d
this.b=e},
atY:function atY(d){this.a=d},
aai:function aai(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1
_.r=_.f=null
_.w=g},
aUH:function aUH(){},
a3W:function a3W(d){this.b=this.a=$
this.$ti=d},
a3X:function a3X(){},
amk(d,e){return A.bug(d,e)},
bug(d,e){var x=0,w=B.j(y.E),v,u,t,s,r,q,p
var $async$amk=B.e(function(f,g){if(f===1)return B.f(g,w)
while(true)switch(x){case 0:if(!d.pP("ws")&&!d.pP("wss"))throw B.d(B.eh(d,"url","only ws: and wss: schemes are supported"))
u=self
t=u.WebSocket
s=d.j(0)
u=new u.Array()
r=new t(s,u)
r.binaryType="arraybuffer"
q=new A.v_(r,B.kO(null,null,null,null,!1,y.D))
u=new B.a4($.aa,y.j)
p=new B.aP(u,y.V)
if(J.m(r.readyState,1))p.cN(0,q)
else if(J.m(r.readyState,2)||J.m(r.readyState,3)){B.n(r.readyState)
p.hY(new A.C0())}else new B.qd(r,"open",!1,y.C).gZ(0).aN(new A.aml(p,q),y.H)
t=y.C
s=y.H
new B.qd(r,"error",!1,t).gZ(0).aN(new A.amm(p,q),s)
B.MW(r,"message",new A.amn(q),!1,y.m)
new B.qd(r,"close",!1,t).gZ(0).aN(new A.amo(p,q),s)
v=u
x=1
break
case 1:return B.h(v,w)}})
return B.i($async$amk,w)},
v_:function v_(d,e){this.a=d
this.b=e},
aml:function aml(d,e){this.a=d
this.b=e},
amm:function amm(d,e){this.a=d
this.b=e},
amn:function amn(d){this.a=d},
amo:function amo(d,e){this.a=d
this.b=e},
bep(){return new A.C_()},
q4:function q4(){},
BC:function BC(d){this.a=d},
yF:function yF(d){this.a=d},
z6:function z6(d,e){this.a=d
this.b=e},
C0:function C0(){},
C_:function C_(){},
bhW(d){var x=null,w=$.aa,v=new A.a3W(y.Z),u=y.X,t=B.kO(x,x,x,x,!0,u),s=B.kO(x,x,x,x,!0,u)
v.a=A.bk2(new B.cT(s,B.y(s).i("cT<1>")),new B.PF(t),!0,u)
v.b=A.bk2(new B.cT(t,B.y(t).i("cT<1>")),new B.PF(s),!1,u)
v=new A.ajR(new B.aP(new B.a4(w,y.U),y.h),v)
v.akl(d)
return v},
ajR:function ajR(d,e){var _=this
_.e=_.d=null
_.f=d
_.r=e
_.w=$},
ajV:function ajV(d){this.a=d},
ajS:function ajS(d){this.a=d},
ajT:function ajT(d){this.a=d},
ajU:function ajU(d,e){this.a=d
this.b=e},
ajW:function ajW(d){this.a=d},
b6d:function b6d(d,e){this.b=d
this.a=e},
a5a:function a5a(d){this.a=d},
T0(d){var x=0,w=B.j(y.J),v,u,t,s,r,q,p,o,n,m
var $async$T0=B.e(function(e,f){if(e===1)return B.f(f,w)
while(true)switch(x){case 0:q=y.N
p=B.ad(["bookSourceUrl",d],q,q)
n=C.t
m=C.w
x=3
return B.c(F.dS(E.ch("/getBookSourcesExploreUrl"),p),$async$T0)
case 3:o=n.an(0,m.an(0,f))
q=J.a1(o)
if(q.h(o,"isSuccess")){q=q.h(o,"data")
u=J.a1(q)
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
v=new A.WO(t,q==null?"":q,s,r)
x=1
break}else throw B.d(B.aX(D.cz(q.h(o,"errorMsg"))))
case 1:return B.h(v,w)}})
return B.i($async$T0,w)},
bmk(d){var x,w=E.be3()
if(w==null)return null
x=D.xi()
if(x==null)return null
return C.d.q3(x,"http","ws")+"/api/3"+("/"+d+"?id="+w)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[24],A)
D=c[124]
E=c[115]
F=c[122]
A.FN.prototype={
B(d,e){this.a.B(0,e)},
a9(d){return this.a.a9(0)}}
A.Ke.prototype={
rs(d){var x=B.bi("subscription"),w=B.kO(new A.aHD(x),null,null,null,!0,this.$ti.y[1])
x.b=d.fR(new A.aHE(this,w),w.grz(w),w.gnA())
return new B.cT(w,B.y(w).i("cT<1>"))}}
A.ma.prototype={}
A.WO.prototype={}
A.Xr.prototype={
akv(d,e,f,g){var x=this,w=$.aa
x.a!==$&&B.bG()
x.a=new A.aai(d,x,new B.aP(new B.a4(w,y.d),y.c),e)
if(f.a.ghE())f.a=new A.Ke(g.i("@<0>").bK(g).i("Ke<1,2>")).rs(f.a)
w=B.kO(null,new A.atZ(f,x),null,null,!0,g)
x.b!==$&&B.bG()
x.b=w},
a1u(){var x,w
this.d=!0
x=this.c
if(x!=null)x.az(0)
w=this.b
w===$&&B.b()
w.a9(0)}}
A.aai.prototype={
B(d,e){if(this.e)throw B.d(B.a0("Cannot add event after closing."))
if(this.d)return
this.a.a.B(0,e)},
ep(d,e){if(this.e)throw B.d(B.a0("Cannot add event after closing."))
if(this.d)return
this.arJ(d,e)},
lu(d){return this.ep(d,null)},
arJ(d,e){var x=this
if(x.w){x.a.a.ep(d,e)
return}x.c.hz(d,e)
x.a1v()
x.b.a1u()
x.a.a.a9(0).iX(new A.aUH())},
a9(d){var x=this
if(x.e)return x.c.a
x.e=!0
if(!x.d){x.b.a1u()
x.c.cN(0,x.a.a.a9(0))}return x.c.a},
a1v(){this.d=!0
var x=this.c
if((x.a.a&30)===0)x.dG(0)
return}}
A.a3W.prototype={}
A.a3X.prototype={}
A.v_.prototype={
YF(d,e){var x=this.b
if((x.b&4)!==0)return
x.B(0,new A.z6(d,e))
x.a9(0)},
VB(d){var x
if((this.b.b&4)!==0)throw B.d(A.bep())
x=B.bk(d)
x.toString
this.a.send(x)},
rA(d,e,f){return this.aH0(0,e,f)},
aH0(d,e,f){var x=0,w=B.j(y.H),v=this,u
var $async$rA=B.e(function(g,h){if(g===1)return B.f(h,w)
while(true)switch(x){case 0:u=v.b
if((u.b&4)!==0)throw B.d(A.bep())
u.a9(0)
v.a.close()
return B.h(null,w)}})
return B.i($async$rA,w)},
$ibeo:1}
A.q4.prototype={}
A.BC.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.BC&&e.a===this.a},
gA(d){return C.d.gA(this.a)}}
A.yF.prototype={
k(d,e){var x,w,v,u
if(e==null)return!1
if(e instanceof A.yF&&e.a.length===this.a.length){for(x=this.a,w=x.length,v=e.a,u=0;u<w;++u)if(v[u]!==x[u])return!1
return!0}return!1},
gA(d){return B.hw(this.a)},
j(d){return"BinaryDataReceived("+B.n(this.a)+")"}}
A.z6.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.z6&&e.a===this.a&&e.b===this.b},
gA(d){return B.hw([this.a,this.b])},
j(d){return"CloseReceived("+this.a+", "+this.b+")"}}
A.C0.prototype={$ibS:1}
A.C_.prototype={}
A.ajR.prototype={
ghg(){var x,w=this,v=w.w
if(v===$){x=w.r.b
x===$&&B.b()
x=x.a
x===$&&B.b()
v!==$&&B.aE()
v=w.w=new A.b6d(w,x)}return v},
akl(d){d.fU(new A.ajV(this),new A.ajW(this),y.P)}}
A.b6d.prototype={
a9(d){var x=this.b
x.e=x.d=null
return this.ag4(0)}}
A.a5a.prototype={
j(d){return"WebSocketChannelException: "+this.a},
$ibS:1}
var z=a.updateTypes(["aH(beo)","~(q4)"])
A.aHD.prototype={
$0(){return J.bhk(this.a.aF())},
$S:2}
A.aHE.prototype={
$1(d){var x,w,v,u
try{this.b.B(0,this.a.$ti.y[1].a(d))}catch(v){u=B.S(v)
if(y._.b(u)){x=u
w=B.b1(v)
this.b.ep(x,w)}else throw v}},
$S(){return this.a.$ti.i("~(1)")}}
A.atZ.prototype={
$0(){var x,w,v=this.b
if(v.d)return
x=this.a.a
w=v.b
w===$&&B.b()
v.c=x.fR(w.gjT(w),new A.atY(v),w.gnA())},
$S:0}
A.atY.prototype={
$0(){var x=this.a,w=x.a
w===$&&B.b()
w.a1v()
x=x.b
x===$&&B.b()
x.a9(0)},
$S:0}
A.aUH.prototype={
$1(d){},
$S:5}
A.aml.prototype={
$1(d){this.a.cN(0,this.b)},
$S:9}
A.amm.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.hY(new A.C0())
else this.b.YF(1006,"error")},
$S:9}
A.amn.prototype={
$1(d){var x,w,v=this.a.b
if((v.b&4)!==0)return
x=d.data
x.toString
w=B.bi("data")
if(typeof x==="string")w.b=new A.BC(B.bF(x))
else if(typeof x==="object"&&B.Hp(y.m.a(x),"ArrayBuffer"))w.b=new A.yF(B.eS(y.o.a(x),0,null))
else throw B.d(B.a0("unexpected message type: "+J.a8(x).j(0)))
v.B(0,w.aF())},
$S:33}
A.amo.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.cN(0,this.b)
this.b.YF(d.code,d.reason)},
$S:9}
A.ajV.prototype={
$1(d){var x=d.b,w=this.a
new B.cT(x,B.y(x).i("cT<1>")).e8(new A.ajS(w))
x=w.r.a
x===$&&B.b()
x=x.b
x===$&&B.b()
new B.cT(x,B.y(x).i("cT<1>")).aN0(new A.ajT(d),new A.ajU(w,d))
w.f.dG(0)},
$S:z+0}
A.ajS.prototype={
$1(d){var x,w,v
$label0$0:{x=d instanceof A.BC
w=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.B(0,w)
break $label0$0}x=d instanceof A.yF
v=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.B(0,v)
break $label0$0}if(d instanceof A.z6){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.a9(0)}}},
$S:z+1}
A.ajT.prototype={
$1(d){var x,w,v,u,t,s,r
try{$label1$1:{x=d
w=null
t=typeof x=="string"
if(t)w=x
if(t){t=this.a
s=w
if((t.b.b&4)!==0)B.a5(A.bep())
s=B.bk(s)
s.toString
t.a.send(s)
break $label1$1}v=null
t=y.p.b(x)
if(t)v=x
if(t){this.a.VB(v)
break $label1$1}u=null
t=y.L.b(x)
if(t)u=x
if(t){this.a.VB(new Uint8Array(B.kW(u)))
break $label1$1}t=B.aq("Cannot send "+J.a8(d).j(0))
throw B.d(t)}}catch(r){if(!(B.S(r) instanceof A.C_))throw r}},
$S:11}
A.ajU.prototype={
$0(){var x=0,w=B.j(y.H),v=1,u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
s=t.a
x=6
return B.c(t.b.rA(0,s.d,s.e),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
q=u
if(!(B.S(q) instanceof A.C_))throw q
x=5
break
case 2:x=1
break
case 5:return B.h(null,w)
case 1:return B.f(u,w)}})
return B.i($async$$0,w)},
$S:2}
A.ajW.prototype={
$1(d){var x,w=d instanceof B.Li?d:new A.a5a(J.al(d)),v=this.a
v.f.hY(w)
v=v.r.a
v===$&&B.b()
x=v.a
x===$&&B.b()
x.lu(w)
v=v.a
v===$&&B.b()
v.a9(0)},
$S:49};(function aliases(){var x=A.FN.prototype
x.ag4=x.a9})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.FN,A.ma,A.WO,A.a3X,A.aai,A.a3W,A.v_,A.q4,A.C0,A.a5a])
w(A.Ke,B.nW)
x(B.cc,[A.aHD,A.atZ,A.atY,A.ajU])
x(B.bC,[A.aHE,A.aUH,A.aml,A.amm,A.amn,A.amo,A.ajV,A.ajS,A.ajT,A.ajW])
x(A.a3X,[A.Xr,A.ajR])
x(A.q4,[A.BC,A.yF,A.z6])
w(A.C_,A.C0)
w(A.b6d,A.FN)})()
B.bA(b.typeUniverse,JSON.parse('{"Ke":{"nW":["1","2"]},"v_":{"beo":[]},"BC":{"q4":[]},"yF":{"q4":[]},"z6":{"q4":[]},"C0":{"bS":[]},"C_":{"bS":[]},"a5a":{"bS":[]}}'))
B.fn(b.typeUniverse,JSON.parse('{"FN":1,"aai":1,"a3X":1}'))
var y=(function rtii(){var x=B.w
return{E:x("v_"),J:x("WO"),m:x("ax"),L:x("D<q>"),o:x("nC"),P:x("aH"),Z:x("a3W<v?>"),N:x("l"),_:x("o2"),p:x("cD"),D:x("q4"),V:x("aP<v_>"),c:x("aP<@>"),h:x("aP<~>"),C:x("qd<ax>"),j:x("a4<v_>"),d:x("a4<@>"),U:x("a4<~>"),X:x("v?"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_180",e:"endPart",h:b})})($__dart_deferred_initializers__,"2dEizizjkYIxYBFhgwkTyyyru4k=");