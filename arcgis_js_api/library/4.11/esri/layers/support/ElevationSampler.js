// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../geometry ../../core/compilerUtils ../../core/Logger ../../core/unitUtils ../../geometry/support/aaBoundingRect ../../geometry/support/contains ../../geometry/support/webMercatorUtils".split(" "),function(r,g,w,x,y,z,k,A,t){function p(a,b){var e=m(a,b.spatialReference);if(!e)return null;switch(a.type){case "point":a.z=b.elevationAt(e)||0;break;case "polyline":h.spatialReference=e.spatialReference;for(var c=a.hasM&&!a.hasZ,f=0;f<a.paths.length;f++)for(var d=a.paths[f],
l=e.paths[f],g=0;g<d.length;g++){var k=d[g],n=l[g];h.x=n[0];h.y=n[1];n=b.elevationAt(h)||0;c&&(k[3]=k[2]);k[2]=n}a.hasZ=!0;break;case "multipoint":h.spatialReference=e.spatialReference;c=a.hasM&&!a.hasZ;for(f=0;f<a.points.length;f++)d=a.points[f],l=e.points[f],h.x=l[0],h.y=l[1],l=b.elevationAt(h)||0,c&&(d[3]=d[2]),d[2]=l;a.hasZ=!0;break;default:x.neverReached(a)}return a}function m(a,b){var e=a.spatialReference;return e.equals(b)?a:t.canProject(e,b)?t.project(a,b):(q.error("Cannot project geometry spatial reference (wkid:"+
e.wkid+") to elevation sampler spatial reference (wkid:"+b.wkid+")"),null)}Object.defineProperty(g,"__esModule",{value:!0});var q=y.getLogger("esri.layers.support.ElevationSampler"),v=function(){function a(b,a,c){this.tile=b;this.noDataValue=c;this.extent=k.toExtent(b.tile.extent,a.spatialReference);c=z.getMetersPerUnitForSR(a.spatialReference);b=a.lodAt(b.tile.level).resolution*c;this.demResolution={min:b,max:b}}Object.defineProperty(a.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},
enumerable:!0,configurable:!0});a.prototype.contains=function(b){b=m(b,this.spatialReference);return A.extentContainsPoint(this.extent,b)};a.prototype.elevationAt=function(b){var a=m(b,this.spatialReference);if(!a)return null;if(!this.contains(b)){var c=this.extent;q.warn("#elevationAt()","Point used to sample elevation ("+b.x+", "+b.y+") is outside of the sampler extent ("+(c.xmin+", "+c.ymin+", "+c.xmax+", "+c.ymax)+")")}return this.tile.sample(a.x,a.y)};a.prototype.queryElevation=function(b){return p(b.clone(),
this)};a.prototype.on=function(b,a){return u};return a}();g.TileElevationSampler=v;r=function(){function a(b,a,c){var e=this,d;"number"===typeof a?(this.noDataValue=a,d=null):(d=a,this.noDataValue=c);this.samplers=d?b.map(function(a){return new v(a,d,e.noDataValue)}):b;if(b=this.samplers[0])for(this.extent=b.extent.clone(),b=b.demResolution,this.demResolution={min:b.min,max:b.max},b=1;b<this.samplers.length;b++)a=this.samplers[b],this.extent.union(a.extent),this.demResolution.min=Math.min(this.demResolution.min,
a.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,a.demResolution.max);else this.extent=k.toExtent(k.create(),d.spatialReference),this.demResolution={min:0,max:0}}Object.defineProperty(a.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0});a.prototype.elevationAt=function(a){var b=m(a,this.spatialReference);if(!b)return null;for(var c=0,f=this.samplers;c<f.length;c++){var d=f[c];if(d.contains(b))return d.elevationAt(b)}q.warn("#elevationAt()",
"Point used to sample elevation ("+a.x+", "+a.y+") is outside of the sampler");return null};a.prototype.queryElevation=function(a){return p(a.clone(),this)};a.prototype.on=function(a,e){return u};return a}();g.MultiTileElevationSampler=r;g.updateGeometryElevation=p;var h=new w.Point,u={remove:function(){}}});