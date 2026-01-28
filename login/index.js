var yt=Object.defineProperty;var $e=t=>{throw TypeError(t)};var At=(t,n,e)=>n in t?yt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var fe=(t,n,e)=>At(t,typeof n!="symbol"?n+"":n,e),Je=(t,n,e)=>n.has(t)||$e("Cannot "+e);var te=(t,n,e)=>(Je(t,n,"read from private field"),e?e.call(t):n.get(t)),we=(t,n,e)=>n.has(t)?$e("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,e),Ne=(t,n,e,r)=>(Je(t,n,"write to private field"),r?r.call(t,e):n.set(t,e),e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var mt=/([:*])(\w+)/g,Ot="([^/]+)",bt=/\*/g,Pt="?(?:.*)",wt=/\/\?/g,Nt="/?([^/]+|)",Bt="(?:/^|^)",St="";function ct(t){return t===void 0&&(t="/"),Ge()?location.pathname+location.search+location.hash:t}function F(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function ve(t){return typeof t=="string"}function Ct(t){return typeof t=="function"}function Te(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function Yt(t,n){return n.length===0||!t?null:t.slice(1,t.length).reduce(function(e,r,i){return e===null&&(e={}),e[n[i]]=decodeURIComponent(r),e},null)}function Re(t){var n=F(t).split(/\?(.*)?$/);return[F(n[0]),n.slice(1).join("")]}function Ue(t){for(var n={},e=t.split("&"),r=0;r<e.length;r++){var i=e[r].split("=");if(i[0]!==""){var o=decodeURIComponent(i[0]);n[o]?(Array.isArray(n[o])||(n[o]=[n[o]]),n[o].push(decodeURIComponent(i[1]||""))):n[o]=decodeURIComponent(i[1]||"")}}return n}function ut(t,n){var e=Re(F(t.currentLocationPath)),r=e[0],i=e[1],o=i===""?null:Ue(i),s=[],f;if(ve(n.path)){if(f=Bt+F(n.path).replace(mt,function(T,E,y){return s.push(y),Ot}).replace(bt,Pt).replace(wt,Nt)+"$",F(n.path)===""&&F(r)==="")return{url:r,queryString:i,hashString:Te(t.to),route:n,data:null,params:o}}else f=n.path;var u=new RegExp(f,St),_=r.match(u);if(_){var d=ve(n.path)?Yt(_,s):_.groups?_.groups:_.slice(1);return{url:F(r.replace(new RegExp("^"+t.instance.root),"")),queryString:i,hashString:Te(t.to),route:n,data:d,params:o}}return!1}function lt(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function ce(t,n){return typeof t[n]>"u"||t[n]===!0}function Lt(t){if(!t)return{};var n=t.split(","),e={},r;return n.forEach(function(i){var o=i.split(":").map(function(s){return s.replace(/(^ +| +$)/g,"")});switch(o[0]){case"historyAPIMethod":e.historyAPIMethod=o[1];break;case"resolveOptionsStrategy":r||(r={}),r.strategy=o[1];break;case"resolveOptionsHash":r||(r={}),r.hash=o[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":e[o[0]]=o[1]==="true";break}}),r&&(e.resolveOptions=r),e}function Ge(){return typeof window<"u"}function It(t,n){return t===void 0&&(t=[]),n===void 0&&(n={}),t.filter(function(e){return e}).forEach(function(e){["before","after","already","leave"].forEach(function(r){e[r]&&(n[r]||(n[r]=[]),n[r].push(e[r]))})}),n}function Z(t,n,e){var r=n||{},i=0;(function o(){if(!t[i]){e&&e(r);return}Array.isArray(t[i])?(t.splice.apply(t,[i,1].concat(t[i][0](r)?t[i][1]:t[i][2])),o()):t[i](r,function(s){typeof s>"u"||s===!0?(i+=1,o()):e&&e(r)})})()}Z.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};function qe(t,n){typeof t.currentLocationPath>"u"&&(t.currentLocationPath=t.to=ct(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function Be(t,n){for(var e=0;e<t.instance.routes.length;e++){var r=t.instance.routes[e],i=ut(t,r);if(i&&(t.matches||(t.matches=[]),t.matches.push(i),t.resolveOptions.strategy==="ONE")){n();return}}n()}function Mt(t,n){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function kt(t,n){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}var ze=Ge(),Ft=lt();function Ut(t,n){if(ce(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),r=ze&&t.resolveOptions&&t.resolveOptions.hash===!0;Ft?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",r?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!r){var i=location.hash;location.hash="",location.hash=i}t.instance.__freezeListening=!1},1))):ze&&(window.location.href=t.to)}n()}function ft(t,n){var e=t.instance;if(!e.lastResolved()){n();return}Z(e.lastResolved().map(function(r){return function(i,o){if(!r.route.hooks||!r.route.hooks.leave){o();return}var s=!1,f=t.instance.matchLocation(r.route.path,t.currentLocationPath,!1);if(r.route.path!=="*")s=!f;else{var u=t.matches?t.matches.find(function(_){return r.route.path===_.route.path}):!1;s=!u}if(ce(t.navigateOptions,"callHooks")&&s){Z(r.route.hooks.leave.map(function(_){return function(d,T){return _(function(E){E===!1?t.instance.__markAsClean(t):T()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return o()}]));return}else o()}}),{},function(){return n()})}function Gt(t,n){t.match.route.hooks&&t.match.route.hooks.before&&ce(t.navigateOptions,"callHooks")?Z(t.match.route.hooks.before.map(function(e){return function(i,o){return e(function(s){s===!1?t.instance.__markAsClean(t):o()},t.match)}}).concat([function(){return n()}])):n()}function Dt(t,n){ce(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()}function Kt(t,n){t.match.route.hooks&&t.match.route.hooks.after&&ce(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(e){return e(t.match)}),n()}function xt(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString){e.forEach(function(r){r.route.hooks&&r.route.hooks.already&&ce(t.navigateOptions,"callHooks")&&r.route.hooks.already.forEach(function(i){return i(t.match)})}),n(!1);return}n()}function Ht(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var r=Re(t.currentLocationPath),i=r[0],o=r[1],s=Te(t.to);e.path=F(i);var f={url:e.path,queryString:o,hashString:s,data:null,route:e,params:o!==""?Ue(o):null};t.matches=[f],t.match=f}n()}function jt(t,n){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),n()}function Vt(t,n){t.instance._setCurrent(null),n()}function ht(t,n){ce(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var dt=[xt,Gt,Dt,Kt],Xe=[ft,Ht,Z.if(function(t){var n=t.notFoundHandled;return n},dt.concat([ht]),[jt,Vt])];function Ye(){return Ye=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Ye.apply(this,arguments)}function We(t,n){var e=0;function r(){if(e===t.matches.length){ht(t,n);return}Z(dt,Ye({},t,{match:t.matches[e]}),function(){e+=1,r()})}ft(t,r)}function Se(t){t.instance.__markAsClean(t)}function Le(){return Le=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Le.apply(this,arguments)}var Qe="[data-navigo]";function $t(t,n){var e=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Qe},r=this,i="/",o=null,s=[],f=!1,u,_=lt(),d=Ge();t?i=F(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function T(a){return a.indexOf("#")>=0&&(e.hash===!0?a=a.split("#")[1]||"/":a=a.split("#")[0]),a}function E(a){return F(i+"/"+F(a))}function y(a,h,m,P){return a=ve(a)?E(a):a,{name:P||F(String(a)),path:a,handler:h,hooks:It(m)}}function Y(a,h,m){var P=this;return typeof a=="object"&&!(a instanceof RegExp)?(Object.keys(a).forEach(function(A){if(typeof a[A]=="function")P.on(A,a[A]);else{var S=a[A],X=S.uses,_e=S.as,le=S.hooks;s.push(y(A,X,[u,le],_e))}}),this):(typeof a=="function"&&(m=h,h=a,a=i),s.push(y(a,h,[u,m])),this)}function l(a,h){if(r.__dirty){r.__waiting.push(function(){return r.resolve(a,h)});return}else r.__dirty=!0;a=a?F(i)+"/"+F(a):void 0;var m={instance:r,to:a,currentLocationPath:a,navigateOptions:{},resolveOptions:Le({},e,h)};return Z([qe,Be,Z.if(function(P){var A=P.matches;return A&&A.length>0},We,Xe)],m,Se),m.matches?m.matches:!1}function p(a,h){if(r.__dirty){r.__waiting.push(function(){return r.navigate(a,h)});return}else r.__dirty=!0;a=F(i)+"/"+F(a);var m={instance:r,to:a,navigateOptions:h||{},resolveOptions:h&&h.resolveOptions?h.resolveOptions:e,currentLocationPath:T(a)};Z([Mt,kt,Be,Z.if(function(P){var A=P.matches;return A&&A.length>0},We,Xe),Ut,Se],m,Se)}function g(a,h,m){var P=q(a,h);return P!==null?(p(P.replace(new RegExp("^/?"+i),""),m),!0):!1}function b(a){return this.routes=s=s.filter(function(h){return ve(a)?F(h.path)!==F(a):Ct(a)?a!==h.handler:String(h.path)!==String(a)}),this}function w(){_&&(this.__popstateListener=function(){r.__freezeListening||l()},window.addEventListener("popstate",this.__popstateListener))}function B(){this.routes=s=[],_&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=f=!0}function C(a,h){return r._notFoundRoute=y("*",a,[u,h],"__NOT_FOUND__"),this}function L(){if(d)return I().forEach(function(a){if(a.getAttribute("data-navigo")==="false"||a.getAttribute("target")==="_blank"){a.hasListenerAttached&&a.removeEventListener("click",a.navigoHandler);return}a.hasListenerAttached||(a.hasListenerAttached=!0,a.navigoHandler=function(h){if((h.ctrlKey||h.metaKey)&&h.target.tagName.toLowerCase()==="a")return!1;var m=a.getAttribute("href");if(typeof m>"u"||m===null)return!1;if(m.match(/^(http|https)/)&&typeof URL<"u")try{var P=new URL(m);m=P.pathname+P.search}catch{}var A=Lt(a.getAttribute("data-navigo-options"));f||(h.preventDefault(),h.stopPropagation(),r.navigate(F(m),A))},a.addEventListener("click",a.navigoHandler))}),r}function I(){return d?[].slice.call(document.querySelectorAll(e.linksSelector||Qe)):[]}function O(a){return"/"+i+"/"+F(a)}function R(a){return u=a,this}function G(){return o}function q(a,h,m){var P=s.find(function(X){return X.name===a}),A=null;if(P){if(A=P.path,h)for(var S in h)A=A.replace(":"+S,h[S]);A=A.match(/^\//)?A:"/"+A}return A&&m&&!m.includeRoot&&(A=A.replace(new RegExp("^/"+i),"")),A}function k(a){return a.getAttribute("href")}function ee(a){var h=Re(F(a)),m=h[0],P=h[1],A=P===""?null:Ue(P),S=Te(a),X=y(m,function(){},[u],m);return{url:m,queryString:P,hashString:S,route:X,data:null,params:A}}function H(){return ee(F(ct(i)).replace(new RegExp("^"+i),""))}function j(a){var h={instance:r,currentLocationPath:a,to:a,resolveOptions:e};return Be(h,function(){}),h.matches?h.matches:!1}function z(a,h,m){typeof h<"u"&&(typeof m>"u"||m)&&(h=E(h));var P={instance:r,to:h,currentLocationPath:h};qe(P,function(){}),typeof a=="string"&&(a=typeof m>"u"||m?E(a):a);var A=ut(P,{name:String(a),path:a,handler:function(){},hooks:{}});return A||!1}function U(a,h,m){return typeof h=="string"&&(h=x(h)),h?(h.hooks[a]||(h.hooks[a]=[]),h.hooks[a].push(m),function(){h.hooks[a]=h.hooks[a].filter(function(P){return P!==m})}):(console.warn("Route doesn't exists: "+h),function(){})}function x(a){return typeof a=="string"?s.find(function(h){return h.name===E(a)}):s.find(function(h){return h.handler===a})}function Q(a){a.instance.__dirty=!1,a.instance.__waiting.length>0&&a.instance.__waiting.shift()()}this.root=i,this.routes=s,this.destroyed=f,this.current=o,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Q,this.on=Y,this.off=b,this.resolve=l,this.navigate=p,this.navigateByName=g,this.destroy=B,this.notFound=C,this.updatePageLinks=L,this.link=O,this.hooks=R,this.extractGETParameters=function(a){return Re(T(a))},this.lastResolved=G,this.generate=q,this.getLinkPath=k,this.match=j,this.matchLocation=z,this.getCurrentLocation=H,this.addBeforeHook=U.bind(this,"before"),this.addAfterHook=U.bind(this,"after"),this.addAlreadyHook=U.bind(this,"already"),this.addLeaveHook=U.bind(this,"leave"),this.getRoute=x,this._pathToMatchObject=ee,this._clean=F,this._checkForAHash=T,this._setCurrent=function(a){return o=r.current=a},w.call(this),L.call(this)}let ye={features:{ENV:"DEV",DEV:{FF_BASE_URI:"https://pcxdev-rest-gjkk.onrender.com"},QA:{FF_BASE_URI:""},PROD:{FF_BASE_URI:""}}};var Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ee={exports:{}},zt=Ee.exports,Ze;function Xt(){return Ze||(Ze=1,(function(t,n){(function(e,r){var i={};e.PubSub?(i=e.PubSub,console.warn("PubSub already loaded, using existing version")):(e.PubSub=i,r(i)),t!==void 0&&t.exports&&(n=t.exports=i),n.PubSub=i,t.exports=n=i})(typeof window=="object"&&window||zt||Jt,function(e){var r={},i=-1,o="*";function s(l){var p;for(p in l)if(Object.prototype.hasOwnProperty.call(l,p))return!0;return!1}function f(l){return function(){throw l}}function u(l,p,g){try{l(p,g)}catch(b){setTimeout(f(b),0)}}function _(l,p,g){l(p,g)}function d(l,p,g,b){var w=r[p],B=b?_:u,C;if(Object.prototype.hasOwnProperty.call(r,p))for(C in w)Object.prototype.hasOwnProperty.call(w,C)&&B(w[C],l,g)}function T(l,p,g){return function(){var w=String(l),B=w.lastIndexOf(".");for(d(l,l,p,g);B!==-1;)w=w.substr(0,B),B=w.lastIndexOf("."),d(l,w,p,g);d(l,o,p,g)}}function E(l){var p=String(l),g=!!(Object.prototype.hasOwnProperty.call(r,p)&&s(r[p]));return g}function y(l){for(var p=String(l),g=E(p)||E(o),b=p.lastIndexOf(".");!g&&b!==-1;)p=p.substr(0,b),b=p.lastIndexOf("."),g=E(p);return g}function Y(l,p,g,b){l=typeof l=="symbol"?l.toString():l;var w=T(l,p,b),B=y(l);return B?(g===!0?w():setTimeout(w,0),!0):!1}e.publish=function(l,p){return Y(l,p,!1,e.immediateExceptions)},e.publishSync=function(l,p){return Y(l,p,!0,e.immediateExceptions)},e.subscribe=function(l,p){if(typeof p!="function")return!1;l=typeof l=="symbol"?l.toString():l,Object.prototype.hasOwnProperty.call(r,l)||(r[l]={});var g="uid_"+String(++i);return r[l][g]=p,g},e.subscribeAll=function(l){return e.subscribe(o,l)},e.subscribeOnce=function(l,p){var g=e.subscribe(l,function(){e.unsubscribe(g),p.apply(this,arguments)});return e},e.clearAllSubscriptions=function(){r={}},e.clearSubscriptions=function(p){var g;for(g in r)Object.prototype.hasOwnProperty.call(r,g)&&g.indexOf(p)===0&&delete r[g]},e.countSubscriptions=function(p){var g,b,w=0;for(g in r)if(Object.prototype.hasOwnProperty.call(r,g)&&g.indexOf(p)===0){for(b in r[g])w++;break}return w},e.getSubscriptions=function(p){var g,b=[];for(g in r)Object.prototype.hasOwnProperty.call(r,g)&&g.indexOf(p)===0&&b.push(g);return b},e.unsubscribe=function(l){var p=function(O){var R;for(R in r)if(Object.prototype.hasOwnProperty.call(r,R)&&R.indexOf(O)===0)return!0;return!1},g=typeof l=="string"&&(Object.prototype.hasOwnProperty.call(r,l)||p(l)),b=!g&&typeof l=="string",w=typeof l=="function",B=!1,C,L,I;if(g){e.clearSubscriptions(l);return}for(C in r)if(Object.prototype.hasOwnProperty.call(r,C)){if(L=r[C],b&&L[l]){delete L[l],B=l;break}if(w)for(I in L)Object.prototype.hasOwnProperty.call(L,I)&&L[I]===l&&(delete L[I],B=!0)}return B}})})(Ee,Ee.exports)),Ee.exports}var Wt=Xt();const K=qt(Wt),V=class V{static getTJO(){if(this.jsTJO)return this.jsTJO;let n=localStorage.getItem("tjo");return n&&(this.jsTJO=JSON.parse(n)),this.jsTJO}static setTJO(n){return n?localStorage.setItem("tjo",JSON.stringify(n)):localStorage.clear("tjo"),this.jsTJO=n}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),V.setTJO(null),location.reload()}static async doSignin(n,e=null){const r={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",r)).json();o.ok?(typeof mvvLegit<"u"&&mvvLegit&&(o!=null&&o.accessToken)&&mvvLegit.doSignin(o==null?void 0:o.accessToken),e&&e(o)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(n,e=null){const r={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",r)).json();if(o.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),e&&e(o);else{const s=(o==null?void 0:o.error)||(o==null?void 0:o.message)||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(s,"danger"),e&&e(o)}}static async resetHash(n,e,r=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const i=typeof neodigmUtils<"u"?neodigmUtils.genHash(e):e,o={method:"POST",body:JSON.stringify({guid:n,hash:i}),headers:V.genHeaders()},f=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",o)).json();r&&r(f)}static genHeaders(n={}){var r,i,o,s,f,u,_,d,T;let e={};return e.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),e.Authorization="Bearer expired",e["Content-Type"]="application/json",V.getTJO()&&(e.Authorization="Bearer "+V.getTJO().tokens[0]),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&((o=(i=(r=SessionAcctEntity.oEntities)==null?void 0:r.data)==null?void 0:i.entity)!=null&&o.class)&&(e.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&((u=(f=(s=SessionAcctEntity.oEntities)==null?void 0:s.data)==null?void 0:f.entity)!=null&&u.guid)&&(e.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&((T=(d=(_=SessionAcctEntity.oEntities)==null?void 0:_.data)==null?void 0:d.entity)!=null&&T.company)&&(e.company=SessionAcctEntity.oEntities.data.entity.company),e}static async fetchPatents(n=null){const e={method:"GET",headers:V.genHeaders()},i=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePatents",e)).json();return n&&n(i),i}static async fetchPatentMetadata(n,e=null){const r={method:"GET",headers:V.genHeaders()},o=await(await fetch(this.API_baseURI+"/m5t/patent/metadata/"+n,r)).json();return e&&e(o),o}};V.API_baseURI=ye.features[ye.features.ENV].FF_BASE_URI,V.API_ver="v5",V.jsState={},V.jsMeta={},V.jsTJO=null;let Ae=V;var ie,oe;class D{static setCorePatent(n,e=!0){te(this,ie).push(n),e&&K.publish(this.hierTopics.CORE__PATENT__SET,{item:n,count:te(this,ie).length,timestamp:Date.now()})}static getCorePatent(){return te(this,ie)}static setCoreBadge(n,e=!0){te(this,oe).push(n),e&&K.publish(this.hierTopics.CORE__BADGE__SET,{item:n,count:te(this,oe).length,timestamp:Date.now()})}static getCoreBadge(){return te(this,oe)}static clearCorePatent(n=!0){Ne(this,ie,[]),n&&K.publish(this.hierTopics.CORE__PATENT__CLEAR,{timestamp:Date.now()})}static clearCoreBadge(n=!0){Ne(this,oe,[]),n&&K.publish(this.hierTopics.CORE__BADGE__CLEAR,{timestamp:Date.now()})}static getCorePatentCount(){return te(this,ie).length}static getCoreBadgeCount(){return te(this,oe).length}}ie=new WeakMap,oe=new WeakMap,we(D,ie,[]),we(D,oe,[]),fe(D,"VER","PatentBadge PCX v0.0.1 "),fe(D,"currentRoute","splash_route"),fe(D,"appRoutes",{HOME_ROUTE:"home_route",SIGNIN_ROUTE:"signin_route",SIGNUP_ROUTE:"signup_route",VERF_LINK_ROUTE:"verf_link_route",RESETHASH_ROUTE:"resethash_route",RESETFORGOT_ROUTE:"resetforgot_route",SIGNOUT_ROUTE:"signout_route",SPLASH_ROUTE:"splash_route"}),fe(D,"hierTopics",{APP:"APP",APP__AUTH:"APP.AUTH",APP__SIGNOUT:"APP.SIGNOUT",APP__PRIMARY__NAV__BEFORE:"APP.PRIMARY.NAV.BEFORE",APP__PRIMARY__NAV__AFTER:"APP.PRIMARY.NAV.AFTER",ROUTE:"ROUTE",ROUTE__NAV__BEFORE:"ROUTE.NAV.BEFORE",ROUTE__NAV__AFTER:"ROUTE.NAV.AFTER",CORE__PATENT:"CORE.PATENT",CORE__PATENT__CRED:"CORE.PATENT.CRED",CORE__PATENT__SET:"CORE.PATENT.SET",CORE__PATENT__CLEAR:"CORE.PATENT.CLEAR",CORE__PATENT__LIFECYCLE:"CORE.PATENT.LIFECYCLE",CORE__PATENT__VERB__GENBADGE:"CORE.PATENT.VERB.GENBADGE",CORE__PATENT__VERB__BOOKMARK:"CORE.PATENT.VERB.BOOKMARK",CORE__PATENT__VERB__SEARCH:"CORE.PATENT.VERB.SEARCH",CORE__BADGE:"CORE.BADGE",CORE__BADGE__CRED:"CORE.BADGE.CRED",CORE__BADGE__SET:"CORE.BADGE.SET",CORE__BADGE__CLEAR:"CORE.BADGE.CLEAR",CORE__BADGE__LIFECYCLE:"CORE.BADGE.LIFECYCLE",CORE__BADGE__VERB__GEN:"CORE.BADGE.VERB.GEN",CORE__BADGE__VERB__SHARE:"CORE.BADGE.VERB.SHARE",CORE__BADGE__VERB__EMBED:"CORE.BADGE.VERB.EMBED",CORE__BADGE__VERB__PRINT:"CORE.BADGE.VERB.PRINT",CORE__BADGE__VERB__RENEW:"CORE.BADGE.VERB.RENEW",CORE__BADGE__VERB__BOOKMARK:"CORE.BADGE.VERB.BOOKMARK",CORE__BADGE__VERB__BID:"CORE.BADGE.VERB.BID",CORE__BADGE__VERB__BID__ACCEPT:"CORE.BADGE.VERB.BID.ACCEPT",CORE__BADGE__VERB__BID__REJECT:"CORE.BADGE.VERB.BID.REJECT",CORE__BADGE__VERB__BID__COUNTER:"CORE.BADGE.VERB.BID.COUNTER"});const ue=t=>t!==null&&Object.prototype.toString.call(t)==="[object Object]",me=(t,n)=>{if(t===n)return!0;if(typeof t!=typeof n)return!1;if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;for(let e=0;e<t.length;e+=1)if(!me(t[e],n[e]))return!1;return!0}if(ue(t)&&ue(n)){const e=Object.entries(t),r=new Set(Object.keys(n));if(e.length!==r.size)return!1;for(const[i,o]of e){if(!me(o,n[i]))return!1;r.delete(i)}return r.size===0}return!1},ge=t=>{if(t===""||t===!1||t===null||t===void 0||Array.isArray(t)&&t.length===0)return!0;if(ue(t)){for(const n in t)if(t.hasOwnProperty(n))return!1;return!0}return!1};var v;(function(t){t.TOK_EOF="EOF",t.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",t.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",t.TOK_RBRACKET="Rbracket",t.TOK_RPAREN="Rparen",t.TOK_COMMA="Comma",t.TOK_COLON="Colon",t.TOK_RBRACE="Rbrace",t.TOK_NUMBER="Number",t.TOK_CURRENT="Current",t.TOK_ROOT="Root",t.TOK_EXPREF="Expref",t.TOK_PIPE="Pipe",t.TOK_OR="Or",t.TOK_AND="And",t.TOK_EQ="EQ",t.TOK_GT="GT",t.TOK_LT="LT",t.TOK_GTE="GTE",t.TOK_LTE="LTE",t.TOK_NE="NE",t.TOK_FLATTEN="Flatten",t.TOK_STAR="Star",t.TOK_FILTER="Filter",t.TOK_DOT="Dot",t.TOK_NOT="Not",t.TOK_LBRACE="Lbrace",t.TOK_LBRACKET="Lbracket",t.TOK_LPAREN="Lparen",t.TOK_LITERAL="Literal"})(v||(v={}));v.TOK_LPAREN,v.TOK_RPAREN,v.TOK_STAR,v.TOK_COMMA,v.TOK_DOT,v.TOK_COLON,v.TOK_CURRENT,v.TOK_ROOT,v.TOK_RBRACKET,v.TOK_LBRACE,v.TOK_RBRACE;v.TOK_EOF+"",v.TOK_UNQUOTEDIDENTIFIER+"",v.TOK_QUOTEDIDENTIFIER+"",v.TOK_RBRACKET+"",v.TOK_RPAREN+"",v.TOK_COMMA+"",v.TOK_RBRACE+"",v.TOK_NUMBER+"",v.TOK_CURRENT+"",v.TOK_EXPREF+"",v.TOK_ROOT+"",v.TOK_PIPE+"",v.TOK_OR+"",v.TOK_AND+"",v.TOK_EQ+"",v.TOK_GT+"",v.TOK_LT+"",v.TOK_GTE+"",v.TOK_LTE+"",v.TOK_NE+"",v.TOK_FLATTEN+"",v.TOK_STAR+"",v.TOK_FILTER+"",v.TOK_DOT+"",v.TOK_NOT+"",v.TOK_LBRACE+"",v.TOK_LBRACKET+"",v.TOK_LPAREN+"";var c;(function(t){t[t.TYPE_NUMBER=0]="TYPE_NUMBER",t[t.TYPE_ANY=1]="TYPE_ANY",t[t.TYPE_STRING=2]="TYPE_STRING",t[t.TYPE_ARRAY=3]="TYPE_ARRAY",t[t.TYPE_OBJECT=4]="TYPE_OBJECT",t[t.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",t[t.TYPE_EXPREF=6]="TYPE_EXPREF",t[t.TYPE_NULL=7]="TYPE_NULL",t[t.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",t[t.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(c||(c={}));class Qt{constructor(n){this.TYPE_NAME_TABLE={[c.TYPE_NUMBER]:"number",[c.TYPE_ANY]:"any",[c.TYPE_STRING]:"string",[c.TYPE_ARRAY]:"array",[c.TYPE_OBJECT]:"object",[c.TYPE_BOOLEAN]:"boolean",[c.TYPE_EXPREF]:"expression",[c.TYPE_NULL]:"null",[c.TYPE_ARRAY_NUMBER]:"Array<number>",[c.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([e])=>Math.abs(e),this.functionAvg=([e])=>{let r=0;for(let i=0;i<e.length;i+=1)r+=e[i];return r/e.length},this.functionCeil=([e])=>Math.ceil(e),this.functionContains=e=>{const[r,i]=e;return r.includes(i)},this.functionEndsWith=e=>{const[r,i]=e;return r.includes(i,r.length-i.length)},this.functionFloor=([e])=>Math.floor(e),this.functionJoin=e=>{const[r,i]=e;return i.join(r)},this.functionKeys=([e])=>Object.keys(e),this.functionLength=([e])=>ue(e)?Object.keys(e).length:e.length,this.functionMap=e=>{if(!this._interpreter)return[];const r=[],i=this._interpreter,o=e[0],s=e[1];for(let f=0;f<s.length;f+=1)r.push(i.visit(o,s[f]));return r},this.functionMax=([e])=>{if(!e.length)return null;if(this.getTypeName(e[0])===c.TYPE_NUMBER)return Math.max(...e);const i=e;let o=i[0];for(let s=1;s<i.length;s+=1)o.localeCompare(i[s])<0&&(o=i[s]);return o},this.functionMaxBy=e=>{const r=e[1],i=e[0],o=this.createKeyFunction(r,[c.TYPE_NUMBER,c.TYPE_STRING]);let s=-1/0,f,u;for(let _=0;_<i.length;_+=1)u=o&&o(i[_]),u!==void 0&&u>s&&(s=u,f=i[_]);return f},this.functionMerge=e=>{let r={};for(let i=0;i<e.length;i+=1){const o=e[i];r=Object.assign(r,o)}return r},this.functionMin=([e])=>{if(!e.length)return null;if(this.getTypeName(e[0])===c.TYPE_NUMBER)return Math.min(...e);const i=e;let o=i[0];for(let s=1;s<i.length;s+=1)i[s].localeCompare(o)<0&&(o=i[s]);return o},this.functionMinBy=e=>{const r=e[1],i=e[0],o=this.createKeyFunction(r,[c.TYPE_NUMBER,c.TYPE_STRING]);let s=1/0,f,u;for(let _=0;_<i.length;_+=1)u=o&&o(i[_]),u!==void 0&&u<s&&(s=u,f=i[_]);return f},this.functionNotNull=e=>{for(let r=0;r<e.length;r+=1)if(this.getTypeName(e[r])!==c.TYPE_NULL)return e[r];return null},this.functionReverse=([e])=>{if(this.getTypeName(e)===c.TYPE_STRING){const o=e;let s="";for(let f=o.length-1;f>=0;f-=1)s+=o[f];return s}const i=e.slice(0);return i.reverse(),i},this.functionSort=([e])=>[...e].sort(),this.functionSortBy=e=>{if(!this._interpreter)return[];const r=e[0].slice(0);if(r.length===0)return r;const i=this._interpreter,o=e[1],s=this.getTypeName(i.visit(o,r[0]));if(s!==void 0&&![c.TYPE_NUMBER,c.TYPE_STRING].includes(s))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[s]})`);const f=[];for(let u=0;u<r.length;u+=1)f.push([u,r[u]]);f.sort((u,_)=>{const d=i.visit(o,u[1]),T=i.visit(o,_[1]);if(this.getTypeName(d)!==s)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[s]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(T)!==s)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[s]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(T)]}`);return d>T?1:d<T?-1:u[0]-_[0]});for(let u=0;u<f.length;u+=1)r[u]=f[u][1];return r},this.functionStartsWith=([e,r])=>e.startsWith(r),this.functionSum=([e])=>e.reduce((r,i)=>r+i,0),this.functionToArray=([e])=>this.getTypeName(e)===c.TYPE_ARRAY?e:[e],this.functionToNumber=([e])=>{const r=this.getTypeName(e);let i;return r===c.TYPE_NUMBER?e:r===c.TYPE_STRING&&(i=+e,!isNaN(i))?i:null},this.functionToString=([e])=>this.getTypeName(e)===c.TYPE_STRING?e:JSON.stringify(e),this.functionType=([e])=>{switch(this.getTypeName(e)){case c.TYPE_NUMBER:return"number";case c.TYPE_STRING:return"string";case c.TYPE_ARRAY:return"array";case c.TYPE_OBJECT:return"object";case c.TYPE_BOOLEAN:return"boolean";case c.TYPE_EXPREF:return"expref";case c.TYPE_NULL:return"null";default:return}},this.functionValues=([e])=>Object.values(e),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[c.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[c.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[c.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[c.TYPE_STRING,c.TYPE_ARRAY]},{types:[c.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[c.TYPE_STRING]},{types:[c.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[c.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[c.TYPE_STRING]},{types:[c.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[c.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[c.TYPE_STRING,c.TYPE_ARRAY,c.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[c.TYPE_EXPREF]},{types:[c.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[c.TYPE_ARRAY_NUMBER,c.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[c.TYPE_ARRAY]},{types:[c.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[c.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[c.TYPE_ARRAY_NUMBER,c.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[c.TYPE_ARRAY]},{types:[c.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[c.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[c.TYPE_STRING,c.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[c.TYPE_ARRAY_STRING,c.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[c.TYPE_ARRAY]},{types:[c.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[c.TYPE_STRING]},{types:[c.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[c.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[c.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[c.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[c.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[c.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[c.TYPE_OBJECT]}]}},this._interpreter=n}registerFunction(n,e,r){if(n in this.functionTable)throw new Error(`Function already defined: ${n}()`);this.functionTable[n]={_func:e.bind(this),_signature:r}}callFunction(n,e){const r=this.functionTable[n];if(r===void 0)throw new Error(`Unknown function: ${n}()`);return this.validateArgs(n,e,r._signature),r._func.call(this,e)}validateInputSignatures(n,e){for(let r=0;r<e.length;r+=1)if("variadic"in e[r]&&r!==e.length-1)throw new Error(`ArgumentError: ${n}() 'variadic' argument ${r+1} must occur last`)}validateArgs(n,e,r){var i,o;let s;this.validateInputSignatures(n,r);const f=r.filter(l=>{var p;return(p=!l.optional)!==null&&p!==void 0?p:!1}).length,u=(o=(i=r[r.length-1])===null||i===void 0?void 0:i.variadic)!==null&&o!==void 0?o:!1,_=e.length<f,d=e.length>r.length,T=_&&(!u&&f>1||u)?"at least ":"";if(u&&_||!u&&(_||d))throw s=r.length>1,new Error(`ArgumentError: ${n}() takes ${T}${f} argument${s&&"s"||""} but received ${e.length}`);let E,y,Y;for(let l=0;l<r.length;l+=1){Y=!1,E=r[l].types,y=this.getTypeName(e[l]);let p;for(p=0;p<E.length;p+=1)if(y!==void 0&&this.typeMatches(y,E[p],e[l])){Y=!0;break}if(!Y&&y!==void 0){const g=E.map(b=>this.TYPE_NAME_TABLE[b]).join(" | ");throw new Error(`TypeError: ${n}() expected argument ${l+1} to be type (${g}) but received type ${this.TYPE_NAME_TABLE[y]} instead.`)}}}typeMatches(n,e,r){if(e===c.TYPE_ANY)return!0;if(e===c.TYPE_ARRAY_STRING||e===c.TYPE_ARRAY_NUMBER||e===c.TYPE_ARRAY){if(e===c.TYPE_ARRAY)return n===c.TYPE_ARRAY;if(n===c.TYPE_ARRAY){let i;e===c.TYPE_ARRAY_NUMBER?i=c.TYPE_NUMBER:e===c.TYPE_ARRAY_STRING&&(i=c.TYPE_STRING);for(let o=0;o<r.length;o+=1){const s=this.getTypeName(r[o]);if(s!==void 0&&i!==void 0&&!this.typeMatches(s,i,r[o]))return!1}return!0}}else return n===e;return!1}getTypeName(n){switch(Object.prototype.toString.call(n)){case"[object String]":return c.TYPE_STRING;case"[object Number]":return c.TYPE_NUMBER;case"[object Array]":return c.TYPE_ARRAY;case"[object Boolean]":return c.TYPE_BOOLEAN;case"[object Null]":return c.TYPE_NULL;case"[object Object]":return n.jmespathType===v.TOK_EXPREF?c.TYPE_EXPREF:c.TYPE_OBJECT;default:return}}createKeyFunction(n,e){if(!this._interpreter)return;const r=this._interpreter;return o=>{const s=r.visit(n,o);if(!e.includes(this.getTypeName(s))){const f=`TypeError: expected one of (${e.map(u=>this.TYPE_NAME_TABLE[u]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(s)]}`;throw new Error(f)}return s}}}class Zt{constructor(){this._rootValue=null,this.runtime=new Qt(this)}search(n,e){return this._rootValue=e,this.visit(n,e)}visit(n,e){let r,i,o,s,f,u,_,d,T,E,y;switch(n.type){case"Field":return e===null?null:ue(e)?(u=e[n.name],u===void 0?null:u):null;case"Subexpression":for(o=this.visit(n.children[0],e),E=1;E<n.children.length;E+=1)if(o=this.visit(n.children[1],o),o===null)return null;return o;case"IndexExpression":return _=this.visit(n.children[0],e),d=this.visit(n.children[1],_),d;case"Index":if(!Array.isArray(e))return null;let Y=n.value;return Y<0&&(Y=e.length+Y),o=e[Y],o===void 0&&(o=null),o;case"Slice":if(!Array.isArray(e))return null;const l=[...n.children],p=this.computeSliceParams(e.length,l),[g,b,w]=p;if(o=[],w>0)for(E=g;E<b;E+=w)o.push(e[E]);else for(E=g;E>b;E+=w)o.push(e[E]);return o;case"Projection":if(y=this.visit(n.children[0],e),!Array.isArray(y))return null;for(T=[],E=0;E<y.length;E+=1)i=this.visit(n.children[1],y[E]),i!==null&&T.push(i);return T;case"ValueProjection":if(y=this.visit(n.children[0],e),!ue(y))return null;T=[];const B=Object.values(y);for(E=0;E<B.length;E+=1)i=this.visit(n.children[1],B[E]),i!==null&&T.push(i);return T;case"FilterProjection":if(y=this.visit(n.children[0],e),!Array.isArray(y))return null;const C=[],L=[];for(E=0;E<y.length;E+=1)r=this.visit(n.children[2],y[E]),ge(r)||C.push(y[E]);for(let k=0;k<C.length;k+=1)i=this.visit(n.children[1],C[k]),i!==null&&L.push(i);return L;case"Comparator":switch(s=this.visit(n.children[0],e),f=this.visit(n.children[1],e),n.name){case v.TOK_EQ:o=me(s,f);break;case v.TOK_NE:o=!me(s,f);break;case v.TOK_GT:o=s>f;break;case v.TOK_GTE:o=s>=f;break;case v.TOK_LT:o=s<f;break;case v.TOK_LTE:o=s<=f;break;default:throw new Error(`Unknown comparator: ${n.name}`)}return o;case v.TOK_FLATTEN:const I=this.visit(n.children[0],e);if(!Array.isArray(I))return null;let O=[];for(E=0;E<I.length;E+=1)i=I[E],Array.isArray(i)?O=[...O,...i]:O.push(i);return O;case"Identity":return e;case"MultiSelectList":if(e===null)return null;for(T=[],E=0;E<n.children.length;E+=1)T.push(this.visit(n.children[E],e));return T;case"MultiSelectHash":if(e===null)return null;T={};let R;for(E=0;E<n.children.length;E+=1)R=n.children[E],T[R.name]=this.visit(R.value,e);return T;case"OrExpression":return r=this.visit(n.children[0],e),ge(r)&&(r=this.visit(n.children[1],e)),r;case"AndExpression":return s=this.visit(n.children[0],e),ge(s)?s:this.visit(n.children[1],e);case"NotExpression":return s=this.visit(n.children[0],e),ge(s);case"Literal":return n.value;case v.TOK_PIPE:return _=this.visit(n.children[0],e),this.visit(n.children[1],_);case v.TOK_CURRENT:return e;case v.TOK_ROOT:return this._rootValue;case"Function":const G=[];for(let k=0;k<n.children.length;k+=1)G.push(this.visit(n.children[k],e));return this.runtime.callFunction(n.name,G);case"ExpressionReference":const q=n.children[0];return q.jmespathType=v.TOK_EXPREF,q;default:throw new Error(`Unknown node type: ${n.type}`)}}computeSliceParams(n,e){let[r,i,o]=e;if(o===null)o=1;else if(o===0){const f=new Error("Invalid slice, step cannot be 0");throw f.name="RuntimeError",f}const s=o<0;return r=r===null?s?n-1:0:this.capSliceRange(n,r,o),i=i===null?s?-1:n:this.capSliceRange(n,i,o),[r,i,o]}capSliceRange(n,e,r){let i=e;return i<0?(i+=n,i<0&&(i=r<0?-1:0)):i>=n&&(i=r<0?n-1:n),i}}new Zt;c.TYPE_ANY;c.TYPE_ARRAY;c.TYPE_ARRAY_NUMBER;c.TYPE_ARRAY_STRING;c.TYPE_BOOLEAN;c.TYPE_EXPREF;c.TYPE_NULL;c.TYPE_NUMBER;c.TYPE_OBJECT;c.TYPE_STRING;const{hierTopics:N,currentRoute:et,appRoutes:en}=D,tn={bindAppListeners(t){K.subscribe(N.APP,(n,e)=>{switch(console.log(`APP topic: ${n}`,e),n){case N.APP__AUTH:console.log("Authentication event",e);break;case N.APP__SIGNOUT:console.log("Signout event",e),window.router&&window.router.navigate("/");break;case N.APP__PRIMARY__NAV__BEFORE:console.log("Primary nav before event",e);break;case"APP.PRIMARY.NAV.BEFORE.SIGNIN":console.log("Primary nav before signin event",e),window.router&&window.router.navigate("/signin");break;case"APP.PRIMARY.NAV.BEFORE.BADGES":console.log("Primary nav before badges event",e),window.router&&window.router.navigate("/home");break;case"APP.PRIMARY.NAV.BEFORE.SIGNOUT":console.log("Primary nav before signout event",e),window.router&&window.router.navigate("/signout");break;case"APP.PRIMARY.NAV.BEFORE.SIGNUP":console.log("Primary nav before signup event",e),window.router&&window.router.navigate("/signup");break;case"APP.PRIMARY.NAV.BEFORE.HOME":console.log("Primary nav before home event",e),window.router&&window.router.navigate("/home");break;case"APP.PRIMARY.NAV.BEFORE.VERSION":console.log("Primary nav before version event",e);const r=D.VER,i=new Date().getFullYear();r&&neodigmToast&&neodigmToast.q(`${r} __devops_ts__|© ${i} PatentBadge`,"night");break;case N.APP__PRIMARY__NAV__AFTER:console.log("Primary nav after event",e);break;default:console.log("Unhandled APP sub-topic",n,e)}}),K.subscribe(N.ROUTE,(n,e)=>{switch(console.log(`ROUTE topic: ${n}`,e),n){case N.ROUTE__NAV__BEFORE:console.log("Route navigation before",e);break;case N.ROUTE__NAV__AFTER:console.log("Route navigation after",e),(e.route==="/"||e.route==="patentbadge/login"||e.route==="/patentbadge/login/")&&setTimeout(()=>{const r=document.getElementById("patent-input");r?(r.focus(),console.log("Patent input focused")):console.log("Patent input not found")},100);break;default:console.log("Unhandled ROUTE sub-topic",n,e)}}),K.subscribe(N.CORE__PATENT,(n,e)=>{switch(console.log(`CORE.PATENT topic: ${n}`,e),n){case N.CORE__PATENT__CRED:console.log("Patent credentials event",e);break;case N.CORE__PATENT__SET:console.log("Patent set event",e);break;case N.CORE__PATENT__CLEAR:console.log("Patent clear event",e);break;case N.CORE__PATENT__LIFECYCLE:console.log("Patent lifecycle event",e);break;case N.CORE__PATENT__VERB__GENBADGE:console.log("Generate badge from patent",e);break;case N.CORE__PATENT__VERB__BOOKMARK:console.log("Bookmark patent",e);break;case N.CORE__PATENT__VERB__SEARCH:if(console.log("Search patents",e,et),en.SPLASH_ROUTE==et){const r=document.querySelector("#patent-input"),i=document.querySelector("#patent-search-btn");r&&i&&(r.value.length>=7?(i.dataset.waitState="true",Ae.fetchPatentMetadata(r.value,o=>{i.dataset.waitState="false",o.data?D.setCorePatent(o.data):neodigmToast.q("Patent not found|Please verify the patent number.","danger")})):(neodigmToast.q("A Patent Number must have|at least 7 characters.","danger"),neodigmUtils.shake("#patent-input")))}break;default:console.log("Unhandled CORE.PATENT sub-topic",n,e)}}),K.subscribe(N.CORE__BADGE,(n,e)=>{switch(console.log(`CORE.BADGE topic: ${n}`,e),n){case N.CORE__BADGE__CRED:console.log("Badge credentials event",e);break;case N.CORE__BADGE__SET:console.log("Badge set event",e);break;case N.CORE__BADGE__CLEAR:console.log("Badge clear event",e);break;case N.CORE__BADGE__LIFECYCLE:console.log("Badge lifecycle event",e);break;case N.CORE__BADGE__VERB__GEN:console.log("Generate badge",e);break;case N.CORE__BADGE__VERB__SHARE:console.log("Share badge",e);break;case N.CORE__BADGE__VERB__EMBED:console.log("Embed badge",e);break;case N.CORE__BADGE__VERB__PRINT:console.log("Print badge",e);break;case N.CORE__BADGE__VERB__RENEW:console.log("Renew badge",e);break;case N.CORE__BADGE__VERB__BOOKMARK:console.log("Bookmark badge",e);break;case N.CORE__BADGE__VERB__BID:console.log("Badge bid event",e);break;case N.CORE__BADGE__VERB__BID__ACCEPT:console.log("Accept badge bid",e);break;case N.CORE__BADGE__VERB__BID__REJECT:console.log("Reject badge bid",e);break;case N.CORE__BADGE__VERB__BID__COUNTER:console.log("Counter badge bid",e);break;default:console.log("Unhandled CORE.BADGE sub-topic",n,e)}}),K.subscribe("WC",(n,e)=>{console.log(`WC topic: ${n}`,e)})}},{hierTopics:tt}=D;class nn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedToken=null}connectedCallback(){this.parseButtons(),this.render(),this.attachEventListeners()}parseButtons(){var e;const n=this.getAttribute("data-primary-nav-buttons");if(n)try{this.buttons=JSON.parse(n);const r=this.buttons.find(i=>i.selected);this.selectedToken=r?r.token:((e=this.buttons[0])==null?void 0:e.token)||null}catch(r){console.error("Error parsing nav buttons:",r),this.buttons=[]}}render(){window.matchMedia("(max-width: 768px)").matches;const e=window.matchMedia("(orientation: portrait)").matches?"portrait":"landscape",r=this.buttons.filter(o=>o.enabled?o.viewport?o.viewport.includes(e):!0:!1),i=r.map((o,s)=>`btn${s}`).join(" ");this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: sticky;
          top: 16px;
          z-index: 1000;
          width: 100%;
          max-width: calc(100vw - 32px);
          margin-left: auto !important;
          margin-right: auto !important;
        }

        .nav-container {
          display: grid;
          grid-template-areas: "logo ${i}";
          grid-template-columns: 66px repeat(${r.length}, 1fr);
          height: 66px;
          background-color: var(--paper, #F9F8F5);
          backdrop-filter: blur(10px);
          border: 2px solid var(--navy, #243447);
          border-radius: 24px;
          box-shadow: 0 4px 12px rgba(30, 42, 54, 0.15);
          overflow: hidden;
        }

        .logo {
          grid-area: logo;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display, 'Roboto Slab', serif);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy, #243447);
          border-right: 2px solid var(--line, #E3E3DF);
        }

        .nav-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: var(--navy, #243447);
          border: none;
          border-bottom: 4px solid transparent;
          border-left: 1px solid var(--line, #E3E3DF);
          border-right: 1px solid var(--line, #E3E3DF);
          font-family: var(--font-display, 'Roboto Slab', serif);
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .nav-button:first-of-type {
          border-left: none;
        }

        .nav-button:last-of-type {
          border-right: none;
        }

        .nav-button:hover:not(.selected) {
          background: var(--line, #E3E3DF);
        }

        .nav-button.selected {
          background: var(--navy, #243447);
          color: white;
          border-bottom-color: var(--navy, #243447);
          border-bottom-width: 6px;
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .count-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent, #C94B4B);
          color: white;
          font-size: 11px;
          font-weight: 700;
          border-radius: 10px;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .nav-container {
            height: 64px;
            grid-template-columns: 64px repeat(${r.length}, 1fr);
          }

          .logo {
            font-size: 1rem;
          }

          .nav-button {
            font-size: 14px;
          }

          .count-badge {
            top: 8px;
            right: 8px;
            min-width: 18px;
            height: 18px;
            font-size: 10px;
          }
        }
      </style>

      <nav class="nav-container">
        <div class="logo">PCX</div>
        ${r.map((o,s)=>this.renderButton(o,s)).join("")}
      </nav>
    `}renderButton(n,e){const r=n.token===this.selectedToken,i=n.count&&n.count>0;return`
      <button
        class="nav-button ${r?"selected":""}"
        data-token="${n.token}"
        ${n.enabled?"":"disabled"}
        style="grid-area: btn${e}"
      >
        ${n.caption}
        ${i?`<span class="count-badge">${n.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(i=>{i.addEventListener("click",o=>{const s=o.currentTarget.getAttribute("data-token");s&&!o.currentTarget.disabled&&this.selectButton(s)})});const e=this.shadowRoot.querySelector(".logo");e&&e.addEventListener("click",()=>{K.publish(tt.APP__PRIMARY__NAV__BEFORE+".VERSION",{token:"VERSION",timestamp:Date.now()})}),window.matchMedia("(orientation: portrait)").addEventListener("change",()=>this.render())}selectButton(n){this.selectedToken!==n&&(this.selectedToken=n,K.publish(tt.APP__PRIMARY__NAV__BEFORE+`.${n}`,{token:n,timestamp:Date.now()}),this.render(),this.attachEventListeners())}updateButtons(n){this.setAttribute("data-primary-nav-buttons",JSON.stringify(n)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(n,e){const r=this.buttons.find(i=>i.token===n);r&&(r.count=e,this.render(),this.attachEventListeners())}}customElements.define("pcx-primary-nav",nn);function rn(){const t=document.getElementById("app"),n=window.location.hash,e=n.indexOf("?"),r=e!==-1?n.substring(e):"",o=new URLSearchParams(r).get("patent")||"",s=[{token:"SIGNUP",caption:"SIGN UP",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!1},{token:"SIGNIN",caption:"SIGN IN",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!1}];t.innerHTML=`
    <style>
      .patent-search-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        min-height: 60vh;
        justify-content: center;
      }

      #patent-input {
        width: 33%;
        font-size: 28px;
        padding: 20px 24px;
        text-align: center;
        border: 2px solid var(--navy, #243447);
        border-radius: 24px;
        box-shadow: 0 4px 12px rgba(30, 42, 54, 0.15);
        background-color: var(--paper, #F9F8F5);
        font-family: var(--font-display, 'Roboto Slab', serif);
        color: var(--navy, #243447);
        outline: none;
      }

      #patent-search-btn {
        position: relative;
        padding: 16px 48px;
        font-size: 20px;
        font-weight: 600;
        font-family: var(--font-display, 'Roboto Slab', serif);
        background-color: var(--navy, #243447);
        color: white;
        border: 2px solid var(--navy, #243447);
        border-radius: 24px;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 4px 12px rgba(30, 42, 54, 0.15);
      }

      #patent-search-btn:hover {
        background-color: #1a2633;
        box-shadow: 0 6px 16px rgba(30, 42, 54, 0.25);
      }

      #patent-search-btn:active {
        transform: translateY(1px);
      }

      #patent-search-btn[data-wait-state="true"] {
        pointer-events: none;
        cursor: not-allowed;
      }

      #patent-search-btn .btn-text {
        display: inline;
      }

      #patent-search-btn[data-wait-state="true"] .btn-text {
        visibility: hidden;
      }

      #patent-search-btn neodigm-juicebar {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        visibility: hidden;
      }

      #patent-search-btn[data-wait-state="true"] neodigm-juicebar {
        visibility: visible;
      }

      @media (max-width: 768px), (orientation: portrait) {
        #patent-input {
          font-size: 24px;
          width: 80%;
        }

        #patent-search-btn {
          font-size: 18px;
          padding: 14px 40px;
        }
      }
    </style>
    <pcx-primary-nav data-primary-nav-buttons='${JSON.stringify(s)}'></pcx-primary-nav>
    <div class="patent-search-container">
      <input
        type="text"
        id="patent-input"
        placeholder="Enter Patent Number"
        value="${o}"
      />
      <button id="patent-search-btn" data-wait-state="false">
        <span class="btn-text">SEARCH</span>
        <neodigm-juicebar role="progressbar" data-n55-theme="primary" data-n55-size="small"
         style="background-color: var( --navy );"><div></div></neodigm-juicebar>
      </button>
    </div>
  `;const f=document.getElementById("patent-search-btn");f&&f.addEventListener("click",()=>{const u=document.getElementById("patent-input"),_=(u==null?void 0:u.value)||"";K.publish(D.hierTopics.CORE__PATENT__VERB__SEARCH,{patent:_,timestamp:Date.now()})})}var J=Uint8Array,$=Uint16Array,De=Int32Array,Ke=new J([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xe=new J([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),nt=new J([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Et=function(t,n){for(var e=new $(31),r=0;r<31;++r)e[r]=n+=1<<t[r-1];for(var i=new De(e[30]),r=1;r<30;++r)for(var o=e[r];o<e[r+1];++o)i[o]=o-e[r]<<5|r;return{b:e,r:i}},pt=Et(Ke,2),on=pt.b,Ie=pt.r;on[28]=258,Ie[258]=28;var sn=Et(xe,0),rt=sn.r,Me=new $(32768);for(var M=0;M<32768;++M){var re=(M&43690)>>1|(M&21845)<<1;re=(re&52428)>>2|(re&13107)<<2,re=(re&61680)>>4|(re&3855)<<4,Me[M]=((re&65280)>>8|(re&255)<<8)>>1}var pe=(function(t,n,e){for(var r=t.length,i=0,o=new $(n);i<r;++i)t[i]&&++o[t[i]-1];var s=new $(n);for(i=1;i<n;++i)s[i]=s[i-1]+o[i-1]<<1;var f;if(e){f=new $(1<<n);var u=15-n;for(i=0;i<r;++i)if(t[i])for(var _=i<<4|t[i],d=n-t[i],T=s[t[i]-1]++<<d,E=T|(1<<d)-1;T<=E;++T)f[Me[T]>>u]=_}else for(f=new $(r),i=0;i<r;++i)t[i]&&(f[i]=Me[s[t[i]-1]++]>>15-t[i]);return f}),se=new J(288);for(var M=0;M<144;++M)se[M]=8;for(var M=144;M<256;++M)se[M]=9;for(var M=256;M<280;++M)se[M]=7;for(var M=280;M<288;++M)se[M]=8;var Oe=new J(32);for(var M=0;M<32;++M)Oe[M]=5;var an=pe(se,9,0),cn=pe(Oe,5,0),_t=function(t){return(t+7)/8|0},gt=function(t,n,e){return(e==null||e>t.length)&&(e=t.length),new J(t.subarray(n,e))},ne=function(t,n,e){e<<=n&7;var r=n/8|0;t[r]|=e,t[r+1]|=e>>8},he=function(t,n,e){e<<=n&7;var r=n/8|0;t[r]|=e,t[r+1]|=e>>8,t[r+2]|=e>>16},Ce=function(t,n){for(var e=[],r=0;r<t.length;++r)t[r]&&e.push({s:r,f:t[r]});var i=e.length,o=e.slice();if(!i)return{t:Tt,l:0};if(i==1){var s=new J(e[0].s+1);return s[e[0].s]=1,{t:s,l:1}}e.sort(function(C,L){return C.f-L.f}),e.push({s:-1,f:25001});var f=e[0],u=e[1],_=0,d=1,T=2;for(e[0]={s:-1,f:f.f+u.f,l:f,r:u};d!=i-1;)f=e[e[_].f<e[T].f?_++:T++],u=e[_!=d&&e[_].f<e[T].f?_++:T++],e[d++]={s:-1,f:f.f+u.f,l:f,r:u};for(var E=o[0].s,r=1;r<i;++r)o[r].s>E&&(E=o[r].s);var y=new $(E+1),Y=ke(e[d-1],y,0);if(Y>n){var r=0,l=0,p=Y-n,g=1<<p;for(o.sort(function(L,I){return y[I.s]-y[L.s]||L.f-I.f});r<i;++r){var b=o[r].s;if(y[b]>n)l+=g-(1<<Y-y[b]),y[b]=n;else break}for(l>>=p;l>0;){var w=o[r].s;y[w]<n?l-=1<<n-y[w]++-1:++r}for(;r>=0&&l;--r){var B=o[r].s;y[B]==n&&(--y[B],++l)}Y=n}return{t:new J(y),l:Y}},ke=function(t,n,e){return t.s==-1?Math.max(ke(t.l,n,e+1),ke(t.r,n,e+1)):n[t.s]=e},it=function(t){for(var n=t.length;n&&!t[--n];);for(var e=new $(++n),r=0,i=t[0],o=1,s=function(u){e[r++]=u},f=1;f<=n;++f)if(t[f]==i&&f!=n)++o;else{if(!i&&o>2){for(;o>138;o-=138)s(32754);o>2&&(s(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(s(i),--o;o>6;o-=6)s(8304);o>2&&(s(o-3<<5|8208),o=0)}for(;o--;)s(i);o=1,i=t[f]}return{c:e.subarray(0,r),n}},de=function(t,n){for(var e=0,r=0;r<n.length;++r)e+=t[r]*n[r];return e},vt=function(t,n,e){var r=e.length,i=_t(n+2);t[i]=r&255,t[i+1]=r>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var o=0;o<r;++o)t[i+o+4]=e[o];return(i+4+r)*8},ot=function(t,n,e,r,i,o,s,f,u,_,d){ne(n,d++,e),++i[256];for(var T=Ce(i,15),E=T.t,y=T.l,Y=Ce(o,15),l=Y.t,p=Y.l,g=it(E),b=g.c,w=g.n,B=it(l),C=B.c,L=B.n,I=new $(19),O=0;O<b.length;++O)++I[b[O]&31];for(var O=0;O<C.length;++O)++I[C[O]&31];for(var R=Ce(I,7),G=R.t,q=R.l,k=19;k>4&&!G[nt[k-1]];--k);var ee=_+5<<3,H=de(i,se)+de(o,Oe)+s,j=de(i,E)+de(o,l)+s+14+3*k+de(I,G)+2*I[16]+3*I[17]+7*I[18];if(u>=0&&ee<=H&&ee<=j)return vt(n,d,t.subarray(u,u+_));var z,U,x,Q;if(ne(n,d,1+(j<H)),d+=2,j<H){z=pe(E,y,0),U=E,x=pe(l,p,0),Q=l;var a=pe(G,q,0);ne(n,d,w-257),ne(n,d+5,L-1),ne(n,d+10,k-4),d+=14;for(var O=0;O<k;++O)ne(n,d+3*O,G[nt[O]]);d+=3*k;for(var h=[b,C],m=0;m<2;++m)for(var P=h[m],O=0;O<P.length;++O){var A=P[O]&31;ne(n,d,a[A]),d+=G[A],A>15&&(ne(n,d,P[O]>>5&127),d+=P[O]>>12)}}else z=an,U=se,x=cn,Q=Oe;for(var O=0;O<f;++O){var S=r[O];if(S>255){var A=S>>18&31;he(n,d,z[A+257]),d+=U[A+257],A>7&&(ne(n,d,S>>23&31),d+=Ke[A]);var X=S&31;he(n,d,x[X]),d+=Q[X],X>3&&(he(n,d,S>>5&8191),d+=xe[X])}else he(n,d,z[S]),d+=U[S]}return he(n,d,z[256]),d+U[256]},un=new De([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Tt=new J(0),ln=function(t,n,e,r,i,o){var s=o.z||t.length,f=new J(r+s+5*(1+Math.ceil(s/7e3))+i),u=f.subarray(r,f.length-i),_=o.l,d=(o.r||0)&7;if(n){d&&(u[0]=o.r>>3);for(var T=un[n-1],E=T>>13,y=T&8191,Y=(1<<e)-1,l=o.p||new $(32768),p=o.h||new $(Y+1),g=Math.ceil(e/3),b=2*g,w=function(Pe){return(t[Pe]^t[Pe+1]<<g^t[Pe+2]<<b)&Y},B=new De(25e3),C=new $(288),L=new $(32),I=0,O=0,R=o.i||0,G=0,q=o.w||0,k=0;R+2<s;++R){var ee=w(R),H=R&32767,j=p[ee];if(l[H]=j,p[ee]=H,q<=R){var z=s-R;if((I>7e3||G>24576)&&(z>423||!_)){d=ot(t,u,0,B,C,L,O,G,k,R-k,d),G=I=O=0,k=R;for(var U=0;U<286;++U)C[U]=0;for(var U=0;U<30;++U)L[U]=0}var x=2,Q=0,a=y,h=H-j&32767;if(z>2&&ee==w(R-h))for(var m=Math.min(E,z)-1,P=Math.min(32767,R),A=Math.min(258,z);h<=P&&--a&&H!=j;){if(t[R+x]==t[R+x-h]){for(var S=0;S<A&&t[R+S]==t[R+S-h];++S);if(S>x){if(x=S,Q=h,S>m)break;for(var X=Math.min(h,S-2),_e=0,U=0;U<X;++U){var le=R-h+U&32767,Rt=l[le],He=le-Rt&32767;He>_e&&(_e=He,j=le)}}}H=j,j=l[H],h+=H-j&32767}if(Q){B[G++]=268435456|Ie[x]<<18|rt[Q];var je=Ie[x]&31,Ve=rt[Q]&31;O+=Ke[je]+xe[Ve],++C[257+je],++L[Ve],q=R+x,++I}else B[G++]=t[R],++C[t[R]]}}for(R=Math.max(R,q);R<s;++R)B[G++]=t[R],++C[t[R]];d=ot(t,u,_,B,C,L,O,G,k,R-k,d),_||(o.r=d&7|u[d/8|0]<<3,d-=7,o.h=p,o.p=l,o.i=R,o.w=q)}else{for(var R=o.w||0;R<s+_;R+=65535){var be=R+65535;be>=s&&(u[d/8|0]=_,be=s),d=vt(u,d+1,t.subarray(R,be))}o.i=s}return gt(f,0,r+_t(d)+i)},fn=(function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var e=n,r=9;--r;)e=(e&1&&-306674912)^e>>>1;t[n]=e}return t})(),hn=function(){var t=-1;return{p:function(n){for(var e=t,r=0;r<n.length;++r)e=fn[e&255^n[r]]^e>>>8;t=e},d:function(){return~t}}},dn=function(t,n,e,r,i){if(!i&&(i={l:1},n.dictionary)){var o=n.dictionary.subarray(-32768),s=new J(o.length+t.length);s.set(o),s.set(t,o.length),t=s,i.w=o.length}return ln(t,n.level==null?6:n.level,n.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+n.mem,e,r,i)},Fe=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},En=function(t,n){var e=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:n.level==9?2:0,t[9]=3,n.mtime!=0&&Fe(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),e){t[3]=8;for(var r=0;r<=e.length;++r)t[r+10]=e.charCodeAt(r)}},pn=function(t){return 10+(t.filename?t.filename.length+1:0)};function _n(t,n){n||(n={});var e=hn(),r=t.length;e.p(t);var i=dn(t,n,pn(n),8),o=i.length;return En(i,n),Fe(i,o-8,e.d()),Fe(i,o-4,r),i}var st=typeof TextEncoder<"u"&&new TextEncoder,gn=typeof TextDecoder<"u"&&new TextDecoder,vn=0;try{gn.decode(Tt,{stream:!0}),vn=1}catch{}function Tn(t,n){var e;if(st)return st.encode(t);for(var r=t.length,i=new J(t.length+(t.length>>1)),o=0,s=function(_){i[o++]=_},e=0;e<r;++e){if(o+5>i.length){var f=new J(o+8+(r-e<<1));f.set(i),i=f}var u=t.charCodeAt(e);u<128||n?s(u):u<2048?(s(192|u>>6),s(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|t.charCodeAt(++e)&1023,s(240|u>>18),s(128|u>>12&63),s(128|u>>6&63),s(128|u&63)):(s(224|u>>12),s(128|u>>6&63),s(128|u&63))}return gt(i,0,o)}const{hierTopics:Rn}=D;function yn(t,n){const e=JSON.stringify(n),r=Tn(e),i=_n(r),o=btoa(String.fromCharCode(...i));localStorage.setItem(t,o)}function An(){const t=document.getElementById("app");t.innerHTML=`
    <div class="auth-container">
      <div class="auth-left">
        <h1>Welcome Back</h1>
        <p>Enter your Details</p>

        <div class="auth-content">
          <form id="loginForm" class="auth-form">
          <div class="form-group">
            <label for="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div class="form-group">
            <label for="password">PASSWORD</label>
            <div class="password-input-wrapper">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <button type="button" id="togglePassword" class="toggle-password" aria-label="Toggle password visibility">
                <svg id="eyeIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>

          <div class="form-footer">
            <a href="#/forgot" id="forgotPasswordLink">FORGOT PASSWORD</a>
          </div>

          <button type="submit" class="btn">SIGN IN</button>
          </form>

          <p class="auth-switch">
            Don't have an account? <a href="#/signup">Sign Up</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <div class="auth-brand-header">
            <span class="auth-brand-name">PatentBadge.com</span>
            <span class="auth-brand-by">by</span>
            <span class="auth-brand-pcx">PCX</span>
          </div>
          <h2 class="auth-hero-title">
            Patent Contract Exchange (PCX) & Patent Badge<sup>TM</sup>
          </h2>
          <p class="auth-hero-description">
            Securing for patentees exclusive rights to their discoveries
          </p>
          <p class="auth-hero-citation">
            (Article I, Sec. 8, Cl. 8 U.S. Constitution)
          </p>
        </div>
      </div>
    </div>
  `,mn()}function mn(){var o;const t=document.getElementById("loginForm"),n=document.getElementById("email"),e=document.getElementById("password"),r=document.getElementById("togglePassword");r==null||r.addEventListener("click",()=>{const s=e.type==="password"?"text":"password";e.type=s}),t==null||t.addEventListener("submit",async s=>{s.preventDefault();const f=n.value.trim(),u=e.value;On(f)&&bn(u)&&await Pn(f,u)}),(o=document.getElementById("forgotPasswordLink"))==null||o.addEventListener("click",s=>{s.preventDefault(),window.router&&window.router.navigate("/forgot")});const i=document.querySelector('.auth-switch a[href="#/signup"]');i==null||i.addEventListener("click",s=>{s.preventDefault(),window.router&&window.router.navigate("/signup")})}function On(t){const n=e=>{typeof neodigmUtils<"u"&&neodigmUtils.shake(e)};return t?!t.includes("@")||!t.includes(".")?(typeof neodigmToast<"u"&&neodigmToast.q("Please enter a valid email address","danger"),n("#email"),!1):!0:(typeof neodigmToast<"u"&&neodigmToast.q("Please enter your email","danger"),n("#email"),!1)}function bn(t){const n=e=>{typeof neodigmUtils<"u"&&neodigmUtils.shake(e)};return t?t.length<10?(typeof neodigmToast<"u"&&neodigmToast.q("Password must be at least 10 characters","danger"),n("#password"),!1):!0:(typeof neodigmToast<"u"&&neodigmToast.q("Please enter your password","danger"),n("#password"),!1)}async function Pn(t,n){try{let e=n;typeof neodigmUtils<"u"&&(e=neodigmUtils.genHash(n));const r={email:t,hash:e};await Ae.doSignin(r,i=>{if(i.ok===!0){const{accessToken:o,...s}=i;yn("entity",s),K.publish(Rn.APP__AUTH,{email:t,timestamp:Date.now(),action:"signin"}),typeof mvvLegit>"u"&&window.router&&window.router.navigate("/home")}})}catch(e){console.error("Signin error:",e),typeof neodigmToast<"u"&&neodigmToast.q("An error occurred during sign in","danger")}}function wn(){const t=document.getElementById("app");t.innerHTML="<h1>Sign Up</h1>"}function Nn(){const t=document.getElementById("app"),n=[{token:"HOME",caption:"HOME",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!0},{token:"BADGES",caption:"BADGES",enabled:!0,viewport:["landscape"],count:3,selected:!1},{token:"BIDS",caption:"BIDS",enabled:!0,viewport:["landscape"],count:0,selected:!1},{token:"SIGNOUT",caption:"SIGN OUT",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!1}];t.innerHTML=`
    <pcx-primary-nav data-primary-nav-buttons='${JSON.stringify(n)}'></pcx-primary-nav>
    <div style="padding: var(--space-xl);">
      <h1>Dashboard</h1>
      <p>Welcome back to your PatentBadge dashboard</p>
    </div>
  `}function Bn(){const t=document.getElementById("app");t.innerHTML="<h1>Reset Hash</h1>"}const{hierTopics:Sn}=D;function Cn(){const t=document.getElementById("app");t.innerHTML=`
    <div class="auth-container">
      <div class="auth-left">
        <h1>Sign Out</h1>
        <p>Are you sure you want to sign out?</p>

        <div class="auth-content">
          <div class="signout-actions">
            <button id="signoutBtn" class="btn btn-signout">SIGN OUT</button>
            <button id="cancelBtn" class="btn btn-ghost">CANCEL</button>
          </div>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <div class="auth-brand-header">
            <span class="auth-brand-name">PatentBadge.com</span>
            <span class="auth-brand-by">by</span>
            <span class="auth-brand-pcx">PCX</span>
          </div>
          <h2 class="auth-hero-title">
            Patent Contract Exchange (PCX) & Patent Badge<sup>TM</sup>
          </h2>
          <p class="auth-hero-description">
            Securing for patentees exclusive rights to their discoveries
          </p>
          <p class="auth-hero-citation">
            (Article I, Sec. 8, Cl. 8 U.S. Constitution)
          </p>
        </div>
      </div>
    </div>
  `,Yn()}function Yn(){const t=document.getElementById("signoutBtn"),n=document.getElementById("cancelBtn");t==null||t.addEventListener("click",()=>{console.log("Signing out..."),K.publish(Sn.APP__SIGNOUT,{timestamp:Date.now()}),localStorage.removeItem("entity"),typeof mvvLegit<"u"?mvvLegit.doSignout():window.router&&window.router.navigate("/signin")}),n==null||n.addEventListener("click",()=>{console.log("Canceling signout, returning to home"),window.router&&window.router.navigate("/home")})}function Ln(){const t=document.getElementById("app");t.innerHTML="<h1>Forgot Password</h1>"}function In(){const t=document.getElementById("app");t.innerHTML="<h1>Reset Forgot Password</h1>"}function Mn(){const t=document.getElementById("app");t.innerHTML="<h1>Verification Link</h1>"}function at(t){var e,r,i;const n=document.getElementById("app");n.innerHTML=`
    <h1>Error</h1>
    <div style="margin-top: 20px;">
      <button id="testSignin">Go to Sign In</button>
      <button id="testHome">Go to Home</button>
      <button id="testSplash">Go to Splash</button>
    </div>
    <div style="margin-top: 20px;">
      <p>Current hash: <code>${window.location.hash}</code></p>
      <p>Current pathname: <code>${window.location.pathname}</code></p>
    </div>
  `,(e=document.getElementById("testSignin"))==null||e.addEventListener("click",()=>{console.log("Navigating to signin"),window.router&&window.router.navigate("/signin")}),(r=document.getElementById("testHome"))==null||r.addEventListener("click",()=>{console.log("Navigating to home"),window.router&&window.router.navigate("/home")}),(i=document.getElementById("testSplash"))==null||i.addEventListener("click",()=>{console.log("Navigating to /"),window.router&&window.router.navigate("/")})}function kn(){const t=document.getElementById("app");t.innerHTML="<h1>Offline</h1>"}const Fn=ye.features[ye.features.ENV].FF_BASE_URI;tn.bindAppListeners("pcx-core");window.AppBroadcast=D;const ae=new $t("/patentbadge/login/",{hash:!0});console.log("Router initialized:",ae);console.log("Initial hash:",window.location.hash);console.log("Initial pathname:",window.location.pathname);typeof mvvLegit<"u"&&(mvvLegit.init({BASE:Fn}),mvvLegit.setNavConroller((t=null)=>{if(t){console.log("mvvLegit navigation to:",t);const n=t.replace("_route","").replace("_","-");n==="splash"?ae.navigate("/"):ae.navigate(`/${n}`)}}),mvvLegit.setOnState((t=null)=>{t!==null&&console.log(`mvvLegit authentication state changed to: ${t}`)}));function W(t){if(typeof mvvLegit>"u")return!0;const n=t?`${t.replace("-","_")}_route`:"splash_route",e=mvvLegit.isRouteAllowed(n);return e||(console.log("Route blocked by mvvLegit:",n,"- redirecting to splash"),setTimeout(()=>{ae.navigate("/")},0)),e}ae.hooks({before:(t,n)=>{var r;const e=((r=n==null?void 0:n.route)==null?void 0:r.path)||(n==null?void 0:n.url)||window.location.hash.split("?")[0].replace("#","")||"unknown";K.publish(D.hierTopics.ROUTE__NAV__BEFORE,{route:e,match:n,timestamp:Date.now()}),t()},after:t=>{var e;const n=((e=t==null?void 0:t.route)==null?void 0:e.path)||(t==null?void 0:t.url)||window.location.hash.split("?")[0].replace("#","")||"unknown";D.currentRoute=n,K.publish(D.hierTopics.ROUTE__NAV__AFTER,{route:n,match:t,timestamp:Date.now()})}});ae.on({"/":()=>{console.log("Matched route: /"),W("splash")&&rn()},"/signin":()=>{console.log("Matched route: /signin"),W("signin")&&An()},"/signup":()=>{console.log("Matched route: /signup"),W("signup")&&wn()},"/home":()=>{console.log("Matched route: /home"),W("home")&&Nn()},"/resethash":()=>{console.log("Matched route: /resethash"),W("resethash")&&Bn()},"/signout":()=>{console.log("Matched route: /signout"),W("signout")&&Cn()},"/forgot":()=>{console.log("Matched route: /forgot"),W("forgot")&&Ln()},"/resetforgot":()=>{console.log("Matched route: /resetforgot"),W("resetforgot")&&In()},"/verf-link":()=>{console.log("Matched route: /verf-link"),W("verf-link")&&Mn()},"/error":()=>{console.log("Matched route: /error"),W("error")&&at()},"/offline":()=>{console.log("Matched route: /offline"),W("offline")&&kn()}}).notFound(()=>{console.log("No route matched - showing error"),at()}).resolve();window.router=ae;
