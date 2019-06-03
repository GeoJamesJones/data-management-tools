// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/Collection ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/accessorSupport/decorators ../../../../draw/support/drawUtils ../../../../interactive/GraphicManipulator ../../../../interactive/InteractiveToolBase".split(" "),function(g,e,f,m,n,p,q,c,r,t,u){Object.defineProperty(e,"__esModule",{value:!0});var h=function(){return function(b){this.allGraphics=
b;this.type="graphic-move-start"}}();e.GraphicMoveStartEvent=h;var k=function(){return function(b,a,v){this.dx=b;this.dy=a;this.allGraphics=v;this.type="graphic-move"}}();e.GraphicMoveEvent=k;var l=function(){return function(b){this.allGraphics=b;this.type="graphic-move-stop"}}();e.GraphicMoveStopEvent=l;g=function(b){function a(a){a=b.call(this,a)||this;a.graphics=new n;a.type="move-3d";a._handles=new q;return a}m(a,b);a.prototype.initialize=function(){};a.prototype.destroy=function(){this._handles.destroy();
this._handles=null;this.graphics.removeAll();this._set("view",null)};a.prototype.reset=function(){this.graphics.removeAll()};a.prototype.onAttach=function(a){var d=this;this._handles.add(this.graphics.on("change",function(){d._refreshGraphicManipulators(a)}));this._refreshGraphicManipulators(a)};a.prototype.onDetach=function(){this._handles.removeAll()};a.prototype._refreshGraphicManipulators=function(a){var d=this;this._handles.remove("graphics");a.removeManipulators();var b=this.graphics.toArray().map(function(b){b=
new t.GraphicManipulator({graphic:b,view:d.view,selectable:!0});a.addManipulator(b);return b}),c=0;b.forEach(function(a){a.on("drag",function(c){b.forEach(function(b){if("mesh"===b.graphic.geometry.type)return!1;b!==a&&(b.graphic.geometry=r.move(b.graphic.geometry.clone(),c.dxMap,c.dyMap))});d.emit("graphic-move",new k(c.dx,c.dy,d.graphics.toArray()))});a.on("click",function(){return d.emit("click")});var e=a.watch("dragging",function(e){e?(c++,1===c&&(d.emit("graphic-move-start",new h(d.graphics.toArray())),
b.forEach(function(b){b!==a&&(b.interactive=!1)}))):(c--,0===c&&(d.emit("graphic-move-stop",new l(d.graphics.toArray())),b.forEach(function(a){a.interactive=!0})))},!0),f=a.watch("hovering",function(a){d.cursor=a?"move":null},!0);d._handles.add(e,"graphics");d._handles.add(f,"graphics")})};f([c.property({constructOnly:!0,nonNullable:!0})],a.prototype,"view",void 0);f([c.property({readOnly:!0})],a.prototype,"graphics",void 0);f([c.property({value:null})],a.prototype,"cursor",void 0);f([c.property({readOnly:!0})],
a.prototype,"type",void 0);return a=f([c.subclass("esri.views.3d.interactive.editingTools.graphicMove3D.GraphicMove3DTool")],a)}(c.declared(u,p));e.GraphicMove3DTool=g});