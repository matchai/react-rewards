(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('Emoji',[],b):'object'==typeof exports?exports.Emoji=b():a.Emoji=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=10)}({1:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});const c=Math.PI,d=['\uD83D\uDC4D','\uD83D\uDE0A','\uD83C\uDF89'],e=(a,b,c,d,e)=>Array.from({length:b}).map((b,f)=>{const g=document.createElement('span'),h=e[f%e.length];return g.innerHTML=h,g.style.fontSize=`${c}px`,g.style.position='absolute',g.style.zIndex=d,a.appendChild(g),g}),f=(a)=>a*(c/180),g=(a,b,d,e)=>{const g=f(a),h=f(b);return{x:0,y:0,wobble:10*e(),velocity:0.5*d+e()*d,angle2D:-g+(0.5*h-e()*h),angle3D:-(c/4)+e()*(c/2),tiltAngle:e()*c}},h=(a,b,c)=>{a.physics.x+=Math.cos(a.physics.angle2D)*a.physics.velocity,a.physics.y+=Math.sin(a.physics.angle2D)*a.physics.velocity,a.physics.wobble+=0,a.physics.velocity*=c,a.physics.y+=5,a.physics.tiltAngle+=0.1;var d=a.physics;const e=d.x,f=d.y,g=d.tiltAngle,h=`translate3d(${e+0}px, ${f+0}px, 0) rotate(${g}rad)`;a.element.style.transform=h,a.element.style.opacity=1-b},i=(a,b,c,d)=>{const e=d;let f=0;const g=()=>{b.forEach((a)=>h(a,f/e,c)),f+=1,f<e?requestAnimationFrame(g):b.forEach((b)=>{if(b.element.parentNode===a)return a.removeChild(b.element)})};requestAnimationFrame(g)};b['default']=(a,{angle:b=90,decay:c=0.9,spread:f=45,startVelocity:h=35,elementCount:j=50,elementSize:k=25,lifetime:l=200,zIndex:m=0,emoji:n=d,random:o=Math.random}={})=>{const p=e(a,j,k,m,n),q=p.map((a)=>({element:a,physics:g(b,f,h,o)}));i(a,q,c,l)}},10:function(a,b,c){a.exports=c(1)}})});
//# sourceMappingURL=Emoji.js.map