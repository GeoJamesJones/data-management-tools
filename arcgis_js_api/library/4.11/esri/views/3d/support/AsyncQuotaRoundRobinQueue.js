// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/arrayUtils","../webgl-engine/lib/Util"],function(k,l,h,g){return function(){function c(a,b,c,d){this.workerFunc=a;this.robin=0;this.type2id={};this.tasks=[];this.typeNumWorkers=[];this.typeWorkerQuota=[];this.typeStatistics=[];this.numTypes=this.maxTotalNumWorkers=this.totalNumWorkers=0;for(var e in d)this.type2id[e]=this.tasks.length,this.tasks.push([]),this.typeNumWorkers.push(0),this.typeStatistics.push({requests:0,size:0,duration:0,speed:0}),this.typeWorkerQuota.push(d[e]),
this.maxTotalNumWorkers+=d[e];this.numTypes=this.tasks.length;var f=this;this.taskCallback=function(a){a._cancelledInQueue||(b.apply(c,arguments),f.taskFinished(a))}}c.prototype.setWorkerQuota=function(a){g.assert(h.equals(Object.keys(this.typeWorkerAllocation),Object.keys(a)));this.typeWorkerAllocation=a;this.maxTotalNumWorkers=0;for(var b in a)this.typeWorkerQuota[this.type2id[b]]=a[b],this.maxTotalNumWorkers+=a[b]};c.prototype.push=function(a){var b=this.type2id[a.clientType];this.totalNumWorkers<
this.maxTotalNumWorkers?(this.typeNumWorkers[b]++,this.totalNumWorkers++,this.workerFunc(a,this.taskCallback)):this.tasks[b].push(a)};c.prototype._getStatsForType=function(a){a=this.type2id[a];return{quota:this.typeWorkerQuota[a],workers:this.typeNumWorkers[a],queueSize:this.tasks[a].length,requestStats:this.typeStatistics[a]}};c.prototype.removeTasks=function(a,b){for(var c=[],d=0,e=this.tasks[this.type2id[b]];d<e.length;d++){var f=e[d];-1===a.indexOf(f)&&c.push(f)}this.tasks[this.type2id[b]]=c};
c.prototype.workerCancelled=function(a){this.taskFinished(a);a._cancelledInQueue=!0};c.prototype.clear=function(){for(var a=0;a<this.tasks.length;a++)this.tasks[a]=[]};c.prototype.taskFinished=function(a){var b=this.type2id[a.clientType];this.typeNumWorkers[b]--;this.totalNumWorkers--;this.typeStatistics[b].requests++;this.typeStatistics[b].size+=a.size||0;this.typeStatistics[b].duration+=a.duration||0;this.typeStatistics[b].speed=0<this.typeStatistics[b].duration?this.typeStatistics[b].size/this.typeStatistics[b].duration:
0;g.assert(0<=this.typeNumWorkers[b]);this.next()};c.prototype.next=function(){var a=this.robin,b=!1;do this.typeNumWorkers[a]<this.typeWorkerQuota[a]&&this.processQueue(a)&&(b=!0),a=(a+1)%this.numTypes;while(!b&&a!==this.robin);if(!b){do this.processQueue(a)&&(b=!0),a=(a+1)%this.numTypes;while(!b&&a!==this.robin)}this.robin=a};c.prototype.processQueue=function(a){for(;0<this.tasks[a].length;)if(this.workerFunc(this.tasks[a].shift(),this.taskCallback))return this.typeNumWorkers[a]++,this.totalNumWorkers++,
!0;return!1};Object.defineProperty(c.prototype,"test",{get:function(){var a=this;return{set workerFunc(b){a.workerFunc=b}}},enumerable:!0,configurable:!0});return c}()});