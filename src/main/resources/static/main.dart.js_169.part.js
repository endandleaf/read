((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_169",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={FO:function FO(){},Kf:function Kf(d){this.$ti=d},aHR:function aHR(d){this.a=d},aHS:function aHS(d,e){this.a=d
this.b=e},
bke(d){var x=J.a0(d),w=x.h(d,"title")
w=w==null?null:J.al(w)
if(w==null)w=""
x=x.h(d,"url")
x=x==null?null:J.al(x)
return new A.me(w,x==null?"":x)},
me:function me(d,e){this.a=d
this.b=e},
WW:function WW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bkA(d,e,f,g){var x,w={}
w.a=d
x=new A.Xz(g.i("Xz<0>"))
x.akH(e,f,w,g)
return x},
Xz:function Xz(d){var _=this
_.b=_.a=$
_.c=null
_.d=!1
_.$ti=d},
aua:function aua(d,e){this.a=d
this.b=e},
au9:function au9(d){this.a=d},
aau:function aau(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1
_.r=_.f=null
_.w=g},
aVh:function aVh(){},
a46:function a46(d){this.b=this.a=$
this.$ti=d},
a47:function a47(){},
amx(d,e){return A.buQ(d,e)},
buQ(d,e){var x=0,w=B.j(y.E),v,u,t,s,r,q,p
var $async$amx=B.d(function(f,g){if(f===1)return B.f(g,w)
while(true)switch(x){case 0:if(!d.pR("ws")&&!d.pR("wss"))throw B.e(B.eh(d,"url","only ws: and wss: schemes are supported"))
u=self
t=u.WebSocket
s=d.j(0)
u=new u.Array()
r=new t(s,u)
r.binaryType="arraybuffer"
q=new A.v1(r,B.kT(null,null,null,null,!1,y.D))
u=new B.a4($.aa,y.j)
p=new B.aP(u,y.V)
if(J.l(r.readyState,1))p.cN(0,q)
else if(J.l(r.readyState,2)||J.l(r.readyState,3)){B.n(r.readyState)
p.hZ(new A.C3())}else new B.qm(r,"open",!1,y.C).gZ(0).aN(new A.amy(p,q),y.H)
t=y.C
s=y.H
new B.qm(r,"error",!1,t).gZ(0).aN(new A.amz(p,q),s)
B.MW(r,"message",new A.amA(q),!1,y.m)
new B.qm(r,"close",!1,t).gZ(0).aN(new A.amB(p,q),s)
v=u
x=1
break
case 1:return B.h(v,w)}})
return B.i($async$amx,w)},
v1:function v1(d,e){this.a=d
this.b=e},
amy:function amy(d,e){this.a=d
this.b=e},
amz:function amz(d,e){this.a=d
this.b=e},
amA:function amA(d){this.a=d},
amB:function amB(d,e){this.a=d
this.b=e},
bf_(){return new A.C2()},
qd:function qd(){},
BF:function BF(d){this.a=d},
yI:function yI(d){this.a=d},
z9:function z9(d,e){this.a=d
this.b=e},
C3:function C3(){},
C2:function C2(){},
biv(d){var x=null,w=$.aa,v=new A.a46(y.Z),u=y.X,t=B.kT(x,x,x,x,!0,u),s=B.kT(x,x,x,x,!0,u)
v.a=A.bkA(new B.cT(s,B.x(s).i("cT<1>")),new B.PG(t),!0,u)
v.b=A.bkA(new B.cT(t,B.x(t).i("cT<1>")),new B.PG(s),!1,u)
v=new A.ak2(new B.aP(new B.a4(w,y.U),y.h),v)
v.akx(d)
return v},
ak2:function ak2(d,e){var _=this
_.e=_.d=null
_.f=d
_.r=e
_.w=$},
ak6:function ak6(d){this.a=d},
ak3:function ak3(d){this.a=d},
ak4:function ak4(d){this.a=d},
ak5:function ak5(d,e){this.a=d
this.b=e},
ak7:function ak7(d){this.a=d},
b6Q:function b6Q(d,e){this.b=d
this.a=e},
a5l:function a5l(d){this.a=d},
T6(d){var x=0,w=B.j(y.J),v,u,t,s,r,q,p,o,n,m
var $async$T6=B.d(function(e,f){if(e===1)return B.f(f,w)
while(true)switch(x){case 0:q=y.N
p=B.ad(["bookSourceUrl",d],q,q)
n=C.t
m=C.v
x=3
return B.c(F.du(E.cg("/getBookSourcesExploreUrl"),p),$async$T6)
case 3:o=n.ag(0,m.ag(0,f))
q=J.a0(o)
if(q.h(o,"isSuccess")){q=q.h(o,"data")
u=J.a0(q)
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
v=new A.WW(t,q==null?"":q,s,r)
x=1
break}else throw B.e(B.aU(D.ct(q.h(o,"errorMsg"))))
case 1:return B.h(v,w)}})
return B.i($async$T6,w)},
bmS(d){var x,w=E.beE()
if(w==null)return null
x=D.q_()
if(x==null)return null
return C.d.q5(x,"http","ws")+"/api/3"+("/"+d+"?id="+w)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[23],A)
D=c[118]
E=c[108]
F=c[116]
A.FO.prototype={
C(d,e){this.a.C(0,e)},
a9(d){return this.a.a9(0)}}
A.Kf.prototype={
rt(d){var x=B.bj("subscription"),w=B.kT(new A.aHR(x),null,null,null,!0,this.$ti.y[1])
x.b=d.fR(new A.aHS(this,w),w.grA(w),w.gnC())
return new B.cT(w,B.x(w).i("cT<1>"))}}
A.me.prototype={}
A.WW.prototype={}
A.Xz.prototype={
akH(d,e,f,g){var x=this,w=$.aa
x.a!==$&&B.bE()
x.a=new A.aau(d,x,new B.aP(new B.a4(w,y.d),y.c),e)
if(f.a.ghF())f.a=new A.Kf(g.i("@<0>").bL(g).i("Kf<1,2>")).rt(f.a)
w=B.kT(null,new A.aua(f,x),null,null,!0,g)
x.b!==$&&B.bE()
x.b=w},
a1H(){var x,w
this.d=!0
x=this.c
if(x!=null)x.az(0)
w=this.b
w===$&&B.b()
w.a9(0)}}
A.aau.prototype={
C(d,e){if(this.e)throw B.e(B.a2("Cannot add event after closing."))
if(this.d)return
this.a.a.C(0,e)},
es(d,e){if(this.e)throw B.e(B.a2("Cannot add event after closing."))
if(this.d)return
this.arY(d,e)},
lu(d){return this.es(d,null)},
arY(d,e){var x=this
if(x.w){x.a.a.es(d,e)
return}x.c.hA(d,e)
x.a1I()
x.b.a1H()
x.a.a.a9(0).iY(new A.aVh())},
a9(d){var x=this
if(x.e)return x.c.a
x.e=!0
if(!x.d){x.b.a1H()
x.c.cN(0,x.a.a.a9(0))}return x.c.a},
a1I(){this.d=!0
var x=this.c
if((x.a.a&30)===0)x.dH(0)
return}}
A.a46.prototype={}
A.a47.prototype={}
A.v1.prototype={
YS(d,e){var x=this.b
if((x.b&4)!==0)return
x.C(0,new A.z9(d,e))
x.a9(0)},
VO(d){var x
if((this.b.b&4)!==0)throw B.e(A.bf_())
x=B.bm(d)
x.toString
this.a.send(x)},
rB(d,e,f){return this.aHi(0,e,f)},
aHi(d,e,f){var x=0,w=B.j(y.H),v=this,u
var $async$rB=B.d(function(g,h){if(g===1)return B.f(h,w)
while(true)switch(x){case 0:u=v.b
if((u.b&4)!==0)throw B.e(A.bf_())
u.a9(0)
v.a.close()
return B.h(null,w)}})
return B.i($async$rB,w)},
$ibeZ:1}
A.qd.prototype={}
A.BF.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.BF&&e.a===this.a},
gA(d){return C.d.gA(this.a)}}
A.yI.prototype={
k(d,e){var x,w,v,u
if(e==null)return!1
if(e instanceof A.yI&&e.a.length===this.a.length){for(x=this.a,w=x.length,v=e.a,u=0;u<w;++u)if(v[u]!==x[u])return!1
return!0}return!1},
gA(d){return B.fY(this.a)},
j(d){return"BinaryDataReceived("+B.n(this.a)+")"}}
A.z9.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.z9&&e.a===this.a&&e.b===this.b},
gA(d){return B.fY([this.a,this.b])},
j(d){return"CloseReceived("+this.a+", "+this.b+")"}}
A.C3.prototype={$ibT:1}
A.C2.prototype={}
A.ak2.prototype={
ghg(){var x,w=this,v=w.w
if(v===$){x=w.r.b
x===$&&B.b()
x=x.a
x===$&&B.b()
v!==$&&B.aA()
v=w.w=new A.b6Q(w,x)}return v},
akx(d){d.fU(new A.ak6(this),new A.ak7(this),y.P)}}
A.b6Q.prototype={
a9(d){var x=this.b
x.e=x.d=null
return this.agh(0)}}
A.a5l.prototype={
j(d){return"WebSocketChannelException: "+this.a},
$ibT:1}
var z=a.updateTypes(["aL(beZ)","~(qd)"])
A.aHR.prototype={
$0(){return J.bhU(this.a.aF())},
$S:1}
A.aHS.prototype={
$1(d){var x,w,v,u
try{this.b.C(0,this.a.$ti.y[1].a(d))}catch(v){u=B.Q(v)
if(y._.b(u)){x=u
w=B.b2(v)
this.b.es(x,w)}else throw v}},
$S(){return this.a.$ti.i("~(1)")}}
A.aua.prototype={
$0(){var x,w,v=this.b
if(v.d)return
x=this.a.a
w=v.b
w===$&&B.b()
v.c=x.fR(w.gjU(w),new A.au9(v),w.gnC())},
$S:0}
A.au9.prototype={
$0(){var x=this.a,w=x.a
w===$&&B.b()
w.a1I()
x=x.b
x===$&&B.b()
x.a9(0)},
$S:0}
A.aVh.prototype={
$1(d){},
$S:5}
A.amy.prototype={
$1(d){this.a.cN(0,this.b)},
$S:9}
A.amz.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.hZ(new A.C3())
else this.b.YS(1006,"error")},
$S:9}
A.amA.prototype={
$1(d){var x,w,v=this.a.b
if((v.b&4)!==0)return
x=d.data
x.toString
w=B.bj("data")
if(typeof x==="string")w.b=new A.BF(B.bD(x))
else if(typeof x==="object"&&B.Hp(y.m.a(x),"ArrayBuffer"))w.b=new A.yI(B.eV(y.o.a(x),0,null))
else throw B.e(B.a2("unexpected message type: "+J.a8(x).j(0)))
v.C(0,w.aF())},
$S:36}
A.amB.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.cN(0,this.b)
this.b.YS(d.code,d.reason)},
$S:9}
A.ak6.prototype={
$1(d){var x=d.b,w=this.a
new B.cT(x,B.x(x).i("cT<1>")).e9(new A.ak3(w))
x=w.r.a
x===$&&B.b()
x=x.b
x===$&&B.b()
new B.cT(x,B.x(x).i("cT<1>")).aNi(new A.ak4(d),new A.ak5(w,d))
w.f.dH(0)},
$S:z+0}
A.ak3.prototype={
$1(d){var x,w,v
$label0$0:{x=d instanceof A.BF
w=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.C(0,w)
break $label0$0}x=d instanceof A.yI
v=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.C(0,v)
break $label0$0}if(d instanceof A.z9){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.a9(0)}}},
$S:z+1}
A.ak4.prototype={
$1(d){var x,w,v,u,t,s,r
try{$label1$1:{x=d
w=null
t=typeof x=="string"
if(t)w=x
if(t){t=this.a
s=w
if((t.b.b&4)!==0)B.a5(A.bf_())
s=B.bm(s)
s.toString
t.a.send(s)
break $label1$1}v=null
t=y.p.b(x)
if(t)v=x
if(t){this.a.VO(v)
break $label1$1}u=null
t=y.L.b(x)
if(t)u=x
if(t){this.a.VO(new Uint8Array(B.l_(u)))
break $label1$1}t=B.aq("Cannot send "+J.a8(d).j(0))
throw B.e(t)}}catch(r){if(!(B.Q(r) instanceof A.C2))throw r}},
$S:11}
A.ak5.prototype={
$0(){var x=0,w=B.j(y.H),v=1,u,t=this,s,r,q
var $async$$0=B.d(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
s=t.a
x=6
return B.c(t.b.rB(0,s.d,s.e),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
q=u
if(!(B.Q(q) instanceof A.C2))throw q
x=5
break
case 2:x=1
break
case 5:return B.h(null,w)
case 1:return B.f(u,w)}})
return B.i($async$$0,w)},
$S:1}
A.ak7.prototype={
$1(d){var x,w=d instanceof B.Li?d:new A.a5l(J.al(d)),v=this.a
v.f.hZ(w)
v=v.r.a
v===$&&B.b()
x=v.a
x===$&&B.b()
x.lu(w)
v=v.a
v===$&&B.b()
v.a9(0)},
$S:48};(function aliases(){var x=A.FO.prototype
x.agh=x.a9})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.FO,A.me,A.WW,A.a47,A.aau,A.a46,A.v1,A.qd,A.C3,A.a5l])
w(A.Kf,B.nY)
x(B.cj,[A.aHR,A.aua,A.au9,A.ak5])
x(B.bP,[A.aHS,A.aVh,A.amy,A.amz,A.amA,A.amB,A.ak6,A.ak3,A.ak4,A.ak7])
x(A.a47,[A.Xz,A.ak2])
x(A.qd,[A.BF,A.yI,A.z9])
w(A.C2,A.C3)
w(A.b6Q,A.FO)})()
B.bH(b.typeUniverse,JSON.parse('{"Kf":{"nY":["1","2"]},"v1":{"beZ":[]},"BF":{"qd":[]},"yI":{"qd":[]},"z9":{"qd":[]},"C3":{"bT":[]},"C2":{"bT":[]},"a5l":{"bT":[]}}'))
B.fs(b.typeUniverse,JSON.parse('{"FO":1,"aau":1,"a47":1}'))
var y=(function rtii(){var x=B.w
return{E:x("v1"),J:x("WW"),m:x("ax"),L:x("E<q>"),o:x("nE"),P:x("aL"),Z:x("a46<v?>"),N:x("m"),_:x("o4"),p:x("cF"),D:x("qd"),V:x("aP<v1>"),c:x("aP<@>"),h:x("aP<~>"),C:x("qm<ax>"),j:x("a4<v1>"),d:x("a4<@>"),U:x("a4<~>"),X:x("v?"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_169",e:"endPart",h:b})})($__dart_deferred_initializers__,"ad+P7lXfJKCk8J6/1YCEoy+h1TM=");