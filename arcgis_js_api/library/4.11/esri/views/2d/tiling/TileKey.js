// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/ObjectPool"],function(g,h,f){return function(){function b(a,b,c,d){this.set(a,b,c,d)}b.from=function(a,e,c,d){return b.pool.acquire(a,e,c,d)};b.getId=function(a,b,c,d){return"object"===typeof a?a.level+"/"+a.row+"/"+a.col+"/"+a.world:a+"/"+b+"/"+c+"/"+d};Object.defineProperty(b.prototype,"key",{get:function(){return this},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"id",{get:function(){return this.toString()},enumerable:!0,configurable:!0});
b.prototype.equals=function(a){return this.level===a.level&&this.row===a.row&&this.col===a.col&&this.world===a.world};b.prototype.release=function(){this.world=this.col=this.row=this.level=0};b.prototype.set=function(a,b,c,d){null==a?this.world=this.col=this.row=this.level=0:"object"===typeof a?(this.level=a.level||0,this.row=a.row||0,this.col=a.col||0,this.world=a.world||0):"string"===typeof a?(a=a.split("/"),b=a[1],c=a[2],d=a[3],this.level=parseFloat(a[0]),this.row=parseFloat(b),this.col=parseFloat(c),
this.world=parseFloat(d)):(this.level=+a,this.row=+b,this.col=+c,this.world=+d||0);return this};b.prototype.toString=function(){return this.level+"/"+this.row+"/"+this.col+"/"+this.world};b.prototype.getChildKeys=function(){var a=this.level+1,e=this.row<<1,c=this.col<<1,d=this.world;return[b.pool.acquire(a,e,c,d),b.pool.acquire(a,e,c+1,d),b.pool.acquire(a,e+1,c,d),b.pool.acquire(a,e+1,c+1,d)]};b.prototype.compareRowMajor=function(a){return this.row<a.row?-1:this.row>a.row?1:this.col<a.col?-1:this.col>
a.col?1:0};b.sort=function(a){return a.map(function(a){return b.from(a)}).sort(function(a,b){return a.compareRowMajor(b)}).map(function(a){return a.id})};b.pool=new f(b,!0,null,25,50);return b}()});