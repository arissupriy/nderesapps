(self.webpackChunkNderes_Apps=self.webpackChunkNderes_Apps||[]).push([[592],{604:(c,i,p)=>{"use strict";var u=p(156).default;addEventListener("message",function(){var a=u(function*({data:n}){const r=n.fontUrl,s=yield caches.open("my-quran-fonts");(yield s.match(r))||(yield fetch(r).then(function(){var t=u(function*(e){e.ok&&(yield s.put(n.fontUrl,e.clone()),self.postMessage({data:n,status:"success"}))});return function(e){return t.apply(this,arguments)}}()).catch(t=>{console.log(t)}))});return function(n){return a.apply(this,arguments)}}())},156:c=>{function i(u,a,n,r,s,t,e){try{var f=u[t](e),o=f.value}catch(l){return void n(l)}f.done?a(o):Promise.resolve(o).then(r,s)}c.exports=function p(u){return function(){var a=this,n=arguments;return new Promise(function(r,s){var t=u.apply(a,n);function e(o){i(t,r,s,e,f,"next",o)}function f(o){i(t,r,s,e,f,"throw",o)}e(void 0)})}},c.exports.__esModule=!0,c.exports.default=c.exports}}]);