((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_203",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={G1:function G1(){},Ku:function Ku(d){this.$ti=d},aIu:function aIu(d){this.a=d},aIv:function aIv(d,e){this.a=d
this.b=e},
bm3(d){var x=J.a_(d),w=x.h(d,"title")
w=w==null?null:J.ah(w)
if(w==null)w=""
x=x.h(d,"url")
x=x==null?null:J.ah(x)
return new A.mm(w,x==null?"":x)},
mm:function mm(d,e){this.a=d
this.b=e},
Xg:function Xg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmq(d,e,f,g){var x,w={}
w.a=d
x=new A.XX(g.i("XX<0>"))
x.al8(e,f,w,g)
return x},
XX:function XX(d){var _=this
_.b=_.a=$
_.c=null
_.d=!1
_.$ti=d},
auC:function auC(d,e){this.a=d
this.b=e},
auB:function auB(d){this.a=d},
aaS:function aaS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1
_.r=_.f=null
_.w=g},
aWh:function aWh(){},
a4u:function a4u(d){this.b=this.a=$
this.$ti=d},
a4v:function a4v(){},
an_(d,e){return A.bwL(d,e)},
bwL(d,e){var x=0,w=B.i(y.E),v,u,t,s,r,q,p
var $async$an_=B.d(function(f,g){if(f===1)return B.e(g,w)
while(true)switch(x){case 0:if(!d.pW("ws")&&!d.pW("wss"))throw B.j(B.en(d,"url","only ws: and wss: schemes are supported"))
u=self
t=u.WebSocket
s=d.j(0)
u=new u.Array()
r=new t(s,u)
r.binaryType="arraybuffer"
q=new A.vg(r,B.kZ(null,null,null,null,!1,y.D))
u=new B.a4($.ac,y.j)
p=new B.aU(u,y.V)
if(J.m(r.readyState,1))p.cP(0,q)
else if(J.m(r.readyState,2)||J.m(r.readyState,3)){B.n(r.readyState)
p.i3(new A.Ch())}else new B.qx(r,"open",!1,y.C).gZ(0).aK(new A.an0(p,q),y.H)
t=y.C
s=y.H
new B.qx(r,"error",!1,t).gZ(0).aK(new A.an1(p,q),s)
B.Ne(r,"message",new A.an2(q),!1,y.m)
new B.qx(r,"close",!1,t).gZ(0).aK(new A.an3(p,q),s)
v=u
x=1
break
case 1:return B.f(v,w)}})
return B.h($async$an_,w)},
vg:function vg(d,e){this.a=d
this.b=e},
an0:function an0(d,e){this.a=d
this.b=e},
an1:function an1(d,e){this.a=d
this.b=e},
an2:function an2(d){this.a=d},
an3:function an3(d,e){this.a=d
this.b=e},
bgO(){return new A.Cg()},
qo:function qo(){},
BT:function BT(d){this.a=d},
yX:function yX(d){this.a=d},
zo:function zo(d,e){this.a=d
this.b=e},
Ch:function Ch(){},
Cg:function Cg(){},
bkj(d){var x=null,w=$.ac,v=new A.a4u(y.Z),u=y.X,t=B.kZ(x,x,x,x,!0,u),s=B.kZ(x,x,x,x,!0,u)
v.a=A.bmq(new B.cZ(s,B.x(s).i("cZ<1>")),new B.Q0(t),!0,u)
v.b=A.bmq(new B.cZ(t,B.x(t).i("cZ<1>")),new B.Q0(s),!1,u)
v=new A.aku(new B.aU(new B.a4(w,y.U),y.h),v)
v.akZ(d)
return v},
aku:function aku(d,e){var _=this
_.e=_.d=null
_.f=d
_.r=e
_.w=$},
aky:function aky(d){this.a=d},
akv:function akv(d){this.a=d},
akw:function akw(d){this.a=d},
akx:function akx(d,e){this.a=d
this.b=e},
akz:function akz(d){this.a=d},
b8G:function b8G(d,e){this.b=d
this.a=e},
a5H:function a5H(d){this.a=d},
Tp(d){var x=0,w=B.i(y.J),v,u,t,s,r,q,p,o,n,m
var $async$Tp=B.d(function(e,f){if(e===1)return B.e(f,w)
while(true)switch(x){case 0:q=y.N
p=B.a9(["bookSourceUrl",d],q,q)
n=C.r
m=C.u
x=3
return B.c(G.d_(D.c3("/getBookSourcesExploreUrl"),p),$async$Tp)
case 3:o=n.a4(0,m.a4(0,f))
q=J.a_(o)
if(q.h(o,"isSuccess")){q=q.h(o,"data")
u=J.a_(q)
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
v=new A.Xg(t,q==null?"":q,s,r)
x=1
break}else throw B.j(B.aQ(E.cb(q.h(o,"errorMsg"))))
case 1:return B.f(v,w)}})
return B.h($async$Tp,w)},
boL(d){var x,w=D.bgt()
if(w==null)return null
x=F.od()
if(x==null)return null
return C.d.qa(x,"http","ws")+"/api/4"+("/"+d+"?id="+w)}},E,F,D,G
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[24],A)
E=c[129]
F=c[132]
D=c[123]
G=c[130]
A.G1.prototype={
C(d,e){this.a.C(0,e)},
ab(d){return this.a.ab(0)}}
A.Ku.prototype={
rz(d){var x=B.bk("subscription"),w=B.kZ(new A.aIu(x),null,null,null,!0,this.$ti.y[1])
x.b=d.fX(new A.aIv(this,w),w.gpp(w),w.gnF())
return new B.cZ(w,B.x(w).i("cZ<1>"))}}
A.mm.prototype={}
A.Xg.prototype={}
A.XX.prototype={
al8(d,e,f,g){var x=this,w=$.ac
x.a!==$&&B.bH()
x.a=new A.aaS(d,x,new B.aU(new B.a4(w,y.d),y.c),e)
if(f.a.ghJ())f.a=new A.Ku(g.i("@<0>").bN(g).i("Ku<1,2>")).rz(f.a)
w=B.kZ(null,new A.auC(f,x),null,null,!0,g)
x.b!==$&&B.bH()
x.b=w},
a27(){var x,w
this.d=!0
x=this.c
if(x!=null)x.aB(0)
w=this.b
w===$&&B.b()
w.ab(0)}}
A.aaS.prototype={
C(d,e){if(this.e)throw B.j(B.a2("Cannot add event after closing."))
if(this.d)return
this.a.a.C(0,e)},
eu(d,e){if(this.e)throw B.j(B.a2("Cannot add event after closing."))
if(this.d)return
this.asy(d,e)},
lx(d){return this.eu(d,null)},
asy(d,e){var x=this
if(x.w){x.a.a.eu(d,e)
return}x.c.hE(d,e)
x.a28()
x.b.a27()
x.a.a.ab(0).j_(new A.aWh())},
ab(d){var x=this
if(x.e)return x.c.a
x.e=!0
if(!x.d){x.b.a27()
x.c.cP(0,x.a.a.ab(0))}return x.c.a},
a28(){this.d=!0
var x=this.c
if((x.a.a&30)===0)x.dL(0)
return}}
A.a4u.prototype={}
A.a4v.prototype={}
A.vg.prototype={
Zh(d,e){var x=this.b
if((x.b&4)!==0)return
x.C(0,new A.zo(d,e))
x.ab(0)},
Wc(d){var x
if((this.b.b&4)!==0)throw B.j(A.bgO())
x=B.bo(d)
x.toString
this.a.send(x)},
rE(d,e,f){return this.aI1(0,e,f)},
aI1(d,e,f){var x=0,w=B.i(y.H),v=this,u
var $async$rE=B.d(function(g,h){if(g===1)return B.e(h,w)
while(true)switch(x){case 0:u=v.b
if((u.b&4)!==0)throw B.j(A.bgO())
u.ab(0)
v.a.close()
return B.f(null,w)}})
return B.h($async$rE,w)},
$ibgN:1}
A.qo.prototype={}
A.BT.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.BT&&e.a===this.a},
gA(d){return C.d.gA(this.a)}}
A.yX.prototype={
k(d,e){var x,w,v,u
if(e==null)return!1
if(e instanceof A.yX&&e.a.length===this.a.length){for(x=this.a,w=x.length,v=e.a,u=0;u<w;++u)if(v[u]!==x[u])return!1
return!0}return!1},
gA(d){return B.h3(this.a)},
j(d){return"BinaryDataReceived("+B.n(this.a)+")"}}
A.zo.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.zo&&e.a===this.a&&e.b===this.b},
gA(d){return B.h3([this.a,this.b])},
j(d){return"CloseReceived("+this.a+", "+this.b+")"}}
A.Ch.prototype={$ibV:1}
A.Cg.prototype={}
A.aku.prototype={
ghm(){var x,w=this,v=w.w
if(v===$){x=w.r.b
x===$&&B.b()
x=x.a
x===$&&B.b()
v!==$&&B.aH()
v=w.w=new A.b8G(w,x)}return v},
akZ(d){d.h_(new A.aky(this),new A.akz(this),y.P)}}
A.b8G.prototype={
ab(d){var x=this.b
x.e=x.d=null
return this.agI(0)}}
A.a5H.prototype={
j(d){return"WebSocketChannelException: "+this.a},
$ibV:1}
var z=a.updateTypes(["aK(bgN)","~(qo)"])
A.aIu.prototype={
$0(){return J.bjK(this.a.aG())},
$S:1}
A.aIv.prototype={
$1(d){var x,w,v,u
try{this.b.C(0,this.a.$ti.y[1].a(d))}catch(v){u=B.O(v)
if(y._.b(u)){x=u
w=B.b4(v)
this.b.eu(x,w)}else throw v}},
$S(){return this.a.$ti.i("~(1)")}}
A.auC.prototype={
$0(){var x,w,v=this.b
if(v.d)return
x=this.a.a
w=v.b
w===$&&B.b()
v.c=x.fX(w.gjV(w),new A.auB(v),w.gnF())},
$S:0}
A.auB.prototype={
$0(){var x=this.a,w=x.a
w===$&&B.b()
w.a28()
x=x.b
x===$&&B.b()
x.ab(0)},
$S:0}
A.aWh.prototype={
$1(d){},
$S:6}
A.an0.prototype={
$1(d){this.a.cP(0,this.b)},
$S:11}
A.an1.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.i3(new A.Ch())
else this.b.Zh(1006,"error")},
$S:11}
A.an2.prototype={
$1(d){var x,w,v=this.a.b
if((v.b&4)!==0)return
x=d.data
x.toString
w=B.bk("data")
if(typeof x==="string")w.b=new A.BT(B.bG(x))
else if(typeof x==="object"&&B.HD(y.m.a(x),"ArrayBuffer"))w.b=new A.yX(B.f1(y.o.a(x),0,null))
else throw B.j(B.a2("unexpected message type: "+J.ab(x).j(0)))
v.C(0,w.aG())},
$S:37}
A.an3.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.cP(0,this.b)
this.b.Zh(d.code,d.reason)},
$S:11}
A.aky.prototype={
$1(d){var x=d.b,w=this.a
new B.cZ(x,B.x(x).i("cZ<1>")).ec(new A.akv(w))
x=w.r.a
x===$&&B.b()
x=x.b
x===$&&B.b()
new B.cZ(x,B.x(x).i("cZ<1>")).aNW(new A.akw(d),new A.akx(w,d))
w.f.dL(0)},
$S:z+0}
A.akv.prototype={
$1(d){var x,w,v
$label0$0:{x=d instanceof A.BT
w=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.C(0,w)
break $label0$0}x=d instanceof A.yX
v=x?d.a:null
if(x){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.C(0,v)
break $label0$0}if(d instanceof A.zo){x=this.a.r.a
x===$&&B.b()
x=x.a
x===$&&B.b()
x.ab(0)}}},
$S:z+1}
A.akw.prototype={
$1(d){var x,w,v,u,t,s,r
try{$label1$1:{x=d
w=null
t=typeof x=="string"
if(t)w=x
if(t){t=this.a
s=w
if((t.b.b&4)!==0)B.a5(A.bgO())
s=B.bo(s)
s.toString
t.a.send(s)
break $label1$1}v=null
t=y.p.b(x)
if(t)v=x
if(t){this.a.Wc(v)
break $label1$1}u=null
t=y.L.b(x)
if(t)u=x
if(t){this.a.Wc(new Uint8Array(B.l5(u)))
break $label1$1}t=B.ar("Cannot send "+J.ab(d).j(0))
throw B.j(t)}}catch(r){if(!(B.O(r) instanceof A.Cg))throw r}},
$S:12}
A.akx.prototype={
$0(){var x=0,w=B.i(y.H),v=1,u,t=this,s,r,q
var $async$$0=B.d(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
s=t.a
x=6
return B.c(t.b.rE(0,s.d,s.e),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
q=u
if(!(B.O(q) instanceof A.Cg))throw q
x=5
break
case 2:x=1
break
case 5:return B.f(null,w)
case 1:return B.e(u,w)}})
return B.h($async$$0,w)},
$S:1}
A.akz.prototype={
$1(d){var x,w=d instanceof B.Ly?d:new A.a5H(J.ah(d)),v=this.a
v.f.i3(w)
v=v.r.a
v===$&&B.b()
x=v.a
x===$&&B.b()
x.lx(w)
v=v.a
v===$&&B.b()
v.ab(0)},
$S:50};(function aliases(){var x=A.G1.prototype
x.agI=x.ab})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.G1,A.mm,A.Xg,A.a4v,A.aaS,A.a4u,A.vg,A.qo,A.Ch,A.a5H])
w(A.Ku,B.oe)
x(B.ci,[A.aIu,A.auC,A.auB,A.akx])
x(B.bB,[A.aIv,A.aWh,A.an0,A.an1,A.an2,A.an3,A.aky,A.akv,A.akw,A.akz])
x(A.a4v,[A.XX,A.aku])
x(A.qo,[A.BT,A.yX,A.zo])
w(A.Cg,A.Ch)
w(A.b8G,A.G1)})()
B.bv(b.typeUniverse,JSON.parse('{"Ku":{"oe":["1","2"]},"vg":{"bgN":[]},"BT":{"qo":[]},"yX":{"qo":[]},"zo":{"qo":[]},"Ch":{"bV":[]},"Cg":{"bV":[]},"a5H":{"bV":[]}}'))
B.fy(b.typeUniverse,JSON.parse('{"G1":1,"aaS":1,"a4v":1}'))
var y=(function rtii(){var x=B.w
return{E:x("vg"),J:x("Xg"),m:x("aB"),L:x("B<q>"),o:x("nQ"),P:x("aK"),Z:x("a4u<v?>"),N:x("l"),_:x("ok"),p:x("cK"),D:x("qo"),V:x("aU<vg>"),c:x("aU<@>"),h:x("aU<~>"),C:x("qx<aB>"),j:x("a4<vg>"),d:x("a4<@>"),U:x("a4<~>"),X:x("v?"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_203",e:"endPart",h:b})})($__dart_deferred_initializers__,"R19RwuFTPt+eyCZRCWPnQOqaSrc=");