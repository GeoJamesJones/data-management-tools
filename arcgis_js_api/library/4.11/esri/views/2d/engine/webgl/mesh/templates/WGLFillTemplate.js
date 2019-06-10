// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Logger ../../../../../../core/screenUtils ../../../../../../core/libs/earcut/earcut ../../color ../../definitions ../../enums ../../number ../../TileClipper ../../WGLDisplayRecord ../../materialKey/MaterialKey ../Tesselator ./WGLMeshTemplate".split(" "),function(C,H,L,M,v,N,I,F,G,n,O,J,E,P,Q){Object.defineProperty(H,"__esModule",{value:!0});var R=M.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLFillTemplate"),
z=[],D=[];C=function(C){function l(c,a,b,e,d,f,g,k,m){var h=C.call(this)||this;h.fillColor=b;h.tl=e;h.br=d;h.aux1=f;h.aux2=g;h.aux3=k;h.isBFS=m;h.geometryType=G.WGLGeometryType.FILL;h.useLibtess=!0;c=E.FillMaterialKey.load(E.createMaterialKey(h.geometryType,c,!1));a&&(c.sdf=a.sdf,c.pattern=!0,c.textureBinding=a.textureBinding);h._materialKey=c.data;h._tesselator=new P.default;h._tileClipper=new O.TileClipper(0,0,0,1,8);h._tileClipper.setExtent(F.TILE_SIZE);return h}L(l,C);l.fromCIMFill=function(c,
a,b,e){void 0===e&&(e=!1);var d=a.color,d=d&&I.premultiplyAlphaRGBA(d)||0,f=n.i8888to32(0,0,0,a.colorLocked?1:0);if(!b)return new l(c,null,d,0,0,0,0,f,e);var f=b.rect,g=b.width,k=b.height,m=f.x+1,h=f.y+1,B=m+g,K=h+k,f=n.nextHighestPowerOfTwo(v.pt2px(a.height||0));255<f?f=255:0>=f&&(f=n.nextHighestPowerOfTwo(K-h));g=n.nextHighestPowerOfTwo(v.pt2px(a.height/k*g||0));255<g?g=255:0>=g&&(g=n.nextHighestPowerOfTwo(B-m));k=v.pt2px(a.offsetX||0)+128;255<k&&(k=255);var q=v.pt2px(-a.offsetY||0)+128;255<q&&
(q=255);a=a.scaleX||1;m=n.i1616to32(m,h);B=n.i1616to32(B,K);f=n.i8888to32(g,f,k,q);a=n.i1616to32(128*a,128);return new l(c,b,d,m,B,f,a,0,e)};l.fromSimpleFill=function(c,a,b,e){void 0===e&&(e=!1);var d=a.color;a=d&&"none"!==a.style&&I.premultiplyAlphaRGBA(d)||0;if(!b)return new l(c,null,a,0,0,0,0,0,e);var d=b.rect,f=d.x+1,g=d.y+1,k=d.x+1+b.width,m=d.y+1+b.height,d=n.i1616to32(f,g),h=n.i1616to32(k,m),f=n.i8888to32(n.nextHighestPowerOfTwo(k-f),n.nextHighestPowerOfTwo(m-g),0,0),g=n.i1616to32(128,128);
return new l(c,b,a,d,h,f,g,0,e)};l.fromPictureFill=function(c,a,b,e){void 0===e&&(e=!1);var d=F.PICTURE_FILL_COLOR,f=b.rect,g=f.x+1,k=f.y+1,f=g+b.width,m=k+b.height,g=n.i1616to32(g,k),f=n.i1616to32(f,m),m=n.nextHighestPowerOfTwo(v.pt2px(a.width));255<m&&(m=255);k=n.nextHighestPowerOfTwo(v.pt2px(a.height));255<k&&(k=255);var h=v.pt2px(a.xoffset)+128;255<h&&(h=255);var B=v.pt2px(-a.yoffset)+128;255<B&&(B=255);m=n.i8888to32(m,k,h,B);a=n.i1616to32(128*a.xscale,128*a.yscale);return new l(c,b,d,g,f,m,a,
0,e)};l.prototype.writeMesh=function(c,a,b,e,d,f,g,k){z.length=0;if("esriGeometryPolygon"!==b)R.error("Unable to handle geometryType: "+b);else{var m=d.geometry;d=this._isClippingRequired(m);var h;h=m.rings;for(var n=0,l=0;l<h.length;l++)for(var q=h[l],w=q[0],u=w[0],w=w[1],p=1;p<q.length;p++)var r=q[p],t=u+r[0],r=w+r[1],n=n-(t-u)*(r+w)/2,u=t,w=r;h=n;m=d?this._clip(m,!this.useLibtess):m.rings;return this.useLibtess?this._writeMeshLibtess(c,a,b,e,m,d,f,h,g,k):this._writeMeshEarcut(c,a,b,e,m,d,f,g,k)}};
l.prototype._isClippingRequired=function(c){var a=F.TILE_SIZE+8,b=0;for(c=c.rings;b<c.length;b++){var e=c[b],d=e.length;if(!(3>d)){var f=e[0][0],g=e[0][1];if(-8>f||f>a||-8>g||g>a)return!0;for(var k=1;k<d;++k)if(f+=e[k][0],g+=e[k][1],-8>f||f>a||-8>g||g>a)return!0}}return!1};l.prototype._clip=function(c,a){var b;this._tileClipper.reset(3);for(var e=0,d=c.rings;e<d.length;e++){var f=d[e],g=f.length;if(!(3>g)){c=f[0][0];b=f[0][1];this._tileClipper.moveTo(c,b);for(var k=1;k<g;++k)c+=f[k][0],b+=f[k][1],
this._tileClipper.lineTo(c,b);this._tileClipper.close()}}return this._tileClipper.result(a)};l.prototype._writeMeshLibtess=function(c,a,b,e,d,f,g,k,m,h){if(d&&d.length){b=[];g=a.indexVector;var n=a.getVector("geometry");a=a.getVector("visibility");var l=new J(e,this.geometryType,this._materialKey),q=E.FillMaterialKey.load(this._materialKey),w=n.vertexCount;l.vertexFrom=w;l.indexFrom=g.length;this._tesselator.beginPolygon(z,b);for(var u=0;u<d.length;u++){var p=d[u];if(!(3>p.length)){this._tesselator.beginContour();
var r=void 0,t=void 0;f?(r=p[0].x,t=p[0].y):(r=p[0][0],t=p[0][1]);var x=[r,t,0];this._tesselator.addVertex(x,x);for(x=1;x<p.length-1;x++){var y=void 0,A=void 0;f?(r=p[x].x,t=p[x].y):(y=p[x][0],A=p[x][1],r+=y,t+=A);y=[r,t,0];this._tesselator.addVertex(y,y)}this._tesselator.endContour()}}this._tesselator.endPolygon();this._writeVerticesLibTess(l,n,a,e,z,q,k,m,h);this._writeIndicesLibTess(l,g,w,b);0<l.indexCount&&c.push(l)}};l.prototype._writeMeshEarcut=function(c,a,b,e,d,f,g,k,m){if(d&&d.length){b=
a.indexVector;g=a.getVector("geometry");a=a.getVector("visibility");var h=new J(e,this.geometryType,this._materialKey),l=E.FillMaterialKey.load(this._materialKey),n=g.vertexCount;h.vertexFrom=n;h.indexFrom=b.length;c.push(h);for(var q=c=0,w=0;w<d.length;w++){var u=d[w],p=q,r=void 0,t=void 0;f?(r=u[0].x,t=u[0].y):(r=u[0][0],t=u[0][1]);z[q++]=r;z[q++]=t;for(var x=0,y=1;y<u.length;++y){var A=void 0,v=void 0;f?(A=r,v=t,r=u[y].x,t=u[y].y,A=r-A,v=t-v):(A=u[y][0],v=u[y][1],r+=A,t+=v);x-=A*(t+t+v);z[q++]=
r;z[q++]=t}0<x?(0<p-c&&(this._write(h,b,g,a,n,e,z,D,c,p,l,k,m),c=p),D.length=0):0>x?0<p-c?D.push(.5*(p-c)):q=p:q=p}0<q-c&&this._write(h,b,g,a,n,e,z,D,c,q,l,k,m);z.length=D.length=0}};l.prototype._write=function(c,a,b,e,d,f,g,k,m,h,l,n,q){d=N(g.slice(m,h),k,2);d.length&&(m=b.vertexCount,this._writeVertices(c,b,e,f,g,k,l,n,q),this._writeIndices(c,a,m,d))};l.prototype._writeVertices=function(c,a,b,e,d,f,g,k,m){for(f=0;f<d.length;f+=2){var h=n.i1616to32(d[f],d[f+1]);a.data.push(h);a.data.push(e);a.data.push(this.fillColor);
a.data.push(this.tl);a.data.push(this.br);a.data.push(this.aux1);a.data.push(this.aux2);a.data.push(this.aux3);this._writeVV(a.data,k,g);b.data.push(m);c.vertexCount++}};l.prototype._writeIndices=function(c,a,b,e){for(var d=0;d<e.length;d+=3)a.push(b+e[d]),a.push(b+e[d+1]),a.push(b+e[d+2]),c.indexCount+=3};l.prototype._writeVerticesLibTess=function(c,a,b,e,d,f,g,k,m){for(var h=0;h<d.length;h+=2){var l=n.i1616to32(d[h],d[h+1]);a.data.push(l);a.data.push(e);f.dotDensity||(a.data.push(this.fillColor),
a.data.push(this.tl),a.data.push(this.br),a.data.push(this.aux1),a.data.push(this.aux2),a.data.push(this.aux3));this._writeVV(a.data,k,f);this._writeDD(a.data,f,k,g);b.data.push(m);c.vertexCount++}};l.prototype._writeIndicesLibTess=function(c,a,b,e){for(var d=0;d<e.length;d++)a.push(b+e[d]),c.indexCount++};l.prototype._writeVV=function(c,a,b){b.hasVV()&&(this.isBFS?(c.writeF32(1E-30),c.writeF32(1E-30)):(c.push(a[G.VVType.COLOR]),c.push(a[G.VVType.OPACITY])))};l.prototype._writeDD=function(c,a,b,e){b=
new Float32Array(b.buffer);e=1/e;a.dotDensity&&(c.writeF32(Math.max(0,b[0]*e)),c.writeF32(Math.max(0,b[1]*e)),c.writeF32(Math.max(0,b[2]*e)),c.writeF32(Math.max(0,b[3]*e)),c.writeF32(Math.max(0,b[4]*e)),c.writeF32(Math.max(0,b[5]*e)),c.writeF32(Math.max(0,b[6]*e)),c.writeF32(Math.max(0,b[7]*e)))};return l}(Q.default);H.default=C});