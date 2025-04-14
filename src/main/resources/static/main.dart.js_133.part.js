((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_133",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={apL:function apL(){this.b=this.a=null},
mY(d,e,f){var x,w,v
if(d==e)return d
if(d==null)return e.aw(0,f)
if(e==null)return d.aw(0,1-f)
if(d instanceof D.ff&&e instanceof D.ff)return A.buk(d,e,f)
if(d instanceof D.hM&&e instanceof D.hM)return A.buj(d,e,f)
x=E.ag(d.gmm(),e.gmm(),f)
x.toString
w=E.ag(d.gma(d),e.gma(e),f)
w.toString
v=E.ag(d.gmn(),e.gmn(),f)
v.toString
return new A.NI(x,w,v)},
buk(d,e,f){var x,w
if(d===e)return d
x=E.ag(d.a,e.a,f)
x.toString
w=E.ag(d.b,e.b,f)
w.toString
return new D.ff(x,w)},
buj(d,e,f){var x,w
if(d===e)return d
x=E.ag(d.a,e.a,f)
x.toString
w=E.ag(d.b,e.b,f)
w.toString
return new D.hM(x,w)},
NI:function NI(d,e,f){this.a=d
this.b=e
this.c=f},
bpA(d,e,f){var x,w,v,u,t
if(f<=C.b.gZ(e))return C.b.gZ(d)
if(f>=C.b.gaC(e))return C.b.gaC(d)
x=C.b.aN9(e,new A.b8D(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=D.S(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bfQ(d,e,f,g,h){var x,w,v=F.a3L(null,null,y.b)
v.L(0,e)
v.L(0,g)
x=B.a9(v,!1,v.$ti.c)
w=B.ac(x).i("ah<1,r>")
return new A.aR2(B.a9(new B.ah(x,new A.b85(d,e,f,g,h),w),!1,w.i("aQ.E")),x)},
bl9(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bE(0,f)
if(e==null)return d.bE(0,1-f)
x=A.bfQ(d.a,d.nu(),e.a,e.nu(),f)
w=A.mY(d.d,e.d,f)
w.toString
v=A.mY(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.di(w,v,t,x.a,x.b,u)},
aR2:function aR2(d,e){this.a=d
this.b=e},
b8D:function b8D(d){this.a=d},
b85:function b85(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
GS:function GS(){},
di:function di(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
awW:function awW(d){this.a=d}},F,D,E
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[49],A)
F=c[114]
D=c[115]
E=c[119]
A.apL.prototype={}
A.NI.prototype={
aw(d,e){return new A.NI(this.a*e,this.b*e,this.c*e)},
S(d){var x,w=this
switch(d.a){case 0:x=new D.ff(w.a-w.b,w.c)
break
case 1:x=new D.ff(w.a+w.b,w.c)
break
default:x=null}return x},
gmm(){return this.a},
gma(d){return this.b},
gmn(){return this.c}}
A.aR2.prototype={}
A.GS.prototype={
nu(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.bdJ(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w},
dR(d,e){return null},
dS(d,e){return null},
PJ(d,e){return null}}
A.di.prototype={
rE(d,e,f){var x=this
return D.vM(x.d.S(f).Dl(e),x.e.S(f).Dl(e),x.a,x.nu(),x.f,x.PJ(e,f))},
dW(d,e){return this.rE(0,e,null)},
bE(d,e){var x=this,w=x.a,v=B.ac(w).i("ah<1,r>")
return new A.di(x.d,x.e,x.f,B.a9(new B.ah(w,new A.awW(e),v),!0,v.i("aQ.E")),x.b,null)},
dR(d,e){if(d==null||d instanceof A.di)return A.bl9(y.m.a(d),this,e)
return this.Mc(d,e)},
dS(d,e){if(d==null||d instanceof A.di)return A.bl9(this,y.m.a(d),e)
return this.Md(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a8(e)!==B.P(x))return!1
return e instanceof A.di&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.dD(e.a,x.a)&&B.dD(e.b,x.b)},
gA(d){var x=this,w=B.cR(x.a),v=x.b
v=v==null?null:B.cR(v)
return B.a7(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.a(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.n(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.n(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.c_(w,", ")+")"}}
var z=a.updateTypes([])
A.b8D.prototype={
$1(d){return d<=this.a},
$S:349}
A.b85.prototype={
$1(d){var x=this,w=D.S(A.bpA(x.a,x.b,d),A.bpA(x.c,x.d,d),x.e)
w.toString
return w},
$S:350}
A.awW.prototype={
$1(d){var x=D.S(null,d,this.a)
x.toString
return x},
$S:47};(function aliases(){var x=A.GS.prototype
x.Mc=x.dR
x.Md=x.dS})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.apL,A.aR2,A.GS])
w(A.NI,D.ie)
x(B.bP,[A.b8D,A.b85,A.awW])
w(A.di,A.GS)})()
B.bH(b.typeUniverse,JSON.parse('{"NI":{"ie":[]}}'))
var y={h:B.w("u<m>"),b:B.w("z"),m:B.w("di?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_133",e:"endPart",h:b})})($__dart_deferred_initializers__,"85Ooddy79lV7r+p7DMxl6P8Xg0o=");