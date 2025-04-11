((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_140",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={apA:function apA(){this.b=this.a=null},
mV(d,e,f){var x,w,v
if(d==e)return d
if(d==null)return e.av(0,f)
if(e==null)return d.av(0,1-f)
if(d instanceof D.fb&&e instanceof D.fb)return A.btJ(d,e,f)
if(d instanceof D.hL&&e instanceof D.hL)return A.btI(d,e,f)
x=E.af(d.gmm(),e.gmm(),f)
x.toString
w=E.af(d.gmb(d),e.gmb(e),f)
w.toString
v=E.af(d.gmn(),e.gmn(),f)
v.toString
return new A.NH(x,w,v)},
btJ(d,e,f){var x,w
if(d===e)return d
x=E.af(d.a,e.a,f)
x.toString
w=E.af(d.b,e.b,f)
w.toString
return new D.fb(x,w)},
btI(d,e,f){var x,w
if(d===e)return d
x=E.af(d.a,e.a,f)
x.toString
w=E.af(d.b,e.b,f)
w.toString
return new D.hL(x,w)},
NH:function NH(d,e,f){this.a=d
this.b=e
this.c=f},
bp0(d,e,f){var x,w,v,u,t
if(f<=C.b.gZ(e))return C.b.gZ(d)
if(f>=C.b.gaB(e))return C.b.gaB(d)
x=C.b.aMR(e,new A.b7Z(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=D.Q(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bfd(d,e,f,g,h){var x,w,v=F.a3A(null,null,y.b)
v.M(0,e)
v.M(0,g)
x=B.a9(v,!1,v.$ti.c)
w=B.ac(x).i("ag<1,r>")
return new A.aQy(B.a9(new B.ag(x,new A.b7r(d,e,f,g,h),w),!1,w.i("aQ.E")),x)},
bkA(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bE(0,f)
if(e==null)return d.bE(0,1-f)
x=A.bfd(d.a,d.nr(),e.a,e.nr(),f)
w=A.mV(d.d,e.d,f)
w.toString
v=A.mV(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.dr(w,v,t,x.a,x.b,u)},
aQy:function aQy(d,e){this.a=d
this.b=e},
b7Z:function b7Z(d){this.a=d},
b7r:function b7r(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
GR:function GR(){},
dr:function dr(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
awK:function awK(d){this.a=d}},F,D,E
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
F=c[120]
D=c[121]
E=c[125]
A.apA.prototype={}
A.NH.prototype={
av(d,e){return new A.NH(this.a*e,this.b*e,this.c*e)},
R(d){var x,w=this
switch(d.a){case 0:x=new D.fb(w.a-w.b,w.c)
break
case 1:x=new D.fb(w.a+w.b,w.c)
break
default:x=null}return x},
gmm(){return this.a},
gmb(d){return this.b},
gmn(){return this.c}}
A.aQy.prototype={}
A.GR.prototype={
nr(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.bd5(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w},
dP(d,e){return null},
dQ(d,e){return null},
Py(d,e){return null}}
A.dr.prototype={
rD(d,e,f){var x=this
return D.vI(x.d.R(f).Dg(e),x.e.R(f).Dg(e),x.a,x.nr(),x.f,x.Py(e,f))},
dU(d,e){return this.rD(0,e,null)},
bE(d,e){var x=this,w=x.a,v=B.ac(w).i("ag<1,r>")
return new A.dr(x.d,x.e,x.f,B.a9(new B.ag(w,new A.awK(e),v),!0,v.i("aQ.E")),x.b,null)},
dP(d,e){if(d==null||d instanceof A.dr)return A.bkA(y.m.a(d),this,e)
return this.M2(d,e)},
dQ(d,e){if(d==null||d instanceof A.dr)return A.bkA(this,y.m.a(d),e)
return this.M3(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a8(e)!==B.O(x))return!1
return e instanceof A.dr&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.dA(e.a,x.a)&&B.dA(e.b,x.b)},
gA(d){var x=this,w=B.cQ(x.a),v=x.b
v=v==null?null:B.cQ(v)
return B.a7(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.a(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.n(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.n(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.c_(w,", ")+")"}}
var z=a.updateTypes([])
A.b7Z.prototype={
$1(d){return d<=this.a},
$S:346}
A.b7r.prototype={
$1(d){var x=this,w=D.Q(A.bp0(x.a,x.b,d),A.bp0(x.c,x.d,d),x.e)
w.toString
return w},
$S:347}
A.awK.prototype={
$1(d){var x=D.Q(null,d,this.a)
x.toString
return x},
$S:46};(function aliases(){var x=A.GR.prototype
x.M2=x.dP
x.M3=x.dQ})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.apA,A.aQy,A.GR])
w(A.NH,D.ie)
x(B.bC,[A.b7Z,A.b7r,A.awK])
w(A.dr,A.GR)})()
B.bA(b.typeUniverse,JSON.parse('{"NH":{"ie":[]}}'))
var y={h:B.w("u<l>"),b:B.w("z"),m:B.w("dr?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_140",e:"endPart",h:b})})($__dart_deferred_initializers__,"EzAP+poEZ90DY/fGj2NzfqMpQfo=");