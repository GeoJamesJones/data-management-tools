// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper ../core/tsSupport/paramHelper ../geometry ../core/urlUtils ../core/accessorSupport/decorators ./FeatureLayer ./graphics/data/QueryEngineCapabilities ./graphics/sources/CSVSource ../tasks/support/Query".split(" "),function(t,u,m,c,n,d,p,f,b,q,r,g,e){return function(h){function a(a,b){a=h.call(this)||this;a.delimiter=null;a.fields=null;a.latitudeField=null;a.locationType="coordinates";
a.longitudeField=null;a.operationalLayerType="CSV";a.outFields=["*"];a.portalItem=null;a.spatialReference=p.SpatialReference.WGS84;a.source=null;a.type="csv";return a}m(a,h);a.prototype.normalizeCtorArgs=function(a,b){return"string"===typeof a?n({url:a},b):a};Object.defineProperty(a.prototype,"capabilities",{get:function(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,
supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:r.queryCapabilities,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"hasService",{get:function(){return!1},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isTable",{get:function(){return this.loaded&&null==this.geometryType},enumerable:!0,configurable:!0});a.prototype.readWebMapLabelsVisible=function(a,b){return null!=b.showLabels?b.showLabels:!!(b.layerDefinition&&b.layerDefinition.drawingInfo&&b.layerDefinition.drawingInfo.labelingInfo)};Object.defineProperty(a.prototype,"url",{set:function(a){this._set("url",a)},enumerable:!0,configurable:!0});a.prototype.createGraphicsSource=function(){var a=
this,b=new g.default({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});this._set("source",b);return b.load().then(function(){a.read({locationInfo:b.locationInfo,columnDelimiter:b.columnDelimiter},{origin:"service",url:a.parsedUrl});return b})};a.prototype.queryFeatures=function(a,b){var c=this;return this.load().then(function(){return c.source.queryFeatures(a||
c.createQuery())}).then(function(a){if(a&&a.features)for(var b=0,l=a.features;b<l.length;b++){var k=l[b];k.layer=k.sourceLayer=c}return a})};a.prototype.queryObjectIds=function(a,b){var c=this;return this.load().then(function(){return c.source.queryObjectIds(a||c.createQuery())})};a.prototype.queryFeatureCount=function(a,b){var c=this;return this.load().then(function(){return c.source.queryFeatureCount(a||c.createQuery())})};a.prototype.queryExtent=function(a,b){var c=this;return this.load().then(function(){return c.source.queryExtent(a||
c.createQuery())})};a.prototype._verifyFields=function(){};a.prototype._verifySource=function(){};a.prototype._hasMemorySource=function(){return!0};c([b.property({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],a.prototype,"capabilities",null);c([b.property({type:String,json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],a.prototype,"delimiter",void 0);c([b.property({json:{read:{source:"layerDefinition.fields"}}})],a.prototype,"fields",void 0);c([b.property({readOnly:!0})],
a.prototype,"hasService",null);c([b.property({type:Boolean,readOnly:!0,dependsOn:["loaded"]})],a.prototype,"isTable",null);c([b.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],a.prototype,"readWebMapLabelsVisible",null);c([b.property({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],a.prototype,"latitudeField",void 0);c([b.property({type:["show","hide"]})],a.prototype,"listMode",
void 0);c([b.property({type:String,json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],a.prototype,"locationType",void 0);c([b.property({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],a.prototype,"longitudeField",void 0);c([b.property({type:["CSV"]})],a.prototype,"operationalLayerType",void 0);c([b.property()],a.prototype,"outFields",void 0);
c([b.property({json:{read:!1,write:!1}})],a.prototype,"portalItem",void 0);c([b.property({json:{read:!1},cast:null,type:g.default,readOnly:!0})],a.prototype,"source",void 0);c([b.property({json:{read:!1},value:"csv",readOnly:!0})],a.prototype,"type",void 0);c([b.property({json:{read:f.read,write:f.write}})],a.prototype,"url",null);c([d(0,b.cast(e))],a.prototype,"queryFeatures",null);c([d(0,b.cast(e))],a.prototype,"queryObjectIds",null);c([d(0,b.cast(e))],a.prototype,"queryFeatureCount",null);c([d(0,
b.cast(e))],a.prototype,"queryExtent",null);return a=c([b.subclass("esri.layers.CSVLayer")],a)}(b.declared(q))});