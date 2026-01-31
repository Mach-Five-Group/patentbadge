var yt=Object.defineProperty;var $e=t=>{throw TypeError(t)};var At=(t,n,e)=>n in t?yt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var fe=(t,n,e)=>At(t,typeof n!="symbol"?n+"":n,e),Je=(t,n,e)=>n.has(t)||$e("Cannot "+e);var te=(t,n,e)=>(Je(t,n,"read from private field"),e?e.call(t):n.get(t)),we=(t,n,e)=>n.has(t)?$e("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,e),Ne=(t,n,e,r)=>(Je(t,n,"write to private field"),r?r.call(t,e):n.set(t,e),e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var mt=/([:*])(\w+)/g,bt="([^/]+)",Ot=/\*/g,Pt="?(?:.*)",wt=/\/\?/g,Nt="/?([^/]+|)",St="(?:/^|^)",Bt="";function ct(t){return t===void 0&&(t="/"),Ge()?location.pathname+location.search+location.hash:t}function F(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function ve(t){return typeof t=="string"}function Ct(t){return typeof t=="function"}function Te(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function Yt(t,n){return n.length===0||!t?null:t.slice(1,t.length).reduce(function(e,r,i){return e===null&&(e={}),e[n[i]]=decodeURIComponent(r),e},null)}function Re(t){var n=F(t).split(/\?(.*)?$/);return[F(n[0]),n.slice(1).join("")]}function Ue(t){for(var n={},e=t.split("&"),r=0;r<e.length;r++){var i=e[r].split("=");if(i[0]!==""){var o=decodeURIComponent(i[0]);n[o]?(Array.isArray(n[o])||(n[o]=[n[o]]),n[o].push(decodeURIComponent(i[1]||""))):n[o]=decodeURIComponent(i[1]||"")}}return n}function lt(t,n){var e=Re(F(t.currentLocationPath)),r=e[0],i=e[1],o=i===""?null:Ue(i),a=[],u;if(ve(n.path)){if(u=St+F(n.path).replace(mt,function(T,d,y){return a.push(y),bt}).replace(Ot,Pt).replace(wt,Nt)+"$",F(n.path)===""&&F(r)==="")return{url:r,queryString:i,hashString:Te(t.to),route:n,data:null,params:o}}else u=n.path;var l=new RegExp(u,Bt),_=r.match(l);if(_){var h=ve(n.path)?Yt(_,a):_.groups?_.groups:_.slice(1);return{url:F(r.replace(new RegExp("^"+t.instance.root),"")),queryString:i,hashString:Te(t.to),route:n,data:h,params:o}}return!1}function ut(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function ce(t,n){return typeof t[n]>"u"||t[n]===!0}function Lt(t){if(!t)return{};var n=t.split(","),e={},r;return n.forEach(function(i){var o=i.split(":").map(function(a){return a.replace(/(^ +| +$)/g,"")});switch(o[0]){case"historyAPIMethod":e.historyAPIMethod=o[1];break;case"resolveOptionsStrategy":r||(r={}),r.strategy=o[1];break;case"resolveOptionsHash":r||(r={}),r.hash=o[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":e[o[0]]=o[1]==="true";break}}),r&&(e.resolveOptions=r),e}function Ge(){return typeof window<"u"}function It(t,n){return t===void 0&&(t=[]),n===void 0&&(n={}),t.filter(function(e){return e}).forEach(function(e){["before","after","already","leave"].forEach(function(r){e[r]&&(n[r]||(n[r]=[]),n[r].push(e[r]))})}),n}function Z(t,n,e){var r=n||{},i=0;(function o(){if(!t[i]){e&&e(r);return}Array.isArray(t[i])?(t.splice.apply(t,[i,1].concat(t[i][0](r)?t[i][1]:t[i][2])),o()):t[i](r,function(a){typeof a>"u"||a===!0?(i+=1,o()):e&&e(r)})})()}Z.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};function qe(t,n){typeof t.currentLocationPath>"u"&&(t.currentLocationPath=t.to=ct(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function Se(t,n){for(var e=0;e<t.instance.routes.length;e++){var r=t.instance.routes[e],i=lt(t,r);if(i&&(t.matches||(t.matches=[]),t.matches.push(i),t.resolveOptions.strategy==="ONE")){n();return}}n()}function kt(t,n){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function Mt(t,n){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}var ze=Ge(),Ft=ut();function Ut(t,n){if(ce(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),r=ze&&t.resolveOptions&&t.resolveOptions.hash===!0;Ft?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",r?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!r){var i=location.hash;location.hash="",location.hash=i}t.instance.__freezeListening=!1},1))):ze&&(window.location.href=t.to)}n()}function ft(t,n){var e=t.instance;if(!e.lastResolved()){n();return}Z(e.lastResolved().map(function(r){return function(i,o){if(!r.route.hooks||!r.route.hooks.leave){o();return}var a=!1,u=t.instance.matchLocation(r.route.path,t.currentLocationPath,!1);if(r.route.path!=="*")a=!u;else{var l=t.matches?t.matches.find(function(_){return r.route.path===_.route.path}):!1;a=!l}if(ce(t.navigateOptions,"callHooks")&&a){Z(r.route.hooks.leave.map(function(_){return function(h,T){return _(function(d){d===!1?t.instance.__markAsClean(t):T()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return o()}]));return}else o()}}),{},function(){return n()})}function Gt(t,n){t.match.route.hooks&&t.match.route.hooks.before&&ce(t.navigateOptions,"callHooks")?Z(t.match.route.hooks.before.map(function(e){return function(i,o){return e(function(a){a===!1?t.instance.__markAsClean(t):o()},t.match)}}).concat([function(){return n()}])):n()}function Dt(t,n){ce(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()}function xt(t,n){t.match.route.hooks&&t.match.route.hooks.after&&ce(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(e){return e(t.match)}),n()}function Kt(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString){e.forEach(function(r){r.route.hooks&&r.route.hooks.already&&ce(t.navigateOptions,"callHooks")&&r.route.hooks.already.forEach(function(i){return i(t.match)})}),n(!1);return}n()}function Ht(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var r=Re(t.currentLocationPath),i=r[0],o=r[1],a=Te(t.to);e.path=F(i);var u={url:e.path,queryString:o,hashString:a,data:null,route:e,params:o!==""?Ue(o):null};t.matches=[u],t.match=u}n()}function jt(t,n){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),n()}function Vt(t,n){t.instance._setCurrent(null),n()}function ht(t,n){ce(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var dt=[Kt,Gt,Dt,xt],Xe=[ft,Ht,Z.if(function(t){var n=t.notFoundHandled;return n},dt.concat([ht]),[jt,Vt])];function Ye(){return Ye=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Ye.apply(this,arguments)}function We(t,n){var e=0;function r(){if(e===t.matches.length){ht(t,n);return}Z(dt,Ye({},t,{match:t.matches[e]}),function(){e+=1,r()})}ft(t,r)}function Be(t){t.instance.__markAsClean(t)}function Le(){return Le=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Le.apply(this,arguments)}var Qe="[data-navigo]";function $t(t,n){var e=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Qe},r=this,i="/",o=null,a=[],u=!1,l,_=ut(),h=Ge();t?i=F(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function T(s){return s.indexOf("#")>=0&&(e.hash===!0?s=s.split("#")[1]||"/":s=s.split("#")[0]),s}function d(s){return F(i+"/"+F(s))}function y(s,p,m,P){return s=ve(s)?d(s):s,{name:P||F(String(s)),path:s,handler:p,hooks:It(m)}}function Y(s,p,m){var P=this;return typeof s=="object"&&!(s instanceof RegExp)?(Object.keys(s).forEach(function(A){if(typeof s[A]=="function")P.on(A,s[A]);else{var B=s[A],X=B.uses,_e=B.as,ue=B.hooks;a.push(y(A,X,[l,ue],_e))}}),this):(typeof s=="function"&&(m=p,p=s,s=i),a.push(y(s,p,[l,m])),this)}function f(s,p){if(r.__dirty){r.__waiting.push(function(){return r.resolve(s,p)});return}else r.__dirty=!0;s=s?F(i)+"/"+F(s):void 0;var m={instance:r,to:s,currentLocationPath:s,navigateOptions:{},resolveOptions:Le({},e,p)};return Z([qe,Se,Z.if(function(P){var A=P.matches;return A&&A.length>0},We,Xe)],m,Be),m.matches?m.matches:!1}function E(s,p){if(r.__dirty){r.__waiting.push(function(){return r.navigate(s,p)});return}else r.__dirty=!0;s=F(i)+"/"+F(s);var m={instance:r,to:s,navigateOptions:p||{},resolveOptions:p&&p.resolveOptions?p.resolveOptions:e,currentLocationPath:T(s)};Z([kt,Mt,Se,Z.if(function(P){var A=P.matches;return A&&A.length>0},We,Xe),Ut,Be],m,Be)}function g(s,p,m){var P=q(s,p);return P!==null?(E(P.replace(new RegExp("^/?"+i),""),m),!0):!1}function O(s){return this.routes=a=a.filter(function(p){return ve(s)?F(p.path)!==F(s):Ct(s)?s!==p.handler:String(p.path)!==String(s)}),this}function w(){_&&(this.__popstateListener=function(){r.__freezeListening||f()},window.addEventListener("popstate",this.__popstateListener))}function S(){this.routes=a=[],_&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=u=!0}function C(s,p){return r._notFoundRoute=y("*",s,[l,p],"__NOT_FOUND__"),this}function L(){if(h)return I().forEach(function(s){if(s.getAttribute("data-navigo")==="false"||s.getAttribute("target")==="_blank"){s.hasListenerAttached&&s.removeEventListener("click",s.navigoHandler);return}s.hasListenerAttached||(s.hasListenerAttached=!0,s.navigoHandler=function(p){if((p.ctrlKey||p.metaKey)&&p.target.tagName.toLowerCase()==="a")return!1;var m=s.getAttribute("href");if(typeof m>"u"||m===null)return!1;if(m.match(/^(http|https)/)&&typeof URL<"u")try{var P=new URL(m);m=P.pathname+P.search}catch{}var A=Lt(s.getAttribute("data-navigo-options"));u||(p.preventDefault(),p.stopPropagation(),r.navigate(F(m),A))},s.addEventListener("click",s.navigoHandler))}),r}function I(){return h?[].slice.call(document.querySelectorAll(e.linksSelector||Qe)):[]}function b(s){return"/"+i+"/"+F(s)}function R(s){return l=s,this}function D(){return o}function q(s,p,m){var P=a.find(function(X){return X.name===s}),A=null;if(P){if(A=P.path,p)for(var B in p)A=A.replace(":"+B,p[B]);A=A.match(/^\//)?A:"/"+A}return A&&m&&!m.includeRoot&&(A=A.replace(new RegExp("^/"+i),"")),A}function M(s){return s.getAttribute("href")}function ee(s){var p=Re(F(s)),m=p[0],P=p[1],A=P===""?null:Ue(P),B=Te(s),X=y(m,function(){},[l],m);return{url:m,queryString:P,hashString:B,route:X,data:null,params:A}}function H(){return ee(F(ct(i)).replace(new RegExp("^"+i),""))}function j(s){var p={instance:r,currentLocationPath:s,to:s,resolveOptions:e};return Se(p,function(){}),p.matches?p.matches:!1}function z(s,p,m){typeof p<"u"&&(typeof m>"u"||m)&&(p=d(p));var P={instance:r,to:p,currentLocationPath:p};qe(P,function(){}),typeof s=="string"&&(s=typeof m>"u"||m?d(s):s);var A=lt(P,{name:String(s),path:s,handler:function(){},hooks:{}});return A||!1}function U(s,p,m){return typeof p=="string"&&(p=K(p)),p?(p.hooks[s]||(p.hooks[s]=[]),p.hooks[s].push(m),function(){p.hooks[s]=p.hooks[s].filter(function(P){return P!==m})}):(console.warn("Route doesn't exists: "+p),function(){})}function K(s){return typeof s=="string"?a.find(function(p){return p.name===d(s)}):a.find(function(p){return p.handler===s})}function Q(s){s.instance.__dirty=!1,s.instance.__waiting.length>0&&s.instance.__waiting.shift()()}this.root=i,this.routes=a,this.destroyed=u,this.current=o,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Q,this.on=Y,this.off=O,this.resolve=f,this.navigate=E,this.navigateByName=g,this.destroy=S,this.notFound=C,this.updatePageLinks=L,this.link=b,this.hooks=R,this.extractGETParameters=function(s){return Re(T(s))},this.lastResolved=D,this.generate=q,this.getLinkPath=M,this.match=j,this.matchLocation=z,this.getCurrentLocation=H,this.addBeforeHook=U.bind(this,"before"),this.addAfterHook=U.bind(this,"after"),this.addAlreadyHook=U.bind(this,"already"),this.addLeaveHook=U.bind(this,"leave"),this.getRoute=K,this._pathToMatchObject=ee,this._clean=F,this._checkForAHash=T,this._setCurrent=function(s){return o=r.current=s},w.call(this),L.call(this)}let ye={features:{ENV:"DEV",DEV:{FF_BASE_URI:"https://pcxdev-rest-gjkk.onrender.com"},QA:{FF_BASE_URI:""},PROD:{FF_BASE_URI:""}}};var Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pe={exports:{}},zt=pe.exports,Ze;function Xt(){return Ze||(Ze=1,(function(t,n){(function(e,r){var i={};e.PubSub?(i=e.PubSub,console.warn("PubSub already loaded, using existing version")):(e.PubSub=i,r(i)),t!==void 0&&t.exports&&(n=t.exports=i),n.PubSub=i,t.exports=n=i})(typeof window=="object"&&window||zt||Jt,function(e){var r={},i=-1,o="*";function a(f){var E;for(E in f)if(Object.prototype.hasOwnProperty.call(f,E))return!0;return!1}function u(f){return function(){throw f}}function l(f,E,g){try{f(E,g)}catch(O){setTimeout(u(O),0)}}function _(f,E,g){f(E,g)}function h(f,E,g,O){var w=r[E],S=O?_:l,C;if(Object.prototype.hasOwnProperty.call(r,E))for(C in w)Object.prototype.hasOwnProperty.call(w,C)&&S(w[C],f,g)}function T(f,E,g){return function(){var w=String(f),S=w.lastIndexOf(".");for(h(f,f,E,g);S!==-1;)w=w.substr(0,S),S=w.lastIndexOf("."),h(f,w,E,g);h(f,o,E,g)}}function d(f){var E=String(f),g=!!(Object.prototype.hasOwnProperty.call(r,E)&&a(r[E]));return g}function y(f){for(var E=String(f),g=d(E)||d(o),O=E.lastIndexOf(".");!g&&O!==-1;)E=E.substr(0,O),O=E.lastIndexOf("."),g=d(E);return g}function Y(f,E,g,O){f=typeof f=="symbol"?f.toString():f;var w=T(f,E,O),S=y(f);return S?(g===!0?w():setTimeout(w,0),!0):!1}e.publish=function(f,E){return Y(f,E,!1,e.immediateExceptions)},e.publishSync=function(f,E){return Y(f,E,!0,e.immediateExceptions)},e.subscribe=function(f,E){if(typeof E!="function")return!1;f=typeof f=="symbol"?f.toString():f,Object.prototype.hasOwnProperty.call(r,f)||(r[f]={});var g="uid_"+String(++i);return r[f][g]=E,g},e.subscribeAll=function(f){return e.subscribe(o,f)},e.subscribeOnce=function(f,E){var g=e.subscribe(f,function(){e.unsubscribe(g),E.apply(this,arguments)});return e},e.clearAllSubscriptions=function(){r={}},e.clearSubscriptions=function(E){var g;for(g in r)Object.prototype.hasOwnProperty.call(r,g)&&g.indexOf(E)===0&&delete r[g]},e.countSubscriptions=function(E){var g,O,w=0;for(g in r)if(Object.prototype.hasOwnProperty.call(r,g)&&g.indexOf(E)===0){for(O in r[g])w++;break}return w},e.getSubscriptions=function(E){var g,O=[];for(g in r)Object.prototype.hasOwnProperty.call(r,g)&&g.indexOf(E)===0&&O.push(g);return O},e.unsubscribe=function(f){var E=function(b){var R;for(R in r)if(Object.prototype.hasOwnProperty.call(r,R)&&R.indexOf(b)===0)return!0;return!1},g=typeof f=="string"&&(Object.prototype.hasOwnProperty.call(r,f)||E(f)),O=!g&&typeof f=="string",w=typeof f=="function",S=!1,C,L,I;if(g){e.clearSubscriptions(f);return}for(C in r)if(Object.prototype.hasOwnProperty.call(r,C)){if(L=r[C],O&&L[f]){delete L[f],S=f;break}if(w)for(I in L)Object.prototype.hasOwnProperty.call(L,I)&&L[I]===f&&(delete L[I],S=!0)}return S}})})(pe,pe.exports)),pe.exports}var Wt=Xt();const x=qt(Wt),V=class V{static getTJO(){if(this.jsTJO)return this.jsTJO;let n=localStorage.getItem("tjo");return n&&(this.jsTJO=JSON.parse(n)),this.jsTJO}static setTJO(n){return n?localStorage.setItem("tjo",JSON.stringify(n)):localStorage.clear("tjo"),this.jsTJO=n}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),V.setTJO(null),location.reload()}static async doSignin(n,e=null){const r={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",r)).json();o.ok?(typeof mvvLegit<"u"&&mvvLegit&&(o!=null&&o.accessToken)&&mvvLegit.doSignin(o==null?void 0:o.accessToken),e&&e(o)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(n,e=null){const r={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",r)).json();if(o.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),e&&e(o);else{const a=(o==null?void 0:o.error)||(o==null?void 0:o.message)||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(a,"danger"),e&&e(o)}}static async resetHash(n,e,r=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const i=typeof neodigmUtils<"u"?neodigmUtils.genHash(e):e,o={method:"POST",body:JSON.stringify({guid:n,hash:i}),headers:V.genHeaders()},u=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",o)).json();r&&r(u)}static genHeaders(n={}){var r,i,o,a,u,l,_,h,T;let e={};return e.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),e.Authorization="Bearer expired",e["Content-Type"]="application/json",V.getTJO()&&(e.Authorization="Bearer "+V.getTJO().tokens[0]),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&((o=(i=(r=SessionAcctEntity.oEntities)==null?void 0:r.data)==null?void 0:i.entity)!=null&&o.class)&&(e.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&((l=(u=(a=SessionAcctEntity.oEntities)==null?void 0:a.data)==null?void 0:u.entity)!=null&&l.guid)&&(e.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&((T=(h=(_=SessionAcctEntity.oEntities)==null?void 0:_.data)==null?void 0:h.entity)!=null&&T.company)&&(e.company=SessionAcctEntity.oEntities.data.entity.company),e}static async fetchPatents(n=null){const e={method:"GET",headers:V.genHeaders()},i=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePatents",e)).json();return n&&n(i),i}static async fetchPatentMetadata(n,e=null){const r={method:"GET",headers:V.genHeaders()},o=await(await fetch(this.API_baseURI+"/m5t/patent/metadata/"+n,r)).json();return e&&e(o),o}};V.API_baseURI=ye.features[ye.features.ENV].FF_BASE_URI,V.API_ver="v5",V.jsState={},V.jsMeta={},V.jsTJO=null;let Ae=V;var ie,oe;class G{static setCorePatent(n,e=!0){te(this,ie).push(n),e&&x.publish(this.hierTopics.CORE__PATENT__SET,{item:n,count:te(this,ie).length,timestamp:Date.now()})}static getCorePatent(){return te(this,ie)}static setCoreBadge(n,e=!0){te(this,oe).push(n),e&&x.publish(this.hierTopics.CORE__BADGE__SET,{item:n,count:te(this,oe).length,timestamp:Date.now()})}static getCoreBadge(){return te(this,oe)}static clearCorePatent(n=!0){Ne(this,ie,[]),n&&x.publish(this.hierTopics.CORE__PATENT__CLEAR,{timestamp:Date.now()})}static clearCoreBadge(n=!0){Ne(this,oe,[]),n&&x.publish(this.hierTopics.CORE__BADGE__CLEAR,{timestamp:Date.now()})}static getCorePatentCount(){return te(this,ie).length}static getCoreBadgeCount(){return te(this,oe).length}static getCoreStorage(){const n=localStorage.getItem("core");if(n)try{return JSON.parse(n)}catch(e){console.error("Error parsing core storage:",e)}return{email:[],patents:[],applications:[],badges:[]}}static setCoreStorage(n){localStorage.setItem("core",JSON.stringify(n))}static addPatentToCore(n){const e=this.getCoreStorage();return Array.isArray(e.patents)||(e.patents=[]),e.patents=[...new Set([...e.patents,n])],this.setCoreStorage(e),e}static addApplicationToCore(n){const e=this.getCoreStorage();return Array.isArray(e.applications)||(e.applications=[]),e.applications=[...new Set([...e.applications,n])],this.setCoreStorage(e),e}static addBadgeToCore(n){const e=this.getCoreStorage();return Array.isArray(e.badges)||(e.badges=[]),e.badges=[...new Set([...e.badges,n])],this.setCoreStorage(e),e}static addEmailToCore(n){const e=this.getCoreStorage();return Array.isArray(e.email)||(e.email=[]),e.email=[...new Set([...e.email,n])],this.setCoreStorage(e),e}}ie=new WeakMap,oe=new WeakMap,we(G,ie,[]),we(G,oe,[]),fe(G,"VER","PatentBadge PCX v0.0.1 "),fe(G,"currentRoute","splash_route"),fe(G,"appRoutes",{HOME_ROUTE:"home_route",SIGNIN_ROUTE:"signin_route",SIGNUP_ROUTE:"signup_route",VERF_LINK_ROUTE:"verf_link_route",RESETHASH_ROUTE:"resethash_route",RESETFORGOT_ROUTE:"resetforgot_route",SIGNOUT_ROUTE:"signout_route",SPLASH_ROUTE:"splash_route"}),fe(G,"hierTopics",{APP:"APP",APP__AUTH:"APP.AUTH",APP__SIGNOUT:"APP.SIGNOUT",APP__PRIMARY__NAV__BEFORE:"APP.PRIMARY.NAV.BEFORE",APP__PRIMARY__NAV__AFTER:"APP.PRIMARY.NAV.AFTER",ROUTE:"ROUTE",ROUTE__NAV__BEFORE:"ROUTE.NAV.BEFORE",ROUTE__NAV__AFTER:"ROUTE.NAV.AFTER",CORE__PATENT:"CORE.PATENT",CORE__PATENT__CRED:"CORE.PATENT.CRED",CORE__PATENT__SET:"CORE.PATENT.SET",CORE__PATENT__CLEAR:"CORE.PATENT.CLEAR",CORE__PATENT__LIFECYCLE:"CORE.PATENT.LIFECYCLE",CORE__PATENT__VERB__GENBADGE:"CORE.PATENT.VERB.GENBADGE",CORE__PATENT__VERB__BOOKMARK:"CORE.PATENT.VERB.BOOKMARK",CORE__PATENT__VERB__SEARCH:"CORE.PATENT.VERB.SEARCH",CORE__BADGE:"CORE.BADGE",CORE__BADGE__CRED:"CORE.BADGE.CRED",CORE__BADGE__SET:"CORE.BADGE.SET",CORE__BADGE__CLEAR:"CORE.BADGE.CLEAR",CORE__BADGE__LIFECYCLE:"CORE.BADGE.LIFECYCLE",CORE__BADGE__VERB__GEN:"CORE.BADGE.VERB.GEN",CORE__BADGE__VERB__SHARE:"CORE.BADGE.VERB.SHARE",CORE__BADGE__VERB__EMBED:"CORE.BADGE.VERB.EMBED",CORE__BADGE__VERB__PRINT:"CORE.BADGE.VERB.PRINT",CORE__BADGE__VERB__RENEW:"CORE.BADGE.VERB.RENEW",CORE__BADGE__VERB__BOOKMARK:"CORE.BADGE.VERB.BOOKMARK",CORE__BADGE__VERB__BID:"CORE.BADGE.VERB.BID",CORE__BADGE__VERB__BID__ACCEPT:"CORE.BADGE.VERB.BID.ACCEPT",CORE__BADGE__VERB__BID__REJECT:"CORE.BADGE.VERB.BID.REJECT",CORE__BADGE__VERB__BID__COUNTER:"CORE.BADGE.VERB.BID.COUNTER"});const le=t=>t!==null&&Object.prototype.toString.call(t)==="[object Object]",me=(t,n)=>{if(t===n)return!0;if(typeof t!=typeof n)return!1;if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;for(let e=0;e<t.length;e+=1)if(!me(t[e],n[e]))return!1;return!0}if(le(t)&&le(n)){const e=Object.entries(t),r=new Set(Object.keys(n));if(e.length!==r.size)return!1;for(const[i,o]of e){if(!me(o,n[i]))return!1;r.delete(i)}return r.size===0}return!1},ge=t=>{if(t===""||t===!1||t===null||t===void 0||Array.isArray(t)&&t.length===0)return!0;if(le(t)){for(const n in t)if(t.hasOwnProperty(n))return!1;return!0}return!1};var v;(function(t){t.TOK_EOF="EOF",t.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",t.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",t.TOK_RBRACKET="Rbracket",t.TOK_RPAREN="Rparen",t.TOK_COMMA="Comma",t.TOK_COLON="Colon",t.TOK_RBRACE="Rbrace",t.TOK_NUMBER="Number",t.TOK_CURRENT="Current",t.TOK_ROOT="Root",t.TOK_EXPREF="Expref",t.TOK_PIPE="Pipe",t.TOK_OR="Or",t.TOK_AND="And",t.TOK_EQ="EQ",t.TOK_GT="GT",t.TOK_LT="LT",t.TOK_GTE="GTE",t.TOK_LTE="LTE",t.TOK_NE="NE",t.TOK_FLATTEN="Flatten",t.TOK_STAR="Star",t.TOK_FILTER="Filter",t.TOK_DOT="Dot",t.TOK_NOT="Not",t.TOK_LBRACE="Lbrace",t.TOK_LBRACKET="Lbracket",t.TOK_LPAREN="Lparen",t.TOK_LITERAL="Literal"})(v||(v={}));v.TOK_LPAREN,v.TOK_RPAREN,v.TOK_STAR,v.TOK_COMMA,v.TOK_DOT,v.TOK_COLON,v.TOK_CURRENT,v.TOK_ROOT,v.TOK_RBRACKET,v.TOK_LBRACE,v.TOK_RBRACE;v.TOK_EOF+"",v.TOK_UNQUOTEDIDENTIFIER+"",v.TOK_QUOTEDIDENTIFIER+"",v.TOK_RBRACKET+"",v.TOK_RPAREN+"",v.TOK_COMMA+"",v.TOK_RBRACE+"",v.TOK_NUMBER+"",v.TOK_CURRENT+"",v.TOK_EXPREF+"",v.TOK_ROOT+"",v.TOK_PIPE+"",v.TOK_OR+"",v.TOK_AND+"",v.TOK_EQ+"",v.TOK_GT+"",v.TOK_LT+"",v.TOK_GTE+"",v.TOK_LTE+"",v.TOK_NE+"",v.TOK_FLATTEN+"",v.TOK_STAR+"",v.TOK_FILTER+"",v.TOK_DOT+"",v.TOK_NOT+"",v.TOK_LBRACE+"",v.TOK_LBRACKET+"",v.TOK_LPAREN+"";var c;(function(t){t[t.TYPE_NUMBER=0]="TYPE_NUMBER",t[t.TYPE_ANY=1]="TYPE_ANY",t[t.TYPE_STRING=2]="TYPE_STRING",t[t.TYPE_ARRAY=3]="TYPE_ARRAY",t[t.TYPE_OBJECT=4]="TYPE_OBJECT",t[t.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",t[t.TYPE_EXPREF=6]="TYPE_EXPREF",t[t.TYPE_NULL=7]="TYPE_NULL",t[t.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",t[t.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(c||(c={}));class Qt{constructor(n){this.TYPE_NAME_TABLE={[c.TYPE_NUMBER]:"number",[c.TYPE_ANY]:"any",[c.TYPE_STRING]:"string",[c.TYPE_ARRAY]:"array",[c.TYPE_OBJECT]:"object",[c.TYPE_BOOLEAN]:"boolean",[c.TYPE_EXPREF]:"expression",[c.TYPE_NULL]:"null",[c.TYPE_ARRAY_NUMBER]:"Array<number>",[c.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([e])=>Math.abs(e),this.functionAvg=([e])=>{let r=0;for(let i=0;i<e.length;i+=1)r+=e[i];return r/e.length},this.functionCeil=([e])=>Math.ceil(e),this.functionContains=e=>{const[r,i]=e;return r.includes(i)},this.functionEndsWith=e=>{const[r,i]=e;return r.includes(i,r.length-i.length)},this.functionFloor=([e])=>Math.floor(e),this.functionJoin=e=>{const[r,i]=e;return i.join(r)},this.functionKeys=([e])=>Object.keys(e),this.functionLength=([e])=>le(e)?Object.keys(e).length:e.length,this.functionMap=e=>{if(!this._interpreter)return[];const r=[],i=this._interpreter,o=e[0],a=e[1];for(let u=0;u<a.length;u+=1)r.push(i.visit(o,a[u]));return r},this.functionMax=([e])=>{if(!e.length)return null;if(this.getTypeName(e[0])===c.TYPE_NUMBER)return Math.max(...e);const i=e;let o=i[0];for(let a=1;a<i.length;a+=1)o.localeCompare(i[a])<0&&(o=i[a]);return o},this.functionMaxBy=e=>{const r=e[1],i=e[0],o=this.createKeyFunction(r,[c.TYPE_NUMBER,c.TYPE_STRING]);let a=-1/0,u,l;for(let _=0;_<i.length;_+=1)l=o&&o(i[_]),l!==void 0&&l>a&&(a=l,u=i[_]);return u},this.functionMerge=e=>{let r={};for(let i=0;i<e.length;i+=1){const o=e[i];r=Object.assign(r,o)}return r},this.functionMin=([e])=>{if(!e.length)return null;if(this.getTypeName(e[0])===c.TYPE_NUMBER)return Math.min(...e);const i=e;let o=i[0];for(let a=1;a<i.length;a+=1)i[a].localeCompare(o)<0&&(o=i[a]);return o},this.functionMinBy=e=>{const r=e[1],i=e[0],o=this.createKeyFunction(r,[c.TYPE_NUMBER,c.TYPE_STRING]);let a=1/0,u,l;for(let _=0;_<i.length;_+=1)l=o&&o(i[_]),l!==void 0&&l<a&&(a=l,u=i[_]);return u},this.functionNotNull=e=>{for(let r=0;r<e.length;r+=1)if(this.getTypeName(e[r])!==c.TYPE_NULL)return e[r];return null},this.functionReverse=([e])=>{if(this.getTypeName(e)===c.TYPE_STRING){const o=e;let a="";for(let u=o.length-1;u>=0;u-=1)a+=o[u];return a}const i=e.slice(0);return i.reverse(),i},this.functionSort=([e])=>[...e].sort(),this.functionSortBy=e=>{if(!this._interpreter)return[];const r=e[0].slice(0);if(r.length===0)return r;const i=this._interpreter,o=e[1],a=this.getTypeName(i.visit(o,r[0]));if(a!==void 0&&![c.TYPE_NUMBER,c.TYPE_STRING].includes(a))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[a]})`);const u=[];for(let l=0;l<r.length;l+=1)u.push([l,r[l]]);u.sort((l,_)=>{const h=i.visit(o,l[1]),T=i.visit(o,_[1]);if(this.getTypeName(h)!==a)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[a]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(h)]}`);if(this.getTypeName(T)!==a)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[a]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(T)]}`);return h>T?1:h<T?-1:l[0]-_[0]});for(let l=0;l<u.length;l+=1)r[l]=u[l][1];return r},this.functionStartsWith=([e,r])=>e.startsWith(r),this.functionSum=([e])=>e.reduce((r,i)=>r+i,0),this.functionToArray=([e])=>this.getTypeName(e)===c.TYPE_ARRAY?e:[e],this.functionToNumber=([e])=>{const r=this.getTypeName(e);let i;return r===c.TYPE_NUMBER?e:r===c.TYPE_STRING&&(i=+e,!isNaN(i))?i:null},this.functionToString=([e])=>this.getTypeName(e)===c.TYPE_STRING?e:JSON.stringify(e),this.functionType=([e])=>{switch(this.getTypeName(e)){case c.TYPE_NUMBER:return"number";case c.TYPE_STRING:return"string";case c.TYPE_ARRAY:return"array";case c.TYPE_OBJECT:return"object";case c.TYPE_BOOLEAN:return"boolean";case c.TYPE_EXPREF:return"expref";case c.TYPE_NULL:return"null";default:return}},this.functionValues=([e])=>Object.values(e),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[c.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[c.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[c.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[c.TYPE_STRING,c.TYPE_ARRAY]},{types:[c.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[c.TYPE_STRING]},{types:[c.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[c.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[c.TYPE_STRING]},{types:[c.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[c.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[c.TYPE_STRING,c.TYPE_ARRAY,c.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[c.TYPE_EXPREF]},{types:[c.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[c.TYPE_ARRAY_NUMBER,c.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[c.TYPE_ARRAY]},{types:[c.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[c.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[c.TYPE_ARRAY_NUMBER,c.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[c.TYPE_ARRAY]},{types:[c.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[c.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[c.TYPE_STRING,c.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[c.TYPE_ARRAY_STRING,c.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[c.TYPE_ARRAY]},{types:[c.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[c.TYPE_STRING]},{types:[c.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[c.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[c.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[c.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[c.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[c.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[c.TYPE_OBJECT]}]}},this._interpreter=n}registerFunction(n,e,r){if(n in this.functionTable)throw new Error(`Function already defined: ${n}()`);this.functionTable[n]={_func:e.bind(this),_signature:r}}callFunction(n,e){const r=this.functionTable[n];if(r===void 0)throw new Error(`Unknown function: ${n}()`);return this.validateArgs(n,e,r._signature),r._func.call(this,e)}validateInputSignatures(n,e){for(let r=0;r<e.length;r+=1)if("variadic"in e[r]&&r!==e.length-1)throw new Error(`ArgumentError: ${n}() 'variadic' argument ${r+1} must occur last`)}validateArgs(n,e,r){var i,o;let a;this.validateInputSignatures(n,r);const u=r.filter(f=>{var E;return(E=!f.optional)!==null&&E!==void 0?E:!1}).length,l=(o=(i=r[r.length-1])===null||i===void 0?void 0:i.variadic)!==null&&o!==void 0?o:!1,_=e.length<u,h=e.length>r.length,T=_&&(!l&&u>1||l)?"at least ":"";if(l&&_||!l&&(_||h))throw a=r.length>1,new Error(`ArgumentError: ${n}() takes ${T}${u} argument${a&&"s"||""} but received ${e.length}`);let d,y,Y;for(let f=0;f<r.length;f+=1){Y=!1,d=r[f].types,y=this.getTypeName(e[f]);let E;for(E=0;E<d.length;E+=1)if(y!==void 0&&this.typeMatches(y,d[E],e[f])){Y=!0;break}if(!Y&&y!==void 0){const g=d.map(O=>this.TYPE_NAME_TABLE[O]).join(" | ");throw new Error(`TypeError: ${n}() expected argument ${f+1} to be type (${g}) but received type ${this.TYPE_NAME_TABLE[y]} instead.`)}}}typeMatches(n,e,r){if(e===c.TYPE_ANY)return!0;if(e===c.TYPE_ARRAY_STRING||e===c.TYPE_ARRAY_NUMBER||e===c.TYPE_ARRAY){if(e===c.TYPE_ARRAY)return n===c.TYPE_ARRAY;if(n===c.TYPE_ARRAY){let i;e===c.TYPE_ARRAY_NUMBER?i=c.TYPE_NUMBER:e===c.TYPE_ARRAY_STRING&&(i=c.TYPE_STRING);for(let o=0;o<r.length;o+=1){const a=this.getTypeName(r[o]);if(a!==void 0&&i!==void 0&&!this.typeMatches(a,i,r[o]))return!1}return!0}}else return n===e;return!1}getTypeName(n){switch(Object.prototype.toString.call(n)){case"[object String]":return c.TYPE_STRING;case"[object Number]":return c.TYPE_NUMBER;case"[object Array]":return c.TYPE_ARRAY;case"[object Boolean]":return c.TYPE_BOOLEAN;case"[object Null]":return c.TYPE_NULL;case"[object Object]":return n.jmespathType===v.TOK_EXPREF?c.TYPE_EXPREF:c.TYPE_OBJECT;default:return}}createKeyFunction(n,e){if(!this._interpreter)return;const r=this._interpreter;return o=>{const a=r.visit(n,o);if(!e.includes(this.getTypeName(a))){const u=`TypeError: expected one of (${e.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(a)]}`;throw new Error(u)}return a}}}class Zt{constructor(){this._rootValue=null,this.runtime=new Qt(this)}search(n,e){return this._rootValue=e,this.visit(n,e)}visit(n,e){let r,i,o,a,u,l,_,h,T,d,y;switch(n.type){case"Field":return e===null?null:le(e)?(l=e[n.name],l===void 0?null:l):null;case"Subexpression":for(o=this.visit(n.children[0],e),d=1;d<n.children.length;d+=1)if(o=this.visit(n.children[1],o),o===null)return null;return o;case"IndexExpression":return _=this.visit(n.children[0],e),h=this.visit(n.children[1],_),h;case"Index":if(!Array.isArray(e))return null;let Y=n.value;return Y<0&&(Y=e.length+Y),o=e[Y],o===void 0&&(o=null),o;case"Slice":if(!Array.isArray(e))return null;const f=[...n.children],E=this.computeSliceParams(e.length,f),[g,O,w]=E;if(o=[],w>0)for(d=g;d<O;d+=w)o.push(e[d]);else for(d=g;d>O;d+=w)o.push(e[d]);return o;case"Projection":if(y=this.visit(n.children[0],e),!Array.isArray(y))return null;for(T=[],d=0;d<y.length;d+=1)i=this.visit(n.children[1],y[d]),i!==null&&T.push(i);return T;case"ValueProjection":if(y=this.visit(n.children[0],e),!le(y))return null;T=[];const S=Object.values(y);for(d=0;d<S.length;d+=1)i=this.visit(n.children[1],S[d]),i!==null&&T.push(i);return T;case"FilterProjection":if(y=this.visit(n.children[0],e),!Array.isArray(y))return null;const C=[],L=[];for(d=0;d<y.length;d+=1)r=this.visit(n.children[2],y[d]),ge(r)||C.push(y[d]);for(let M=0;M<C.length;M+=1)i=this.visit(n.children[1],C[M]),i!==null&&L.push(i);return L;case"Comparator":switch(a=this.visit(n.children[0],e),u=this.visit(n.children[1],e),n.name){case v.TOK_EQ:o=me(a,u);break;case v.TOK_NE:o=!me(a,u);break;case v.TOK_GT:o=a>u;break;case v.TOK_GTE:o=a>=u;break;case v.TOK_LT:o=a<u;break;case v.TOK_LTE:o=a<=u;break;default:throw new Error(`Unknown comparator: ${n.name}`)}return o;case v.TOK_FLATTEN:const I=this.visit(n.children[0],e);if(!Array.isArray(I))return null;let b=[];for(d=0;d<I.length;d+=1)i=I[d],Array.isArray(i)?b=[...b,...i]:b.push(i);return b;case"Identity":return e;case"MultiSelectList":if(e===null)return null;for(T=[],d=0;d<n.children.length;d+=1)T.push(this.visit(n.children[d],e));return T;case"MultiSelectHash":if(e===null)return null;T={};let R;for(d=0;d<n.children.length;d+=1)R=n.children[d],T[R.name]=this.visit(R.value,e);return T;case"OrExpression":return r=this.visit(n.children[0],e),ge(r)&&(r=this.visit(n.children[1],e)),r;case"AndExpression":return a=this.visit(n.children[0],e),ge(a)?a:this.visit(n.children[1],e);case"NotExpression":return a=this.visit(n.children[0],e),ge(a);case"Literal":return n.value;case v.TOK_PIPE:return _=this.visit(n.children[0],e),this.visit(n.children[1],_);case v.TOK_CURRENT:return e;case v.TOK_ROOT:return this._rootValue;case"Function":const D=[];for(let M=0;M<n.children.length;M+=1)D.push(this.visit(n.children[M],e));return this.runtime.callFunction(n.name,D);case"ExpressionReference":const q=n.children[0];return q.jmespathType=v.TOK_EXPREF,q;default:throw new Error(`Unknown node type: ${n.type}`)}}computeSliceParams(n,e){let[r,i,o]=e;if(o===null)o=1;else if(o===0){const u=new Error("Invalid slice, step cannot be 0");throw u.name="RuntimeError",u}const a=o<0;return r=r===null?a?n-1:0:this.capSliceRange(n,r,o),i=i===null?a?-1:n:this.capSliceRange(n,i,o),[r,i,o]}capSliceRange(n,e,r){let i=e;return i<0?(i+=n,i<0&&(i=r<0?-1:0)):i>=n&&(i=r<0?n-1:n),i}}new Zt;c.TYPE_ANY;c.TYPE_ARRAY;c.TYPE_ARRAY_NUMBER;c.TYPE_ARRAY_STRING;c.TYPE_BOOLEAN;c.TYPE_EXPREF;c.TYPE_NULL;c.TYPE_NUMBER;c.TYPE_OBJECT;c.TYPE_STRING;const{hierTopics:N,currentRoute:et,appRoutes:en}=G,tn={bindAppListeners(t){x.subscribe(N.APP,(n,e)=>{switch(console.log(`APP topic: ${n}`,e),n){case N.APP__AUTH:console.log("Authentication event",e);break;case N.APP__SIGNOUT:console.log("Signout event",e),window.router&&window.router.navigate("/");break;case N.APP__PRIMARY__NAV__BEFORE:console.log("Primary nav before event",e);break;case"APP.PRIMARY.NAV.BEFORE.SIGNIN":console.log("Primary nav before signin event",e),window.router&&window.router.navigate("/signin");break;case"APP.PRIMARY.NAV.BEFORE.BADGES":console.log("Primary nav before badges event",e),window.router&&window.router.navigate("/home");break;case"APP.PRIMARY.NAV.BEFORE.SIGNOUT":console.log("Primary nav before signout event",e),window.router&&window.router.navigate("/signout");break;case"APP.PRIMARY.NAV.BEFORE.SIGNUP":console.log("Primary nav before signup event",e),window.router&&window.router.navigate("/signup");break;case"APP.PRIMARY.NAV.BEFORE.HOME":console.log("Primary nav before home event",e),window.router&&window.router.navigate("/home");break;case"APP.PRIMARY.NAV.BEFORE.VERSION":console.log("Primary nav before version event",e);const r=G.VER,i=new Date().getFullYear();r&&neodigmToast&&neodigmToast.q(`${r} __devops_ts__|© ${i} PatentBadge`,"night");break;case N.APP__PRIMARY__NAV__AFTER:console.log("Primary nav after event",e);break;default:console.log("Unhandled APP sub-topic",n,e)}}),x.subscribe(N.ROUTE,(n,e)=>{switch(console.log(`ROUTE topic: ${n}`,e),n){case N.ROUTE__NAV__BEFORE:console.log("Route navigation before",e);break;case N.ROUTE__NAV__AFTER:console.log("Route navigation after",e),(e.route==="/"||e.route==="patentbadge/login"||e.route==="/patentbadge/login/")&&setTimeout(()=>{const r=document.getElementById("patent-input");r?(r.focus(),console.log("Patent input focused")):console.log("Patent input not found")},100);break;default:console.log("Unhandled ROUTE sub-topic",n,e)}}),x.subscribe(N.CORE__PATENT,(n,e)=>{switch(console.log(`CORE.PATENT topic: ${n}`,e),n){case N.CORE__PATENT__CRED:console.log("Patent credentials event",e);break;case N.CORE__PATENT__SET:console.log("Patent set event",e);break;case N.CORE__PATENT__CLEAR:console.log("Patent clear event",e);break;case N.CORE__PATENT__LIFECYCLE:console.log("Patent lifecycle event",e);break;case N.CORE__PATENT__VERB__GENBADGE:console.log("Generate badge from patent",e);break;case N.CORE__PATENT__VERB__BOOKMARK:console.log("Bookmark patent",e);break;case N.CORE__PATENT__VERB__SEARCH:if(console.log("Search patents",e,et),en.SPLASH_ROUTE==et){const r=document.querySelector("#email-input"),i=document.querySelector("#patent-input"),o=document.querySelector("#patent-search-btn");if(r&&i&&o){const a=r.value.trim();if(!a||!a.includes("@")||!a.includes(".")){neodigmToast.q("A valid Email is required|Must contain '@' and '.'","danger"),neodigmUtils.shake("#email-input");return}i.value.length>=7?(o.dataset.waitState="true",Ae.fetchPatentMetadata(i.value,u=>{o.dataset.waitState="false",u.data?(G.setCorePatent(u.data),G.addPatentToCore(i.value),G.addEmailToCore(a)):neodigmToast.q("Patent not found|Please verify the patent number.","danger")})):(neodigmToast.q("A Patent Number must have|at least 7 characters.","danger"),neodigmUtils.shake("#patent-input"))}}break;default:console.log("Unhandled CORE.PATENT sub-topic",n,e)}}),x.subscribe(N.CORE__BADGE,(n,e)=>{switch(console.log(`CORE.BADGE topic: ${n}`,e),n){case N.CORE__BADGE__CRED:console.log("Badge credentials event",e);break;case N.CORE__BADGE__SET:console.log("Badge set event",e);break;case N.CORE__BADGE__CLEAR:console.log("Badge clear event",e);break;case N.CORE__BADGE__LIFECYCLE:console.log("Badge lifecycle event",e);break;case N.CORE__BADGE__VERB__GEN:console.log("Generate badge",e);break;case N.CORE__BADGE__VERB__SHARE:console.log("Share badge",e);break;case N.CORE__BADGE__VERB__EMBED:console.log("Embed badge",e);break;case N.CORE__BADGE__VERB__PRINT:console.log("Print badge",e);break;case N.CORE__BADGE__VERB__RENEW:console.log("Renew badge",e);break;case N.CORE__BADGE__VERB__BOOKMARK:console.log("Bookmark badge",e);break;case N.CORE__BADGE__VERB__BID:console.log("Badge bid event",e);break;case N.CORE__BADGE__VERB__BID__ACCEPT:console.log("Accept badge bid",e);break;case N.CORE__BADGE__VERB__BID__REJECT:console.log("Reject badge bid",e);break;case N.CORE__BADGE__VERB__BID__COUNTER:console.log("Counter badge bid",e);break;default:console.log("Unhandled CORE.BADGE sub-topic",n,e)}}),x.subscribe("WC",(n,e)=>{console.log(`WC topic: ${n}`,e)})}},{hierTopics:tt}=G;class nn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedToken=null}connectedCallback(){this.parseButtons(),this.render(),this.attachEventListeners()}parseButtons(){var e;const n=this.getAttribute("data-primary-nav-buttons");if(n)try{this.buttons=JSON.parse(n);const r=this.buttons.find(i=>i.selected);this.selectedToken=r?r.token:((e=this.buttons[0])==null?void 0:e.token)||null}catch(r){console.error("Error parsing nav buttons:",r),this.buttons=[]}}render(){window.matchMedia("(max-width: 768px)").matches;const e=window.matchMedia("(orientation: portrait)").matches?"portrait":"landscape",r=this.buttons.filter(o=>o.enabled?o.viewport?o.viewport.includes(e):!0:!1),i=r.map((o,a)=>`btn${a}`).join(" ");this.shadowRoot.innerHTML=`
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
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(i=>{i.addEventListener("click",o=>{const a=o.currentTarget.getAttribute("data-token");a&&!o.currentTarget.disabled&&this.selectButton(a)})});const e=this.shadowRoot.querySelector(".logo");e&&e.addEventListener("click",()=>{x.publish(tt.APP__PRIMARY__NAV__BEFORE+".VERSION",{token:"VERSION",timestamp:Date.now()})}),window.matchMedia("(orientation: portrait)").addEventListener("change",()=>this.render())}selectButton(n){this.selectedToken!==n&&(this.selectedToken=n,x.publish(tt.APP__PRIMARY__NAV__BEFORE+`.${n}`,{token:n,timestamp:Date.now()}),this.render(),this.attachEventListeners())}updateButtons(n){this.setAttribute("data-primary-nav-buttons",JSON.stringify(n)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(n,e){const r=this.buttons.find(i=>i.token===n);r&&(r.count=e,this.render(),this.attachEventListeners())}}customElements.define("pcx-primary-nav",nn);function rn(){const t=document.getElementById("app"),n=window.location.hash;let e=n.indexOf("?");e===-1&&(e=n.indexOf("&"));const r=e!==-1?n.substring(e).replace(/^&/,"?"):"",i=new URLSearchParams(r),o=i.get("patent")||"",a=i.get("email")||"";o&&G.addPatentToCore(o),a&&G.addEmailToCore(a);const u=[{token:"SIGNUP",caption:"SIGN UP",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!1},{token:"SIGNIN",caption:"SIGN IN",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!1}];t.innerHTML=`
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
    <pcx-primary-nav data-primary-nav-buttons='${JSON.stringify(u)}'></pcx-primary-nav>
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
  `;const l=document.getElementById("patent-search-btn"),_=document.getElementById("email-input"),h=document.getElementById("patent-input"),T=()=>{const d=(h==null?void 0:h.value)||"";x.publish(G.hierTopics.CORE__PATENT__VERB__SEARCH,{patent:d,timestamp:Date.now()})};l&&l.addEventListener("click",T),_&&_.addEventListener("keypress",d=>{d.key==="Enter"&&(d.preventDefault(),T())}),h&&h.addEventListener("keypress",d=>{d.key==="Enter"&&(d.preventDefault(),T())})}var J=Uint8Array,$=Uint16Array,De=Int32Array,xe=new J([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ke=new J([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),nt=new J([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pt=function(t,n){for(var e=new $(31),r=0;r<31;++r)e[r]=n+=1<<t[r-1];for(var i=new De(e[30]),r=1;r<30;++r)for(var o=e[r];o<e[r+1];++o)i[o]=o-e[r]<<5|r;return{b:e,r:i}},Et=pt(xe,2),on=Et.b,Ie=Et.r;on[28]=258,Ie[258]=28;var an=pt(Ke,0),rt=an.r,ke=new $(32768);for(var k=0;k<32768;++k){var re=(k&43690)>>1|(k&21845)<<1;re=(re&52428)>>2|(re&13107)<<2,re=(re&61680)>>4|(re&3855)<<4,ke[k]=((re&65280)>>8|(re&255)<<8)>>1}var Ee=(function(t,n,e){for(var r=t.length,i=0,o=new $(n);i<r;++i)t[i]&&++o[t[i]-1];var a=new $(n);for(i=1;i<n;++i)a[i]=a[i-1]+o[i-1]<<1;var u;if(e){u=new $(1<<n);var l=15-n;for(i=0;i<r;++i)if(t[i])for(var _=i<<4|t[i],h=n-t[i],T=a[t[i]-1]++<<h,d=T|(1<<h)-1;T<=d;++T)u[ke[T]>>l]=_}else for(u=new $(r),i=0;i<r;++i)t[i]&&(u[i]=ke[a[t[i]-1]++]>>15-t[i]);return u}),ae=new J(288);for(var k=0;k<144;++k)ae[k]=8;for(var k=144;k<256;++k)ae[k]=9;for(var k=256;k<280;++k)ae[k]=7;for(var k=280;k<288;++k)ae[k]=8;var be=new J(32);for(var k=0;k<32;++k)be[k]=5;var sn=Ee(ae,9,0),cn=Ee(be,5,0),_t=function(t){return(t+7)/8|0},gt=function(t,n,e){return(e==null||e>t.length)&&(e=t.length),new J(t.subarray(n,e))},ne=function(t,n,e){e<<=n&7;var r=n/8|0;t[r]|=e,t[r+1]|=e>>8},he=function(t,n,e){e<<=n&7;var r=n/8|0;t[r]|=e,t[r+1]|=e>>8,t[r+2]|=e>>16},Ce=function(t,n){for(var e=[],r=0;r<t.length;++r)t[r]&&e.push({s:r,f:t[r]});var i=e.length,o=e.slice();if(!i)return{t:Tt,l:0};if(i==1){var a=new J(e[0].s+1);return a[e[0].s]=1,{t:a,l:1}}e.sort(function(C,L){return C.f-L.f}),e.push({s:-1,f:25001});var u=e[0],l=e[1],_=0,h=1,T=2;for(e[0]={s:-1,f:u.f+l.f,l:u,r:l};h!=i-1;)u=e[e[_].f<e[T].f?_++:T++],l=e[_!=h&&e[_].f<e[T].f?_++:T++],e[h++]={s:-1,f:u.f+l.f,l:u,r:l};for(var d=o[0].s,r=1;r<i;++r)o[r].s>d&&(d=o[r].s);var y=new $(d+1),Y=Me(e[h-1],y,0);if(Y>n){var r=0,f=0,E=Y-n,g=1<<E;for(o.sort(function(L,I){return y[I.s]-y[L.s]||L.f-I.f});r<i;++r){var O=o[r].s;if(y[O]>n)f+=g-(1<<Y-y[O]),y[O]=n;else break}for(f>>=E;f>0;){var w=o[r].s;y[w]<n?f-=1<<n-y[w]++-1:++r}for(;r>=0&&f;--r){var S=o[r].s;y[S]==n&&(--y[S],++f)}Y=n}return{t:new J(y),l:Y}},Me=function(t,n,e){return t.s==-1?Math.max(Me(t.l,n,e+1),Me(t.r,n,e+1)):n[t.s]=e},it=function(t){for(var n=t.length;n&&!t[--n];);for(var e=new $(++n),r=0,i=t[0],o=1,a=function(l){e[r++]=l},u=1;u<=n;++u)if(t[u]==i&&u!=n)++o;else{if(!i&&o>2){for(;o>138;o-=138)a(32754);o>2&&(a(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(a(i),--o;o>6;o-=6)a(8304);o>2&&(a(o-3<<5|8208),o=0)}for(;o--;)a(i);o=1,i=t[u]}return{c:e.subarray(0,r),n}},de=function(t,n){for(var e=0,r=0;r<n.length;++r)e+=t[r]*n[r];return e},vt=function(t,n,e){var r=e.length,i=_t(n+2);t[i]=r&255,t[i+1]=r>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var o=0;o<r;++o)t[i+o+4]=e[o];return(i+4+r)*8},ot=function(t,n,e,r,i,o,a,u,l,_,h){ne(n,h++,e),++i[256];for(var T=Ce(i,15),d=T.t,y=T.l,Y=Ce(o,15),f=Y.t,E=Y.l,g=it(d),O=g.c,w=g.n,S=it(f),C=S.c,L=S.n,I=new $(19),b=0;b<O.length;++b)++I[O[b]&31];for(var b=0;b<C.length;++b)++I[C[b]&31];for(var R=Ce(I,7),D=R.t,q=R.l,M=19;M>4&&!D[nt[M-1]];--M);var ee=_+5<<3,H=de(i,ae)+de(o,be)+a,j=de(i,d)+de(o,f)+a+14+3*M+de(I,D)+2*I[16]+3*I[17]+7*I[18];if(l>=0&&ee<=H&&ee<=j)return vt(n,h,t.subarray(l,l+_));var z,U,K,Q;if(ne(n,h,1+(j<H)),h+=2,j<H){z=Ee(d,y,0),U=d,K=Ee(f,E,0),Q=f;var s=Ee(D,q,0);ne(n,h,w-257),ne(n,h+5,L-1),ne(n,h+10,M-4),h+=14;for(var b=0;b<M;++b)ne(n,h+3*b,D[nt[b]]);h+=3*M;for(var p=[O,C],m=0;m<2;++m)for(var P=p[m],b=0;b<P.length;++b){var A=P[b]&31;ne(n,h,s[A]),h+=D[A],A>15&&(ne(n,h,P[b]>>5&127),h+=P[b]>>12)}}else z=sn,U=ae,K=cn,Q=be;for(var b=0;b<u;++b){var B=r[b];if(B>255){var A=B>>18&31;he(n,h,z[A+257]),h+=U[A+257],A>7&&(ne(n,h,B>>23&31),h+=xe[A]);var X=B&31;he(n,h,K[X]),h+=Q[X],X>3&&(he(n,h,B>>5&8191),h+=Ke[X])}else he(n,h,z[B]),h+=U[B]}return he(n,h,z[256]),h+U[256]},ln=new De([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Tt=new J(0),un=function(t,n,e,r,i,o){var a=o.z||t.length,u=new J(r+a+5*(1+Math.ceil(a/7e3))+i),l=u.subarray(r,u.length-i),_=o.l,h=(o.r||0)&7;if(n){h&&(l[0]=o.r>>3);for(var T=ln[n-1],d=T>>13,y=T&8191,Y=(1<<e)-1,f=o.p||new $(32768),E=o.h||new $(Y+1),g=Math.ceil(e/3),O=2*g,w=function(Pe){return(t[Pe]^t[Pe+1]<<g^t[Pe+2]<<O)&Y},S=new De(25e3),C=new $(288),L=new $(32),I=0,b=0,R=o.i||0,D=0,q=o.w||0,M=0;R+2<a;++R){var ee=w(R),H=R&32767,j=E[ee];if(f[H]=j,E[ee]=H,q<=R){var z=a-R;if((I>7e3||D>24576)&&(z>423||!_)){h=ot(t,l,0,S,C,L,b,D,M,R-M,h),D=I=b=0,M=R;for(var U=0;U<286;++U)C[U]=0;for(var U=0;U<30;++U)L[U]=0}var K=2,Q=0,s=y,p=H-j&32767;if(z>2&&ee==w(R-p))for(var m=Math.min(d,z)-1,P=Math.min(32767,R),A=Math.min(258,z);p<=P&&--s&&H!=j;){if(t[R+K]==t[R+K-p]){for(var B=0;B<A&&t[R+B]==t[R+B-p];++B);if(B>K){if(K=B,Q=p,B>m)break;for(var X=Math.min(p,B-2),_e=0,U=0;U<X;++U){var ue=R-p+U&32767,Rt=f[ue],He=ue-Rt&32767;He>_e&&(_e=He,j=ue)}}}H=j,j=f[H],p+=H-j&32767}if(Q){S[D++]=268435456|Ie[K]<<18|rt[Q];var je=Ie[K]&31,Ve=rt[Q]&31;b+=xe[je]+Ke[Ve],++C[257+je],++L[Ve],q=R+K,++I}else S[D++]=t[R],++C[t[R]]}}for(R=Math.max(R,q);R<a;++R)S[D++]=t[R],++C[t[R]];h=ot(t,l,_,S,C,L,b,D,M,R-M,h),_||(o.r=h&7|l[h/8|0]<<3,h-=7,o.h=E,o.p=f,o.i=R,o.w=q)}else{for(var R=o.w||0;R<a+_;R+=65535){var Oe=R+65535;Oe>=a&&(l[h/8|0]=_,Oe=a),h=vt(l,h+1,t.subarray(R,Oe))}o.i=a}return gt(u,0,r+_t(h)+i)},fn=(function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var e=n,r=9;--r;)e=(e&1&&-306674912)^e>>>1;t[n]=e}return t})(),hn=function(){var t=-1;return{p:function(n){for(var e=t,r=0;r<n.length;++r)e=fn[e&255^n[r]]^e>>>8;t=e},d:function(){return~t}}},dn=function(t,n,e,r,i){if(!i&&(i={l:1},n.dictionary)){var o=n.dictionary.subarray(-32768),a=new J(o.length+t.length);a.set(o),a.set(t,o.length),t=a,i.w=o.length}return un(t,n.level==null?6:n.level,n.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+n.mem,e,r,i)},Fe=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},pn=function(t,n){var e=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:n.level==9?2:0,t[9]=3,n.mtime!=0&&Fe(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),e){t[3]=8;for(var r=0;r<=e.length;++r)t[r+10]=e.charCodeAt(r)}},En=function(t){return 10+(t.filename?t.filename.length+1:0)};function _n(t,n){n||(n={});var e=hn(),r=t.length;e.p(t);var i=dn(t,n,En(n),8),o=i.length;return pn(i,n),Fe(i,o-8,e.d()),Fe(i,o-4,r),i}var at=typeof TextEncoder<"u"&&new TextEncoder,gn=typeof TextDecoder<"u"&&new TextDecoder,vn=0;try{gn.decode(Tt,{stream:!0}),vn=1}catch{}function Tn(t,n){var e;if(at)return at.encode(t);for(var r=t.length,i=new J(t.length+(t.length>>1)),o=0,a=function(_){i[o++]=_},e=0;e<r;++e){if(o+5>i.length){var u=new J(o+8+(r-e<<1));u.set(i),i=u}var l=t.charCodeAt(e);l<128||n?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|t.charCodeAt(++e)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return gt(i,0,o)}const{hierTopics:Rn}=G;function yn(t,n){const e=JSON.stringify(n),r=Tn(e),i=_n(r),o=btoa(String.fromCharCode(...i));localStorage.setItem(t,o)}function An(){const t=document.getElementById("app");t.innerHTML=`
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
  `,mn()}function mn(){var o;const t=document.getElementById("loginForm"),n=document.getElementById("email"),e=document.getElementById("password"),r=document.getElementById("togglePassword");r==null||r.addEventListener("click",()=>{const a=e.type==="password"?"text":"password";e.type=a}),t==null||t.addEventListener("submit",async a=>{a.preventDefault();const u=n.value.trim(),l=e.value;bn(u)&&On(l)&&await Pn(u,l)}),(o=document.getElementById("forgotPasswordLink"))==null||o.addEventListener("click",a=>{a.preventDefault(),window.router&&window.router.navigate("/forgot")});const i=document.querySelector('.auth-switch a[href="#/signup"]');i==null||i.addEventListener("click",a=>{a.preventDefault(),window.router&&window.router.navigate("/signup")})}function bn(t){const n=e=>{typeof neodigmUtils<"u"&&neodigmUtils.shake(e)};return t?!t.includes("@")||!t.includes(".")?(typeof neodigmToast<"u"&&neodigmToast.q("Please enter a valid email address","danger"),n("#email"),!1):!0:(typeof neodigmToast<"u"&&neodigmToast.q("Please enter your email","danger"),n("#email"),!1)}function On(t){const n=e=>{typeof neodigmUtils<"u"&&neodigmUtils.shake(e)};return t?t.length<10?(typeof neodigmToast<"u"&&neodigmToast.q("Password must be at least 10 characters","danger"),n("#password"),!1):!0:(typeof neodigmToast<"u"&&neodigmToast.q("Please enter your password","danger"),n("#password"),!1)}async function Pn(t,n){try{let e=n;typeof neodigmUtils<"u"&&(e=neodigmUtils.genHash(n));const r={email:t,hash:e};await Ae.doSignin(r,i=>{if(i.ok===!0){const{accessToken:o,...a}=i;yn("entity",a),x.publish(Rn.APP__AUTH,{email:t,timestamp:Date.now(),action:"signin"}),typeof mvvLegit>"u"&&window.router&&window.router.navigate("/home")}})}catch(e){console.error("Signin error:",e),typeof neodigmToast<"u"&&neodigmToast.q("An error occurred during sign in","danger")}}function wn(){const t=document.getElementById("app");t.innerHTML="<h1>Sign Up</h1>"}function Nn(){const t=document.getElementById("app"),n=[{token:"HOME",caption:"HOME",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!0},{token:"BADGES",caption:"BADGES",enabled:!0,viewport:["landscape"],count:3,selected:!1},{token:"BIDS",caption:"BIDS",enabled:!0,viewport:["landscape"],count:0,selected:!1},{token:"SIGNOUT",caption:"SIGN OUT",enabled:!0,viewport:["landscape","portrait"],count:0,selected:!1}];t.innerHTML=`
    <pcx-primary-nav data-primary-nav-buttons='${JSON.stringify(n)}'></pcx-primary-nav>
    <div style="padding: var(--space-xl);">
      <h1>Dashboard</h1>
      <p>Welcome back to your PatentBadge dashboard</p>
    </div>
  `}function Sn(){const t=document.getElementById("app");t.innerHTML="<h1>Reset Hash</h1>"}const{hierTopics:Bn}=G;function Cn(){const t=document.getElementById("app");t.innerHTML=`
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
  `,Yn()}function Yn(){const t=document.getElementById("signoutBtn"),n=document.getElementById("cancelBtn");t==null||t.addEventListener("click",()=>{console.log("Signing out..."),x.publish(Bn.APP__SIGNOUT,{timestamp:Date.now()}),localStorage.removeItem("entity"),typeof mvvLegit<"u"?mvvLegit.doSignout():window.router&&window.router.navigate("/signin")}),n==null||n.addEventListener("click",()=>{console.log("Canceling signout, returning to home"),window.router&&window.router.navigate("/home")})}function Ln(){const t=document.getElementById("app");t.innerHTML="<h1>Forgot Password</h1>"}function In(){const t=document.getElementById("app");t.innerHTML="<h1>Reset Forgot Password</h1>"}function kn(){const t=document.getElementById("app");t.innerHTML="<h1>Verification Link</h1>"}function st(t){var e,r,i;const n=document.getElementById("app");n.innerHTML=`
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
  `,(e=document.getElementById("testSignin"))==null||e.addEventListener("click",()=>{console.log("Navigating to signin"),window.router&&window.router.navigate("/signin")}),(r=document.getElementById("testHome"))==null||r.addEventListener("click",()=>{console.log("Navigating to home"),window.router&&window.router.navigate("/home")}),(i=document.getElementById("testSplash"))==null||i.addEventListener("click",()=>{console.log("Navigating to /"),window.router&&window.router.navigate("/")})}function Mn(){const t=document.getElementById("app");t.innerHTML="<h1>Offline</h1>"}const Fn=ye.features[ye.features.ENV].FF_BASE_URI;tn.bindAppListeners("pcx-core");window.AppBroadcast=G;const se=new $t("/patentbadge/login/",{hash:!0});console.log("Router initialized:",se);console.log("Initial hash:",window.location.hash);console.log("Initial pathname:",window.location.pathname);typeof mvvLegit<"u"&&(mvvLegit.init({BASE:Fn}),mvvLegit.setNavConroller((t=null)=>{if(t){console.log("mvvLegit navigation to:",t);const n=t.replace("_route","").replace("_","-");n==="splash"?se.navigate("/"):se.navigate(`/${n}`)}}),mvvLegit.setOnState((t=null)=>{t!==null&&console.log(`mvvLegit authentication state changed to: ${t}`)}));function W(t){if(typeof mvvLegit>"u")return!0;const n=t?`${t.replace("-","_")}_route`:"splash_route",e=mvvLegit.isRouteAllowed(n);return e||(console.log("Route blocked by mvvLegit:",n,"- redirecting to splash"),setTimeout(()=>{se.navigate("/")},0)),e}se.hooks({before:(t,n)=>{var r;const e=((r=n==null?void 0:n.route)==null?void 0:r.path)||(n==null?void 0:n.url)||window.location.hash.split("?")[0].replace("#","")||"unknown";x.publish(G.hierTopics.ROUTE__NAV__BEFORE,{route:e,match:n,timestamp:Date.now()}),t()},after:t=>{var e;const n=((e=t==null?void 0:t.route)==null?void 0:e.path)||(t==null?void 0:t.url)||window.location.hash.split("?")[0].replace("#","")||"unknown";G.currentRoute=n,x.publish(G.hierTopics.ROUTE__NAV__AFTER,{route:n,match:t,timestamp:Date.now()})}});se.on({"/":()=>{console.log("Matched route: /"),W("splash")&&rn()},"/signin":()=>{console.log("Matched route: /signin"),W("signin")&&An()},"/signup":()=>{console.log("Matched route: /signup"),W("signup")&&wn()},"/home":()=>{console.log("Matched route: /home"),W("home")&&Nn()},"/resethash":()=>{console.log("Matched route: /resethash"),W("resethash")&&Sn()},"/signout":()=>{console.log("Matched route: /signout"),W("signout")&&Cn()},"/forgot":()=>{console.log("Matched route: /forgot"),W("forgot")&&Ln()},"/resetforgot":()=>{console.log("Matched route: /resetforgot"),W("resetforgot")&&In()},"/verf-link":()=>{console.log("Matched route: /verf-link"),W("verf-link")&&kn()},"/error":()=>{console.log("Matched route: /error"),W("error")&&st()},"/offline":()=>{console.log("Matched route: /offline"),W("offline")&&Mn()}}).notFound(()=>{console.log("No route matched - showing error"),st()}).resolve();window.router=se;
