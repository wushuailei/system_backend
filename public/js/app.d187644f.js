(function(e){function t(t){for(var s,n,c=t[0],u=t[1],i=t[2],l=0,f=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var s={},n={app:0},r={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-13b379fc":"dd48d701"}[e]+".js"}function u(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a={"chunk-13b379fc":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var s="css/"+({}[e]||e)+"."+{"chunk-13b379fc":"3c47dc92"}[e]+".css",r=u.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===s||l===r))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],l=i.getAttribute("data-href");if(l===s||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var s=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[e],d.parentNode.removeChild(d),a(o)},d.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){n[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",f.name="ChunkLoadError",f.type=s,f.request=n,a[1](f)}r[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=s,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)u.d(a,s,function(t){return e[t]}.bind(null,s));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0ea6":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},b866:function(e,t,a){"use strict";var s=a("0ea6"),n=a.n(s);n.a},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.$route.meta.layoutShow?e._e():a("layout",[a("template",{slot:"layoutContent"},[a("router-view")],1)],2),e.$route.meta.layoutShow?a("router-view"):e._e()],1)},r=[],o=a("d4ec"),c=a("262e"),u=a("2caf"),i=a("9ab4"),l=a("60a3"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",{attrs:{id:"components-layout-demo-top-side-2"}},[a("a-layout-header",{staticClass:"header"},[a("a-row",[a("a-col",{attrs:{span:2}},[a("div",{staticClass:"logo"})]),a("a-col",{attrs:{span:2,offset:18}},[a("a-menu",{style:{lineHeight:"64px"},attrs:{theme:"dark",mode:"horizontal","default-selected-keys":["2"]}},[a("a-menu-item",{key:"1"},[e._v("nav 1")]),a("a-menu-item",{key:"2"},[e._v("nav 2")])],1)],1),a("a-col",{attrs:{span:1,offset:1}},[a("a-avatar",{attrs:{size:"large",icon:"user"}})],1)],1)],1),a("a-layout",[a("a-layout-sider",{style:{overflow:"auto",height:"100vh",position:"fixed",left:0},attrs:{collapsible:""},on:{collapse:e.clickCollapse},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[a("a-menu",{attrs:{theme:"dark",mode:"vertical"}},[a("a-sub-menu",{key:"sub1"},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"setting"}}),a("span",[e._v("系统管理")])],1)])],1)],1),a("a-layout",{style:{transition:".3s all",padding:"24px",marginLeft:e.contentMarginLeft+"px"}},[a("a-layout-content",{style:{background:"#fff",padding:"24px",margin:0,minHeight:"280px"}},[e._t("layoutContent")],2)],1)],1)],1)},d=[],b=a("bee2"),j=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.collapsed=!1,e.contentMarginLeft=200,e}return Object(b["a"])(a,[{key:"clickCollapse",value:function(e,t){this.contentMarginLeft=e?80:200}}]),a}(l["b"]);j=Object(i["a"])([Object(l["a"])({components:{}})],j);var m=j,p=m,h=(a("b866"),a("2877")),v=Object(h["a"])(p,f,d,!1,null,"988e9b40",null),g=v.exports,y=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(l["b"]);y=Object(i["a"])([Object(l["a"])({components:{Layout:g}})],y);var k=y,w=k,O=Object(h["a"])(w,n,r,!1,null,null,null),z=O.exports,_=(a("d3b7"),a("8c4f")),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e._v(" nice ")])},S=[],C=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(l["b"]);C=Object(i["a"])([Object(l["a"])({components:{}})],C);var P=C,E=P,L=Object(h["a"])(E,x,S,!1,null,null,null),T=L.exports;s["a"].use(_["a"]);var M=[{path:"/",name:"Home",component:T,meta:{layoutShow:!1}},{path:"/login",name:"Login",component:function(){return a.e("chunk-13b379fc").then(a.bind(null,"ede4"))},meta:{layoutShow:!0}}],q=new _["a"]({mode:"history",base:"/",routes:M}),A=q,N=a("2f62");s["a"].use(N["a"]);var U=new N["a"].Store({state:{token:"",username:""},mutations:{setToken:function(e,t){e.token=t},setUsername:function(e,t){e.username=t}},actions:{},modules:{}}),$=a("f23d");a("202f"),a("b0c0");A.beforeEach((function(e,t,a){var s=U.state.token||sessionStorage.getItem("token");U.commit("setToken",s),s||"Login"===e.name||a("/login"),a()}));a("ac1f"),a("5319");var D=a("bc3a"),H=a.n(D),I=a("56cd");I["a"].config({placement:"bottomRight",duration:3}),H.a.defaults.baseURL="http://10.17.62.177:80/",H.a.defaults.timeout=1e4,H.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",H.a.interceptors.request.use((function(e){var t=U.state.token||sessionStorage.getItem("token");return t&&(e.headers.Authorization=t),e}),(function(e){return Promise.reject(e)})),H.a.interceptors.response.use((function(e){if(200===e.status&&200===e.data.status)return Promise.resolve(e.data);if(200===e.status)switch(e.data.status){case 400:I["a"].error({message:"请求失败",description:e.data.msg});break;case 401:A.replace({path:"/login",query:{redirect:A.currentRoute.fullPath}});break;case 403:sessionStorage.removeItem("token"),U.commit("setToken",null),A.replace({path:"/login",query:{redirect:A.currentRoute.fullPath}});break;case 404:break;default:break}return Promise.reject(e)}),(function(e){return Promise.reject(e)})),s["a"].config.productionTip=!1,s["a"].use($["a"]),new s["a"]({router:A,store:U,render:function(e){return e(z)}}).$mount("#app")}});
//# sourceMappingURL=app.d187644f.js.map