// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Handles ../../../../core/PooledArray ../../../../core/accessorSupport/decorators ../../../../geometry/support/aaBoundingRect".split(" "),function(v,w,q,k,r,t,m,e,d){var u=function(){function c(){this.extents=new m({allocator:function(b){return b||d.create()}});this.tempExtent=d.create();this.dirty=!1}Object.defineProperty(c.prototype,"length",
{get:function(){return this.extents.length},enumerable:!0,configurable:!0});c.prototype.clear=function(){this.extents.clear()};c.prototype.add=function(b){this.contains(b)||(this.removeContained(b),d.set(this.extents.pushNew(),b),this.dirty=!0)};c.prototype.pop=function(){this.dirty&&(this.mergeTight(),this.dirty=!1);return this.extents.pop()};c.prototype.mergeTight=function(){for(var b=this.extents,a=this.tempExtent,f=!1;!f;)for(var f=!0,c=0;c<b.length;++c){for(var n=c,g=b.data[n],p=d.area(g),e=
!1,l=b.length-1;l>n;--l){var h=b.data[l],k=d.area(h);d.expand(g,h,a);h=p+k;.05>(d.area(a)-h)/h&&(d.set(g,a),p=d.area(g),b.swapElements(l,b.length-1),b.pop(),e=!0)}if(e){f=!1;break}}};c.prototype.contains=function(b){return this.extents.some(function(a){return d.contains(a,b)})};c.prototype.removeContained=function(b){for(var a=this.extents.length-1;0<=a;--a)d.contains(b,this.extents.data[a])&&this.extents.removeUnorderedIndex(a)};return c}();return function(c){function b(){var a=c.call(this)||this;
a.dirtyExtents=new u;a.globalDirty=!1;a.dirtyGraphicsQueue=new m({deallocator:null});a.handles=new t;a.updateElevation=!1;a.layerView=null;a.graphicsCore=null;return a}q(b,c);Object.defineProperty(b.prototype,"updating",{get:function(){return this.needsUpdate()},enumerable:!0,configurable:!0});b.prototype.setup=function(a,b,c,d){var f=this;this.layerView=a;this.queryGraphicUIDsInExtent=b;this.graphicsCore=c;this.elevationProvider=d;a=this.layerView.view.resourceController.scheduler;this.handles.add([d.on("elevation-change",
function(a){return f.elevationUpdateHandler(a)}),this.layerView.watch("suspended",function(){return f.suspendedChange()}),a.registerTask(12,function(a){return f.update(a)},function(){return f.needsUpdate()})])};b.prototype.destroy=function(){this.dirtyGraphicsQueue=null;this.handles.destroy();this.queryGraphicUIDsInExtent=this.graphicsCore=this.layerView=this.handles=null};b.prototype.clear=function(){this.dirtyGraphicsQueue.clear();this.notifyChange("updating")};b.prototype.suspendedChange=function(){!0===
this.layerView.suspended?this.updateElevation=!1:!1===this.layerView.suspended&&this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))};b.prototype.elevationInfoChange=function(){this.globalDirty=!0;this.notifyChange("updating")};b.prototype.needsUpdate=function(){return 0<this.dirtyGraphicsQueue.length||0<this.dirtyExtents.length||this.globalDirty};b.prototype.update=function(a){this.globalDirty&&(this.markAllGraphicsElevationDirty(),this.globalDirty=!1,a.madeProgress());for(;this.needsUpdate()&&
!a.done;)this._updateDirtyGraphics(a),this._updateDirtyExtents(a);this.layerView.view.deconflictor.setDirty();this.notifyChange("updating")};b.prototype._updateDirtyGraphics=function(a){for(var b=this.layerView.view,c=this.graphicsCore.stageLayer.id,d=this.layerView.labeling;0<this.dirtyGraphicsQueue.length&&!a.done;){for(var g=Math.min(this.dirtyGraphicsQueue.length,100);g--&&!a.done;){var e=this.dirtyGraphicsQueue.pop();(e=this.graphicsCore.getGraphics3DGraphicById(e))&&e.alignWithElevation(this.elevationProvider,
b.renderCoordsHelper);a.madeProgress()}b._stage.processDirtyLayer(c);d&&d.processStageDirty()}};b.prototype._updateDirtyExtents=function(a){for(var b=this;0<this.dirtyExtents.length&&100>this.dirtyGraphicsQueue.length&&!a.done;){var c=this.dirtyExtents.pop();this.queryGraphicUIDsInExtent(c,this.spatialReference,function(a){var c=b.graphicsCore.getGraphics3DGraphicById(a);c&&c.needsElevationUpdates()&&b.dirtyGraphicsQueue.push(a)});a.madeProgress()}};b.prototype.markAllGraphicsElevationDirty=function(){var a=
this;this.dirtyExtents.clear();this.dirtyGraphicsQueue.clear();this.graphicsCore.graphics3DGraphics.forEach(function(b,c){return a.dirtyGraphicsQueue.push(c)})};b.prototype.elevationUpdateHandler=function(a){var b=a.extent;this.layerView.suspended?this.updateElevation||(a=this.graphicsCore.computedExtent)&&b[2]>a.xmin&&b[0]<a.xmax&&b[3]>a.ymin&&b[1]<a.ymax&&(this.updateElevation=!0):(-Infinity===b[0]?this.globalDirty=!0:this.dirtyExtents.add(b),this.spatialReference=a.spatialReference,this.notifyChange("updating"))};
k([e.property({readOnly:!0})],b.prototype,"updating",null);return b=k([e.subclass("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],b)}(e.declared(r))});