/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.112.1
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as z}from"./chunk-7IJPHC6F.js";import{a as u}from"./chunk-5LFSMKBW.js";import{a as r,b as c}from"./chunk-SCK4WQG5.js";import{e as h}from"./chunk-QCJNT7ZH.js";function f(n,o,e){this.x=u(n,0),this.y=u(o,0),this.z=u(e,0)}f.fromSpherical=function(n,o){c.typeOf.object("spherical",n),h(o)||(o=new f);let e=n.clock,t=n.cone,i=u(n.magnitude,1),y=i*Math.sin(t);return o.x=y*Math.cos(e),o.y=y*Math.sin(e),o.z=i*Math.cos(t),o};f.fromElements=function(n,o,e,t){return h(t)?(t.x=n,t.y=o,t.z=e,t):new f(n,o,e)};f.clone=function(n,o){if(h(n))return h(o)?(o.x=n.x,o.y=n.y,o.z=n.z,o):new f(n.x,n.y,n.z)};f.fromCartesian4=f.clone;f.packedLength=3;f.pack=function(n,o,e){return c.typeOf.object("value",n),c.defined("array",o),e=u(e,0),o[e++]=n.x,o[e++]=n.y,o[e]=n.z,o};f.unpack=function(n,o,e){return c.defined("array",n),o=u(o,0),h(e)||(e=new f),e.x=n[o++],e.y=n[o++],e.z=n[o],e};f.packArray=function(n,o){c.defined("array",n);let e=n.length,t=e*3;if(!h(o))o=new Array(t);else{if(!Array.isArray(o)&&o.length!==t)throw new r("If result is a typed array, it must have exactly array.length * 3 elements");o.length!==t&&(o.length=t)}for(let i=0;i<e;++i)f.pack(n[i],o,i*3);return o};f.unpackArray=function(n,o){if(c.defined("array",n),c.typeOf.number.greaterThanOrEquals("array.length",n.length,3),n.length%3!==0)throw new r("array length must be a multiple of 3.");let e=n.length;h(o)?o.length=e/3:o=new Array(e/3);for(let t=0;t<e;t+=3){let i=t/3;o[i]=f.unpack(n,t,o[i])}return o};f.fromArray=f.unpack;f.maximumComponent=function(n){return c.typeOf.object("cartesian",n),Math.max(n.x,n.y,n.z)};f.minimumComponent=function(n){return c.typeOf.object("cartesian",n),Math.min(n.x,n.y,n.z)};f.minimumByComponent=function(n,o,e){return c.typeOf.object("first",n),c.typeOf.object("second",o),c.typeOf.object("result",e),e.x=Math.min(n.x,o.x),e.y=Math.min(n.y,o.y),e.z=Math.min(n.z,o.z),e};f.maximumByComponent=function(n,o,e){return c.typeOf.object("first",n),c.typeOf.object("second",o),c.typeOf.object("result",e),e.x=Math.max(n.x,o.x),e.y=Math.max(n.y,o.y),e.z=Math.max(n.z,o.z),e};f.clamp=function(n,o,e,t){c.typeOf.object("value",n),c.typeOf.object("min",o),c.typeOf.object("max",e),c.typeOf.object("result",t);let i=z.clamp(n.x,o.x,e.x),y=z.clamp(n.y,o.y,e.y),d=z.clamp(n.z,o.z,e.z);return t.x=i,t.y=y,t.z=d,t};f.magnitudeSquared=function(n){return c.typeOf.object("cartesian",n),n.x*n.x+n.y*n.y+n.z*n.z};f.magnitude=function(n){return Math.sqrt(f.magnitudeSquared(n))};var P=new f;f.distance=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),f.subtract(n,o,P),f.magnitude(P)};f.distanceSquared=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),f.subtract(n,o,P),f.magnitudeSquared(P)};f.normalize=function(n,o){c.typeOf.object("cartesian",n),c.typeOf.object("result",o);let e=f.magnitude(n);if(o.x=n.x/e,o.y=n.y/e,o.z=n.z/e,isNaN(o.x)||isNaN(o.y)||isNaN(o.z))throw new r("normalized result is not a number");return o};f.dot=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),n.x*o.x+n.y*o.y+n.z*o.z};f.multiplyComponents=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x*o.x,e.y=n.y*o.y,e.z=n.z*o.z,e};f.divideComponents=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x/o.x,e.y=n.y/o.y,e.z=n.z/o.z,e};f.add=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x+o.x,e.y=n.y+o.y,e.z=n.z+o.z,e};f.subtract=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x-o.x,e.y=n.y-o.y,e.z=n.z-o.z,e};f.multiplyByScalar=function(n,o,e){return c.typeOf.object("cartesian",n),c.typeOf.number("scalar",o),c.typeOf.object("result",e),e.x=n.x*o,e.y=n.y*o,e.z=n.z*o,e};f.divideByScalar=function(n,o,e){return c.typeOf.object("cartesian",n),c.typeOf.number("scalar",o),c.typeOf.object("result",e),e.x=n.x/o,e.y=n.y/o,e.z=n.z/o,e};f.negate=function(n,o){return c.typeOf.object("cartesian",n),c.typeOf.object("result",o),o.x=-n.x,o.y=-n.y,o.z=-n.z,o};f.abs=function(n,o){return c.typeOf.object("cartesian",n),c.typeOf.object("result",o),o.x=Math.abs(n.x),o.y=Math.abs(n.y),o.z=Math.abs(n.z),o};var nn=new f;f.lerp=function(n,o,e,t){return c.typeOf.object("start",n),c.typeOf.object("end",o),c.typeOf.number("t",e),c.typeOf.object("result",t),f.multiplyByScalar(o,e,nn),t=f.multiplyByScalar(n,1-e,t),f.add(nn,t,t)};var D=new f,G=new f;f.angleBetween=function(n,o){c.typeOf.object("left",n),c.typeOf.object("right",o),f.normalize(n,D),f.normalize(o,G);let e=f.dot(D,G),t=f.magnitude(f.cross(D,G,D));return Math.atan2(t,e)};var yn=new f;f.mostOrthogonalAxis=function(n,o){c.typeOf.object("cartesian",n),c.typeOf.object("result",o);let e=f.normalize(n,yn);return f.abs(e,e),e.x<=e.y?e.x<=e.z?o=f.clone(f.UNIT_X,o):o=f.clone(f.UNIT_Z,o):e.y<=e.z?o=f.clone(f.UNIT_Y,o):o=f.clone(f.UNIT_Z,o),o};f.projectVector=function(n,o,e){c.defined("a",n),c.defined("b",o),c.defined("result",e);let t=f.dot(n,o)/f.dot(o,o);return f.multiplyByScalar(o,t,e)};f.equals=function(n,o){return n===o||h(n)&&h(o)&&n.x===o.x&&n.y===o.y&&n.z===o.z};f.equalsArray=function(n,o,e){return n.x===o[e]&&n.y===o[e+1]&&n.z===o[e+2]};f.equalsEpsilon=function(n,o,e,t){return n===o||h(n)&&h(o)&&z.equalsEpsilon(n.x,o.x,e,t)&&z.equalsEpsilon(n.y,o.y,e,t)&&z.equalsEpsilon(n.z,o.z,e,t)};f.cross=function(n,o,e){c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e);let t=n.x,i=n.y,y=n.z,d=o.x,a=o.y,m=o.z,b=i*m-y*a,j=y*d-t*m,S=t*a-i*d;return e.x=b,e.y=j,e.z=S,e};f.midpoint=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=(n.x+o.x)*.5,e.y=(n.y+o.y)*.5,e.z=(n.z+o.z)*.5,e};f.fromDegrees=function(n,o,e,t,i){return c.typeOf.number("longitude",n),c.typeOf.number("latitude",o),n=z.toRadians(n),o=z.toRadians(o),f.fromRadians(n,o,e,t,i)};var g=new f,Z=new f,dn=new f(6378137*6378137,6378137*6378137,6356752314245179e-9*6356752314245179e-9);f.fromRadians=function(n,o,e,t,i){c.typeOf.number("longitude",n),c.typeOf.number("latitude",o),e=u(e,0);let y=h(t)?t.radiiSquared:dn,d=Math.cos(o);g.x=d*Math.cos(n),g.y=d*Math.sin(n),g.z=Math.sin(o),g=f.normalize(g,g),f.multiplyComponents(y,g,Z);let a=Math.sqrt(f.dot(g,Z));return Z=f.divideByScalar(Z,a,Z),g=f.multiplyByScalar(g,e,g),h(i)||(i=new f),f.add(Z,g,i)};f.fromDegreesArray=function(n,o,e){if(c.defined("coordinates",n),n.length<2||n.length%2!==0)throw new r("the number of coordinates must be a multiple of 2 and at least 2");let t=n.length;h(e)?e.length=t/2:e=new Array(t/2);for(let i=0;i<t;i+=2){let y=n[i],d=n[i+1],a=i/2;e[a]=f.fromDegrees(y,d,0,o,e[a])}return e};f.fromRadiansArray=function(n,o,e){if(c.defined("coordinates",n),n.length<2||n.length%2!==0)throw new r("the number of coordinates must be a multiple of 2 and at least 2");let t=n.length;h(e)?e.length=t/2:e=new Array(t/2);for(let i=0;i<t;i+=2){let y=n[i],d=n[i+1],a=i/2;e[a]=f.fromRadians(y,d,0,o,e[a])}return e};f.fromDegreesArrayHeights=function(n,o,e){if(c.defined("coordinates",n),n.length<3||n.length%3!==0)throw new r("the number of coordinates must be a multiple of 3 and at least 3");let t=n.length;h(e)?e.length=t/3:e=new Array(t/3);for(let i=0;i<t;i+=3){let y=n[i],d=n[i+1],a=n[i+2],m=i/3;e[m]=f.fromDegrees(y,d,a,o,e[m])}return e};f.fromRadiansArrayHeights=function(n,o,e){if(c.defined("coordinates",n),n.length<3||n.length%3!==0)throw new r("the number of coordinates must be a multiple of 3 and at least 3");let t=n.length;h(e)?e.length=t/3:e=new Array(t/3);for(let i=0;i<t;i+=3){let y=n[i],d=n[i+1],a=n[i+2],m=i/3;e[m]=f.fromRadians(y,d,a,o,e[m])}return e};f.ZERO=Object.freeze(new f(0,0,0));f.ONE=Object.freeze(new f(1,1,1));f.UNIT_X=Object.freeze(new f(1,0,0));f.UNIT_Y=Object.freeze(new f(0,1,0));f.UNIT_Z=Object.freeze(new f(0,0,1));f.prototype.clone=function(n){return f.clone(this,n)};f.prototype.equals=function(n){return f.equals(this,n)};f.prototype.equalsEpsilon=function(n,o,e){return f.equalsEpsilon(this,n,o,e)};f.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z})`};var O=f;var an=new O,On=new O;function hn(n,o,e,t,i){if(!h(n))throw new r("cartesian is required.");if(!h(o))throw new r("oneOverRadii is required.");if(!h(e))throw new r("oneOverRadiiSquared is required.");if(!h(t))throw new r("centerToleranceSquared is required.");let y=n.x,d=n.y,a=n.z,m=o.x,b=o.y,j=o.z,S=y*y*m*m,M=d*d*b*b,q=a*a*j*j,_=S+M+q,T=Math.sqrt(1/_),E=O.multiplyByScalar(n,T,an);if(_<t)return isFinite(T)?O.clone(E,i):void 0;let s=e.x,N=e.y,A=e.z,C=On;C.x=E.x*s*2,C.y=E.y*N*2,C.z=E.z*A*2;let B=(1-T)*O.magnitude(n)/(.5*O.magnitude(C)),K=0,$,Q,L,k,U,W,I,F,J,x,l;do{B-=K,L=1/(1+B*s),k=1/(1+B*N),U=1/(1+B*A),W=L*L,I=k*k,F=U*U,J=W*L,x=I*k,l=F*U,$=S*W+M*I+q*F-1,Q=S*J*s+M*x*N+q*l*A;let pn=-2*Q;K=$/pn}while(Math.abs($)>z.EPSILON12);return h(i)?(i.x=y*L,i.y=d*k,i.z=a*U,i):new O(y*L,d*k,a*U)}var X=hn;function R(n,o,e){this.longitude=u(n,0),this.latitude=u(o,0),this.height=u(e,0)}R.fromRadians=function(n,o,e,t){return c.typeOf.number("longitude",n),c.typeOf.number("latitude",o),e=u(e,0),h(t)?(t.longitude=n,t.latitude=o,t.height=e,t):new R(n,o,e)};R.fromDegrees=function(n,o,e,t){return c.typeOf.number("longitude",n),c.typeOf.number("latitude",o),n=z.toRadians(n),o=z.toRadians(o),R.fromRadians(n,o,e,t)};var mn=new O,bn=new O,un=new O,wn=new O(1/6378137,1/6378137,1/6356752314245179e-9),jn=new O(1/(6378137*6378137),1/(6378137*6378137),1/(6356752314245179e-9*6356752314245179e-9)),zn=z.EPSILON1;R.fromCartesian=function(n,o,e){let t=h(o)?o.oneOverRadii:wn,i=h(o)?o.oneOverRadiiSquared:jn,y=h(o)?o._centerToleranceSquared:zn,d=X(n,t,i,y,bn);if(!h(d))return;let a=O.multiplyComponents(d,i,mn);a=O.normalize(a,a);let m=O.subtract(n,d,un),b=Math.atan2(a.y,a.x),j=Math.asin(a.z),S=z.sign(O.dot(m,n))*O.magnitude(m);return h(e)?(e.longitude=b,e.latitude=j,e.height=S,e):new R(b,j,S)};R.toCartesian=function(n,o,e){return c.defined("cartographic",n),O.fromRadians(n.longitude,n.latitude,n.height,o,e)};R.clone=function(n,o){if(h(n))return h(o)?(o.longitude=n.longitude,o.latitude=n.latitude,o.height=n.height,o):new R(n.longitude,n.latitude,n.height)};R.equals=function(n,o){return n===o||h(n)&&h(o)&&n.longitude===o.longitude&&n.latitude===o.latitude&&n.height===o.height};R.equalsEpsilon=function(n,o,e){return e=u(e,0),n===o||h(n)&&h(o)&&Math.abs(n.longitude-o.longitude)<=e&&Math.abs(n.latitude-o.latitude)<=e&&Math.abs(n.height-o.height)<=e};R.ZERO=Object.freeze(new R(0,0,0));R.prototype.clone=function(n){return R.clone(this,n)};R.prototype.equals=function(n){return R.equals(this,n)};R.prototype.equalsEpsilon=function(n,o){return R.equalsEpsilon(this,n,o)};R.prototype.toString=function(){return`(${this.longitude}, ${this.latitude}, ${this.height})`};var on=R;function tn(n,o,e,t){o=u(o,0),e=u(e,0),t=u(t,0),c.typeOf.number.greaterThanOrEquals("x",o,0),c.typeOf.number.greaterThanOrEquals("y",e,0),c.typeOf.number.greaterThanOrEquals("z",t,0),n._radii=new O(o,e,t),n._radiiSquared=new O(o*o,e*e,t*t),n._radiiToTheFourth=new O(o*o*o*o,e*e*e*e,t*t*t*t),n._oneOverRadii=new O(o===0?0:1/o,e===0?0:1/e,t===0?0:1/t),n._oneOverRadiiSquared=new O(o===0?0:1/(o*o),e===0?0:1/(e*e),t===0?0:1/(t*t)),n._minimumRadius=Math.min(o,e,t),n._maximumRadius=Math.max(o,e,t),n._centerToleranceSquared=z.EPSILON1,n._radiiSquared.z!==0&&(n._squaredXOverSquaredZ=n._radiiSquared.x/n._radiiSquared.z)}function w(n,o,e){this._radii=void 0,this._radiiSquared=void 0,this._radiiToTheFourth=void 0,this._oneOverRadii=void 0,this._oneOverRadiiSquared=void 0,this._minimumRadius=void 0,this._maximumRadius=void 0,this._centerToleranceSquared=void 0,this._squaredXOverSquaredZ=void 0,tn(this,n,o,e)}Object.defineProperties(w.prototype,{radii:{get:function(){return this._radii}},radiiSquared:{get:function(){return this._radiiSquared}},radiiToTheFourth:{get:function(){return this._radiiToTheFourth}},oneOverRadii:{get:function(){return this._oneOverRadii}},oneOverRadiiSquared:{get:function(){return this._oneOverRadiiSquared}},minimumRadius:{get:function(){return this._minimumRadius}},maximumRadius:{get:function(){return this._maximumRadius}}});w.clone=function(n,o){if(!h(n))return;let e=n._radii;return h(o)?(O.clone(e,o._radii),O.clone(n._radiiSquared,o._radiiSquared),O.clone(n._radiiToTheFourth,o._radiiToTheFourth),O.clone(n._oneOverRadii,o._oneOverRadii),O.clone(n._oneOverRadiiSquared,o._oneOverRadiiSquared),o._minimumRadius=n._minimumRadius,o._maximumRadius=n._maximumRadius,o._centerToleranceSquared=n._centerToleranceSquared,o):new w(e.x,e.y,e.z)};w.fromCartesian3=function(n,o){return h(o)||(o=new w),h(n)&&tn(o,n.x,n.y,n.z),o};w.WGS84=Object.freeze(new w(6378137,6378137,6356752314245179e-9));w.UNIT_SPHERE=Object.freeze(new w(1,1,1));w.MOON=Object.freeze(new w(z.LUNAR_RADIUS,z.LUNAR_RADIUS,z.LUNAR_RADIUS));w.prototype.clone=function(n){return w.clone(this,n)};w.packedLength=O.packedLength;w.pack=function(n,o,e){return c.typeOf.object("value",n),c.defined("array",o),e=u(e,0),O.pack(n._radii,o,e),o};w.unpack=function(n,o,e){c.defined("array",n),o=u(o,0);let t=O.unpack(n,o);return w.fromCartesian3(t,e)};w.prototype.geocentricSurfaceNormal=O.normalize;w.prototype.geodeticSurfaceNormalCartographic=function(n,o){c.typeOf.object("cartographic",n);let e=n.longitude,t=n.latitude,i=Math.cos(t),y=i*Math.cos(e),d=i*Math.sin(e),a=Math.sin(t);return h(o)||(o=new O),o.x=y,o.y=d,o.z=a,O.normalize(o,o)};w.prototype.geodeticSurfaceNormal=function(n,o){if(!O.equalsEpsilon(n,O.ZERO,z.EPSILON14))return h(o)||(o=new O),o=O.multiplyComponents(n,this._oneOverRadiiSquared,o),O.normalize(o,o)};var Sn=new O,Mn=new O;w.prototype.cartographicToCartesian=function(n,o){let e=Sn,t=Mn;this.geodeticSurfaceNormalCartographic(n,e),O.multiplyComponents(this._radiiSquared,e,t);let i=Math.sqrt(O.dot(e,t));return O.divideByScalar(t,i,t),O.multiplyByScalar(e,n.height,e),h(o)||(o=new O),O.add(t,e,o)};w.prototype.cartographicArrayToCartesianArray=function(n,o){c.defined("cartographics",n);let e=n.length;h(o)?o.length=e:o=new Array(e);for(let t=0;t<e;t++)o[t]=this.cartographicToCartesian(n[t],o[t]);return o};var Rn=new O,rn=new O,qn=new O;w.prototype.cartesianToCartographic=function(n,o){let e=this.scaleToGeodeticSurface(n,rn);if(!h(e))return;let t=this.geodeticSurfaceNormal(e,Rn),i=O.subtract(n,e,qn),y=Math.atan2(t.y,t.x),d=Math.asin(t.z),a=z.sign(O.dot(i,n))*O.magnitude(i);return h(o)?(o.longitude=y,o.latitude=d,o.height=a,o):new on(y,d,a)};w.prototype.cartesianArrayToCartographicArray=function(n,o){c.defined("cartesians",n);let e=n.length;h(o)?o.length=e:o=new Array(e);for(let t=0;t<e;++t)o[t]=this.cartesianToCartographic(n[t],o[t]);return o};w.prototype.scaleToGeodeticSurface=function(n,o){return X(n,this._oneOverRadii,this._oneOverRadiiSquared,this._centerToleranceSquared,o)};w.prototype.scaleToGeocentricSurface=function(n,o){c.typeOf.object("cartesian",n),h(o)||(o=new O);let e=n.x,t=n.y,i=n.z,y=this._oneOverRadiiSquared,d=1/Math.sqrt(e*e*y.x+t*t*y.y+i*i*y.z);return O.multiplyByScalar(n,d,o)};w.prototype.transformPositionToScaledSpace=function(n,o){return h(o)||(o=new O),O.multiplyComponents(n,this._oneOverRadii,o)};w.prototype.transformPositionFromScaledSpace=function(n,o){return h(o)||(o=new O),O.multiplyComponents(n,this._radii,o)};w.prototype.equals=function(n){return this===n||h(n)&&O.equals(this._radii,n._radii)};w.prototype.toString=function(){return this._radii.toString()};w.prototype.getSurfaceNormalIntersectionWithZAxis=function(n,o,e){if(c.typeOf.object("position",n),!z.equalsEpsilon(this._radii.x,this._radii.y,z.EPSILON15))throw new r("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");c.typeOf.number.greaterThan("Ellipsoid.radii.z",this._radii.z,0),o=u(o,0);let t=this._squaredXOverSquaredZ;if(h(e)||(e=new O),e.x=0,e.y=0,e.z=n.z*(1-t),!(Math.abs(e.z)>=this._radii.z-o))return e};var Tn=[.14887433898163,.43339539412925,.67940956829902,.86506336668898,.97390652851717,0],gn=[.29552422471475,.26926671930999,.21908636251598,.14945134915058,.066671344308684,0];function en(n,o,e){c.typeOf.number("a",n),c.typeOf.number("b",o),c.typeOf.func("func",e);let t=.5*(o+n),i=.5*(o-n),y=0;for(let d=0;d<5;d++){let a=i*Tn[d];y+=gn[d]*(e(t+a)+e(t-a))}return y*=i,y}w.prototype.surfaceArea=function(n){c.typeOf.object("rectangle",n);let o=n.west,e=n.east,t=n.south,i=n.north;for(;e<o;)e+=z.TWO_PI;let y=this._radiiSquared,d=y.x,a=y.y,m=y.z,b=d*a;return en(t,i,function(j){let S=Math.cos(j),M=Math.sin(j);return Math.cos(j)*en(o,e,function(q){let _=Math.cos(q),T=Math.sin(q);return Math.sqrt(b*M*M+m*(a*_*_+d*T*T)*S*S)})})};var fo=w;function p(n,o,e,t,i,y,d,a,m){this[0]=u(n,0),this[1]=u(t,0),this[2]=u(d,0),this[3]=u(o,0),this[4]=u(i,0),this[5]=u(a,0),this[6]=u(e,0),this[7]=u(y,0),this[8]=u(m,0)}p.packedLength=9;p.pack=function(n,o,e){return c.typeOf.object("value",n),c.defined("array",o),e=u(e,0),o[e++]=n[0],o[e++]=n[1],o[e++]=n[2],o[e++]=n[3],o[e++]=n[4],o[e++]=n[5],o[e++]=n[6],o[e++]=n[7],o[e++]=n[8],o};p.unpack=function(n,o,e){return c.defined("array",n),o=u(o,0),h(e)||(e=new p),e[0]=n[o++],e[1]=n[o++],e[2]=n[o++],e[3]=n[o++],e[4]=n[o++],e[5]=n[o++],e[6]=n[o++],e[7]=n[o++],e[8]=n[o++],e};p.packArray=function(n,o){c.defined("array",n);let e=n.length,t=e*9;if(!h(o))o=new Array(t);else{if(!Array.isArray(o)&&o.length!==t)throw new r("If result is a typed array, it must have exactly array.length * 9 elements");o.length!==t&&(o.length=t)}for(let i=0;i<e;++i)p.pack(n[i],o,i*9);return o};p.unpackArray=function(n,o){if(c.defined("array",n),c.typeOf.number.greaterThanOrEquals("array.length",n.length,9),n.length%9!==0)throw new r("array length must be a multiple of 9.");let e=n.length;h(o)?o.length=e/9:o=new Array(e/9);for(let t=0;t<e;t+=9){let i=t/9;o[i]=p.unpack(n,t,o[i])}return o};p.clone=function(n,o){if(h(n))return h(o)?(o[0]=n[0],o[1]=n[1],o[2]=n[2],o[3]=n[3],o[4]=n[4],o[5]=n[5],o[6]=n[6],o[7]=n[7],o[8]=n[8],o):new p(n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8])};p.fromArray=p.unpack;p.fromColumnMajorArray=function(n,o){return c.defined("values",n),p.clone(n,o)};p.fromRowMajorArray=function(n,o){return c.defined("values",n),h(o)?(o[0]=n[0],o[1]=n[3],o[2]=n[6],o[3]=n[1],o[4]=n[4],o[5]=n[7],o[6]=n[2],o[7]=n[5],o[8]=n[8],o):new p(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8])};p.fromQuaternion=function(n,o){c.typeOf.object("quaternion",n);let e=n.x*n.x,t=n.x*n.y,i=n.x*n.z,y=n.x*n.w,d=n.y*n.y,a=n.y*n.z,m=n.y*n.w,b=n.z*n.z,j=n.z*n.w,S=n.w*n.w,M=e-d-b+S,q=2*(t-j),_=2*(i+m),T=2*(t+j),E=-e+d-b+S,s=2*(a-y),N=2*(i-m),A=2*(a+y),C=-e-d+b+S;return h(o)?(o[0]=M,o[1]=T,o[2]=N,o[3]=q,o[4]=E,o[5]=A,o[6]=_,o[7]=s,o[8]=C,o):new p(M,q,_,T,E,s,N,A,C)};p.fromHeadingPitchRoll=function(n,o){c.typeOf.object("headingPitchRoll",n);let e=Math.cos(-n.pitch),t=Math.cos(-n.heading),i=Math.cos(n.roll),y=Math.sin(-n.pitch),d=Math.sin(-n.heading),a=Math.sin(n.roll),m=e*t,b=-i*d+a*y*t,j=a*d+i*y*t,S=e*d,M=i*t+a*y*d,q=-a*t+i*y*d,_=-y,T=a*e,E=i*e;return h(o)?(o[0]=m,o[1]=S,o[2]=_,o[3]=b,o[4]=M,o[5]=T,o[6]=j,o[7]=q,o[8]=E,o):new p(m,b,j,S,M,q,_,T,E)};p.fromScale=function(n,o){return c.typeOf.object("scale",n),h(o)?(o[0]=n.x,o[1]=0,o[2]=0,o[3]=0,o[4]=n.y,o[5]=0,o[6]=0,o[7]=0,o[8]=n.z,o):new p(n.x,0,0,0,n.y,0,0,0,n.z)};p.fromUniformScale=function(n,o){return c.typeOf.number("scale",n),h(o)?(o[0]=n,o[1]=0,o[2]=0,o[3]=0,o[4]=n,o[5]=0,o[6]=0,o[7]=0,o[8]=n,o):new p(n,0,0,0,n,0,0,0,n)};p.fromCrossProduct=function(n,o){return c.typeOf.object("vector",n),h(o)?(o[0]=0,o[1]=n.z,o[2]=-n.y,o[3]=-n.z,o[4]=0,o[5]=n.x,o[6]=n.y,o[7]=-n.x,o[8]=0,o):new p(0,-n.z,n.y,n.z,0,-n.x,-n.y,n.x,0)};p.fromRotationX=function(n,o){c.typeOf.number("angle",n);let e=Math.cos(n),t=Math.sin(n);return h(o)?(o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=e,o[5]=t,o[6]=0,o[7]=-t,o[8]=e,o):new p(1,0,0,0,e,-t,0,t,e)};p.fromRotationY=function(n,o){c.typeOf.number("angle",n);let e=Math.cos(n),t=Math.sin(n);return h(o)?(o[0]=e,o[1]=0,o[2]=-t,o[3]=0,o[4]=1,o[5]=0,o[6]=t,o[7]=0,o[8]=e,o):new p(e,0,t,0,1,0,-t,0,e)};p.fromRotationZ=function(n,o){c.typeOf.number("angle",n);let e=Math.cos(n),t=Math.sin(n);return h(o)?(o[0]=e,o[1]=t,o[2]=0,o[3]=-t,o[4]=e,o[5]=0,o[6]=0,o[7]=0,o[8]=1,o):new p(e,-t,0,t,e,0,0,0,1)};p.toArray=function(n,o){return c.typeOf.object("matrix",n),h(o)?(o[0]=n[0],o[1]=n[1],o[2]=n[2],o[3]=n[3],o[4]=n[4],o[5]=n[5],o[6]=n[6],o[7]=n[7],o[8]=n[8],o):[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]]};p.getElementIndex=function(n,o){return c.typeOf.number.greaterThanOrEquals("row",o,0),c.typeOf.number.lessThanOrEquals("row",o,2),c.typeOf.number.greaterThanOrEquals("column",n,0),c.typeOf.number.lessThanOrEquals("column",n,2),n*3+o};p.getColumn=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.number.greaterThanOrEquals("index",o,0),c.typeOf.number.lessThanOrEquals("index",o,2),c.typeOf.object("result",e);let t=o*3,i=n[t],y=n[t+1],d=n[t+2];return e.x=i,e.y=y,e.z=d,e};p.setColumn=function(n,o,e,t){c.typeOf.object("matrix",n),c.typeOf.number.greaterThanOrEquals("index",o,0),c.typeOf.number.lessThanOrEquals("index",o,2),c.typeOf.object("cartesian",e),c.typeOf.object("result",t),t=p.clone(n,t);let i=o*3;return t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z,t};p.getRow=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.number.greaterThanOrEquals("index",o,0),c.typeOf.number.lessThanOrEquals("index",o,2),c.typeOf.object("result",e);let t=n[o],i=n[o+3],y=n[o+6];return e.x=t,e.y=i,e.z=y,e};p.setRow=function(n,o,e,t){return c.typeOf.object("matrix",n),c.typeOf.number.greaterThanOrEquals("index",o,0),c.typeOf.number.lessThanOrEquals("index",o,2),c.typeOf.object("cartesian",e),c.typeOf.object("result",t),t=p.clone(n,t),t[o]=e.x,t[o+3]=e.y,t[o+6]=e.z,t};var _n=new O;p.setScale=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.object("scale",o),c.typeOf.object("result",e);let t=p.getScale(n,_n),i=o.x/t.x,y=o.y/t.y,d=o.z/t.z;return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=n[3]*y,e[4]=n[4]*y,e[5]=n[5]*y,e[6]=n[6]*d,e[7]=n[7]*d,e[8]=n[8]*d,e};var En=new O;p.setUniformScale=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.number("scale",o),c.typeOf.object("result",e);let t=p.getScale(n,En),i=o/t.x,y=o/t.y,d=o/t.z;return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=n[3]*y,e[4]=n[4]*y,e[5]=n[5]*y,e[6]=n[6]*d,e[7]=n[7]*d,e[8]=n[8]*d,e};var v=new O;p.getScale=function(n,o){return c.typeOf.object("matrix",n),c.typeOf.object("result",o),o.x=O.magnitude(O.fromElements(n[0],n[1],n[2],v)),o.y=O.magnitude(O.fromElements(n[3],n[4],n[5],v)),o.z=O.magnitude(O.fromElements(n[6],n[7],n[8],v)),o};var cn=new O;p.getMaximumScale=function(n){return p.getScale(n,cn),O.maximumComponent(cn)};var Cn=new O;p.setRotation=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.object("result",e);let t=p.getScale(n,Cn);return e[0]=o[0]*t.x,e[1]=o[1]*t.x,e[2]=o[2]*t.x,e[3]=o[3]*t.y,e[4]=o[4]*t.y,e[5]=o[5]*t.y,e[6]=o[6]*t.z,e[7]=o[7]*t.z,e[8]=o[8]*t.z,e};var sn=new O;p.getRotation=function(n,o){c.typeOf.object("matrix",n),c.typeOf.object("result",o);let e=p.getScale(n,sn);return o[0]=n[0]/e.x,o[1]=n[1]/e.x,o[2]=n[2]/e.x,o[3]=n[3]/e.y,o[4]=n[4]/e.y,o[5]=n[5]/e.y,o[6]=n[6]/e.z,o[7]=n[7]/e.z,o[8]=n[8]/e.z,o};p.multiply=function(n,o,e){c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e);let t=n[0]*o[0]+n[3]*o[1]+n[6]*o[2],i=n[1]*o[0]+n[4]*o[1]+n[7]*o[2],y=n[2]*o[0]+n[5]*o[1]+n[8]*o[2],d=n[0]*o[3]+n[3]*o[4]+n[6]*o[5],a=n[1]*o[3]+n[4]*o[4]+n[7]*o[5],m=n[2]*o[3]+n[5]*o[4]+n[8]*o[5],b=n[0]*o[6]+n[3]*o[7]+n[6]*o[8],j=n[1]*o[6]+n[4]*o[7]+n[7]*o[8],S=n[2]*o[6]+n[5]*o[7]+n[8]*o[8];return e[0]=t,e[1]=i,e[2]=y,e[3]=d,e[4]=a,e[5]=m,e[6]=b,e[7]=j,e[8]=S,e};p.add=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e[0]=n[0]+o[0],e[1]=n[1]+o[1],e[2]=n[2]+o[2],e[3]=n[3]+o[3],e[4]=n[4]+o[4],e[5]=n[5]+o[5],e[6]=n[6]+o[6],e[7]=n[7]+o[7],e[8]=n[8]+o[8],e};p.subtract=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e[0]=n[0]-o[0],e[1]=n[1]-o[1],e[2]=n[2]-o[2],e[3]=n[3]-o[3],e[4]=n[4]-o[4],e[5]=n[5]-o[5],e[6]=n[6]-o[6],e[7]=n[7]-o[7],e[8]=n[8]-o[8],e};p.multiplyByVector=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.object("cartesian",o),c.typeOf.object("result",e);let t=o.x,i=o.y,y=o.z,d=n[0]*t+n[3]*i+n[6]*y,a=n[1]*t+n[4]*i+n[7]*y,m=n[2]*t+n[5]*i+n[8]*y;return e.x=d,e.y=a,e.z=m,e};p.multiplyByScalar=function(n,o,e){return c.typeOf.object("matrix",n),c.typeOf.number("scalar",o),c.typeOf.object("result",e),e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=n[3]*o,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=n[7]*o,e[8]=n[8]*o,e};p.multiplyByScale=function(n,o,e){return c.typeOf.object("matrix",n),c.typeOf.object("scale",o),c.typeOf.object("result",e),e[0]=n[0]*o.x,e[1]=n[1]*o.x,e[2]=n[2]*o.x,e[3]=n[3]*o.y,e[4]=n[4]*o.y,e[5]=n[5]*o.y,e[6]=n[6]*o.z,e[7]=n[7]*o.z,e[8]=n[8]*o.z,e};p.multiplyByUniformScale=function(n,o,e){return c.typeOf.object("matrix",n),c.typeOf.number("scale",o),c.typeOf.object("result",e),e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=n[3]*o,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=n[7]*o,e[8]=n[8]*o,e};p.negate=function(n,o){return c.typeOf.object("matrix",n),c.typeOf.object("result",o),o[0]=-n[0],o[1]=-n[1],o[2]=-n[2],o[3]=-n[3],o[4]=-n[4],o[5]=-n[5],o[6]=-n[6],o[7]=-n[7],o[8]=-n[8],o};p.transpose=function(n,o){c.typeOf.object("matrix",n),c.typeOf.object("result",o);let e=n[0],t=n[3],i=n[6],y=n[1],d=n[4],a=n[7],m=n[2],b=n[5],j=n[8];return o[0]=e,o[1]=t,o[2]=i,o[3]=y,o[4]=d,o[5]=a,o[6]=m,o[7]=b,o[8]=j,o};function Nn(n){let o=0;for(let e=0;e<9;++e){let t=n[e];o+=t*t}return Math.sqrt(o)}var V=[1,0,0],H=[2,2,1];function An(n){let o=0;for(let e=0;e<3;++e){let t=n[p.getElementIndex(H[e],V[e])];o+=2*t*t}return Math.sqrt(o)}function Ln(n,o){let e=z.EPSILON15,t=0,i=1;for(let b=0;b<3;++b){let j=Math.abs(n[p.getElementIndex(H[b],V[b])]);j>t&&(i=b,t=j)}let y=1,d=0,a=V[i],m=H[i];if(Math.abs(n[p.getElementIndex(m,a)])>e){let b=n[p.getElementIndex(m,m)],j=n[p.getElementIndex(a,a)],S=n[p.getElementIndex(m,a)],M=(b-j)/2/S,q;M<0?q=-1/(-M+Math.sqrt(1+M*M)):q=1/(M+Math.sqrt(1+M*M)),y=1/Math.sqrt(1+q*q),d=q*y}return o=p.clone(p.IDENTITY,o),o[p.getElementIndex(a,a)]=o[p.getElementIndex(m,m)]=y,o[p.getElementIndex(m,a)]=d,o[p.getElementIndex(a,m)]=-d,o}var Y=new p,fn=new p;p.computeEigenDecomposition=function(n,o){c.typeOf.object("matrix",n);let e=z.EPSILON20,t=10,i=0,y=0;h(o)||(o={});let d=o.unitary=p.clone(p.IDENTITY,o.unitary),a=o.diagonal=p.clone(n,o.diagonal),m=e*Nn(a);for(;y<t&&An(a)>m;)Ln(a,Y),p.transpose(Y,fn),p.multiply(a,Y,a),p.multiply(fn,a,a),p.multiply(d,Y,d),++i>2&&(++y,i=0);return o};p.abs=function(n,o){return c.typeOf.object("matrix",n),c.typeOf.object("result",o),o[0]=Math.abs(n[0]),o[1]=Math.abs(n[1]),o[2]=Math.abs(n[2]),o[3]=Math.abs(n[3]),o[4]=Math.abs(n[4]),o[5]=Math.abs(n[5]),o[6]=Math.abs(n[6]),o[7]=Math.abs(n[7]),o[8]=Math.abs(n[8]),o};p.determinant=function(n){c.typeOf.object("matrix",n);let o=n[0],e=n[3],t=n[6],i=n[1],y=n[4],d=n[7],a=n[2],m=n[5],b=n[8];return o*(y*b-m*d)+i*(m*t-e*b)+a*(e*d-y*t)};p.inverse=function(n,o){c.typeOf.object("matrix",n),c.typeOf.object("result",o);let e=n[0],t=n[1],i=n[2],y=n[3],d=n[4],a=n[5],m=n[6],b=n[7],j=n[8],S=p.determinant(n);if(Math.abs(S)<=z.EPSILON15)throw new r("matrix is not invertible");o[0]=d*j-b*a,o[1]=b*i-t*j,o[2]=t*a-d*i,o[3]=m*a-y*j,o[4]=e*j-m*i,o[5]=y*i-e*a,o[6]=y*b-m*d,o[7]=m*t-e*b,o[8]=e*d-y*t;let M=1/S;return p.multiplyByScalar(o,M,o)};var kn=new p;p.inverseTranspose=function(n,o){return c.typeOf.object("matrix",n),c.typeOf.object("result",o),p.inverse(p.transpose(n,kn),o)};p.equals=function(n,o){return n===o||h(n)&&h(o)&&n[0]===o[0]&&n[1]===o[1]&&n[2]===o[2]&&n[3]===o[3]&&n[4]===o[4]&&n[5]===o[5]&&n[6]===o[6]&&n[7]===o[7]&&n[8]===o[8]};p.equalsEpsilon=function(n,o,e){return e=u(e,0),n===o||h(n)&&h(o)&&Math.abs(n[0]-o[0])<=e&&Math.abs(n[1]-o[1])<=e&&Math.abs(n[2]-o[2])<=e&&Math.abs(n[3]-o[3])<=e&&Math.abs(n[4]-o[4])<=e&&Math.abs(n[5]-o[5])<=e&&Math.abs(n[6]-o[6])<=e&&Math.abs(n[7]-o[7])<=e&&Math.abs(n[8]-o[8])<=e};p.IDENTITY=Object.freeze(new p(1,0,0,0,1,0,0,0,1));p.ZERO=Object.freeze(new p(0,0,0,0,0,0,0,0,0));p.COLUMN0ROW0=0;p.COLUMN0ROW1=1;p.COLUMN0ROW2=2;p.COLUMN1ROW0=3;p.COLUMN1ROW1=4;p.COLUMN1ROW2=5;p.COLUMN2ROW0=6;p.COLUMN2ROW1=7;p.COLUMN2ROW2=8;Object.defineProperties(p.prototype,{length:{get:function(){return p.packedLength}}});p.prototype.clone=function(n){return p.clone(this,n)};p.prototype.equals=function(n){return p.equals(this,n)};p.equalsArray=function(n,o,e){return n[0]===o[e]&&n[1]===o[e+1]&&n[2]===o[e+2]&&n[3]===o[e+3]&&n[4]===o[e+4]&&n[5]===o[e+5]&&n[6]===o[e+6]&&n[7]===o[e+7]&&n[8]===o[e+8]};p.prototype.equalsEpsilon=function(n,o){return p.equalsEpsilon(this,n,o)};p.prototype.toString=function(){return`(${this[0]}, ${this[3]}, ${this[6]})
(${this[1]}, ${this[4]}, ${this[7]})
(${this[2]}, ${this[5]}, ${this[8]})`};var uo=p;export{O as a,on as b,fo as c,uo as d};
