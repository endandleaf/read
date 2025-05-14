((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_8",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B={
bGb(){return $.bAv()},
b9Z:function b9Z(d){this.a=d}}
A=c[0]
B=a.updateHolder(c[101],B)
B.b9Z.prototype={
aur(){var y=self.crypto
if(y!=null)if(y.getRandomValues!=null)return
throw A.k(A.az("No source of cryptographically secure random numbers available."))},
Ac(d){var y,x,w,v,u,t,s,r,q
if(d<=0||d>4294967296)throw A.k(A.hF("max must be in range 0 < max \u2264 2^32, was "+d))
if(d>255)if(d>65535)y=d>16777215?4:3
else y=2
else y=1
x=this.a
x.setUint32(0,0,!1)
w=4-y
v=A.cm(Math.pow(256,y))
for(u=d-1,t=(d&u)>>>0===0;!0;){s=x.buffer
s=new Uint8Array(s,w,y)
crypto.getRandomValues(s)
r=x.getUint32(0,!1)
if(t)return(r&u)>>>0
q=r%d
if(r-q+d<v)return q}}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.b9Z,A.v)})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ccJ","bAv",()=>{var x=new B.b9Z(A.bX9(8))
x.aur()
return x})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_8",e:"endPart",h:b})})($__dart_deferred_initializers__,"a4+yN2JuxqnJZ+nByA6V/7InVTw=");