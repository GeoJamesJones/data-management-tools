// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/PooledArray ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../webgl-engine/materials/internal/MaterialUtil".split(" "),function(x,d,z,H,A,P){function M(a){return a[0]+"/"+a[1]+"/"+a[2]}function y(a,b){b(a);for(var c=0;4>c;c++){var e=a.children[c];e&&y(e,b)}}function B(a,b){for(var c=0;4>c;c++){var e=a.children[c];e&&B(e,b)}b(a)}function N(a,b,c){a=a.screenDepth;b=b.screenDepth;return a<b?-c:a>b?c:0}Object.defineProperty(d,"__esModule",
{value:!0});x=function(){function a(){this.q=new z;this._last=null;this.done=!0}a.prototype.resetOne=function(a){this.q.clear();this.q.push(a);this._last=null;this.done=!1};a.prototype.reset=function(a){this.q.clear();a&&this.q.pushArray(a);this._last=null;this.done=0===this.q.length};a.prototype.skipSubtree=function(){this._last=null;0===this.q.length&&(this.done=!0)};a.prototype.next=function(){if(this.done)return null;if(this._last){var a=this._last.children;if(a[0])for(var c=3;0<=c;c--){var e=
a[c];e&&this.q.push(e)}}this._last=this.q.pop();0!==this.q.length||this._last.children[0]||(this.done=!0);return this._last};return a}();d.IteratorPreorder=x;x=function(){function a(){this.q=new z;this.done=!0}a.prototype.reset=function(a){this.q.clear();if(a)for(this.q.pushArray(a),a=0;a<this.q.length;++a)for(var b=this.q.data[a],e=0;4>e;e++){var f=b.children[e];f&&this.q.push(f)}this.done=0===this.q.length};a.prototype.next=function(){var a=this.q.pop();this.done=0===this.q.length;return a};return a}();
d.IteratorPostorder=x;d.lij2str=M;d.tile2str=function(a){return M(a.lij)};d.traverseTilesPreorder=function(a,b){if(Array.isArray(a))for(var c=0;c<a.length;c++)y(a[c],b);else y(a,b)};d.traverseTilesPostorder=function(a,b){if(Array.isArray(a))for(var c=0;c<a.length;c++)B(a[c],b);else B(a,b)};d.findParentByLIJ=function(a,b){for(;a;a=a.parent)if(a.hasLij(b))return a;return null};d.fallsWithinLayer=function(a,b,c){if(!b)return!1;var e=b.fullExtent,f=a.extent;if(c){if(f[0]<e.xmin||f[1]<e.ymin||f[2]>e.xmax||
f[3]>e.ymax)return!1}else if(e.xmin>f[2]||e.ymin>f[3]||e.xmax<f[0]||e.ymax<f[1])return!1;a=a.surface.tilingScheme.levels[a.lij[0]].scale;return 0<b.minScale&&a>1.00000001*b.minScale||0<b.maxScale&&a<.99999999*b.maxScale?!1:!0};d.isPosWithinTile=function(a,b){a=a.extent;return b[0]>=a[0]&&b[1]>=a[1]&&b[0]<=a[2]&&b[1]<=a[3]};d.getTileNLevelsUp=function(a,b){for(;b--;)a=a.parent;return a};d.nextTileInAncestry=function(a,b){var c=a.lij[0]-b.lij[0]-1,e=a.lij[2]>>c,f=0;a.lij[1]>>c&1&&(f+=2);e&1&&(f+=1);
return b.children[f]};d.sortTiles=function(a,b){b.sort(function(b,e){return N(b,e,a)})};d.compareTiles=N;d.computeUpsampleInfo=function(a,b,c){for(var e=1,f=0,d=0;a!==b;)if(e*=.5,f*=.5,d*=.5,a.lij[2]&1&&(f+=.5),0===(a.lij[1]&1)&&(d+=.5),a=a.parent,null==a)throw Error("tile was not a descendant of upsampleTile");c.init(b,f,d,e)};d.hasVisibleSiblings=function(a){for(var b=0;b<a.length;b++){var c=a[b],e=c.parent;if(e)for(var f=0;4>f;f++){var d=e.children[f];if(d&&d!==c&&d.visible)return!0}}return!1};
var O=Math.pow(2,-52),h=A.vec3f64.create(),Q=A.vec3f64.create();d.intersectSkirts=function(a,b,c,e,f,d,x,y,B){var m=d.data,I=d.offsetIdx;d=d.strideIdx;var z=a[0],A=a[1];a=a[2];var C=b[0]-z,D=b[1]-A;for(b=b[2]-a;c<e;c++){var E=x?x[c]:c,k=I+d*f[3*E],l=I+d*f[3*E+1],p=I+d*f[3*E+2],g=m[k],r=m[k+1],n=m[k+2];2<=m[k+3]&&(H.vec3.set(h,g,r,n),y(h),g+=h[0],r+=h[1],n+=h[2]);var q=m[l],k=m[l+1],u=m[l+2];2<=m[l+3]&&(H.vec3.set(h,q,k,u),y(h),q+=h[0],k+=h[1],u+=h[2]);var l=m[p],v=m[p+1],w=m[p+2];2<=m[p+3]&&(H.vec3.set(h,
l,v,w),y(h),l+=h[0],v+=h[1],w+=h[2]);var p=q-g,k=k-r,u=u-n,l=l-g,v=v-r,w=w-n,t=D*w-v*b,J=b*l-w*C,K=C*v-l*D,q=p*t+k*J+u*K,g=z-g,F=A-r,G=a-n,n=F*u-k*G,r=G*p-u*g,L=g*k-p*F;if(q>O){g=g*t+F*J+G*K;if(0>g||g>q)continue;t=C*n+D*r+b*L;if(0>t||g+t>q)continue}else if(q<-O){g=g*t+F*J+G*K;if(0<g||g<q)continue;t=C*n+D*r+b*L;if(0<t||g+t<q)continue}else continue;n=(l*n+v*r+w*L)/q;0<=n&&(p=P.computeNormal(p,k,u,l,v,w,Q),B(n,p,E))}}});