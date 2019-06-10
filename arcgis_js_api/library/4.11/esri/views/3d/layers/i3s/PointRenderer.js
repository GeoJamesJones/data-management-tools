// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f32 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f32 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../geometry/support/aaBoundingBox ../../support/geometryUtils ../../support/geometryUtils ../../support/orientedBoundingBox ../../webgl-engine/lib/intersectorUtils ../../webgl-engine/lib/ProgramRepository ../../webgl-engine/materials/internal/MaterialUtil ../../webgl-engine/shaders/PointRendererPrograms ../../../webgl/BufferObject ../../../webgl/renderState ../../../webgl/VertexArrayObject".split(" "),
function(r,aa,B,P,Q,t,R,G,S,u,T,U,J,V,W,X,p,K,D,Y){function H(b,a,d,n,e){if(d.drawScreenSpace)return d.fixedSize*a*n;e=(e?256:64)*a*n;return d.drawFixedSize?Math.min(d.fixedSize/2,e):0<d.screenMinSize?Math.min(Math.max(d.screenMinSize*a*n,b/2),e):Math.min(b/2,e)}function N(b,a,d){null==d&&(d=G.vec3f64.create());d[0]=b.origin[0]+b.coordinates[3*a];d[1]=b.origin[1]+b.coordinates[3*a+1];d[2]=b.origin[2]+b.coordinates[3*a+2];return d}var O=Q.mat4f64.create(),Z={positions:[{name:"aPosition",count:3,type:5126,
offset:0,stride:12,normalized:!1}],colors:[{name:"aColor",count:3,type:5121,offset:0,stride:3,normalized:!0}]};r=function(){function b(){this.didRender=!1;this.needsRender=!0;this.layerUid="";this._useFixedSizes=!1;this._scaleFactor=1;this._minSizePx=0;this._useRealWorldSymbolSizes=!1;this._sizePx=this._size=0;this._slicePlaneEnabled=!1;this._clipBox=u.create(u.POSITIVE_INFINITY);this._programRep=null;this._needsPrograms=!0;this._programScreenDepth=this._programWorldDepth=this._programScreen=this._programWorld=
null;this.tempMatrix4=P.mat4f32.create();this.tempVec3=R.vec3f32.create();this.nodes=[]}b.prototype.initializeRenderContext=function(a){this._programRep=new W(a.rctx);this._needsPrograms=this.needsRender=!0};b.prototype.uninitializeRenderContext=function(a){this._programRep.dispose();this._programScreenDepth=this._programWorldDepth=this._programScreen=this._programWorld=this._programRep=null};b.prototype.intersect=function(a,d,b,e,f){var g=G.vec3f64.create(),h=G.vec3f64.create(),n=G.vec3f64.create(),
L=G.vec3f64.create(),C=U.plane.create(),y=a.camera.perScreenPixelRatio/2,q=a.camera.near,z=this._getSizeParams();t.vec3.subtract(h,e,b);var M=1/t.vec3.length(h);t.vec3.scale(h,h,M);t.vec3.negate(n,h);S.vec4.set(C,h[0],h[1],h[2],-t.vec3.dot(h,b));var l={},m={};f=[];var p=u.create(),r=u.create(this._clipBox);u.offset(r,-b[0],-b[1],-b[2],r);for(var B=0,D=this.nodes;B<D.length;B++){var k=D[B],I=k.splatSize*this._scaleFactor,A=J.minimumDistancePlane(k.obb,C),w=J.maximumDistancePlane(k.obb,C),A=A-(z.drawScreenSpace?
0:H(I,A+q,z,y,k.isLeaf)),w=w-(z.drawScreenSpace?0:H(I,w+q,z,y,k.isLeaf)),A=null!=l.dist&&null!=m.dist&&l.dist<A*M&&m.dist>w*M;if(!(0>w||A)&&(w=H(I,w+q,z,y,k.isLeaf),J.intersectLine(k.obb,b,h,w))){w*=w;J.toAaBoundingBox(k.obb,p);u.offset(p,-b[0],-b[1],-b[2],p);A=!u.contains(r,p);t.vec3.subtract(L,k.origin,b);for(var K=k.coordinates.length/3,x=0;x<K;x++)if(g[0]=L[0]+k.coordinates[3*x],g[1]=L[1]+k.coordinates[3*x+1],g[2]=L[2]+k.coordinates[3*x+2],!A||u.containsPoint(r,g)){var c=t.vec3.dot(g,h),E=t.vec3.squaredLength(g)-
c*c;if(!(E>w)){var F=c+q,v=z.drawScreenSpace?0:H(I,F,z,y,k.isLeaf);if(!(0>c-v||(F-=v,F=H(I,F,z,y,k.isLeaf),E>F*F))){E=this.layerUid+"/"+k.id+"/"+x;v=(c-v)*M;if(null==l.dist||v<l.dist)if(c=l,null==d||d(b,e,v))c.point=N(k,x,c.point),c.dist=v,c.normal=n,c.pointId=E,c.layerUid=this.layerUid;if(null==m.dist||v>m.dist)if(c=m,null==d||d(b,e,v))c.point=N(k,x,c.point),c.dist=v,c.normal=n,c.pointId=E,c.layerUid=this.layerUid;(null==d||d(b,e,v))&&a.enable.storeAll&&(c={},c.point=N(k,x,c.point),c.dist=v,c.normal=
n,c.pointId=E,c.layerUid=this.layerUid,f.push(c))}}}}}null!=l.dist&&(g=a.results.min,null==g.dist||l.dist<g.dist)&&(d={type:"external",point:l.point,metadata:{pointId:l.pointId,layerUid:l.layerUid}},g.set(d,l.pointId,l.dist,l.normal,O,void 0),g.intersector="PointRenderer");null!=m.dist&&(l=a.results.max,null==l.dist||m.dist>l.dist)&&(d={type:"external",point:m.point,metadata:{pointId:m.pointId,layerUid:m.layerUid}},l.set(d,m.pointId,m.dist,m.normal,O,void 0),l.intersector="PointRenderer");if(a.enable.storeAll)for(b=
T.ray.fromPoints(b,e),e=0;e<f.length;e++)c=f[e],d={type:"external",point:c.point,metadata:{pointId:c.pointId,layerUid:c.layerUid}},m=new V.IntersectorResult(b),m.set(d,c.pointId,c.dist,c.normal,O,void 0),m.intersector="PointRenderer",a.results.all.push(m)};b.prototype.render=function(a){if(0!==a.pass&&1!==a.pass)return!1;for(var b=1===a.pass,n=a.rctx,e=0,f=this.nodes;e<f.length;e++){var g=f[e];null==g.vao&&this._initNode(a,g)}this._selectPrograms();e=this._getSizeParams();f=b?e.drawScreenSpace?this._programScreenDepth:
this._programWorldDepth:e.drawScreenSpace?this._programScreen:this._programWorld;if(null==f||0===this.nodes.length)return!0;var h=this._clipBox,p=!u.equals(h,u.POSITIVE_INFINITY,function(a,b){return a===b});p||(t.vec3.set(this.tempVec3,-Infinity,-Infinity,-Infinity),f.setUniform3fv("uClipMin",this.tempVec3),t.vec3.set(this.tempVec3,Infinity,Infinity,Infinity),f.setUniform3fv("uClipMax",this.tempVec3));n.bindProgram(f);n.setPipelineState(this._pipelineState);f.setUniformMatrix4fv("uProjectionMatrix",
a.camera.projectionMatrix);b&&f.setUniform2f("nearFar",a.camera.near,a.camera.far);b=a.camera.pixelRatio;e.drawFixedSize&&f.setUniform2f("uPointScale",e.fixedSize*b,a.camera.fullHeight);for(var r=this._slicePlaneEnabled?a.sliceHelper&&a.sliceHelper.plane:null,C=0,y=this.nodes;C<y.length;C++){g=y[C];f.setUniform2f("uScreenMinMaxSize",e.screenMinSize*b,(g.isLeaf?256:64)*b);e.drawFixedSize||f.setUniform2f("uPointScale",g.splatSize*this._scaleFactor*b,a.camera.fullHeight/b);var q=g.origin;p&&(t.vec3.set(this.tempVec3,
h[0]-q[0],h[1]-q[1],h[2]-q[2]),f.setUniform3fv("uClipMin",this.tempVec3),t.vec3.set(this.tempVec3,h[3]-q[0],h[4]-q[1],h[5]-q[2]),f.setUniform3fv("uClipMax",this.tempVec3));B.mat4.identity(this.tempMatrix4);B.mat4.translate(this.tempMatrix4,this.tempMatrix4,q);B.mat4.multiply(this.tempMatrix4,a.camera.viewMatrix,this.tempMatrix4);f.setUniformMatrix4fv("uModelViewMatrix",this.tempMatrix4);r&&X.bindSlicePlane(q,r,f);n.bindVAO(g.vao);n.drawArrays(0,0,g.coordinates.length/3)}return!0};Object.defineProperty(b.prototype,
"useFixedSizes",{get:function(){return this._useFixedSizes},set:function(a){this._useFixedSizes!==a&&(this._useFixedSizes=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"scaleFactor",{get:function(){return this._scaleFactor},set:function(a){this._scaleFactor!==a&&(this._scaleFactor=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"minSizePx",{get:function(){return this._minSizePx},set:function(a){this._minSizePx!==
a&&(this._minSizePx=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"useRealWorldSymbolSizes",{get:function(){return this._useRealWorldSymbolSizes},set:function(a){this._useRealWorldSymbolSizes!==a&&(this._useRealWorldSymbolSizes=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"size",{get:function(){return this._size},set:function(a){this._size!==a&&(this._size=a,this._requestRender())},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"sizePx",{get:function(){return this._sizePx},set:function(a){this._sizePx!==a&&(this._sizePx=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"clippingBox",{set:function(a){u.set(this._clipBox,a||u.POSITIVE_INFINITY)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"slicePlaneEnabled",{get:function(){return this._slicePlaneEnabled},set:function(a){this._slicePlaneEnabled!==a&&(this._slicePlaneEnabled=a,
this._requestRender(),this._needsPrograms=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"intersectionHandlerId",{get:function(){return this.layerUid},enumerable:!0,configurable:!0});b.prototype.addNode=function(a){this.nodes.push(a);this._requestRender()};b.prototype.removeNode=function(a){var b=null;this.nodes=this.nodes.filter(function(d){return d.id===a?(b=d,d.vao&&(d.vao.dispose(!0),d.vao=null),!1):!0});this._requestRender();return b};b.prototype.removeAll=function(){this.nodes.forEach(function(a){a.vao&&
(a.vao.dispose(!0),a.vao=null)});this.nodes=[];this._requestRender()};b.prototype._initNode=function(a,b){a=a.rctx;b.vao=new Y(a,p.program.attributes,Z,{positions:K.createVertex(a,35044,b.coordinates),colors:K.createVertex(a,35044,b.rgb)})};b.prototype._requestRender=function(){this.didRender=!1;this.needsRender=!0};b.prototype._getSizeParams=function(){var a=this._useFixedSizes,b=a&&!this._useRealWorldSymbolSizes,n=b?this._sizePx:this._size,e=this._minSizePx;a&&(e=0);return{drawScreenSpace:b,drawFixedSize:a,
fixedSize:n,screenMinSize:e}};b.prototype._selectPrograms=function(){this._needsPrograms&&(this._needsPrograms=!1,this._programWorld=this._programRep.getProgram(p.program,{slicePlaneEnabled:this._slicePlaneEnabled}),this._programScreen=this._programRep.getProgram(p.program,{drawScreenSize:!0,slicePlaneEnabled:this._slicePlaneEnabled}),this._programWorldDepth=this._programRep.getProgram(p.program,{depthPass:!0,slicePlaneEnabled:this._slicePlaneEnabled}),this._programScreenDepth=this._programRep.getProgram(p.program,
{drawScreenSize:!0,depthPass:!0,slicePlaneEnabled:this._slicePlaneEnabled}),this._pipelineState=D.makePipelineState({depthTest:{func:513},depthWrite:D.defaultDepthWriteParams,colorWrite:D.defaultColorWriteParams}))};return b}();(function(b){b.isInstanceOfNode=function(a){return a.hasOwnProperty("splatSize")}})(r||(r={}));return r});