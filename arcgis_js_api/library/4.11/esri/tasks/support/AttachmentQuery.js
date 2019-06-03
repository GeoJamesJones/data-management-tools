// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators".split(" "),function(k,l,f,c,g,h,b){return function(e){function a(a){a=e.call(this,a)||this;a.attachmentTypes=null;a.globalIds=null;a.num=null;a.objectIds=null;a.returnMetadata=!1;a.size=null;a.start=null;a.where=null;return a}f(a,e);d=a;a.prototype.writeStart=function(a,b,c){b.resultOffset=this.start;b.resultRecordCount=
this.num||10};a.prototype.clone=function(){return new d(h.clone({attachmentTypes:this.attachmentTypes,where:this.where,globalIds:this.globalIds,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))};var d;c([b.property({type:[String],json:{write:!0}})],a.prototype,"attachmentTypes",void 0);c([b.property({type:[Number],json:{write:!0}})],a.prototype,"globalIds",void 0);c([b.property({type:Number,json:{read:{source:"resultRecordCount"}}})],a.prototype,
"num",void 0);c([b.property({type:[Number],json:{write:!0}})],a.prototype,"objectIds",void 0);c([b.property({type:Boolean,json:{default:!1,write:!0}})],a.prototype,"returnMetadata",void 0);c([b.property({type:[Number],json:{write:!0}})],a.prototype,"size",void 0);c([b.property({type:Number,json:{read:{source:"resultOffset"}}})],a.prototype,"start",void 0);c([b.writer("start"),b.writer("num")],a.prototype,"writeStart",null);c([b.property({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],
a.prototype,"where",void 0);return a=d=c([b.subclass("esri.tasks.support.AttachmentQuery")],a)}(b.declared(g))});