import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{P as a,t as m}from"./assets/vendor-c4bdc8af.js";const l=document.querySelector("#vimeo-player"),r=new a(l),o="videoplayer-current-time";var t=0;r.on("timeupdate",m(e=>{localStorage.setItem(o,e.seconds)},1e3));addEventListener("load",e=>{t=localStorage.getItem(o),r.setCurrentTime(t)});
//# sourceMappingURL=commonHelpers2.js.map
