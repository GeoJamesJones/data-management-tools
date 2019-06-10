// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/lang ../core/accessorSupport/decorators ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),function(q,r,k,c,l,d,b,m,n,e,p){var g=l.ofType({base:null,key:"type",typeMap:{text:n}});return function(h){function a(a){a=h.call(this)||this;a.verticalOffset=null;a.callout=null;a.styleOrigin=null;a.symbolLayers=new g;a.type="label-3d";return a}
k(a,h);f=a;a.prototype.supportsCallout=function(){return!0};a.prototype.hasVisibleCallout=function(){return e.hasVisibleCallout(this)};a.prototype.hasVisibleVerticalOffset=function(){return e.hasVisibleVerticalOffset(this)};a.prototype.clone=function(){return new f({styleOrigin:d.clone(this.styleOrigin),symbolLayers:d.clone(this.symbolLayers),thumbnail:d.clone(this.thumbnail),callout:d.clone(this.callout),verticalOffset:d.clone(this.verticalOffset)})};var f;c([b.property({type:p.default,json:{write:!0}})],
a.prototype,"verticalOffset",void 0);c([b.property(e.calloutProperty)],a.prototype,"callout",void 0);c([b.property({json:{read:!1,write:!1}})],a.prototype,"styleOrigin",void 0);c([b.property({type:g})],a.prototype,"symbolLayers",void 0);c([b.enumeration.serializable()({LabelSymbol3D:"label-3d"})],a.prototype,"type",void 0);return a=f=c([b.subclass("esri.symbols.LabelSymbol3D")],a)}(b.declared(m))});