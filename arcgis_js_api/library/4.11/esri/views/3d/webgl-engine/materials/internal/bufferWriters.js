// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../support/buffer/BufferView","../../lib/Util"],function(B,q,r,p){function x(l,e,a,d,f){var g=a.typedBuffer;a=a.typedBufferStride;var k=l.length;d*=a;if(null==f||1===f)for(var h=0;h<k;++h){var b=2*l[h];g[d]=e[b];g[d+1]=e[b+1];d+=a}else for(h=0;h<k;++h)for(var b=2*l[h],c=0;c<f;++c)g[d]=e[b],g[d+1]=e[b+1],d+=a}function u(l,e,a,d,f){var g=a.typedBuffer;a=a.typedBufferStride;var k=l.length;d*=a;if(null==f||1===f)for(var h=0;h<k;++h){var b=3*l[h];g[d]=e[b];g[d+1]=e[b+
1];g[d+2]=e[b+2];d+=a}else for(h=0;h<k;++h)for(var b=3*l[h],c=0;c<f;++c)g[d]=e[b],g[d+1]=e[b+1],g[d+2]=e[b+2],d+=a}function v(l,e,a,d,f){var g=a.typedBuffer;a=a.typedBufferStride;var k=l.length;d*=a;if(null==f||1===f)for(var h=0;h<k;++h){var b=4*l[h];g[d]=e[b];g[d+1]=e[b+1];g[d+2]=e[b+2];g[d+3]=e[b+3];d+=a}else for(h=0;h<k;++h)for(var b=4*l[h],c=0;c<f;++c)g[d]=e[b],g[d+1]=e[b+1],g[d+2]=e[b+2],g[d+3]=e[b+3],d+=a}function y(l,e,a,d,f,g){if(a){var k=d.typedBuffer;d=d.typedBufferStride;var h=l.length;
f*=d;if(null==g||1===g)for(var b=0;b<h;++b){var c=3*l[b],m=e[c],n=e[c+1],t=e[c+2];k[f]=a[0]*m+a[4]*n+a[8]*t+a[12];k[f+1]=a[1]*m+a[5]*n+a[9]*t+a[13];k[f+2]=a[2]*m+a[6]*n+a[10]*t+a[14];f+=d}else for(b=0;b<h;++b)for(var c=3*l[b],m=e[c],n=e[c+1],t=e[c+2],c=a[0]*m+a[4]*n+a[8]*t+a[12],p=a[1]*m+a[5]*n+a[9]*t+a[13],m=a[2]*m+a[6]*n+a[10]*t+a[14],n=0;n<g;++n)k[f]=c,k[f+1]=p,k[f+2]=m,f+=d}else u(l,e,d,f,g)}function z(l,e,a,d,f,g){if(a){var k=d.typedBuffer;d=d.typedBufferStride;var h=l.length;f*=d;if(null==g||
1===g)for(var b=0;b<h;++b){var c=3*l[b],m=e[c],n=e[c+1],p=e[c+2];k[f]=a[0]*m+a[4]*n+a[8]*p;k[f+1]=a[1]*m+a[5]*n+a[9]*p;k[f+2]=a[2]*m+a[6]*n+a[10]*p;f+=d}else for(b=0;b<h;++b)for(var c=3*l[b],m=e[c],n=e[c+1],p=e[c+2],c=a[0]*m+a[4]*n+a[8]*p,q=a[1]*m+a[5]*n+a[9]*p,m=a[2]*m+a[6]*n+a[10]*p,n=0;n<g;++n)k[f]=c,k[f+1]=q,k[f+2]=m,f+=d}else u(l,e,d,f,g)}function w(l,e,a,d,f,g){var k=d.typedBuffer;d=d.typedBufferStride;var h=l.length;f*=d;if(null==g||1===g)if(4===a)for(a=0;a<h;++a){var b=4*l[a];k[f]=e[b];k[f+
1]=e[b+1];k[f+2]=e[b+2];k[f+3]=e[b+3];f+=d}else{if(3===a)for(a=0;a<h;++a)b=3*l[a],k[f]=e[b],k[f+1]=e[b+1],k[f+2]=e[b+2],k[f+3]=255,f+=d}else if(4===a)for(a=0;a<h;++a)for(var b=4*l[a],c=0;c<g;++c)k[f]=e[b],k[f+1]=e[b+1],k[f+2]=e[b+2],k[f+3]=e[b+3],f+=d;else if(3===a)for(a=0;a<h;++a)for(b=3*l[a],c=0;c<g;++c)k[f]=e[b],k[f+1]=e[b+1],k[f+2]=e[b+2],k[f+3]=255,f+=d}function A(l,e,a,d,f,g,k){var h=f.typedBuffer;f=f.typedBufferStride;var b=l.length;g*=f;if(null==k||1===k)if(4===a)for(a=0;a<b;++a){var c=4*
l[a];h[g]=e[c]*d[0];h[g+1]=e[c+1]*d[1];h[g+2]=e[c+2]*d[2];h[g+3]=e[c+3]*d[3];g+=f}else{if(3===a){var m=255*d[3];for(a=0;a<b;++a)c=3*l[a],h[g]=e[c]*d[0],h[g+1]=e[c+1]*d[1],h[g+2]=e[c+2]*d[2],h[g+3]=m,g+=f}}else if(4===a)for(a=0;a<b;++a)for(var c=4*l[a],n=0;n<k;++n)h[g]=e[c]*d[0],h[g+1]=e[c+1]*d[1],h[g+2]=e[c+2]*d[2],h[g+3]=e[c+3]*d[3],g+=f;else if(3===a)for(m=255*d[3],a=0;a<b;++a)for(c=3*l[a],n=0;n<k;++n)h[g]=e[c]*d[0],h[g+1]=e[c+1]*d[1],h[g+2]=e[c+2]*d[2],h[g+3]=m,g+=f}Object.defineProperty(q,"__esModule",
{value:!0});q.writeBufferVec2=x;q.writeBufferVec3=u;q.writeBufferVec4=v;q.writePosition=y;q.writeNormal=z;q.writeColor=w;q.writeMultipliedColor=A;q.writeDefaultAttributes=function(l,e,a,d,f,g,k){var h=0;for(a=a.fieldNames;h<a.length;h++){var b=a[h],c=l.vertexAttr[b],m=l.indices[b];if(c&&m)switch(b){case p.VertexAttrConstants.POSITION:p.assert(3===c.size);(b=g.getField(b,r.BufferViewVec3f))&&y(m,c.data,d,b,k);break;case p.VertexAttrConstants.NORMAL:p.assert(3===c.size);(b=g.getField(b,r.BufferViewVec3f))&&
z(m,c.data,f,b,k);break;case p.VertexAttrConstants.UV0:p.assert(2===c.size);(b=g.getField(b,r.BufferViewVec2f))&&x(m,c.data,b,k);break;case p.VertexAttrConstants.REGION:p.assert(4===c.size);(b=g.getField(b,r.BufferViewVec4u16))&&v(m,c.data,b,k);break;case p.VertexAttrConstants.COLOR:p.assert(3===c.size||4===c.size);(b=g.getField(b,r.BufferViewVec4u8))&&(e&&e.color?A(m,c.data,c.size,e.color,b,k):w(m,c.data,c.size,b,k));break;case p.VertexAttrConstants.SYMBOLCOLOR:p.assert(3===c.size||4===c.size);(b=
g.getField(b,r.BufferViewVec4u8))&&w(m,c.data,c.size,b,k);break;case p.VertexAttrConstants.TANGENT:p.assert(4===c.size),(b=g.getField(b,r.BufferViewVec4f))&&v(m,c.data,b,k)}}}});