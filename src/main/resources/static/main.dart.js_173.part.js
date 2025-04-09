((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_173",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={FB:function FB(){},K_:function K_(d){this.$ti=d},aGv:function aGv(d){this.a=d},aGw:function aGw(d,e){this.a=d
this.b=e},
bi9(d){var x=J.a1(d),w=x.h(d,"title")
w=w==null?null:J.ak(w)
if(w==null)w=""
x=x.h(d,"url")
x=x==null?null:J.ak(x)
return new A.m6(w,x==null?"":x)},
m6:function m6(d,e){this.a=d
this.b=e},
W9:function W9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biv(d,e,f,g){var x,w={}
w.a=d
x=new A.WK(g.i("WK<0>"))
x.ajT(e,f,w,g)
return x},
WK:function WK(d){var _=this
_.b=_.a=$
_.c=null
_.d=!1
_.$ti=d},
asW:function asW(d,e){this.a=d
this.b=e},
asV:function asV(d){this.a=d},
a9q:function a9q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1
_.r=_.f=null
_.w=g},
aTy:function aTy(){},
a34:function a34(d){this.b=this.a=$
this.$ti=d},
a35:function a35(){},
ali(d,e){return A.bsL(d,e)},
bsL(d,e){var x=0,w=B.j(y.E),v,u,t,s,r,q,p
var $async$ali=B.e(function(f,g){if(f===1)return B.f(g,w)
while(true)switch(x){case 0:if(!d.pP("ws")&&!d.pP("wss"))throw B.d(B.eg(d,"url","only ws: and wss: schemes are supported"))
u=self
t=u.WebSocket
s=d.j(0)
u=new u.Array()
r=new t(s,u)
r.binaryType="arraybuffer"
q=new A.uQ(r,B.mt(null,null,null,null,!1,y.D))
u=new B.a4($.aa,y.j)
p=new B.aS(u,y.V)
if(J.m(r.readyState,1))p.cN(0,q)
else if(J.m(r.readyState,2)||J.m(r.readyState,3)){B.n(r.readyState)
p.iY(new A.BS())}else new B.q9(r,"open",!1,y.C).gY(0).aO(new A.alj(p,q),y.H)
t=y.C
s=y.H
new B.q9(r,"error",!1,t).gY(0).aO(new A.alk(p,q),s)
B.Mx(r,"message",new A.all(q),!1,y.m)
new B.q9(r,"close",!1,t).gY(0).aO(new A.alm(p,q),s)
v=u
x=1
break
case 1:return B.h(v,w)}})
return B.i($async$ali,w)},
uQ:function uQ(d,e){this.a=d
this.b=e},
alj:function alj(d,e){this.a=d
this.b=e},
alk:function alk(d,e){this.a=d
this.b=e},
all:function all(d){this.a=d},
alm:function alm(d,e){this.a=d
this.b=e},
bcW(){return new A.BR()},
q0:function q0(){},
Bt:function Bt(d){this.a=d},
yu:function yu(d){this.a=d},
yW:function yW(d,e){this.a=d
this.b=e},
BS:function BS(){},
BR:function BR(){},
bgo(d){var x=null,w=$.aa,v=new A.a34(y.Z),u=y.X,t=B.mt(x,x,x,x,!0,u),s=B.mt(x,x,x,x,!0,u)
v.a=A.biv(new B.dk(s,B.y(s).i("dk<1>")),new B.P8(t),!0,u)
v.b=A.biv(new B.dk(t,B.y(t).i("dk<1>")),new B.P8(s),!1,u)
v=new A.aiQ(new B.aS(new B.a4(w,y.U),y.h),v)
v.ajJ(d)
return v},
aiQ:function aiQ(d,e){var _=this
_.e=_.d=null
_.f=d
_.r=e
_.w=$},
aiU:function aiU(d){this.a=d},
aiR:function aiR(d){this.a=d},
aiS:function aiS(d){this.a=d},
aiT:function aiT(d,e){this.a=d
this.b=e},
aiV:function aiV(d){this.a=d},
b4V:function b4V(d,e){this.b=d
this.a=e},
a4i:function a4i(d){this.a=d},
Sq(d){var x=0,w=B.j(y.J),v,u,t,s,r,q,p,o,n,m
var $async$Sq=B.e(function(e,f){if(e===1)return B.f(f,w)
while(true)switch(x){case 0:q=y.N
p=B.ad(["bookSourceUrl",d],q,q)
n=C.t
m=C.w
x=3
return B.c(F.dP(E.ch("/getBookSourcesExploreUrl"),p),$async$Sq)
case 3:o=n.am(0,m.am(0,f))
q=J.a1(o)
if(q.h(o,"isSuccess")){q=q.h(o,"data")
u=J.a1(q)
t=u.h(q,"found")
t=t==null?null:J.ak(t)
if(t==null)t=""
s=u.h(q,"loginUrl")
s=s==null?null:J.ak(s)
if(s==null)s=""
r=u.h(q,"loginUi")
r=r==null?null:J.ak(r)
if(r==null)r=""
q=u.h(q,"checkKeyWord")
q=q==null?null:J.ak(q)
v=new A.W9(t,q==null?"":q,s,r)
x=1
break}else throw B.d(B.aY(D.cC(q.h(o,"errorMsg"))))
case 1:return B.h(v,w)}})
return B.i($async$Sq,w)},
bkO(d){var x,w=E.bcA()
if(w==null)return null
x=D.Bl()
if(x==null)return null
return C.d.q2(x,"http","ws")+"/api/2"+("/"+d+"?id="+w)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[24],A)
D=c[123]
E=c[113]
F=c[121]
A.FB.prototype={
B(d,e){this.a.B(0,e)},
ae(d){return this.a.ae(0)}}
A.K_.prototype={
rq(d){var x=B.bj("subscription"),w=B.mt(new A.aGv(x),null,null,null,!0,this.$ti.y[1])
x.b=d.fQ(new A.aGw(this,w),w.grv(w),w.gny())
return new B.dk(w,B.y(w).i("dk<1>"))}}
A.m6.prototype={}
A.W9.prototype={}
A.WK.prototype={
ajT(d,e,f,g){var x=this,w=$.aa
x.a!==$&&B.bJ()
x.a=new A.a9q(d,x,new B.aS(new B.a4(w,y.d),y.c),e)
if(f.a.ghE())f.a=new A.K_(g.i("@<0>").bK(g).i("K_<1,2>")).rq(f.a)
w=B.mt(null,new A.asW(f,x),null,null,!0,g)
x.b!==$&&B.bJ()
x.b=w},
a1b(){var x,w
this.d=!0
x=this.c
if(x!=null)x.av(0)
w=this.b
w===$&&B.b()
w.ae(0)}}
A.a9q.prototype={
B(d,e){if(this.e)throw B.d(B.a0("Cannot add event after closing."))
if(this.d)return
this.a.a.B(0,e)},
eo(d,e){if(this.e)throw B.d(B.a0("Cannot add event after closing."))
if(this.d)return
this.ar1(d,e)},
ls(d){return this.eo(d,null)},
ar1(d,e){var x=this
if(x.w){x.a.a.eo(d,e)
return}x.c.hz(d,e)
x.a1c()
x.b.a1b()
x.a.a.ae(0).iW(new A.aTy())},
ae(d){var x=this
if(x.e)return x.c.a
x.e=!0
if(!x.d){x.b.a1b()
x.c.cN(0,x.a.a.ae(0))}return x.c.a},
a1c(){this.d=!0
var x=this.c
if((x.a.a&30)===0)x.dF(0)
return}}
A.a34.prototype={}
A.a35.prototype={}
A.uQ.prototype={
Ym(d,e){var x=this.b
if((x.b&4)!==0)return
x.B(0,new A.yW(d,e))
x.ae(0)},
Vl(d){var x
if((this.b.b&4)!==0)throw B.d(A.bcW())
x=B.bk(d)
x.toString
this.a.send(x)},
rw(d,e,f){return this.aGi(0,e,f)},
aGi(d,e,f){var x=0,w=B.j(y.H),v=this,u
var $async$rw=B.e(function(g,h){if(g===1)return B.f(h,w)
while(true)switch(x){case 0:u=v.b
if((u.b&4)!==0)throw B.d(A.bcW())
u.ae(0)
v.a.close()
return B.h(null,w)}})
return B.i($async$rw,w)},
$ibcV:1}
A.q0.prototype={}
A.Bt.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.Bt&&e.a===this.a},
gA(d){return C.d.gA(this.a)}}
A.yu.prototype={
k(d,e){var x,w,v,u
if(e==null)return!1
if(e instanceof A.yu&&e.a.length===this.a.length){for(x=this.a,w=x.length,v=e.a,u=0;u<w;++u)if(v[u]!==x[u])return!1
return!0}return!1},
gA(d){return B.hv(this.a)},
j(d){return"BinaryDataReceived("+B.n(this.a)+")"}}
A.yW.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.yW&&e.a===this.a&&e.b===this.b},
gA(d){return B.hv([this.a,this.b])},
j(d){return"CloseReceived("+this.a+", "+this.b+")"}}
A.BS.prototype={$ibW:1}
A.BR.prototype={}
A.aiQ.prototype={
ghg(){var x,w=this,v=w.w
if(v===$){x=w.r.b
x===$&&B.b()
x=x.a
x===$&&B.b()
v!==$&&B.aB()
v=w.w=new A.b4V(w,x)}return v},
ajJ(d){d.fT(new A.aiU(this),new A.aiV(this),y.P)}}
A.b4V.prototype={
ae(d){var x=this.b
x.e=x.d=null
return this.aft(0)}}
A.a4i.prototype={
j(d){return"WebSocketChannelException: "+this.a},
$ibW:1}
var z=a.updateTypes(["aG(bcV)","~(q0)"])
A.aGv.prototype={
$0(){return J.bfP(this.a.aF())},
$S:2}
A.aGw.prototype={
$1(d){var x,w,v,u
try{this.b.B(0,this.a.$ti.y[1].a(d))}catch(v){u=B.Q(v)
if(y._.b(u)){x=u
w=B.b_(v)
this.b.eo(x,w)}else throw v}},
$S(){return this.a.$ti.i("~(1)")}}
A.asW.prototype={
$0(){var x,w,v=this.b
if(v.d)return
x=this.a.a
w=v.b
w===$&&B.b()
v.c=x.fQ(w.gjS(w),new A.asV(v),w.gny())},
$S:0}
A.asV.prototype={
$0(){var x=this.a,w=x.a
w===$&&B.b()
w.a1c()
x=x.b
x===$&&B.b()
x.ae(0)},
$S:0}
A.aTy.prototype={
$1(d){},
$S:5}
A.alj.prototype={
$1(d){this.a.cN(0,this.b)},
$S:10}
A.alk.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.iY(new A.BS())
else this.b.Ym(1006,"error")},
$S:10}
A.all.prototype={
$1(d){var x,w,v=this.a.b
if((v.b&4)!==0)return
x=d.data
x.toString
w=B.bj("data")
if(typeof x==="string")w.b=new A.Bt(B.bF(x))
else if(typeof x==="object"&&B.Hc(y.m.a(x),"ArrayBuffer"))w.b=new A.yu(B.ff(y.o.a(x),0,null))
else throw B.d(B.a0("unexpected message type: "+J.a8(x).j(0)))
v.B(0,w.aF())},
$S:37}
A.alm.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.cN(0,this.b)
this.b.Ym(d.code,d.reason)},
$S:10}
A.aiU.prototype={
$1(d){var x=d.b,w=this.a
new B.dk(x,B.y(x).i("dk<1>")).e6(new A.aiR(w))
x=w.r.a
x===$&&B.b()
x=x.b
x===$&&B.b()
new B.dk(x,B.y(x).i("dk<1>")).aMc(new A.aiS(d),new A.aiT(w,d))
w.f.dF(0)},
$S:z+0}
A.aiR.prototype={
$1(d){var x,w,v
$label0$0:{x=d instanceof A.Bt
w=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.B(0,w)
break $label0$0}x=d instanceof A.yu
v=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.B(0,v)
break $label0$0}if(d instanceof A.yW){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.ae(0)}}},
$S:z+1}
A.aiS.prototype={
$1(d){var x,w,v,u,t,s,r
try{$label1$1:{x=d
w=null
t=typeof x=="string"
if(t)w=x
if(t){t=this.a
s=w
if((t.b.b&4)!==0)B.a5(A.bcW())
s=B.bk(s)
s.toString
t.a.send(s)
break $label1$1}v=null
t=y.p.b(x)
if(t)v=x
if(t){this.a.Vl(v)
break $label1$1}u=null
t=y.L.b(x)
if(t)u=x
if(t){this.a.Vl(new Uint8Array(B.kW(u)))
break $label1$1}t=B.aq("Cannot send "+J.a8(d).j(0))
throw B.d(t)}}catch(r){if(!(B.Q(r) instanceof A.BR))throw r}},
$S:11}
A.aiT.prototype={
$0(){var x=0,w=B.j(y.H),v=1,u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
s=t.a
x=6
return B.c(t.b.rw(0,s.d,s.e),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
q=u
if(!(B.Q(q) instanceof A.BR))throw q
x=5
break
case 2:x=1
break
case 5:return B.h(null,w)
case 1:return B.f(u,w)}})
return B.i($async$$0,w)},
$S:2}
A.aiV.prototype={
$1(d){var x,w=d instanceof B.KW?d:new A.a4i(J.ak(d)),v=this.a
v.f.iY(w)
v=v.r.a
v===$&&B.b()
x=v.a
x===$&&B.b()
x.ls(w)
v=v.a
v===$&&B.b()
v.ae(0)},
$S:47};(function aliases(){var x=A.FB.prototype
x.aft=x.ae})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.FB,A.m6,A.W9,A.a35,A.a9q,A.a34,A.uQ,A.q0,A.BS,A.a4i])
w(A.K_,B.nR)
x(B.c9,[A.aGv,A.asW,A.asV,A.aiT])
x(B.bC,[A.aGw,A.aTy,A.alj,A.alk,A.all,A.alm,A.aiU,A.aiR,A.aiS,A.aiV])
x(A.a35,[A.WK,A.aiQ])
x(A.q0,[A.Bt,A.yu,A.yW])
w(A.BR,A.BS)
w(A.b4V,A.FB)})()
B.by(b.typeUniverse,JSON.parse('{"K_":{"nR":["1","2"]},"uQ":{"bcV":[]},"Bt":{"q0":[]},"yu":{"q0":[]},"yW":{"q0":[]},"BS":{"bW":[]},"BR":{"bW":[]},"a4i":{"bW":[]}}'))
B.fk(b.typeUniverse,JSON.parse('{"FB":1,"a9q":1,"a35":1}'))
var y=(function rtii(){var x=B.w
return{E:x("uQ"),J:x("W9"),m:x("aA"),L:x("C<q>"),o:x("pa"),P:x("aG"),Z:x("a34<v?>"),N:x("l"),_:x("nY"),p:x("cH"),D:x("q0"),V:x("aS<uQ>"),c:x("aS<@>"),h:x("aS<~>"),C:x("q9<aA>"),j:x("a4<uQ>"),d:x("a4<@>"),U:x("a4<~>"),X:x("v?"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_173",e:"endPart",h:b})})($__dart_deferred_initializers__,"yKYokVbaqs6O8mwqVSjLJurqt6k=");