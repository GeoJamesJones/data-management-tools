// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../Color ./size ./support/colors ./support/utils".split(" "),function(p,y,v,g,r,w,m){function t(b,a){return b.map(function(b){b=new g(b);null!=a&&(b.a=a);return b})}function u(b,a,c,d,e){b=w[b];e=t(b[e]||b.stops);var f=new g(a.noDataColor),k=a.fillOpacity||1,h;if(b)switch(c){case "point":h={colors:e,noDataColor:f,opacity:k,sizeScheme:d,outline:{color:new g(a.outline.color),width:a.outline.width},size:a.size};break;case "polyline":h=
{colors:e,noDataColor:f,opacity:k,sizeScheme:d,width:a.width};break;case "polygon":d&&d.marker&&null!=a.markerSize&&(d.marker.size=a.markerSize);h={colors:e,noDataColor:f,opacity:k,sizeScheme:d,outline:{color:new g(a.outline.color),width:a.outline.width}};break;case "mesh":h={colors:e,noDataColor:f,opacity:k}}return h}function x(b,a,c){a=n[a];c=m.getStorageType(c);return(c=a&&a[c])&&c[b]}p={color:[153,153,153,.25],width:"1px"};var l={default:{name:"default",label:"Default",description:"Default theme for visualizing features by their predominant category.",
basemapGroups:{light:"streets gray topo terrain national-geographic oceans osm gray-vector streets-vector topo-vector streets-relief-vector streets-navigation-vector".split(" "),dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},pointSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:p,size:"8px"},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},
dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,26,26,.25],width:"1px"},size:"8px"},primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}},polylineSchemes:{light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},
dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}},polygonSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:p,fillOpacity:.8,markerSize:"8px"},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},
dark:{common:{noDataColor:"#aaaaaa",outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8,markerSize:"8px"},primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}}}},n={};(function(){for(var b in l){var a=l[b],c=a.basemapGroups,d=n[b]={basemaps:[].concat(c.light).concat(c.dark),point:{},polyline:{},polygon:{}},e;for(e in c)for(var f=
c[e],k=0;k<f.length;k++){var h=f[k];a.pointSchemes&&(d.point[h]=a.pointSchemes[e]);a.polylineSchemes&&(d.polyline[h]=a.polylineSchemes[e]);a.polygonSchemes&&(d.polygon[h]=a.polygonSchemes[e])}}})();var q={getThemes:function(b){var a=[],c;for(c in l){var d=l[c],e=n[c],f=m.getBasemapId(b,e.basemaps);f&&-1===e.basemaps.indexOf(f)||a.push({name:d.name,label:d.label,description:d.description,basemaps:e.basemaps.slice(0)})}return a},getSchemes:function(b){var a=b.basemap,c=b.geometryType,d=b.numColors,
e=b.worldScale,f=b.view,k=b.theme||"default",h="mesh"!==c&&e;b=m.getBasemapId(a,n[k].basemaps);var g=x(b,k,c),l=(a=r.getSchemes({basemap:a,geometryType:c,worldScale:e,view:f}))&&a.primaryScheme;if(g)return a=u(g.primary,g.common,c,l,d),{primaryScheme:h?q.toWorldScale({scheme:a,view:f}):a,secondarySchemes:g.secondary.map(function(a){a=u(a,g.common,c,l,d);return h?q.toWorldScale({scheme:a,view:f}):a}),basemapId:b}},cloneScheme:function(b){var a;b&&(a=v({},b),a.colors=t(a.colors),a.noDataColor&&(a.noDataColor=
new g(a.noDataColor)),a.outline&&(a.outline={color:a.outline.color&&new g(a.outline.color),width:a.outline.width}),a.sizeScheme&&(a.sizeScheme=r.cloneScheme(a.sizeScheme)));return a},toWorldScale:function(b){if(b.scheme&&b.view){var a=b.scheme,c=b.scheme,d=b.scheme;if(a.hasOwnProperty("size"))return a.size&&(a.size=m.toWorldScale(a.size,b.view)),a;if(c.hasOwnProperty("width"))return c.width&&(c.width=m.toWorldScale(c.width,b.view)),c;if(d.sizeScheme&&d.sizeScheme.hasOwnProperty("marker"))return d.sizeScheme.marker.size&&
(d.sizeScheme.marker.size=m.toWorldScale(d.sizeScheme.marker.size,b.view)),c}return b.scheme}};return q});