// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(g,d,e,b,f){Object.defineProperty(d,"__esModule",{value:!0});var c=function(a){return f.glslifyDefineMap({OVERLAY:a.overlay,ATMOSPHERE:a.atmosphere,WIREFRAME_TEXTURE:a.wireframeTexture,TILE_BORDERS:a.tileBorders,RECEIVE_SHADOWS:a.receiveShadows,SCREEN_SIZE_PERSPECTIVE:a.screenSizePerspective,ALPHA_ZERO:a.alphaZero,BIAS_SHADOWMAP:a.shadowMap,SLICE:a.slice})};d.colorPass=
{name:"terrain-color",shaders:function(a){return{vertexShader:c(a)+b.resolveIncludes("terrainRenderer/colorPass.vert"),fragmentShader:c(a)+b.resolveIncludes("terrainRenderer/colorPass.frag")}},attributes:e.Default3D};d.normalPass={name:"terrain-normal",shaders:function(a){return{vertexShader:c(a)+b.resolveIncludes("terrainRenderer/normalPass.vert"),fragmentShader:c(a)+b.resolveIncludes("terrainRenderer/normalPass.frag")}},attributes:e.Default3D};d.depthPass={name:"terrain-depth",shaders:function(a){return{vertexShader:c(a)+
b.resolveIncludes("terrainRenderer/depthPass.vert"),fragmentShader:c(a)+b.resolveIncludes("terrainRenderer/depthPass.frag")}},attributes:e.Default3D};d.highlightPass={name:"terrain-highlight",shaders:function(a){return{vertexShader:c(a)+b.resolveIncludes("terrainRenderer/highlightPass.vert"),fragmentShader:c(a)+b.resolveIncludes("terrainRenderer/highlightPass.frag")}},attributes:e.Default3D}});