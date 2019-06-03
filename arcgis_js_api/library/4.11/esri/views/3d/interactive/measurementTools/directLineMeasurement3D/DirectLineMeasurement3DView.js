// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/Handles ../../../../../core/screenUtils ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec2 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ./LaserLineRenderer ../support/Label ../support/LabelSegment ../support/labelUtils ../support/PathSegmentInterpolator ../support/viewUtils ../../../support/mathUtils ../../../support/stack ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryData ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/Layer ../../../webgl-engine/lib/Object3D ../../../webgl-engine/materials/ColorMaterial ../../../webgl-engine/materials/MeasurementArrowMaterial ../../../webgl-engine/materials/RibbonLineMaterial ../../../webgl-engine/parts/Model ../../../../interactive/manipulatorUtils".split(" "),
function(n,T,U,V,E,t,F,K,G,l,q,L,A,w,B,H,v,p,k,C,M,I,N,O,r,P,Q,D,d,R){n=[1,.5,0,.75];var S={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,triangleColor:n,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,
arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:n,guideLineWidth:2,guideLineColor:n,guideStippleLengthPixels:6,labelDistance:25};n=function(){function b(a,c){void 0===c&&(c={});this._visible=!1;this._laserLineRenderer=null;this._directDistanceLabel=new A;this._horizontalDistanceLabel=new A;this._verticalDistanceLabel=new A;this._handles=new E;this._listenerHandles=null;this._cursorPosition=q.vec3f64.create();this._startPosition=q.vec3f64.create();this._endPosition=
q.vec3f64.create();this._centerPosition=q.vec3f64.create();this._cornerPosition=q.vec3f64.create();this._arrowLabelSegment=new w;this._horizontalLabelSegment=new w;this._verticalLabelSegment=new w;this._geodesicProjectionLabelSegment=new w;this._origin=q.vec3f64.create();this._originTransform=K.mat4f64.create();this._lastDraggedHandle=null;this._model=a;this._sceneView=a.sceneView;this._params=v.copyParameter(S,c);this._layer=new O("point-to-point-measurement",{isPickable:!1});this._createMaterials();
this._createObjects();this._intersector=new N(this._sceneView.viewingMode)}b.prototype.destroy=function(){this.hide();this._handles.destroy();this._handles=null};Object.defineProperty(b.prototype,"requiresCursorPoint",{get:function(){return"initial"===this._model.state&&this._model.active},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"cameraAboveGround",{get:function(){return this._sceneView.state.camera.aboveGround},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"visible",{get:function(){return this._visible},set:function(a){a?this.show():this.hide()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"testData",{get:function(){return{labels:{direct:this._directDistanceLabel,horizontal:this._horizontalDistanceLabel,vertical:this._verticalDistanceLabel},laserLineRenderer:this._laserLineRenderer}},enumerable:!0,configurable:!0});b.prototype.createManipulators=function(){var a=this,c=function(){var c=R.createSphereManipulator(a._sceneView,a._params.handleColor,
a._params.handleOpacity);c.visible=!1;c.hideOnGrab=!0;c.radius=a._params.handleRadius;return c},e=c(),g=c();this._model.startPoint&&(e.mapPoint=this._model.startPoint,e.visible=!0);this._model.endPoint&&(g.mapPoint=this._model.endPoint,g.visible=!0);var f=function(){var c=a._lastDraggedHandle;e.grabbing&&!g.grabbing&&(c="start");g.grabbing&&!e.grabbing&&(c="end");e.grabbing||g.grabbing||(c=null);var f=c!==a._lastDraggedHandle;a._lastDraggedHandle=c;f&&a._updateLaserLine()};this._handles.add([e.watch("grabbing",
function(){f()}),g.watch("grabbing",function(){f()})]);return{start:e,end:g}};b.prototype.show=function(){if(!this._visible){this._visible=!0;var a=this._sceneView._stage;this._laserLineRenderer=new L(this._sceneView.renderCoordsHelper,{glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,globalAlpha:this._params.laserLineGlobalAlpha});a.addRenderPlugin(this._laserLineRenderer.renderSlots,
this._laserLineRenderer);this._addToStage(a);this._directDistanceLabel.addToView(this._sceneView);this._horizontalDistanceLabel.addToView(this._sceneView);this._verticalDistanceLabel.addToView(this._sceneView);this._initializeListeners();this._updateCursorPosition();this._updateStartPosition();this._updateEndPosition();this._updateLaserLine();this._updateView()}};b.prototype.hide=function(){if(this._visible){this._visible=!1;var a=this._sceneView._stage;a.removeRenderPlugin(this._laserLineRenderer);
this._laserLineRenderer=null;this._removeFromStage(a);this._directDistanceLabel.removeFromView(this._sceneView);this._horizontalDistanceLabel.removeFromView(this._sceneView);this._verticalDistanceLabel.removeFromView(this._sceneView);this._destroyListeners();this._sceneView.cursor=null}};b.prototype.pick=function(a){var c=this._sceneView.spatialReference;a=t.screenPointObjectToArray(a.screenPoint);a=this._sceneView.sceneIntersectionHelper.intersectToolIntersectorScreen(a,this._intersector).results.min;
var e=q.vec3f64.create();if(!a.getIntersectionPoint(e))return new b.PickResult;c=this._sceneView.renderCoordsHelper.fromRenderCoords(e,c);return new b.PickResult("TerrainRenderer"===a.intersector?"ground":"feature",e,c)};b.prototype.getElevation=function(a){return this._sceneView.basemapTerrain.ready?this._sceneView.basemapTerrain.getElevation(a)||0:0};b.prototype.overlappingHandles=function(a,c){return v.pointToPointScreenDistance(a,c,this._sceneView)<=this._params.handleRadius};b.prototype._createMaterials=
function(){this._triangleLineMaterial=new D({width:this._params.triangleLineWidth,color:this._params.triangleColor,polygonOffset:!0},"triangle-line");this._triangleLineMaterial.renderOccluded=4;this._triangleCornerMaterial=new P({color:this._params.triangleColor,transparent:!0,writeDepth:!1,polygonOffset:!0},"triangle-corner");this._triangleCornerMaterial.renderOccluded=4;this._arrowMaterial=new Q({outlineColor:this._params.arrowOutlineColor,stripeEvenColor:this._params.arrowStripeEvenColor,stripeOddColor:this._params.arrowStripeOddColor,
polygonOffset:!0},"arrow");this._arrowMaterial.renderOccluded=4;this._geodesicProjectionLineMaterial=new D({width:this._params.geodesicProjectionLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0},"geodesic-line");this._geodesicProjectionLineMaterial.renderOccluded=4;this._geodesicGuideLineMaterial=new D({width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stippleLength:0},"geodesic-guide");this._geodesicGuideLineMaterial.renderOccluded=
4};b.prototype._createObjects=function(){this._triangleLineObject=new r;this._layer.addObject(this._triangleLineObject);this._triangleCornerObject=new r;this._layer.addObject(this._triangleCornerObject);this._arrowObject=new r;this._layer.addObject(this._arrowObject);this._geodesicProjectionLineObject=new r;this._layer.addObject(this._geodesicProjectionLineObject);this._geodesicProjectionStartGuideObject=new r;this._layer.addObject(this._geodesicProjectionStartGuideObject);this._geodesicProjectionEndGuideObject=
new r;this._layer.addObject(this._geodesicProjectionEndGuideObject)};b.prototype._addToStage=function(a){a.add(d.ContentType.LAYER,this._layer);a.add(d.ContentType.MATERIAL,this._triangleLineMaterial);a.add(d.ContentType.MATERIAL,this._triangleCornerMaterial);a.add(d.ContentType.MATERIAL,this._arrowMaterial);a.add(d.ContentType.MATERIAL,this._geodesicProjectionLineMaterial);a.add(d.ContentType.MATERIAL,this._geodesicGuideLineMaterial);a.add(d.ContentType.OBJECT,this._triangleLineObject);a.add(d.ContentType.OBJECT,
this._triangleCornerObject);a.add(d.ContentType.OBJECT,this._arrowObject);a.add(d.ContentType.OBJECT,this._geodesicProjectionLineObject);a.add(d.ContentType.OBJECT,this._geodesicProjectionStartGuideObject);a.add(d.ContentType.OBJECT,this._geodesicProjectionEndGuideObject);a.addToViewContent([this._layer.id])};b.prototype._removeFromStage=function(a){a.removeFromViewContent([this._layer.id]);a.remove(d.ContentType.LAYER,this._layer.id);a.remove(d.ContentType.MATERIAL,this._triangleLineMaterial.id);
a.remove(d.ContentType.MATERIAL,this._triangleCornerMaterial.id);a.remove(d.ContentType.MATERIAL,this._arrowMaterial.id);a.remove(d.ContentType.MATERIAL,this._geodesicProjectionLineMaterial.id);a.remove(d.ContentType.MATERIAL,this._geodesicGuideLineMaterial.id);a.remove(d.ContentType.OBJECT,this._triangleLineObject.id);a.remove(d.ContentType.OBJECT,this._triangleCornerObject.id);a.remove(d.ContentType.OBJECT,this._arrowObject.id);a.remove(d.ContentType.OBJECT,this._geodesicProjectionLineObject.id);
a.remove(d.ContentType.OBJECT,this._geodesicProjectionStartGuideObject.id);a.remove(d.ContentType.OBJECT,this._geodesicProjectionEndGuideObject.id)};b.prototype._getLabelPositions=function(a,c,e,g,f){var h=this._model.triangleView.collapsed,b=t.castRenderScreenPointArray3(k.sv3d.get()),m=t.castRenderScreenPointArray3(k.sv3d.get());f.projectPoint(e,b);f.projectPoint(c,m);b={direct:h?"top":"bottom",horizontal:"top",vertical:b[0]<m[0]?"left":"right"};h||(m=k.sv2d.get(),h=k.sv2d.get(),v.screenSpaceTangent(a,
e,m,f),v.screenSpaceTangent(a,c,h,f),G.vec2.dot(m,h)>=J?b.direct=p.sign(m[1])===p.sign(h[1])?B.mirrorPosition(b.vertical):b.vertical:(a=t.castRenderScreenPointArray(k.sv2d.get()),v.screenSpaceTangent(e,c,a,f),G.vec2.dot(a,h)>=J&&(b.direct=p.sign(a[0])===p.sign(h[0])?B.mirrorPosition(b.horizontal):b.horizontal)));"below-the-surface"===g&&(c=function(a){return"top"===a?"bottom":"top"},b.direct=c(b.direct),b.horizontal=c(b.horizontal),b.vertical=c(b.vertical));return b};b.prototype._updateView=function(){var a;
if(this._sceneView.ready){var c=this._sceneView._stage.getCamera(),e=this._sceneView.renderCoordsHelper,b=this._model.triangleView;if(b.visible){var f="camera-dependent"===this._model.measurementSurfaceLocation?this._sceneView.state.camera.aboveGround?"above-the-surface":"below-the-surface":this._model.measurementSurfaceLocation,h=this._startPosition;a=this._endPosition;var k="above-the-surface"===f?1:-1,m=k*(e.getAltitude(a)-e.getAltitude(h));0>m&&(a=[a,h],h=a[0],a=a[1]);var d=this._cornerPosition;
e.worldUpAtPosition(h,d);l.vec3.scale(d,d,k*Math.abs(m));l.vec3.add(d,d,h);e=this._centerPosition;v.midpoint([h,a,d],e);l.vec3.copy(this._origin,e);F.mat4.identity(this._originTransform);F.mat4.translate(this._originTransform,this._originTransform,this._origin);b.collapsed?(this._triangleLineObject.removeAllGeometries(),this._triangleCornerObject.removeAllGeometries()):this._updateTriangleObjects(this._triangleLineObject,this._triangleCornerObject,h,a,d,this._origin,this._originTransform,c,b.mode,
this._horizontalLabelSegment,this._verticalLabelSegment);this._updateArrowObject(this._arrowObject,this._startPosition,this._endPosition,this._origin,this._originTransform,b.stripeLength,c,b.mode,this._arrowLabelSegment);e=this._requiresGeodesicGuides(this._startPosition,this._endPosition,c,b.mode);this._updateGeodesicProjectionLineObject(this._geodesicProjectionLineObject,this._startPosition,this._endPosition,this._origin,this._originTransform,e,this._geodesicProjectionLabelSegment);this._updateGeodesicProjectionGuideObjects(c,
e);k=this._params.labelDistance;f=this._getLabelPositions(h,a,d,f,c);this._updateAuxiliaryMeasureLabels(b,c,f);"geodesic"!==b.mode?this._updateLabel(this._directDistanceLabel,this._arrowLabelSegment,k,f.direct,b.directLabel,b.visible,16,c):(this._updateLabel(this._horizontalDistanceLabel,e?this._geodesicProjectionLabelSegment:this._arrowLabelSegment,k,f.horizontal,b.horizontalLabel,b.visible,16,c),this._directDistanceLabel.visible=!1)}else this._triangleLineObject.removeAllGeometries(),this._triangleCornerObject.removeAllGeometries(),
this._arrowObject.removeAllGeometries(),this._geodesicProjectionLineObject.removeAllGeometries(),this._geodesicProjectionStartGuideObject.removeAllGeometries(),this._geodesicProjectionEndGuideObject.removeAllGeometries(),this._directDistanceLabel.visible=!1,this._horizontalDistanceLabel.visible=!1,this._verticalDistanceLabel.visible=!1}};b.prototype._updateAuxiliaryMeasureLabels=function(a,c,e){if(a.collapsed)this._horizontalDistanceLabel.visible=!1,this._verticalDistanceLabel.visible=!1;else{var b=
this._params.labelDistance;this._updateLabel(this._horizontalDistanceLabel,this._horizontalLabelSegment,b,e.horizontal,a.horizontalLabel,!0,12,c);this._updateLabel(this._verticalDistanceLabel,this._verticalLabelSegment,b,e.vertical,a.verticalLabel,!0,12,c)}};b.prototype._updateTriangleObjects=function(a,c,b,g,f,h,d,m,x,u,n){x=[l.vec3.subtract(k.sv3d.get(),b,h),l.vec3.subtract(k.sv3d.get(),f,h),l.vec3.subtract(k.sv3d.get(),g,h)];u.update(f,g);n.update(b,f);u=new C(I.createPolylineGeometry(x),"triangle-line");
a.removeAllGeometries();a.addGeometry(u,this._triangleLineMaterial,d);a=k.sv3d.get();u=k.sv3d.get();l.vec3.subtract(a,f,b);l.vec3.normalize(a,a);l.vec3.subtract(u,g,f);l.vec3.normalize(u,u);b=.33*Math.min(l.vec3.distance(f,b),l.vec3.distance(f,g));m=this._params.triangleCornerSize*m.computeScreenPixelSizeAt(f);f=new C(this._quadGeometryData(f,a,u,Math.min(b,m),h),"triangle-corner");c.removeAllGeometries();c.addGeometry(f,this._triangleCornerMaterial,d)};b.prototype._updateArrowObject=function(a,c,
b,g,f,h,d,k,l){this._createInterpolatedLineGeometry(a,this._arrowMaterial,"arrow",c,b,g,f,k,this._arrowLabelSegment);a=d.computeScreenPixelSizeAt(l.origin);this._arrowMaterial.setParameterValues({width:this._params.arrowWidth*a,stripeLength:h})};b.prototype._getSegmentInterpolator=function(a,c){var b=this._sceneView.spatialReference,g=this._sceneView.renderCoordsHelper.spatialReference;return b.isWebMercator||b.isWGS84?new H.Spherical(a,c,g,g):new H.Linear(a,c)};b.prototype._updateGeodesicProjectionLineObject=
function(a,c,b,g,f,h,d){h?(h=this._sceneView.renderCoordsHelper,c=l.vec3.copy(k.sv3d.get(),c),b=l.vec3.copy(k.sv3d.get(),b),h.setAltitude(0,c),h.setAltitude(0,b),this._createInterpolatedLineGeometry(a,this._geodesicProjectionLineMaterial,"geodesicProjectionLine",c,b,g,f,"geodesic",d)):a.removeAllGeometries()};b.prototype._requiresGeodesicGuides=function(a,b,e,g){return"geodesic"===g&&this._model.geodesicDistanceExceeded?this._requiresGeodesicGuideAt(a,e)||this._requiresGeodesicGuideAt(b,e):!1};b.prototype._requiresGeodesicGuideAt=
function(a,b){var c=this._sceneView.renderCoordsHelper;b=b.computeScreenPixelSizeAt(a);return 10<=c.getAltitude(a)/b};b.prototype._updateGeodesicProjectionGuideObjects=function(a,b){if(b){b=this._sceneView.renderCoordsHelper;var c=l.vec3.copy(k.sv3d.get(),this._startPosition),g=l.vec3.copy(k.sv3d.get(),this._endPosition);b.setAltitude(0,c);b.setAltitude(0,g);this._createInterpolatedLineGeometry(this._geodesicProjectionStartGuideObject,this._geodesicGuideLineMaterial,"geodesicGuideLine",c,this._startPosition,
this._origin,this._originTransform,"euclidean");this._createInterpolatedLineGeometry(this._geodesicProjectionEndGuideObject,this._geodesicGuideLineMaterial,"geodesicGuideLine",g,this._endPosition,this._origin,this._originTransform,"euclidean");a=Math.min(a.computeScreenPixelSizeAt(this._startPosition),a.computeScreenPixelSizeAt(c),a.computeScreenPixelSizeAt(this._endPosition),a.computeScreenPixelSizeAt(g));this._geodesicGuideLineMaterial.setParameterValues({stippleLength:this._params.guideStippleLengthPixels*
a})}else this._geodesicProjectionStartGuideObject.removeAllGeometries(),this._geodesicProjectionEndGuideObject.removeAllGeometries()};b.prototype._createInterpolatedLineGeometry=function(a,b,e,g,f,h,d,m,n){var c=this._sceneView.renderCoordsHelper,q=[],t=[],r=function(a,b){var c=k.sv3d.get();l.vec3.subtract(c,a,h);q.push(c);t.push(b)};if("euclidean"===m){var p=k.sv3d.get();v.midpoint([g,f],p);m=k.sv3d.get();c.worldUpAtPosition(p,m);r(g,m);r(f,m);n&&n.update(g,f)}else{g=this._getSegmentInterpolator(g,
f);f=this._params.arrowSubdivisions+1&-2;for(var x=p=null,y=0;y<f;++y){var w=y/(f-1),z=k.sv3d.get();m=k.sv3d.get();g.eval(w,z);c.worldUpAtPosition(z,m);y===f/2-1?p=z:y===f/2&&(x=z);r(z,m)}n&&n.update(p,x)}e=new C(I.createPolylineGeometry(q,t),e);a.removeAllGeometries();a.addGeometry(e,b,d)};b.prototype._quadGeometryData=function(a,b,e,g,f){var c=k.sv3d.get(),d=[],m=k.sv3d.get();l.vec3.scale(m,e,g);e=k.sv3d.get();l.vec3.scale(e,b,-g);for(b=0;4>b;++b)l.vec3.copy(c,a),l.vec3.subtract(c,c,f),b&1&&l.vec3.add(c,
c,m),b&2&&l.vec3.add(c,c,e),d.push(c[0],c[1],c[2]);return new M({position:{size:3,data:d}},{position:new Uint32Array([0,1,2,1,2,3])})};b.prototype._updateLabel=function(a,b,e,d,f,h,l,m){var c=t.castScreenPointArray(k.sv2d.get()),g=t.castScreenPointArray(k.sv2d.get());b=B.computeLabelPositionFromSegment(m,b,e,d,c,g);a.updatePosition(c,g);a.text=f;a.visible=b&&h;a.fontSize=l};b.prototype._updateCursorPosition=function(){this._model.cursorPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.cursorPoint,
this._cursorPosition);this._updateLaserLine()};b.prototype._updateStartPosition=function(){this._model.startPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.startPoint,this._startPosition)};b.prototype._updateEndPosition=function(){this._model.endPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.endPoint,this._endPosition)};b.prototype._getFocusPosition=function(){var a=this._model,b=a.triangleView.visible&&a.triangleView.collapsed&&"euclidean"===a.measurementMode;
switch(a.state){case "drawing":return b?this._startPosition:a.endPoint?this._endPosition:this._startPosition;case "editing":return b?"start"===this._lastDraggedHandle?this._endPosition:this._startPosition:"start"===this._lastDraggedHandle?this._startPosition:this._endPosition;default:return a.cursorPoint?this._cursorPosition:null}};b.prototype._getFocusSpherePosition=function(){return"drawing"===this._model.state||"end"===this._lastDraggedHandle?this._startPosition:this._endPosition};b.prototype._updateLaserLine=
function(){var a=this._model,b=this._getFocusPosition(),e=this._params.laserLineEnabled&&!!b&&"measured"!==a.state&&a.active;e?(this._laserLineRenderer.focusPlaneActive=e&&"euclidean"===a.measurementMode,this._laserLineRenderer.focusSphereActive=e&&!!a.startPoint&&"geodesic"===a.measurementMode,this._laserLineRenderer.focusPosition=b,this._laserLineRenderer.focusSpherePosition=this._getFocusSpherePosition(),this._laserLineRenderer.segmentActive=e&&a.triangleView.visible&&!a.triangleView.collapsed,
this._laserLineRenderer.segmentStartPosition=this._startPosition,this._laserLineRenderer.segmentEndPosition=this._endPosition):(this._laserLineRenderer.focusPlaneActive=!1,this._laserLineRenderer.focusSphereActive=!1,this._laserLineRenderer.segmentActive=!1)};b.prototype._initializeListeners=function(){var a=this;this._listenerHandles=new E;this._listenerHandles.add([this._model.watch("state",function(){a._updateLaserLine()}),this._model.watch("measurementMode",function(){a._updateLaserLine()}),this._model.watch("hoveredHandle",
function(){a._updateView()}),this._model.watch("cursorPoint",function(){a._updateCursorPosition()}),this._model.watch("startPoint",function(){a._updateStartPosition();a._updateView();a._updateLaserLine()}),this._model.watch("endPoint",function(){a._updateEndPosition();a._updateView();a._updateLaserLine()}),this._model.watch("unit",function(){a._updateView()}),this._model.watch("active",function(){a._updateLaserLine();a._updateView()}),this._sceneView.state.watch("camera",function(){a._updateView()})])};
b.prototype._destroyListeners=function(){this._listenerHandles.destroy();this._listenerHandles=null};return b}();(function(b){var a=function(){return function(){}}();b.PickRequest=a;a=function(){return function(a,b,d){void 0===a&&(a=null);void 0===b&&(b=null);void 0===d&&(d=null);this.type=a;this.scenePoint=b;this.mapPoint=d}}();b.PickResult=a})(n||(n={}));var J=Math.cos(p.deg2rad(12));return n});