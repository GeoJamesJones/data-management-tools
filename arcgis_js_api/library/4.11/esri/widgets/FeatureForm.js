// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/date/locale ../moment ../core/accessorSupport/decorators ../layers/support/domains ../layers/support/fieldUtils ./Widget ./FeatureForm/FeatureFormViewModel ./support/widget".split(" "),function(z,A,l,t,k,p,n,f,u,v,w,x,e){var q={datePattern:"M/d/y",timePattern:"h:mm:ss a"};return function(r){function c(a){a=r.call(this)||this;a._fieldFocusNeeded=!1;a._activeDateEdit=null;
a._activeInputName=null;a.feature=null;a.fieldConfig=null;a.groupDisplay="all";a.layer=null;a.strict=null;a.viewModel=new x;a._handleFormKeyDown=a._handleFormKeyDown.bind(a);a._handleInputBlur=a._handleInputBlur.bind(a);a._handleInputFocus=a._handleInputFocus.bind(a);a._handleNumberInputMouseDown=a._handleNumberInputMouseDown.bind(a);a._handleInputKeyDown=a._handleInputKeyDown.bind(a);a._handleOptionChange=a._handleOptionChange.bind(a);a._handleGroupClick=a._handleGroupClick.bind(a);a._handleSubmit=
a._handleSubmit.bind(a);a._afterScrollerCreateOrUpdate=a._afterScrollerCreateOrUpdate.bind(a);return a}t(c,r);c.prototype.postInitialize=function(){var a=this;this.own(this.watch("feature",function(){var b=a.viewModel.inputFields[0],b=b&&b.inputFields?b.inputFields[0]:b;a._activeInputName=b&&b.name;a._fieldFocusNeeded=!0}),this.on("submit",function(b){0<b.invalid.length&&(a._activeInputName=b.invalid[0],a._fieldFocusNeeded=!0,a.scheduleRender())}))};c.prototype.getValues=function(){return null};c.prototype.submit=
function(){return null};c.prototype.render=function(){var a=this.viewModel.state;return e.tsx("div",{class:this.classes("esri-feature-form","esri-widget","esri-widget--panel")},"ready"===a?this.renderForm():null)};c.prototype.renderForm=function(){return e.tsx("form",{class:"esri-feature-form__form",novalidate:!0,onsubmit:this._handleSubmit,onkeydown:this._handleFormKeyDown},this.renderFields())};c.prototype.renderFields=function(){var a=this;return this.viewModel.inputFields.map(function(b,d){return b&&
b.inputFields?a.renderGroup(b,d):a.renderLabeledField(b)})};c.prototype.renderGroup=function(a,b){var d=this,c=a.description,g=a.label,m=a.inputFields,h=this.viewModel.findField(this._activeInputName),h=h&&h.group===a,y=this.id+"_group_"+b,l=this.id+"_group-label_"+b,f=this.id+"_group-description_"+b,k=c?e.tsx("p",{class:this.classes("esri-feature-form__group-description","esri-feature-form__description-text"),id:f},c):null,n="sequential"===this.groupDisplay,p=n?h?"true":"false":void 0;return e.tsx("fieldset",
{class:this.classes("esri-feature-form__group",n?"esri-feature-form__group--sequential":null,!n||h?null:"esri-feature-form__group--collapsed",h?"esri-feature-form__group--active":null),"aria-expanded":p,"aria-labelledby":l,"aria-describedby":c?f:"","data-group":a,id:y,key:b,onclick:this._handleGroupClick},e.tsx("div",{class:"esri-feature-form__group-label",id:l},g),k,m.map(function(a){return d.renderLabeledField(a)}))};c.prototype._getFocusableInput=function(a,b){var d=this.viewModel._allInputFields;
a="forward"===a?d:d.slice().reverse();for(b=a.indexOf(b)+1;b<a.length;b++)if(d=a[b],d.visible&&d.editable)return d;return null};c.prototype.renderLabeledField=function(a){return e.tsx("label",{key:a.layer.id+"-"+a.name,class:"esri-feature-form__label"},[a.label,"unsupported"!==a.type?this.renderInputField(a):this.renderUnsupportedField(a),this.renderAuxiliaryText(a)])};c.prototype.renderInputField=function(a){var b=a.domain,d=a.editable,c=a.type,g=this.viewModel.getValue(a.name),d=!d,m=this.getCommonInputProps(a);
return b&&"coded-value"===b.type&&!d?this.renderSelectInputField(g,b.codedValues.map(function(a){return{value:a.code,name:a.name}}),m):"text"===c&&"text-area"===a.editorType||"rich-text"===a.editorType?e.tsx("textarea",l({},m)):"date"===c?this.renderDateInputField(g,m):e.tsx("input",l({type:"text"===c?"text":"number"},m))};c.prototype.renderDateInputField=function(a,b){var d=this._formatDate(0),c=d.date,d=d.time,g=this.id+"-"+b.key,m=g+"-date",g=g+"-time",h=b["data-field"];return e.tsx("div",{key:b.key+
"-date",class:"esri-feature-form__date-input-container"},e.tsx("div",{class:"esri-feature-form__date-input-part"},e.tsx("input",l({"aria-label":h.label,"aria-describedby":m,type:"text"},b,{"data-date-part":"date",class:this.classes(b.class,"esri-feature-form__input--date"),value:this._formatDate(a).date})),e.tsx("div",{class:"esri-feature-form__date-format-hint",id:m},c)),e.tsx("div",{class:"esri-feature-form__date-input-part"},e.tsx("input",l({"aria-describedby":g,"aria-label":h.label,type:"text"},
b,{"data-date-part":"time",class:this.classes(b.class,"esri-feature-form__input--time"),value:this._formatDate(a).time})),e.tsx("div",{class:"esri-feature-form__date-format-hint",id:g},d)))};c.prototype.renderUnsupportedField=function(a){a=this.viewModel.getValue(a.name);return e.tsx("input",{class:this.classes("esri-input","esri-feature-form__input","esri-feature-form__input--disabled"),disabled:!0,type:"text",value:""+a})};c.prototype.renderSelectInputField=function(a,b,d){var c=!1;b=b.map(function(b){b.value===
a&&(c=!0);return e.tsx("option",{value:""+b.value,key:b.name},b.name)});null==a||""===a||c||b.unshift(e.tsx("option",{value:""+a,key:"outlier-option"},a));var g=d["data-field"];g.required||null!=g.value||b.unshift(e.tsx("option",{value:"",key:"empty-option"}));return e.tsx("select",l({},d,{class:this.classes(d.class,"esri-select"),onchange:this._handleOptionChange}),b)};c.prototype.renderAuxiliaryText=function(a){if(!a.valid)return e.tsx("div",{key:"error-message"},e.tsx("span",{class:this.classes("esri-feature-form__input-icon--invalid",
"esri-icon-notice-triangle")}),e.tsx("div",{class:"esri-feature-form__field-error-message"},a.errorMessage));if(a.valid&&a.description)return e.tsx("div",{key:"description",class:"esri-feature-form__description-text"},a.description)};c.prototype.getCommonInputProps=function(a){var b=a.editable,d=a.name,c=a.required,g=a.maxLength,e=a.hint,h=a.type,f=a.valid,k=this.viewModel.getValue(d),b=!b;return l({afterCreate:this._afterScrollerCreateOrUpdate,afterUpdate:this._afterScrollerCreateOrUpdate,"aria-invalid":f?
"false":"true",class:this.classes("esri-input","esri-feature-form__input",b?"esri-feature-form__input--disabled":null,f?null:"esri-feature-form__input--invalid"),key:d,maxlength:-1<g?""+g:""},this._getNumberFieldConstraints(a),{disabled:b,value:null==k?"":""+k,"data-field":a,onfocus:this._handleInputFocus,onblur:this._handleInputBlur,onkeydown:this._handleInputKeyDown,onmousedown:"number"===h?this._handleNumberInputMouseDown:null,required:c,title:e})};c.prototype._handleNumberInputMouseDown=function(a){a=
a.target;a.disabled||a.focus();this.scheduleRender()};c.prototype._getNumberFieldConstraints=function(a){return(a=u.getDomainRange(a.domain)||v.getFieldRange(a.field))&&a.max!==Number.MAX_VALUE&&a.min!==Number.MIN_VALUE?a:{min:null,max:null}};c.prototype._afterScrollerCreateOrUpdate=function(a){var b=a["data-field"],d=this.viewModel.findField(this._activeInputName);b.editable&&this._fieldFocusNeeded&&d===b&&(this._fieldFocusNeeded=!1,a.focus())};c.prototype._handleInputFocus=function(a){this._activeInputName=
a.target["data-field"].name};c.prototype._handleInputBlur=function(a){var b,d=a.target,c=d["data-field"],g=(a=a.relatedTarget)&&a["data-field"];if("date"===c.type){var e=d.getAttribute("data-date-part");this._activeDateEdit=l({},this._activeDateEdit,(b={},b[e]={value:d.value,input:d},b))}g&&"date"===c.type&&"date"===g.type&&c.field===g.field?""!==d.value&&""===a.value&&(e=a.getAttribute("data-date-part"),a.value=this._formatDate(Date.now())[e]):(this._commitValue(d),this.scheduleRender())};c.prototype._commitValue=
function(a){var b=a["data-field"];if(this._activeDateEdit){var d=this._activeDateEdit;a=d.date;var d=d.time,c=this._getDateEditValue(b,"date"),b=this._getDateEditValue(b,"time"),g=""===c||""===b;a&&(a=a.input,a.value=g?"":c,this._updateFieldValue(a));d&&(a=d.input,a.value=g?"":b,this._updateFieldValue(a));this._activeDateEdit=null}else this._updateFieldValue(a)};c.prototype._getDateEditValue=function(a,b){var d=this._activeDateEdit[b];if(d)return""===d.value?"":(d=this._parseDate(d.value,b))?this._formatDate(d.getTime())[b]:
this._formatDate(a.value)[b]};c.prototype._handleInputKeyDown=function(a){var b=a.key,d=a.altKey,c=a.ctrlKey,g=a.metaKey,e=a.shiftKey;if("Tab"===b){var h=a.target,f=h["data-field"],b=e?"backward":"forward",d=h.getAttribute("data-date-part");"backward"===b&&"time"===d||"forward"===b&&"date"===d||(this._commitValue(h),d=this.viewModel.findField(f.name),this._activeInputName=(b=this._getFocusableInput(b,d))&&b.name,b?(a.preventDefault(),this._fieldFocusNeeded=!0):this.renderNow())}else"Enter"!==b?(h=
a.target,f=h["data-field"],f=f.field.type,h="single"===f||"double"===f,"integer"!==f&&"small-integer"!==f&&!h||d||c||g||1!==b.length||(d=Number(b),c=["-","+"],g=["e","."],c=h?c.concat(g):c,isNaN(d)&&-1===c.indexOf(b)&&a.preventDefault())):(this._updateFieldValue(a.target),this.scheduleRender())};c.prototype._updateFieldValue=function(a){this.viewModel.setValue(a["data-field"].name,this._parseValue(a))};c.prototype._parseValue=function(a){var b=a["data-field"],d=a.value,c=b.type;if(!b.required&&""===
d)return null;if("number"===c)return parseFloat(d);if("date"===c){if(!d)return null;a=a.getAttribute("data-date-part");c=Number(d);if(!isNaN(c))return c;d=this._parseDate(d,a);if(!d)return null;var d=n(d),e=b.domain,f=n(),c=f;e&&"range"===e.type&&(e=n(e.maxValue),f.isAfter(e)||(c=e));b=this.viewModel.getValue(b.name);b=n(null!=b?b:c);"date"===a?(d.hour(b.hour()),d.minutes(b.minutes()),d.seconds(b.seconds())):(d.date(b.date()),d.month(b.month()),d.year(b.year()));return d.valueOf()}return d};c.prototype._handleOptionChange=
function(a){this._updateFieldValue(a.target);this.scheduleRender()};c.prototype._handleGroupClick=function(a){a=a.currentTarget;"false"===a.getAttribute("aria-expanded")&&(this._activeInputName=a["data-group"].inputFields[0].name,this._fieldFocusNeeded=!0,this.scheduleRender())};c.prototype._handleSubmit=function(a){a.preventDefault()};c.prototype._handleFormKeyDown=function(a){"Enter"===a.key&&this.viewModel.submit()};c.prototype._formatDate=function(a){if(null==a)return{date:"",time:""};a=new Date(a);
return{date:p.format(a,l({selector:"date"},q)),time:p.format(a,l({selector:"time"},q))}};c.prototype._parseDate=function(a,b){return null==a||""===a?null:p.parse(a,l({selector:b},q))};k([f.aliasOf("viewModel.feature")],c.prototype,"feature",void 0);k([f.aliasOf("viewModel.fieldConfig")],c.prototype,"fieldConfig",void 0);k([f.property(),e.renderable()],c.prototype,"groupDisplay",void 0);k([f.aliasOf("viewModel.layer")],c.prototype,"layer",void 0);k([f.aliasOf("viewModel.strict")],c.prototype,"strict",
void 0);k([f.property(),e.renderable(["viewModel.inputFields","viewModel.state"]),e.vmEvent(["value-change","submit"])],c.prototype,"viewModel",void 0);k([f.aliasOf("viewModel.getValues")],c.prototype,"getValues",null);k([f.aliasOf("viewModel.submit")],c.prototype,"submit",null);return c=k([f.subclass("esri.widgets.FeatureForm")],c)}(f.declared(w))});