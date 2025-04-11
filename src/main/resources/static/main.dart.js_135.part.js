((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_135",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={aoH:function aoH(){this.b=this.a=null},
mT(d,e,f){var x,w,v
if(d==e)return d
if(d==null)return e.ar(0,f)
if(e==null)return d.ar(0,1-f)
if(d instanceof D.fo&&e instanceof D.fo)return A.bsD(d,e,f)
if(d instanceof D.hK&&e instanceof D.hK)return A.bsC(d,e,f)
x=E.af(d.gml(),e.gml(),f)
x.toString
w=E.af(d.gma(d),e.gma(e),f)
w.toString
v=E.af(d.gmm(),e.gmm(),f)
v.toString
return new A.Nn(x,w,v)},
bsD(d,e,f){var x,w
if(d===e)return d
x=E.af(d.a,e.a,f)
x.toString
w=E.af(d.b,e.b,f)
w.toString
return new D.fo(x,w)},
bsC(d,e,f){var x,w
if(d===e)return d
x=E.af(d.a,e.a,f)
x.toString
w=E.af(d.b,e.b,f)
w.toString
return new D.hK(x,w)},
Nn:function Nn(d,e,f){this.a=d
this.b=e
this.c=f},
bnV(d,e,f){var x,w,v,u,t
if(f<=C.b.gY(e))return C.b.gY(d)
if(f>=C.b.gaA(e))return C.b.gaA(d)
x=C.b.aM7(e,new A.b6V(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=D.P(w,u,(f-t)/(e[v]-t))
t.toString
return t},
be6(d,e,f,g,h){var x,w,v=F.a2Q(null,null,y.b)
v.M(0,e)
v.M(0,g)
x=B.a9(v,!1,v.$ti.c)
w=B.ac(x).i("ag<1,r>")
return new A.aPB(B.a9(new B.ag(x,new A.b6n(d,e,f,g,h),w),!1,w.i("aQ.E")),x)},
bjt(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bA(0,f)
if(e==null)return d.bA(0,1-f)
x=A.be6(d.a,d.nq(),e.a,e.nq(),f)
w=A.mT(d.d,e.d,f)
w.toString
v=A.mT(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.dq(w,v,t,x.a,x.b,u)},
aPB:function aPB(d,e){this.a=d
this.b=e},
b6V:function b6V(d){this.a=d},
b6n:function b6n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
GI:function GI(){},
dq:function dq(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
avR:function avR(d){this.a=d}},F,D,E
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[52],A)
F=c[120]
D=c[121]
E=c[125]
A.aoH.prototype={}
A.Nn.prototype={
ar(d,e){return new A.Nn(this.a*e,this.b*e,this.c*e)},
P(d){var x,w=this
switch(d.a){case 0:x=new D.fo(w.a-w.b,w.c)
break
case 1:x=new D.fo(w.a+w.b,w.c)
break
default:x=null}return x},
gml(){return this.a},
gma(d){return this.b},
gmm(){return this.c}}
A.aPB.prototype={}
A.GI.prototype={
nq(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.bc1(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w},
dN(d,e){return null},
dO(d,e){return null},
Pv(d,e){return null}}
A.dq.prototype={
rD(d,e,f){var x=this
return D.vB(x.d.P(f).Db(e),x.e.P(f).Db(e),x.a,x.nq(),x.f,x.Pv(e,f))},
dS(d,e){return this.rD(0,e,null)},
bA(d,e){var x=this,w=x.a,v=B.ac(w).i("ag<1,r>")
return new A.dq(x.d,x.e,x.f,B.a9(new B.ag(w,new A.avR(e),v),!0,v.i("aQ.E")),x.b,null)},
dN(d,e){if(d==null||d instanceof A.dq)return A.bjt(y.m.a(d),this,e)
return this.M_(d,e)},
dO(d,e){if(d==null||d instanceof A.dq)return A.bjt(this,y.m.a(d),e)
return this.M0(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a8(e)!==B.N(x))return!1
return e instanceof A.dq&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.dz(e.a,x.a)&&B.dz(e.b,x.b)},
gA(d){var x=this,w=B.cQ(x.a),v=x.b
v=v==null?null:B.cQ(v)
return B.a6(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.a(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.n(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.n(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bW(w,", ")+")"}}
var z=a.updateTypes([])
A.b6V.prototype={
$1(d){return d<=this.a},
$S:346}
A.b6n.prototype={
$1(d){var x=this,w=D.P(A.bnV(x.a,x.b,d),A.bnV(x.c,x.d,d),x.e)
w.toString
return w},
$S:347}
A.avR.prototype={
$1(d){var x=D.P(null,d,this.a)
x.toString
return x},
$S:51};(function aliases(){var x=A.GI.prototype
x.M_=x.dN
x.M0=x.dO})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.aoH,A.aPB,A.GI])
w(A.Nn,D.ic)
x(B.bC,[A.b6V,A.b6n,A.avR])
w(A.dq,A.GI)})()
B.by(b.typeUniverse,JSON.parse('{"Nn":{"ic":[]}}'))
var y={h:B.w("u<l>"),b:B.w("z"),m:B.w("dq?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_135",e:"endPart",h:b})})($__dart_deferred_initializers__,"WMi+xzg0rbOwuC4A6hNGxx03XjE=");