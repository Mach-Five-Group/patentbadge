var St=Object.defineProperty;var rt=t=>{throw TypeError(t)};var Bt=(t,n,e)=>n in t?St(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var Ee=(t,n,e)=>Bt(t,typeof n!="symbol"?n+"":n,e),it=(t,n,e)=>n.has(t)||rt("Cannot "+e);var ie=(t,n,e)=>(it(t,n,"read from private field"),e?e.call(t):n.get(t)),Me=(t,n,e)=>n.has(t)?rt("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,e),Ue=(t,n,e,r)=>(it(t,n,"write to private field"),r?r.call(t,e):n.set(t,e),e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var Ct=/([:*])(\w+)/g,Yt="([^/]+)",Lt=/\*/g,It="?(?:.*)",kt=/\/\?/g,Mt="/?([^/]+|)",Ut="(?:/^|^)",Ft="";function gt(t){return t===void 0&&(t="/"),Ze()?location.pathname+location.search+location.hash:t}function D(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function Pe(t){return typeof t=="string"}function Dt(t){return typeof t=="function"}function we(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function Gt(t,n){return n.length===0||!t?null:t.slice(1,t.length).reduce(function(e,r,i){return e===null&&(e={}),e[n[i]]=decodeURIComponent(r),e},null)}function Ne(t){var n=D(t).split(/\?(.*)?$/);return[D(n[0]),n.slice(1).join("")]}function Qe(t){for(var n={},e=t.split("&"),r=0;r<e.length;r++){var i=e[r].split("=");if(i[0]!==""){var o=decodeURIComponent(i[0]);n[o]?(Array.isArray(n[o])||(n[o]=[n[o]]),n[o].push(decodeURIComponent(i[1]||""))):n[o]=decodeURIComponent(i[1]||"")}}return n}function vt(t,n){var e=Ne(D(t.currentLocationPath)),r=e[0],i=e[1],o=i===""?null:Qe(i),a=[],h;if(Pe(n.path)){if(h=Ut+D(n.path).replace(Ct,function(d,u,R){return a.push(R),Yt}).replace(Lt,It).replace(kt,Mt)+"$",D(n.path)===""&&D(r)==="")return{url:r,queryString:i,hashString:we(t.to),route:n,data:null,params:o}}else h=n.path;var l=new RegExp(h,Ft),g=r.match(l);if(g){var p=Pe(n.path)?Gt(g,a):g.groups?g.groups:g.slice(1);return{url:D(r.replace(new RegExp("^"+t.instance.root),"")),queryString:i,hashString:we(t.to),route:n,data:p,params:o}}return!1}function Tt(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function de(t,n){return typeof t[n]>"u"||t[n]===!0}function xt(t){if(!t)return{};var n=t.split(","),e={},r;return n.forEach(function(i){var o=i.split(":").map(function(a){return a.replace(/(^ +| +$)/g,"")});switch(o[0]){case"historyAPIMethod":e.historyAPIMethod=o[1];break;case"resolveOptionsStrategy":r||(r={}),r.strategy=o[1];break;case"resolveOptionsHash":r||(r={}),r.hash=o[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":e[o[0]]=o[1]==="true";break}}),r&&(e.resolveOptions=r),e}function Ze(){return typeof window<"u"}function Kt(t,n){return t===void 0&&(t=[]),n===void 0&&(n={}),t.filter(function(e){return e}).forEach(function(e){["before","after","already","leave"].forEach(function(r){e[r]&&(n[r]||(n[r]=[]),n[r].push(e[r]))})}),n}function ne(t,n,e){var r=n||{},i=0;(function o(){if(!t[i]){e&&e(r);return}Array.isArray(t[i])?(t.splice.apply(t,[i,1].concat(t[i][0](r)?t[i][1]:t[i][2])),o()):t[i](r,function(a){typeof a>"u"||a===!0?(i+=1,o()):e&&e(r)})})()}ne.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};function ot(t,n){typeof t.currentLocationPath>"u"&&(t.currentLocationPath=t.to=gt(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function Fe(t,n){for(var e=0;e<t.instance.routes.length;e++){var r=t.instance.routes[e],i=vt(t,r);if(i&&(t.matches||(t.matches=[]),t.matches.push(i),t.resolveOptions.strategy==="ONE")){n();return}}n()}function Ht(t,n){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function Vt(t,n){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}var at=Ze(),jt=Tt();function $t(t,n){if(de(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),r=at&&t.resolveOptions&&t.resolveOptions.hash===!0;jt?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",r?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!r){var i=location.hash;location.hash="",location.hash=i}t.instance.__freezeListening=!1},1))):at&&(window.location.href=t.to)}n()}function Rt(t,n){var e=t.instance;if(!e.lastResolved()){n();return}ne(e.lastResolved().map(function(r){return function(i,o){if(!r.route.hooks||!r.route.hooks.leave){o();return}var a=!1,h=t.instance.matchLocation(r.route.path,t.currentLocationPath,!1);if(r.route.path!=="*")a=!h;else{var l=t.matches?t.matches.find(function(g){return r.route.path===g.route.path}):!1;a=!l}if(de(t.navigateOptions,"callHooks")&&a){ne(r.route.hooks.leave.map(function(g){return function(p,d){return g(function(u){u===!1?t.instance.__markAsClean(t):d()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return o()}]));return}else o()}}),{},function(){return n()})}function zt(t,n){t.match.route.hooks&&t.match.route.hooks.before&&de(t.navigateOptions,"callHooks")?ne(t.match.route.hooks.before.map(function(e){return function(i,o){return e(function(a){a===!1?t.instance.__markAsClean(t):o()},t.match)}}).concat([function(){return n()}])):n()}function Jt(t,n){de(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()}function qt(t,n){t.match.route.hooks&&t.match.route.hooks.after&&de(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(e){return e(t.match)}),n()}function Xt(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString){e.forEach(function(r){r.route.hooks&&r.route.hooks.already&&de(t.navigateOptions,"callHooks")&&r.route.hooks.already.forEach(function(i){return i(t.match)})}),n(!1);return}n()}function Wt(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var r=Ne(t.currentLocationPath),i=r[0],o=r[1],a=we(t.to);e.path=D(i);var h={url:e.path,queryString:o,hashString:a,data:null,route:e,params:o!==""?Qe(o):null};t.matches=[h],t.match=h}n()}function Qt(t,n){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),n()}function Zt(t,n){t.instance._setCurrent(null),n()}function yt(t,n){de(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var mt=[Xt,zt,Jt,qt],st=[Rt,Wt,ne.if(function(t){var n=t.notFoundHandled;return n},mt.concat([yt]),[Qt,Zt])];function Ve(){return Ve=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Ve.apply(this,arguments)}function ct(t,n){var e=0;function r(){if(e===t.matches.length){yt(t,n);return}ne(mt,Ve({},t,{match:t.matches[e]}),function(){e+=1,r()})}Rt(t,r)}function De(t){t.instance.__markAsClean(t)}function je(){return je=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},je.apply(this,arguments)}var lt="[data-navigo]";function en(t,n){var e=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:lt},r=this,i="/",o=null,a=[],h=!1,l,g=Tt(),p=Ze();t?i=D(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function d(s){return s.indexOf("#")>=0&&(e.hash===!0?s=s.split("#")[1]||"/":s=s.split("#")[0]),s}function u(s){return D(i+"/"+D(s))}function R(s,E,m,P){return s=Pe(s)?u(s):s,{name:P||D(String(s)),path:s,handler:E,hooks:Kt(m)}}function C(s,E,m){var P=this;return typeof s=="object"&&!(s instanceof RegExp)?(Object.keys(s).forEach(function(A){if(typeof s[A]=="function")P.on(A,s[A]);else{var N=s[A],J=N.uses,se=N.as,ce=N.hooks;a.push(R(A,J,[l,ce],se))}}),this):(typeof s=="function"&&(m=E,E=s,s=i),a.push(R(s,E,[l,m])),this)}function f(s,E){if(r.__dirty){r.__waiting.push(function(){return r.resolve(s,E)});return}else r.__dirty=!0;s=s?D(i)+"/"+D(s):void 0;var m={instance:r,to:s,currentLocationPath:s,navigateOptions:{},resolveOptions:je({},e,E)};return ne([ot,Fe,ne.if(function(P){var A=P.matches;return A&&A.length>0},ct,st)],m,De),m.matches?m.matches:!1}function _(s,E){if(r.__dirty){r.__waiting.push(function(){return r.navigate(s,E)});return}else r.__dirty=!0;s=D(i)+"/"+D(s);var m={instance:r,to:s,navigateOptions:E||{},resolveOptions:E&&E.resolveOptions?E.resolveOptions:e,currentLocationPath:d(s)};ne([Ht,Vt,Fe,ne.if(function(P){var A=P.matches;return A&&A.length>0},ct,st),$t,De],m,De)}function v(s,E,m){var P=U(s,E);return P!==null?(_(P.replace(new RegExp("^/?"+i),""),m),!0):!1}function w(s){return this.routes=a=a.filter(function(E){return Pe(s)?D(E.path)!==D(s):Dt(s)?s!==E.handler:String(E.path)!==String(s)}),this}function b(){g&&(this.__popstateListener=function(){r.__freezeListening||f()},window.addEventListener("popstate",this.__popstateListener))}function S(){this.routes=a=[],g&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=h=!0}function Y(s,E){return r._notFoundRoute=R("*",s,[l,E],"__NOT_FOUND__"),this}function L(){if(p)return I().forEach(function(s){if(s.getAttribute("data-navigo")==="false"||s.getAttribute("target")==="_blank"){s.hasListenerAttached&&s.removeEventListener("click",s.navigoHandler);return}s.hasListenerAttached||(s.hasListenerAttached=!0,s.navigoHandler=function(E){if((E.ctrlKey||E.metaKey)&&E.target.tagName.toLowerCase()==="a")return!1;var m=s.getAttribute("href");if(typeof m>"u"||m===null)return!1;if(m.match(/^(http|https)/)&&typeof URL<"u")try{var P=new URL(m);m=P.pathname+P.search}catch{}var A=xt(s.getAttribute("data-navigo-options"));h||(E.preventDefault(),E.stopPropagation(),r.navigate(D(m),A))},s.addEventListener("click",s.navigoHandler))}),r}function I(){return p?[].slice.call(document.querySelectorAll(e.linksSelector||lt)):[]}function O(s){return"/"+i+"/"+D(s)}function y(s){return l=s,this}function x(){return o}function U(s,E,m){var P=a.find(function(J){return J.name===s}),A=null;if(P){if(A=P.path,E)for(var N in E)A=A.replace(":"+N,E[N]);A=A.match(/^\//)?A:"/"+A}return A&&m&&!m.includeRoot&&(A=A.replace(new RegExp("^/"+i),"")),A}function M(s){return s.getAttribute("href")}function Z(s){var E=Ne(D(s)),m=E[0],P=E[1],A=P===""?null:Qe(P),N=we(s),J=R(m,function(){},[l],m);return{url:m,queryString:P,hashString:N,route:J,data:null,params:A}}function q(){return Z(D(gt(i)).replace(new RegExp("^"+i),""))}function z(s){var E={instance:r,currentLocationPath:s,to:s,resolveOptions:e};return Fe(E,function(){}),E.matches?E.matches:!1}function K(s,E,m){typeof E<"u"&&(typeof m>"u"||m)&&(E=u(E));var P={instance:r,to:E,currentLocationPath:E};ot(P,function(){}),typeof s=="string"&&(s=typeof m>"u"||m?u(s):s);var A=vt(P,{name:String(s),path:s,handler:function(){},hooks:{}});return A||!1}function k(s,E,m){return typeof E=="string"&&(E=$(E)),E?(E.hooks[s]||(E.hooks[s]=[]),E.hooks[s].push(m),function(){E.hooks[s]=E.hooks[s].filter(function(P){return P!==m})}):(console.warn("Route doesn't exists: "+E),function(){})}function $(s){return typeof s=="string"?a.find(function(E){return E.name===u(s)}):a.find(function(E){return E.handler===s})}function H(s){s.instance.__dirty=!1,s.instance.__waiting.length>0&&s.instance.__waiting.shift()()}this.root=i,this.routes=a,this.destroyed=h,this.current=o,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=H,this.on=C,this.off=w,this.resolve=f,this.navigate=_,this.navigateByName=v,this.destroy=S,this.notFound=Y,this.updatePageLinks=L,this.link=O,this.hooks=y,this.extractGETParameters=function(s){return Ne(d(s))},this.lastResolved=x,this.generate=U,this.getLinkPath=M,this.match=z,this.matchLocation=K,this.getCurrentLocation=q,this.addBeforeHook=k.bind(this,"before"),this.addAfterHook=k.bind(this,"after"),this.addAlreadyHook=k.bind(this,"already"),this.addLeaveHook=k.bind(this,"leave"),this.getRoute=$,this._pathToMatchObject=Z,this._clean=D,this._checkForAHash=d,this._setCurrent=function(s){return o=r.current=s},b.call(this),L.call(this)}let Se={features:{ENV:"DEV",DEV:{FF_BASE_URI:"https://pcxdev-rest-gjkk.onrender.com"},QA:{FF_BASE_URI:""},PROD:{FF_BASE_URI:""}}};var tn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ye={exports:{}},rn=ye.exports,ut;function on(){return ut||(ut=1,(function(t,n){(function(e,r){var i={};e.PubSub?(i=e.PubSub,console.warn("PubSub already loaded, using existing version")):(e.PubSub=i,r(i)),t!==void 0&&t.exports&&(n=t.exports=i),n.PubSub=i,t.exports=n=i})(typeof window=="object"&&window||rn||tn,function(e){var r={},i=-1,o="*";function a(f){var _;for(_ in f)if(Object.prototype.hasOwnProperty.call(f,_))return!0;return!1}function h(f){return function(){throw f}}function l(f,_,v){try{f(_,v)}catch(w){setTimeout(h(w),0)}}function g(f,_,v){f(_,v)}function p(f,_,v,w){var b=r[_],S=w?g:l,Y;if(Object.prototype.hasOwnProperty.call(r,_))for(Y in b)Object.prototype.hasOwnProperty.call(b,Y)&&S(b[Y],f,v)}function d(f,_,v){return function(){var b=String(f),S=b.lastIndexOf(".");for(p(f,f,_,v);S!==-1;)b=b.substr(0,S),S=b.lastIndexOf("."),p(f,b,_,v);p(f,o,_,v)}}function u(f){var _=String(f),v=!!(Object.prototype.hasOwnProperty.call(r,_)&&a(r[_]));return v}function R(f){for(var _=String(f),v=u(_)||u(o),w=_.lastIndexOf(".");!v&&w!==-1;)_=_.substr(0,w),w=_.lastIndexOf("."),v=u(_);return v}function C(f,_,v,w){f=typeof f=="symbol"?f.toString():f;var b=d(f,_,w),S=R(f);return S?(v===!0?b():setTimeout(b,0),!0):!1}e.publish=function(f,_){return C(f,_,!1,e.immediateExceptions)},e.publishSync=function(f,_){return C(f,_,!0,e.immediateExceptions)},e.subscribe=function(f,_){if(typeof _!="function")return!1;f=typeof f=="symbol"?f.toString():f,Object.prototype.hasOwnProperty.call(r,f)||(r[f]={});var v="uid_"+String(++i);return r[f][v]=_,v},e.subscribeAll=function(f){return e.subscribe(o,f)},e.subscribeOnce=function(f,_){var v=e.subscribe(f,function(){e.unsubscribe(v),_.apply(this,arguments)});return e},e.clearAllSubscriptions=function(){r={}},e.clearSubscriptions=function(_){var v;for(v in r)Object.prototype.hasOwnProperty.call(r,v)&&v.indexOf(_)===0&&delete r[v]},e.countSubscriptions=function(_){var v,w,b=0;for(v in r)if(Object.prototype.hasOwnProperty.call(r,v)&&v.indexOf(_)===0){for(w in r[v])b++;break}return b},e.getSubscriptions=function(_){var v,w=[];for(v in r)Object.prototype.hasOwnProperty.call(r,v)&&v.indexOf(_)===0&&w.push(v);return w},e.unsubscribe=function(f){var _=function(O){var y;for(y in r)if(Object.prototype.hasOwnProperty.call(r,y)&&y.indexOf(O)===0)return!0;return!1},v=typeof f=="string"&&(Object.prototype.hasOwnProperty.call(r,f)||_(f)),w=!v&&typeof f=="string",b=typeof f=="function",S=!1,Y,L,I;if(v){e.clearSubscriptions(f);return}for(Y in r)if(Object.prototype.hasOwnProperty.call(r,Y)){if(L=r[Y],w&&L[f]){delete L[f],S=f;break}if(b)for(I in L)Object.prototype.hasOwnProperty.call(L,I)&&L[I]===f&&(delete L[I],S=!0)}return S}})})(ye,ye.exports)),ye.exports}var an=on();const j=nn(an),W=class W{static getTJO(){if(this.jsTJO)return this.jsTJO;let n=localStorage.getItem("tjo");return n&&(this.jsTJO=JSON.parse(n)),this.jsTJO}static setTJO(n){return n?localStorage.setItem("tjo",JSON.stringify(n)):localStorage.clear("tjo"),this.jsTJO=n}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),W.setTJO(null),location.reload()}static async doSignin(n,e=null){const r={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",r)).json();o.ok?(typeof mvvLegit<"u"&&mvvLegit&&(o!=null&&o.accessToken)&&mvvLegit.doSignin(o==null?void 0:o.accessToken),e&&e(o)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(n,e=null){const r={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",r)).json();if(o.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),e&&e(o);else{const a=(o==null?void 0:o.error)||(o==null?void 0:o.message)||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(a,"danger"),e&&e(o)}}static async resetHash(n,e,r=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const i=typeof neodigmUtils<"u"?neodigmUtils.genHash(e):e,o={method:"POST",body:JSON.stringify({guid:n,hash:i}),headers:W.genHeaders()},h=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",o)).json();r&&r(h)}static genHeaders(n={}){var r,i,o,a,h,l,g,p,d;let e={};return e.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),e.Authorization="Bearer expired",e["Content-Type"]="application/json",W.getTJO()&&(e.Authorization="Bearer "+W.getTJO().tokens[0]),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&((o=(i=(r=SessionAcctEntity.oEntities)==null?void 0:r.data)==null?void 0:i.entity)!=null&&o.class)&&(e.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&((l=(h=(a=SessionAcctEntity.oEntities)==null?void 0:a.data)==null?void 0:h.entity)!=null&&l.guid)&&(e.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&((d=(p=(g=SessionAcctEntity.oEntities)==null?void 0:g.data)==null?void 0:p.entity)!=null&&d.company)&&(e.company=SessionAcctEntity.oEntities.data.entity.company),e}static async fetchPatents(n=null){const e={method:"GET",headers:W.genHeaders()},i=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePatents",e)).json();return n&&n(i),i}static async fetchPatentMetadata(n,e=null){const r={method:"GET",headers:W.genHeaders()},o=await(await fetch(this.API_baseURI+"/m5t/patent/metadata/"+n,r)).json();return e&&e(o),o}};W.API_baseURI=Se.features[Se.features.ENV].FF_BASE_URI,W.API_ver="v5",W.jsState={},W.jsMeta={},W.jsTJO=null;let Be=W;var V=Uint8Array,Q=Uint16Array,et=Int32Array,Ye=new V([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Le=new V([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$e=new V([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),At=function(t,n){for(var e=new Q(31),r=0;r<31;++r)e[r]=n+=1<<t[r-1];for(var i=new et(e[30]),r=1;r<30;++r)for(var o=e[r];o<e[r+1];++o)i[o]=o-e[r]<<5|r;return{b:e,r:i}},bt=At(Ye,2),Ot=bt.b,ze=bt.r;Ot[28]=258,ze[258]=28;var Pt=At(Le,0),sn=Pt.b,ft=Pt.r,Je=new Q(32768);for(var F=0;F<32768;++F){var le=(F&43690)>>1|(F&21845)<<1;le=(le&52428)>>2|(le&13107)<<2,le=(le&61680)>>4|(le&3855)<<4,Je[F]=((le&65280)>>8|(le&255)<<8)>>1}var re=(function(t,n,e){for(var r=t.length,i=0,o=new Q(n);i<r;++i)t[i]&&++o[t[i]-1];var a=new Q(n);for(i=1;i<n;++i)a[i]=a[i-1]+o[i-1]<<1;var h;if(e){h=new Q(1<<n);var l=15-n;for(i=0;i<r;++i)if(t[i])for(var g=i<<4|t[i],p=n-t[i],d=a[t[i]-1]++<<p,u=d|(1<<p)-1;d<=u;++d)h[Je[d]>>l]=g}else for(h=new Q(r),i=0;i<r;++i)t[i]&&(h[i]=Je[a[t[i]-1]++]>>15-t[i]);return h}),he=new V(288);for(var F=0;F<144;++F)he[F]=8;for(var F=144;F<256;++F)he[F]=9;for(var F=256;F<280;++F)he[F]=7;for(var F=280;F<288;++F)he[F]=8;var me=new V(32);for(var F=0;F<32;++F)me[F]=5;var cn=re(he,9,0),ln=re(he,9,1),un=re(me,5,0),fn=re(me,5,1),Ge=function(t){for(var n=t[0],e=1;e<t.length;++e)t[e]>n&&(n=t[e]);return n},ee=function(t,n,e){var r=n/8|0;return(t[r]|t[r+1]<<8)>>(n&7)&e},xe=function(t,n){var e=n/8|0;return(t[e]|t[e+1]<<8|t[e+2]<<16)>>(n&7)},tt=function(t){return(t+7)/8|0},Ie=function(t,n,e){return(n==null||n<0)&&(n=0),(e==null||e>t.length)&&(e=t.length),new V(t.subarray(n,e))},hn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],X=function(t,n,e){var r=new Error(n||hn[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,X),!e)throw r;return r},nt=function(t,n,e,r){var i=t.length,o=0;if(!i||n.f&&!n.l)return e||new V(0);var a=!e,h=a||n.i!=2,l=n.i;a&&(e=new V(i*3));var g=function(ge){var ve=e.length;if(ge>ve){var pe=new V(Math.max(ve*2,ge));pe.set(e),e=pe}},p=n.f||0,d=n.p||0,u=n.b||0,R=n.l,C=n.d,f=n.m,_=n.n,v=i*8;do{if(!R){p=ee(t,d,1);var w=ee(t,d+1,3);if(d+=3,w)if(w==1)R=ln,C=fn,f=9,_=5;else if(w==2){var L=ee(t,d,31)+257,I=ee(t,d+10,15)+4,O=L+ee(t,d+5,31)+1;d+=14;for(var y=new V(O),x=new V(19),U=0;U<I;++U)x[$e[U]]=ee(t,d+U*3,7);d+=I*3;for(var M=Ge(x),Z=(1<<M)-1,q=re(x,M,1),U=0;U<O;){var z=q[ee(t,d,Z)];d+=z&15;var b=z>>4;if(b<16)y[U++]=b;else{var K=0,k=0;for(b==16?(k=3+ee(t,d,3),d+=2,K=y[U-1]):b==17?(k=3+ee(t,d,7),d+=3):b==18&&(k=11+ee(t,d,127),d+=7);k--;)y[U++]=K}}var $=y.subarray(0,L),H=y.subarray(L);f=Ge($),_=Ge(H),R=re($,f,1),C=re(H,_,1)}else X(1);else{var b=tt(d)+4,S=t[b-4]|t[b-3]<<8,Y=b+S;if(Y>i){l&&X(0);break}h&&g(u+S),e.set(t.subarray(b,Y),u),n.b=u+=S,n.p=d=Y*8,n.f=p;continue}if(d>v){l&&X(0);break}}h&&g(u+131072);for(var s=(1<<f)-1,E=(1<<_)-1,m=d;;m=d){var K=R[xe(t,d)&s],P=K>>4;if(d+=K&15,d>v){l&&X(0);break}if(K||X(2),P<256)e[u++]=P;else if(P==256){m=d,R=null;break}else{var A=P-254;if(P>264){var U=P-257,N=Ye[U];A=ee(t,d,(1<<N)-1)+Ot[U],d+=N}var J=C[xe(t,d)&E],se=J>>4;J||X(3),d+=J&15;var H=sn[se];if(se>3){var N=Le[se];H+=xe(t,d)&(1<<N)-1,d+=N}if(d>v){l&&X(0);break}h&&g(u+131072);var ce=u+A;if(u<H){var Ae=o-H,be=Math.min(H,ce);for(Ae+u<0&&X(3);u<be;++u)e[u]=r[Ae+u]}for(;u<ce;++u)e[u]=e[u-H]}}n.l=R,n.p=m,n.b=u,n.f=p,R&&(p=1,n.m=f,n.d=C,n.n=_)}while(!p);return u!=e.length&&a?Ie(e,0,u):e.subarray(0,u)},oe=function(t,n,e){e<<=n&7;var r=n/8|0;t[r]|=e,t[r+1]|=e>>8},Te=function(t,n,e){e<<=n&7;var r=n/8|0;t[r]|=e,t[r+1]|=e>>8,t[r+2]|=e>>16},Ke=function(t,n){for(var e=[],r=0;r<t.length;++r)t[r]&&e.push({s:r,f:t[r]});var i=e.length,o=e.slice();if(!i)return{t:Nt,l:0};if(i==1){var a=new V(e[0].s+1);return a[e[0].s]=1,{t:a,l:1}}e.sort(function(Y,L){return Y.f-L.f}),e.push({s:-1,f:25001});var h=e[0],l=e[1],g=0,p=1,d=2;for(e[0]={s:-1,f:h.f+l.f,l:h,r:l};p!=i-1;)h=e[e[g].f<e[d].f?g++:d++],l=e[g!=p&&e[g].f<e[d].f?g++:d++],e[p++]={s:-1,f:h.f+l.f,l:h,r:l};for(var u=o[0].s,r=1;r<i;++r)o[r].s>u&&(u=o[r].s);var R=new Q(u+1),C=qe(e[p-1],R,0);if(C>n){var r=0,f=0,_=C-n,v=1<<_;for(o.sort(function(L,I){return R[I.s]-R[L.s]||L.f-I.f});r<i;++r){var w=o[r].s;if(R[w]>n)f+=v-(1<<C-R[w]),R[w]=n;else break}for(f>>=_;f>0;){var b=o[r].s;R[b]<n?f-=1<<n-R[b]++-1:++r}for(;r>=0&&f;--r){var S=o[r].s;R[S]==n&&(--R[S],++f)}C=n}return{t:new V(R),l:C}},qe=function(t,n,e){return t.s==-1?Math.max(qe(t.l,n,e+1),qe(t.r,n,e+1)):n[t.s]=e},ht=function(t){for(var n=t.length;n&&!t[--n];);for(var e=new Q(++n),r=0,i=t[0],o=1,a=function(l){e[r++]=l},h=1;h<=n;++h)if(t[h]==i&&h!=n)++o;else{if(!i&&o>2){for(;o>138;o-=138)a(32754);o>2&&(a(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(a(i),--o;o>6;o-=6)a(8304);o>2&&(a(o-3<<5|8208),o=0)}for(;o--;)a(i);o=1,i=t[h]}return{c:e.subarray(0,r),n}},Re=function(t,n){for(var e=0,r=0;r<n.length;++r)e+=t[r]*n[r];return e},wt=function(t,n,e){var r=e.length,i=tt(n+2);t[i]=r&255,t[i+1]=r>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var o=0;o<r;++o)t[i+o+4]=e[o];return(i+4+r)*8},dt=function(t,n,e,r,i,o,a,h,l,g,p){oe(n,p++,e),++i[256];for(var d=Ke(i,15),u=d.t,R=d.l,C=Ke(o,15),f=C.t,_=C.l,v=ht(u),w=v.c,b=v.n,S=ht(f),Y=S.c,L=S.n,I=new Q(19),O=0;O<w.length;++O)++I[w[O]&31];for(var O=0;O<Y.length;++O)++I[Y[O]&31];for(var y=Ke(I,7),x=y.t,U=y.l,M=19;M>4&&!x[$e[M-1]];--M);var Z=g+5<<3,q=Re(i,he)+Re(o,me)+a,z=Re(i,u)+Re(o,f)+a+14+3*M+Re(I,x)+2*I[16]+3*I[17]+7*I[18];if(l>=0&&Z<=q&&Z<=z)return wt(n,p,t.subarray(l,l+g));var K,k,$,H;if(oe(n,p,1+(z<q)),p+=2,z<q){K=re(u,R,0),k=u,$=re(f,_,0),H=f;var s=re(x,U,0);oe(n,p,b-257),oe(n,p+5,L-1),oe(n,p+10,M-4),p+=14;for(var O=0;O<M;++O)oe(n,p+3*O,x[$e[O]]);p+=3*M;for(var E=[w,Y],m=0;m<2;++m)for(var P=E[m],O=0;O<P.length;++O){var A=P[O]&31;oe(n,p,s[A]),p+=x[A],A>15&&(oe(n,p,P[O]>>5&127),p+=P[O]>>12)}}else K=cn,k=he,$=un,H=me;for(var O=0;O<h;++O){var N=r[O];if(N>255){var A=N>>18&31;Te(n,p,K[A+257]),p+=k[A+257],A>7&&(oe(n,p,N>>23&31),p+=Ye[A]);var J=N&31;Te(n,p,$[J]),p+=H[J],J>3&&(Te(n,p,N>>5&8191),p+=Le[J])}else Te(n,p,K[N]),p+=k[N]}return Te(n,p,K[256]),p+k[256]},dn=new et([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Nt=new V(0),pn=function(t,n,e,r,i,o){var a=o.z||t.length,h=new V(r+a+5*(1+Math.ceil(a/7e3))+i),l=h.subarray(r,h.length-i),g=o.l,p=(o.r||0)&7;if(n){p&&(l[0]=o.r>>3);for(var d=dn[n-1],u=d>>13,R=d&8191,C=(1<<e)-1,f=o.p||new Q(32768),_=o.h||new Q(C+1),v=Math.ceil(e/3),w=2*v,b=function(ke){return(t[ke]^t[ke+1]<<v^t[ke+2]<<w)&C},S=new et(25e3),Y=new Q(288),L=new Q(32),I=0,O=0,y=o.i||0,x=0,U=o.w||0,M=0;y+2<a;++y){var Z=b(y),q=y&32767,z=_[Z];if(f[q]=z,_[Z]=q,U<=y){var K=a-y;if((I>7e3||x>24576)&&(K>423||!g)){p=dt(t,l,0,S,Y,L,O,x,M,y-M,p),x=I=O=0,M=y;for(var k=0;k<286;++k)Y[k]=0;for(var k=0;k<30;++k)L[k]=0}var $=2,H=0,s=R,E=q-z&32767;if(K>2&&Z==b(y-E))for(var m=Math.min(u,K)-1,P=Math.min(32767,y),A=Math.min(258,K);E<=P&&--s&&q!=z;){if(t[y+$]==t[y+$-E]){for(var N=0;N<A&&t[y+N]==t[y+N-E];++N);if(N>$){if($=N,H=E,N>m)break;for(var J=Math.min(E,N-2),se=0,k=0;k<J;++k){var ce=y-E+k&32767,Ae=f[ce],be=ce-Ae&32767;be>se&&(se=be,z=ce)}}}q=z,z=f[q],E+=q-z&32767}if(H){S[x++]=268435456|ze[$]<<18|ft[H];var ge=ze[$]&31,ve=ft[H]&31;O+=Ye[ge]+Le[ve],++Y[257+ge],++L[ve],U=y+$,++I}else S[x++]=t[y],++Y[t[y]]}}for(y=Math.max(y,U);y<a;++y)S[x++]=t[y],++Y[t[y]];p=dt(t,l,g,S,Y,L,O,x,M,y-M,p),g||(o.r=p&7|l[p/8|0]<<3,p-=7,o.h=_,o.p=f,o.i=y,o.w=U)}else{for(var y=o.w||0;y<a+g;y+=65535){var pe=y+65535;pe>=a&&(l[p/8|0]=g,pe=a),p=wt(l,p+1,t.subarray(y,pe))}o.i=a}return Ie(h,0,r+tt(p)+i)},En=(function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var e=n,r=9;--r;)e=(e&1&&-306674912)^e>>>1;t[n]=e}return t})(),_n=function(){var t=-1;return{p:function(n){for(var e=t,r=0;r<n.length;++r)e=En[e&255^n[r]]^e>>>8;t=e},d:function(){return~t}}},gn=function(t,n,e,r,i){if(!i&&(i={l:1},n.dictionary)){var o=n.dictionary.subarray(-32768),a=new V(o.length+t.length);a.set(o),a.set(t,o.length),t=a,i.w=o.length}return pn(t,n.level==null?6:n.level,n.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+n.mem,e,r,i)},Xe=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},vn=function(t,n){var e=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:n.level==9?2:0,t[9]=3,n.mtime!=0&&Xe(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),e){t[3]=8;for(var r=0;r<=e.length;++r)t[r+10]=e.charCodeAt(r)}},Tn=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&X(6,"invalid gzip data");var n=t[3],e=10;n&4&&(e+=(t[10]|t[11]<<8)+2);for(var r=(n>>3&1)+(n>>4&1);r>0;r-=!t[e++]);return e+(n&2)},Rn=function(t){var n=t.length;return(t[n-4]|t[n-3]<<8|t[n-2]<<16|t[n-1]<<24)>>>0},yn=function(t){return 10+(t.filename?t.filename.length+1:0)},mn=function(t,n){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&X(6,"invalid zlib data"),(t[1]>>5&1)==1&&X(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function An(t,n){return nt(t,{i:2},n,n)}function bn(t,n){n||(n={});var e=_n(),r=t.length;e.p(t);var i=gn(t,n,yn(n),8),o=i.length;return vn(i,n),Xe(i,o-8,e.d()),Xe(i,o-4,r),i}function On(t,n){var e=Tn(t);return e+8>t.length&&X(6,"invalid gzip data"),nt(t.subarray(e,-8),{i:2},new V(Rn(t)),n)}function Pn(t,n){return nt(t.subarray(mn(t),-4),{i:2},n,n)}function wn(t,n){return t[0]==31&&t[1]==139&&t[2]==8?On(t,n):(t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31?An(t,n):Pn(t,n)}var pt=typeof TextEncoder<"u"&&new TextEncoder,We=typeof TextDecoder<"u"&&new TextDecoder,Nn=0;try{We.decode(Nt,{stream:!0}),Nn=1}catch{}var Sn=function(t){for(var n="",e=0;;){var r=t[e++],i=(r>127)+(r>223)+(r>239);if(e+i>t.length)return{s:n,r:Ie(t,e-1)};i?i==3?(r=((r&15)<<18|(t[e++]&63)<<12|(t[e++]&63)<<6|t[e++]&63)-65536,n+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?n+=String.fromCharCode((r&31)<<6|t[e++]&63):n+=String.fromCharCode((r&15)<<12|(t[e++]&63)<<6|t[e++]&63):n+=String.fromCharCode(r)}};function Bn(t,n){var e;if(pt)return pt.encode(t);for(var r=t.length,i=new V(t.length+(t.length>>1)),o=0,a=function(g){i[o++]=g},e=0;e<r;++e){if(o+5>i.length){var h=new V(o+8+(r-e<<1));h.set(i),i=h}var l=t.charCodeAt(e);l<128||n?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|t.charCodeAt(++e)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return Ie(i,0,o)}function Cn(t,n){var e;if(We)return We.decode(t);var r=Sn(t),i=r.s,e=r.r;return e.length&&X(8),i}var ue,fe;class G{static setCorePatent(n,e=!0){ie(this,ue).push(n),e&&j.publish(this.hierTopics.CORE__PATENT__SET,{item:n,count:ie(this,ue).length,timestamp:Date.now()})}static getCorePatent(){return ie(this,ue)}static setCoreBadge(n,e=!0){ie(this,fe).push(n),e&&j.publish(this.hierTopics.CORE__BADGE__SET,{item:n,count:ie(this,fe).length,timestamp:Date.now()})}static getCoreBadge(){return ie(this,fe)}static clearCorePatent(n=!0){Ue(this,ue,[]),n&&j.publish(this.hierTopics.CORE__PATENT__CLEAR,{timestamp:Date.now()})}static clearCoreBadge(n=!0){Ue(this,fe,[]),n&&j.publish(this.hierTopics.CORE__BADGE__CLEAR,{timestamp:Date.now()})}static getCorePatentCount(){return ie(this,ue).length}static getCoreBadgeCount(){return ie(this,fe).length}static getCoreStorage(){const n=localStorage.getItem("core");if(n)try{return JSON.parse(n)}catch(e){console.error("Error parsing core storage:",e)}return{email:[],patents:[],applications:[],badges:[]}}static setCoreStorage(n){localStorage.setItem("core",JSON.stringify(n))}static addPatentToCore(n){const e=this.getCoreStorage();return Array.isArray(e.patents)||(e.patents=[]),e.patents=[...new Set([...e.patents,n])],this.setCoreStorage(e),e}static addApplicationToCore(n){const e=this.getCoreStorage();return Array.isArray(e.applications)||(e.applications=[]),e.applications=[...new Set([...e.applications,n])],this.setCoreStorage(e),e}static addBadgeToCore(n){const e=this.getCoreStorage();return Array.isArray(e.badges)||(e.badges=[]),e.badges=[...new Set([...e.badges,n])],this.setCoreStorage(e),e}static addEmailToCore(n){const e=this.getCoreStorage();return Array.isArray(e.email)||(e.email=[]),e.email=[...new Set([...e.email,n])],this.setCoreStorage(e),e}static decompressEntity(){const n=localStorage.getItem("entity");if(!n)return null;try{const e=atob(n),r=new Uint8Array(e.length);for(let a=0;a<e.length;a++)r[a]=e.charCodeAt(a);const i=wn(r),o=Cn(i);return JSON.parse(o)}catch(e){return console.error("Error decompressing entity:",e),null}}static getUserClassValue(){var n;try{const e=this.decompressEntity();if(e){const r=(n=e==null?void 0:e.entity)==null?void 0:n.class;if(r&&this.appEntityClasses[r]!==void 0)return this.appEntityClasses[r]}}catch(e){console.error("Error reading user class from entity:",e)}return 0}}ue=new WeakMap,fe=new WeakMap,Me(G,ue,[]),Me(G,fe,[]),Ee(G,"VER","PatentBadge PCX v0.0.1 "),Ee(G,"currentRoute","splash_route"),Ee(G,"appEntityClasses",{admin_root_role:100,admin_business_role:90,admin_support_role:80,admin_readonly_role:70,client_tier_3_role:30,client_tier_2_role:20,client_tier_1_role:10,client_standard_role:0}),Ee(G,"appRoutes",{HOME_ROUTE:"home_route",SIGNIN_ROUTE:"signin_route",SIGNUP_ROUTE:"signup_route",VERF_LINK_ROUTE:"verf_link_route",RESETHASH_ROUTE:"resethash_route",RESETFORGOT_ROUTE:"resetforgot_route",SIGNOUT_ROUTE:"signout_route",SPLASH_ROUTE:"splash_route"}),Ee(G,"hierTopics",{APP:"APP",APP__AUTH:"APP.AUTH",APP__SIGNOUT:"APP.SIGNOUT",APP__PRIMARY__NAV__BEFORE:"APP.PRIMARY.NAV.BEFORE",APP__PRIMARY__NAV__AFTER:"APP.PRIMARY.NAV.AFTER",ROUTE:"ROUTE",ROUTE__NAV__BEFORE:"ROUTE.NAV.BEFORE",ROUTE__NAV__AFTER:"ROUTE.NAV.AFTER",CORE__PATENT:"CORE.PATENT",CORE__PATENT__CRED:"CORE.PATENT.CRED",CORE__PATENT__SET:"CORE.PATENT.SET",CORE__PATENT__CLEAR:"CORE.PATENT.CLEAR",CORE__PATENT__LIFECYCLE:"CORE.PATENT.LIFECYCLE",CORE__PATENT__VERB__GENBADGE:"CORE.PATENT.VERB.GENBADGE",CORE__PATENT__VERB__BOOKMARK:"CORE.PATENT.VERB.BOOKMARK",CORE__PATENT__VERB__SEARCH:"CORE.PATENT.VERB.SEARCH",CORE__BADGE:"CORE.BADGE",CORE__BADGE__CRED:"CORE.BADGE.CRED",CORE__BADGE__SET:"CORE.BADGE.SET",CORE__BADGE__CLEAR:"CORE.BADGE.CLEAR",CORE__BADGE__LIFECYCLE:"CORE.BADGE.LIFECYCLE",CORE__BADGE__VERB__GEN:"CORE.BADGE.VERB.GEN",CORE__BADGE__VERB__SHARE:"CORE.BADGE.VERB.SHARE",CORE__BADGE__VERB__EMBED:"CORE.BADGE.VERB.EMBED",CORE__BADGE__VERB__PRINT:"CORE.BADGE.VERB.PRINT",CORE__BADGE__VERB__RENEW:"CORE.BADGE.VERB.RENEW",CORE__BADGE__VERB__BOOKMARK:"CORE.BADGE.VERB.BOOKMARK",CORE__BADGE__VERB__BID:"CORE.BADGE.VERB.BID",CORE__BADGE__VERB__BID__ACCEPT:"CORE.BADGE.VERB.BID.ACCEPT",CORE__BADGE__VERB__BID__REJECT:"CORE.BADGE.VERB.BID.REJECT",CORE__BADGE__VERB__BID__COUNTER:"CORE.BADGE.VERB.BID.COUNTER"});const _e=t=>t!==null&&Object.prototype.toString.call(t)==="[object Object]",Ce=(t,n)=>{if(t===n)return!0;if(typeof t!=typeof n)return!1;if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;for(let e=0;e<t.length;e+=1)if(!Ce(t[e],n[e]))return!1;return!0}if(_e(t)&&_e(n)){const e=Object.entries(t),r=new Set(Object.keys(n));if(e.length!==r.size)return!1;for(const[i,o]of e){if(!Ce(o,n[i]))return!1;r.delete(i)}return r.size===0}return!1},Oe=t=>{if(t===""||t===!1||t===null||t===void 0||Array.isArray(t)&&t.length===0)return!0;if(_e(t)){for(const n in t)if(t.hasOwnProperty(n))return!1;return!0}return!1};var T;(function(t){t.TOK_EOF="EOF",t.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",t.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",t.TOK_RBRACKET="Rbracket",t.TOK_RPAREN="Rparen",t.TOK_COMMA="Comma",t.TOK_COLON="Colon",t.TOK_RBRACE="Rbrace",t.TOK_NUMBER="Number",t.TOK_CURRENT="Current",t.TOK_ROOT="Root",t.TOK_EXPREF="Expref",t.TOK_PIPE="Pipe",t.TOK_OR="Or",t.TOK_AND="And",t.TOK_EQ="EQ",t.TOK_GT="GT",t.TOK_LT="LT",t.TOK_GTE="GTE",t.TOK_LTE="LTE",t.TOK_NE="NE",t.TOK_FLATTEN="Flatten",t.TOK_STAR="Star",t.TOK_FILTER="Filter",t.TOK_DOT="Dot",t.TOK_NOT="Not",t.TOK_LBRACE="Lbrace",t.TOK_LBRACKET="Lbracket",t.TOK_LPAREN="Lparen",t.TOK_LITERAL="Literal"})(T||(T={}));T.TOK_LPAREN,T.TOK_RPAREN,T.TOK_STAR,T.TOK_COMMA,T.TOK_DOT,T.TOK_COLON,T.TOK_CURRENT,T.TOK_ROOT,T.TOK_RBRACKET,T.TOK_LBRACE,T.TOK_RBRACE;T.TOK_EOF+"",T.TOK_UNQUOTEDIDENTIFIER+"",T.TOK_QUOTEDIDENTIFIER+"",T.TOK_RBRACKET+"",T.TOK_RPAREN+"",T.TOK_COMMA+"",T.TOK_RBRACE+"",T.TOK_NUMBER+"",T.TOK_CURRENT+"",T.TOK_EXPREF+"",T.TOK_ROOT+"",T.TOK_PIPE+"",T.TOK_OR+"",T.TOK_AND+"",T.TOK_EQ+"",T.TOK_GT+"",T.TOK_LT+"",T.TOK_GTE+"",T.TOK_LTE+"",T.TOK_NE+"",T.TOK_FLATTEN+"",T.TOK_STAR+"",T.TOK_FILTER+"",T.TOK_DOT+"",T.TOK_NOT+"",T.TOK_LBRACE+"",T.TOK_LBRACKET+"",T.TOK_LPAREN+"";var c;(function(t){t[t.TYPE_NUMBER=0]="TYPE_NUMBER",t[t.TYPE_ANY=1]="TYPE_ANY",t[t.TYPE_STRING=2]="TYPE_STRING",t[t.TYPE_ARRAY=3]="TYPE_ARRAY",t[t.TYPE_OBJECT=4]="TYPE_OBJECT",t[t.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",t[t.TYPE_EXPREF=6]="TYPE_EXPREF",t[t.TYPE_NULL=7]="TYPE_NULL",t[t.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",t[t.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(c||(c={}));class Yn{constructor(n){this.TYPE_NAME_TABLE={[c.TYPE_NUMBER]:"number",[c.TYPE_ANY]:"any",[c.TYPE_STRING]:"string",[c.TYPE_ARRAY]:"array",[c.TYPE_OBJECT]:"object",[c.TYPE_BOOLEAN]:"boolean",[c.TYPE_EXPREF]:"expression",[c.TYPE_NULL]:"null",[c.TYPE_ARRAY_NUMBER]:"Array<number>",[c.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([e])=>Math.abs(e),this.functionAvg=([e])=>{let r=0;for(let i=0;i<e.length;i+=1)r+=e[i];return r/e.length},this.functionCeil=([e])=>Math.ceil(e),this.functionContains=e=>{const[r,i]=e;return r.includes(i)},this.functionEndsWith=e=>{const[r,i]=e;return r.includes(i,r.length-i.length)},this.functionFloor=([e])=>Math.floor(e),this.functionJoin=e=>{const[r,i]=e;return i.join(r)},this.functionKeys=([e])=>Object.keys(e),this.functionLength=([e])=>_e(e)?Object.keys(e).length:e.length,this.functionMap=e=>{if(!this._interpreter)return[];const r=[],i=this._interpreter,o=e[0],a=e[1];for(let h=0;h<a.length;h+=1)r.push(i.visit(o,a[h]));return r},this.functionMax=([e])=>{if(!e.length)return null;if(this.getTypeName(e[0])===c.TYPE_NUMBER)return Math.max(...e);const i=e;let o=i[0];for(let a=1;a<i.length;a+=1)o.localeCompare(i[a])<0&&(o=i[a]);return o},this.functionMaxBy=e=>{const r=e[1],i=e[0],o=this.createKeyFunction(r,[c.TYPE_NUMBER,c.TYPE_STRING]);let a=-1/0,h,l;for(let g=0;g<i.length;g+=1)l=o&&o(i[g]),l!==void 0&&l>a&&(a=l,h=i[g]);return h},this.functionMerge=e=>{let r={};for(let i=0;i<e.length;i+=1){const o=e[i];r=Object.assign(r,o)}return r},this.functionMin=([e])=>{if(!e.length)return null;if(this.getTypeName(e[0])===c.TYPE_NUMBER)return Math.min(...e);const i=e;let o=i[0];for(let a=1;a<i.length;a+=1)i[a].localeCompare(o)<0&&(o=i[a]);return o},this.functionMinBy=e=>{const r=e[1],i=e[0],o=this.createKeyFunction(r,[c.TYPE_NUMBER,c.TYPE_STRING]);let a=1/0,h,l;for(let g=0;g<i.length;g+=1)l=o&&o(i[g]),l!==void 0&&l<a&&(a=l,h=i[g]);return h},this.functionNotNull=e=>{for(let r=0;r<e.length;r+=1)if(this.getTypeName(e[r])!==c.TYPE_NULL)return e[r];return null},this.functionReverse=([e])=>{if(this.getTypeName(e)===c.TYPE_STRING){const o=e;let a="";for(let h=o.length-1;h>=0;h-=1)a+=o[h];return a}const i=e.slice(0);return i.reverse(),i},this.functionSort=([e])=>[...e].sort(),this.functionSortBy=e=>{if(!this._interpreter)return[];const r=e[0].slice(0);if(r.length===0)return r;const i=this._interpreter,o=e[1],a=this.getTypeName(i.visit(o,r[0]));if(a!==void 0&&![c.TYPE_NUMBER,c.TYPE_STRING].includes(a))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[a]})`);const h=[];for(let l=0;l<r.length;l+=1)h.push([l,r[l]]);h.sort((l,g)=>{const p=i.visit(o,l[1]),d=i.visit(o,g[1]);if(this.getTypeName(p)!==a)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[a]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(p)]}`);if(this.getTypeName(d)!==a)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[a]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);return p>d?1:p<d?-1:l[0]-g[0]});for(let l=0;l<h.length;l+=1)r[l]=h[l][1];return r},this.functionStartsWith=([e,r])=>e.startsWith(r),this.functionSum=([e])=>e.reduce((r,i)=>r+i,0),this.functionToArray=([e])=>this.getTypeName(e)===c.TYPE_ARRAY?e:[e],this.functionToNumber=([e])=>{const r=this.getTypeName(e);let i;return r===c.TYPE_NUMBER?e:r===c.TYPE_STRING&&(i=+e,!isNaN(i))?i:null},this.functionToString=([e])=>this.getTypeName(e)===c.TYPE_STRING?e:JSON.stringify(e),this.functionType=([e])=>{switch(this.getTypeName(e)){case c.TYPE_NUMBER:return"number";case c.TYPE_STRING:return"string";case c.TYPE_ARRAY:return"array";case c.TYPE_OBJECT:return"object";case c.TYPE_BOOLEAN:return"boolean";case c.TYPE_EXPREF:return"expref";case c.TYPE_NULL:return"null";default:return}},this.functionValues=([e])=>Object.values(e),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[c.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[c.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[c.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[c.TYPE_STRING,c.TYPE_ARRAY]},{types:[c.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[c.TYPE_STRING]},{types:[c.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[c.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[c.TYPE_STRING]},{types:[c.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[c.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[c.TYPE_STRING,c.TYPE_ARRAY,c.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[c.TYPE_EXPREF]},{types:[c.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[c.TYPE_ARRAY_NUMBER,c.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[c.TYPE_ARRAY]},{types:[c.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[c.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[c.TYPE_ARRAY_NUMBER,c.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[c.TYPE_ARRAY]},{types:[c.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[c.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[c.TYPE_STRING,c.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[c.TYPE_ARRAY_STRING,c.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[c.TYPE_ARRAY]},{types:[c.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[c.TYPE_STRING]},{types:[c.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[c.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[c.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[c.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[c.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[c.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[c.TYPE_OBJECT]}]}},this._interpreter=n}registerFunction(n,e,r){if(n in this.functionTable)throw new Error(`Function already defined: ${n}()`);this.functionTable[n]={_func:e.bind(this),_signature:r}}callFunction(n,e){const r=this.functionTable[n];if(r===void 0)throw new Error(`Unknown function: ${n}()`);return this.validateArgs(n,e,r._signature),r._func.call(this,e)}validateInputSignatures(n,e){for(let r=0;r<e.length;r+=1)if("variadic"in e[r]&&r!==e.length-1)throw new Error(`ArgumentError: ${n}() 'variadic' argument ${r+1} must occur last`)}validateArgs(n,e,r){var i,o;let a;this.validateInputSignatures(n,r);const h=r.filter(f=>{var _;return(_=!f.optional)!==null&&_!==void 0?_:!1}).length,l=(o=(i=r[r.length-1])===null||i===void 0?void 0:i.variadic)!==null&&o!==void 0?o:!1,g=e.length<h,p=e.length>r.length,d=g&&(!l&&h>1||l)?"at least ":"";if(l&&g||!l&&(g||p))throw a=r.length>1,new Error(`ArgumentError: ${n}() takes ${d}${h} argument${a&&"s"||""} but received ${e.length}`);let u,R,C;for(let f=0;f<r.length;f+=1){C=!1,u=r[f].types,R=this.getTypeName(e[f]);let _;for(_=0;_<u.length;_+=1)if(R!==void 0&&this.typeMatches(R,u[_],e[f])){C=!0;break}if(!C&&R!==void 0){const v=u.map(w=>this.TYPE_NAME_TABLE[w]).join(" | ");throw new Error(`TypeError: ${n}() expected argument ${f+1} to be type (${v}) but received type ${this.TYPE_NAME_TABLE[R]} instead.`)}}}typeMatches(n,e,r){if(e===c.TYPE_ANY)return!0;if(e===c.TYPE_ARRAY_STRING||e===c.TYPE_ARRAY_NUMBER||e===c.TYPE_ARRAY){if(e===c.TYPE_ARRAY)return n===c.TYPE_ARRAY;if(n===c.TYPE_ARRAY){let i;e===c.TYPE_ARRAY_NUMBER?i=c.TYPE_NUMBER:e===c.TYPE_ARRAY_STRING&&(i=c.TYPE_STRING);for(let o=0;o<r.length;o+=1){const a=this.getTypeName(r[o]);if(a!==void 0&&i!==void 0&&!this.typeMatches(a,i,r[o]))return!1}return!0}}else return n===e;return!1}getTypeName(n){switch(Object.prototype.toString.call(n)){case"[object String]":return c.TYPE_STRING;case"[object Number]":return c.TYPE_NUMBER;case"[object Array]":return c.TYPE_ARRAY;case"[object Boolean]":return c.TYPE_BOOLEAN;case"[object Null]":return c.TYPE_NULL;case"[object Object]":return n.jmespathType===T.TOK_EXPREF?c.TYPE_EXPREF:c.TYPE_OBJECT;default:return}}createKeyFunction(n,e){if(!this._interpreter)return;const r=this._interpreter;return o=>{const a=r.visit(n,o);if(!e.includes(this.getTypeName(a))){const h=`TypeError: expected one of (${e.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(a)]}`;throw new Error(h)}return a}}}class Ln{constructor(){this._rootValue=null,this.runtime=new Yn(this)}search(n,e){return this._rootValue=e,this.visit(n,e)}visit(n,e){let r,i,o,a,h,l,g,p,d,u,R;switch(n.type){case"Field":return e===null?null:_e(e)?(l=e[n.name],l===void 0?null:l):null;case"Subexpression":for(o=this.visit(n.children[0],e),u=1;u<n.children.length;u+=1)if(o=this.visit(n.children[1],o),o===null)return null;return o;case"IndexExpression":return g=this.visit(n.children[0],e),p=this.visit(n.children[1],g),p;case"Index":if(!Array.isArray(e))return null;let C=n.value;return C<0&&(C=e.length+C),o=e[C],o===void 0&&(o=null),o;case"Slice":if(!Array.isArray(e))return null;const f=[...n.children],_=this.computeSliceParams(e.length,f),[v,w,b]=_;if(o=[],b>0)for(u=v;u<w;u+=b)o.push(e[u]);else for(u=v;u>w;u+=b)o.push(e[u]);return o;case"Projection":if(R=this.visit(n.children[0],e),!Array.isArray(R))return null;for(d=[],u=0;u<R.length;u+=1)i=this.visit(n.children[1],R[u]),i!==null&&d.push(i);return d;case"ValueProjection":if(R=this.visit(n.children[0],e),!_e(R))return null;d=[];const S=Object.values(R);for(u=0;u<S.length;u+=1)i=this.visit(n.children[1],S[u]),i!==null&&d.push(i);return d;case"FilterProjection":if(R=this.visit(n.children[0],e),!Array.isArray(R))return null;const Y=[],L=[];for(u=0;u<R.length;u+=1)r=this.visit(n.children[2],R[u]),Oe(r)||Y.push(R[u]);for(let M=0;M<Y.length;M+=1)i=this.visit(n.children[1],Y[M]),i!==null&&L.push(i);return L;case"Comparator":switch(a=this.visit(n.children[0],e),h=this.visit(n.children[1],e),n.name){case T.TOK_EQ:o=Ce(a,h);break;case T.TOK_NE:o=!Ce(a,h);break;case T.TOK_GT:o=a>h;break;case T.TOK_GTE:o=a>=h;break;case T.TOK_LT:o=a<h;break;case T.TOK_LTE:o=a<=h;break;default:throw new Error(`Unknown comparator: ${n.name}`)}return o;case T.TOK_FLATTEN:const I=this.visit(n.children[0],e);if(!Array.isArray(I))return null;let O=[];for(u=0;u<I.length;u+=1)i=I[u],Array.isArray(i)?O=[...O,...i]:O.push(i);return O;case"Identity":return e;case"MultiSelectList":if(e===null)return null;for(d=[],u=0;u<n.children.length;u+=1)d.push(this.visit(n.children[u],e));return d;case"MultiSelectHash":if(e===null)return null;d={};let y;for(u=0;u<n.children.length;u+=1)y=n.children[u],d[y.name]=this.visit(y.value,e);return d;case"OrExpression":return r=this.visit(n.children[0],e),Oe(r)&&(r=this.visit(n.children[1],e)),r;case"AndExpression":return a=this.visit(n.children[0],e),Oe(a)?a:this.visit(n.children[1],e);case"NotExpression":return a=this.visit(n.children[0],e),Oe(a);case"Literal":return n.value;case T.TOK_PIPE:return g=this.visit(n.children[0],e),this.visit(n.children[1],g);case T.TOK_CURRENT:return e;case T.TOK_ROOT:return this._rootValue;case"Function":const x=[];for(let M=0;M<n.children.length;M+=1)x.push(this.visit(n.children[M],e));return this.runtime.callFunction(n.name,x);case"ExpressionReference":const U=n.children[0];return U.jmespathType=T.TOK_EXPREF,U;default:throw new Error(`Unknown node type: ${n.type}`)}}computeSliceParams(n,e){let[r,i,o]=e;if(o===null)o=1;else if(o===0){const h=new Error("Invalid slice, step cannot be 0");throw h.name="RuntimeError",h}const a=o<0;return r=r===null?a?n-1:0:this.capSliceRange(n,r,o),i=i===null?a?-1:n:this.capSliceRange(n,i,o),[r,i,o]}capSliceRange(n,e,r){let i=e;return i<0?(i+=n,i<0&&(i=r<0?-1:0)):i>=n&&(i=r<0?n-1:n),i}}new Ln;c.TYPE_ANY;c.TYPE_ARRAY;c.TYPE_ARRAY_NUMBER;c.TYPE_ARRAY_STRING;c.TYPE_BOOLEAN;c.TYPE_EXPREF;c.TYPE_NULL;c.TYPE_NUMBER;c.TYPE_OBJECT;c.TYPE_STRING;const{hierTopics:B,currentRoute:Et,appRoutes:In}=G,kn={bindAppListeners(t){j.subscribe(B.APP,(n,e)=>{switch(console.log(`APP topic: ${n}`,e),n){case B.APP__AUTH:console.log("Authentication event",e);break;case B.APP__SIGNOUT:console.log("Signout event",e),window.router&&window.router.navigate("/");break;case B.APP__PRIMARY__NAV__BEFORE:console.log("Primary nav before event",e);break;case"APP.PRIMARY.NAV.BEFORE.SIGNIN":console.log("Primary nav before signin event",e),window.router&&window.router.navigate("/signin");break;case"APP.PRIMARY.NAV.BEFORE.BADGES":console.log("Primary nav before badges event",e),window.router&&window.router.navigate("/home");break;case"APP.PRIMARY.NAV.BEFORE.SIGNOUT":console.log("Primary nav before signout event",e),window.router&&window.router.navigate("/signout");break;case"APP.PRIMARY.NAV.BEFORE.SIGNUP":console.log("Primary nav before signup event",e),window.router&&window.router.navigate("/signup");break;case"APP.PRIMARY.NAV.BEFORE.HOME":console.log("Primary nav before home event",e),window.router&&window.router.navigate("/home");break;case"APP.PRIMARY.NAV.BEFORE.VERSION":console.log("Primary nav before version event",e);const r=G.VER,i=new Date().getFullYear();r&&neodigmToast&&neodigmToast.q(`${r} __devops_ts__|© ${i} PatentBadge`,"night");break;case B.APP__PRIMARY__NAV__AFTER:console.log("Primary nav after event",e);break;default:console.log("Unhandled APP sub-topic",n,e)}}),j.subscribe(B.ROUTE,(n,e)=>{switch(console.log(`ROUTE topic: ${n}`,e),n){case B.ROUTE__NAV__BEFORE:console.log("Route navigation before",e);break;case B.ROUTE__NAV__AFTER:console.log("Route navigation after",e),(e.route==="/"||e.route==="patentbadge/login"||e.route==="/patentbadge/login/")&&setTimeout(()=>{const r=document.getElementById("patent-input");r?(r.focus(),console.log("Patent input focused")):console.log("Patent input not found")},100);break;default:console.log("Unhandled ROUTE sub-topic",n,e)}}),j.subscribe(B.CORE__PATENT,(n,e)=>{switch(console.log(`CORE.PATENT topic: ${n}`,e),n){case B.CORE__PATENT__CRED:console.log("Patent credentials event",e);break;case B.CORE__PATENT__SET:console.log("Patent set event",e);break;case B.CORE__PATENT__CLEAR:console.log("Patent clear event",e);break;case B.CORE__PATENT__LIFECYCLE:console.log("Patent lifecycle event",e);break;case B.CORE__PATENT__VERB__GENBADGE:console.log("Generate badge from patent",e);break;case B.CORE__PATENT__VERB__BOOKMARK:console.log("Bookmark patent",e);break;case B.CORE__PATENT__VERB__SEARCH:if(console.log("Search patents",e,Et),In.SPLASH_ROUTE==Et){const r=document.querySelector("#email-input"),i=document.querySelector("#patent-input"),o=document.querySelector("#patent-search-btn");if(r&&i&&o){const a=r.value.trim();if(!a||!a.includes("@")||!a.includes(".")){neodigmToast.q("A valid Email is required|Must contain '@' and '.'","danger"),neodigmUtils.shake("#email-input");return}i.value.length>=7?(o.dataset.waitState="true",Be.fetchPatentMetadata(i.value,h=>{o.dataset.waitState="false",h.data?(G.setCorePatent(h.data),G.addPatentToCore(i.value),G.addEmailToCore(a)):neodigmToast.q("Patent not found|Please verify the patent number.","danger")})):(neodigmToast.q("A Patent Number must have|at least 7 characters.","danger"),neodigmUtils.shake("#patent-input"))}}break;default:console.log("Unhandled CORE.PATENT sub-topic",n,e)}}),j.subscribe(B.CORE__BADGE,(n,e)=>{switch(console.log(`CORE.BADGE topic: ${n}`,e),n){case B.CORE__BADGE__CRED:console.log("Badge credentials event",e);break;case B.CORE__BADGE__SET:console.log("Badge set event",e);break;case B.CORE__BADGE__CLEAR:console.log("Badge clear event",e);break;case B.CORE__BADGE__LIFECYCLE:console.log("Badge lifecycle event",e);break;case B.CORE__BADGE__VERB__GEN:console.log("Generate badge",e);break;case B.CORE__BADGE__VERB__SHARE:console.log("Share badge",e);break;case B.CORE__BADGE__VERB__EMBED:console.log("Embed badge",e);break;case B.CORE__BADGE__VERB__PRINT:console.log("Print badge",e);break;case B.CORE__BADGE__VERB__RENEW:console.log("Renew badge",e);break;case B.CORE__BADGE__VERB__BOOKMARK:console.log("Bookmark badge",e);break;case B.CORE__BADGE__VERB__BID:console.log("Badge bid event",e);break;case B.CORE__BADGE__VERB__BID__ACCEPT:console.log("Accept badge bid",e);break;case B.CORE__BADGE__VERB__BID__REJECT:console.log("Reject badge bid",e);break;case B.CORE__BADGE__VERB__BID__COUNTER:console.log("Counter badge bid",e);break;default:console.log("Unhandled CORE.BADGE sub-topic",n,e)}}),j.subscribe("WC",(n,e)=>{console.log(`WC topic: ${n}`,e)})}},{hierTopics:He}=G;class Mn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedToken=null}connectedCallback(){this.parseButtons(),this.render(),this.attachEventListeners(),this.authToken=j.subscribe(He.APP__AUTH,()=>{this.parseButtons(),this.render(),this.attachEventListeners()})}disconnectedCallback(){this.authToken&&j.unsubscribe(this.authToken)}parseButtons(){var e;const n=this.getAttribute("data-primary-nav-buttons");if(n)try{const r=JSON.parse(n),i=G.getUserClassValue();this.buttons=r.filter(a=>a.admin===!0?i>=80:!0);const o=this.buttons.find(a=>a.selected);this.selectedToken=o?o.token:((e=this.buttons[0])==null?void 0:e.token)||null}catch(r){console.error("Error parsing nav buttons:",r),this.buttons=[]}}render(){window.matchMedia("(max-width: 768px)").matches;const e=window.matchMedia("(orientation: portrait)").matches?"portrait":"landscape",r=this.buttons.filter(o=>o.enabled?o.viewport?o.viewport.includes(e):!0:!1),i=r.map((o,a)=>`btn${a}`).join(" ");this.shadowRoot.innerHTML=`
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
        ${r.map((o,a)=>this.renderButton(o,a)).join("")}
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
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(i=>{i.addEventListener("click",o=>{const a=o.currentTarget.getAttribute("data-token");a&&!o.currentTarget.disabled&&this.selectButton(a)})});const e=this.shadowRoot.querySelector(".logo");e&&e.addEventListener("click",()=>{j.publish(He.APP__PRIMARY__NAV__BEFORE+".VERSION",{token:"VERSION",timestamp:Date.now()})}),window.matchMedia("(orientation: portrait)").addEventListener("change",()=>this.render())}selectButton(n){this.selectedToken!==n&&(this.selectedToken=n,j.publish(He.APP__PRIMARY__NAV__BEFORE+`.${n}`,{token:n,timestamp:Date.now()}),this.render(),this.attachEventListeners())}updateButtons(n){this.setAttribute("data-primary-nav-buttons",JSON.stringify(n)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(n,e){const r=this.buttons.find(i=>i.token===n);r&&(r.count=e,this.render(),this.attachEventListeners())}}customElements.define("pcx-primary-nav",Mn);function Un(){const t=document.getElementById("app"),n=window.location.hash;let e=n.indexOf("?");e===-1&&(e=n.indexOf("&"));const r=e!==-1?n.substring(e).replace(/^&/,"?"):"",i=new URLSearchParams(r),o=i.get("patent")||"",a=i.get("email")||"";o&&G.addPatentToCore(o),a&&G.addEmailToCore(a);const h=[{token:"SIGNUP",caption:"SIGN UP",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!1},{token:"SIGNIN",caption:"SIGN IN",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!1}];t.innerHTML=`
    <style>
      .patent-search-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        min-height: 60vh;
        justify-content: center;
      }

      #email-input {
        width: 33%;
        font-size: 28px;
        padding: 32px 24px;
        text-align: center;
        border: 2px solid var(--navy, #243447);
        border-radius: 24px;
        box-shadow: 0 4px 12px rgba(30, 42, 54, 0.15);
        background-color: white;
        font-family: var(--font-display, 'Roboto Slab', serif);
        color: var(--navy, #243447);
        outline: none;
      }

      #patent-input {
        width: 33%;
        font-size: 28px;
        padding: 32px 24px;
        text-align: center;
        border: 2px solid var(--navy, #243447);
        border-radius: 24px;
        box-shadow: 0 4px 12px rgba(30, 42, 54, 0.15);
        background-color: white;
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
        #email-input {
          font-size: 24px;
          width: 80%;
        }

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
    <pcx-primary-nav data-primary-nav-buttons='${JSON.stringify(h)}'></pcx-primary-nav>
    <div class="patent-search-container">
      <input
        type="email"
        id="email-input"
        placeholder="Enter Email Address"
        value="${a}"
      />
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
  `;const l=document.getElementById("patent-search-btn"),g=document.getElementById("email-input"),p=document.getElementById("patent-input"),d=()=>{const u=(p==null?void 0:p.value)||"";j.publish(G.hierTopics.CORE__PATENT__VERB__SEARCH,{patent:u,timestamp:Date.now()})};l&&l.addEventListener("click",d),g&&g.addEventListener("keypress",u=>{u.key==="Enter"&&(u.preventDefault(),d())}),p&&p.addEventListener("keypress",u=>{u.key==="Enter"&&(u.preventDefault(),d())})}const{hierTopics:Fn}=G;function Dn(t,n){const e=JSON.stringify(n),r=Bn(e),i=bn(r),o=btoa(String.fromCharCode(...i));localStorage.setItem(t,o)}function Gn(){const t=document.getElementById("app");t.innerHTML=`
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
  `,xn()}function xn(){var o;const t=document.getElementById("loginForm"),n=document.getElementById("email"),e=document.getElementById("password"),r=document.getElementById("togglePassword");r==null||r.addEventListener("click",()=>{const a=e.type==="password"?"text":"password";e.type=a}),t==null||t.addEventListener("submit",async a=>{a.preventDefault();const h=n.value.trim(),l=e.value;Kn(h)&&Hn(l)&&await Vn(h,l)}),(o=document.getElementById("forgotPasswordLink"))==null||o.addEventListener("click",a=>{a.preventDefault(),window.router&&window.router.navigate("/forgot")});const i=document.querySelector('.auth-switch a[href="#/signup"]');i==null||i.addEventListener("click",a=>{a.preventDefault(),window.router&&window.router.navigate("/signup")})}function Kn(t){const n=e=>{typeof neodigmUtils<"u"&&neodigmUtils.shake(e)};return t?!t.includes("@")||!t.includes(".")?(typeof neodigmToast<"u"&&neodigmToast.q("Please enter a valid email address","danger"),n("#email"),!1):!0:(typeof neodigmToast<"u"&&neodigmToast.q("Please enter your email","danger"),n("#email"),!1)}function Hn(t){const n=e=>{typeof neodigmUtils<"u"&&neodigmUtils.shake(e)};return t?t.length<10?(typeof neodigmToast<"u"&&neodigmToast.q("Password must be at least 10 characters","danger"),n("#password"),!1):!0:(typeof neodigmToast<"u"&&neodigmToast.q("Please enter your password","danger"),n("#password"),!1)}async function Vn(t,n){try{let e=n;typeof neodigmUtils<"u"&&(e=neodigmUtils.genHash(n));const r={email:t,hash:e};await Be.doSignin(r,i=>{if(i.ok===!0){const{accessToken:o,...a}=i;Dn("entity",a),j.publish(Fn.APP__AUTH,{email:t,timestamp:Date.now(),action:"signin"}),typeof mvvLegit>"u"&&window.router&&window.router.navigate("/home")}})}catch(e){console.error("Signin error:",e),typeof neodigmToast<"u"&&neodigmToast.q("An error occurred during sign in","danger")}}function jn(){const t=document.getElementById("app");t.innerHTML="<h1>Sign Up</h1>"}function $n(){const t=document.getElementById("app"),n=[{token:"HOME",caption:"HOME",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!0},{token:"BADGES",caption:"BADGES",enabled:!0,viewport:["landscape"],count:3,selected:!1},{token:"BIDS",caption:"BIDS",enabled:!0,viewport:["landscape"],count:0,selected:!1},{token:"ADMIN",caption:"ADMIN",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!1,admin:!0},{token:"SIGNOUT",caption:"SIGN OUT",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!1}];t.innerHTML=`
    <pcx-primary-nav data-primary-nav-buttons='${JSON.stringify(n)}'></pcx-primary-nav>
    <div style="padding: var(--space-xl);">
      <h1>Dashboard</h1>
      <p>Welcome back to your PatentBadge dashboard</p>
    </div>
  `}function zn(){const t=document.getElementById("app");t.innerHTML="<h1>Reset Hash</h1>"}const{hierTopics:Jn}=G;function qn(){const t=document.getElementById("app");t.innerHTML=`
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
  `,Xn()}function Xn(){const t=document.getElementById("signoutBtn"),n=document.getElementById("cancelBtn");t==null||t.addEventListener("click",()=>{console.log("Signing out..."),j.publish(Jn.APP__SIGNOUT,{timestamp:Date.now()}),localStorage.removeItem("entity"),typeof mvvLegit<"u"?mvvLegit.doSignout():window.router&&window.router.navigate("/signin")}),n==null||n.addEventListener("click",()=>{console.log("Canceling signout, returning to home"),window.router&&window.router.navigate("/home")})}function Wn(){const t=document.getElementById("app");t.innerHTML="<h1>Forgot Password</h1>"}function Qn(){const t=document.getElementById("app");t.innerHTML="<h1>Reset Forgot Password</h1>"}function Zn(){const t=document.getElementById("app");t.innerHTML="<h1>Verification Link</h1>"}function _t(t){var e,r,i;const n=document.getElementById("app");n.innerHTML=`
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
  `,(e=document.getElementById("testSignin"))==null||e.addEventListener("click",()=>{console.log("Navigating to signin"),window.router&&window.router.navigate("/signin")}),(r=document.getElementById("testHome"))==null||r.addEventListener("click",()=>{console.log("Navigating to home"),window.router&&window.router.navigate("/home")}),(i=document.getElementById("testSplash"))==null||i.addEventListener("click",()=>{console.log("Navigating to /"),window.router&&window.router.navigate("/")})}function er(){const t=document.getElementById("app");t.innerHTML="<h1>Offline</h1>"}const tr=Se.features[Se.features.ENV].FF_BASE_URI;kn.bindAppListeners("pcx-core");window.AppBroadcast=G;const ae=new en("/patentbadge/login/",{hash:!0});console.log("Router initialized:",ae);console.log("Initial hash:",window.location.hash);console.log("Initial pathname:",window.location.pathname);if(typeof mvvLegit<"u"){let t=!1,n=!1,e=null;mvvLegit.setOnState((r=null)=>{r!==null&&(n=!0,!t&&e&&r!==0&&(t=!0,ae.resolve(),e=null))}),mvvLegit.setNavConroller((r=null)=>{if(r){if(!t){e=r,n&&(t=!0,ae.resolve(),e=null);return}const i=r.replace("_route","").replace("_","-");i==="splash"?ae.navigate("/"):ae.navigate(`/${i}`)}}),mvvLegit.init({BASE:tr})}function te(t){if(typeof mvvLegit>"u")return!0;const n=t?`${t.replace("-","_")}_route`:"splash_route";if(!mvvLegit.bIsInit){const r=localStorage.getItem("mvv"),i=localStorage.getItem("entity");return r&&i&&n==="home_route"?(console.log("mvvLegit initializing - valid session found, allowing home_route"),!0):n==="splash_route"?!0:(console.log("mvvLegit not ready - blocking",n),!1)}const e=mvvLegit.isRouteAllowed(n);return e||(console.log("Route blocked by mvvLegit:",n,"- redirecting to splash"),setTimeout(()=>{ae.navigate("/")},0)),e}ae.hooks({before:(t,n)=>{var r;const e=((r=n==null?void 0:n.route)==null?void 0:r.path)||(n==null?void 0:n.url)||window.location.hash.split("?")[0].replace("#","")||"unknown";j.publish(G.hierTopics.ROUTE__NAV__BEFORE,{route:e,match:n,timestamp:Date.now()}),t()},after:t=>{var e;const n=((e=t==null?void 0:t.route)==null?void 0:e.path)||(t==null?void 0:t.url)||window.location.hash.split("?")[0].replace("#","")||"unknown";G.currentRoute=n,j.publish(G.hierTopics.ROUTE__NAV__AFTER,{route:n,match:t,timestamp:Date.now()})}});ae.on({"/":()=>{console.log("Matched route: /"),te("splash")&&Un()},"/signin":()=>{console.log("Matched route: /signin"),te("signin")&&Gn()},"/signup":()=>{console.log("Matched route: /signup"),te("signup")&&jn()},"/home":()=>{console.log("Matched route: /home"),te("home")&&$n()},"/resethash":()=>{console.log("Matched route: /resethash"),te("resethash")&&zn()},"/signout":()=>{console.log("Matched route: /signout"),te("signout")&&qn()},"/forgot":()=>{console.log("Matched route: /forgot"),te("forgot")&&Wn()},"/resetforgot":()=>{console.log("Matched route: /resetforgot"),te("resetforgot")&&Qn()},"/verf-link":()=>{console.log("Matched route: /verf-link"),te("verf-link")&&Zn()},"/error":()=>{console.log("Matched route: /error"),te("error")&&_t()},"/offline":()=>{console.log("Matched route: /offline"),te("offline")&&er()}}).notFound(()=>{console.log("No route matched - showing error"),_t()});window.router=ae;
