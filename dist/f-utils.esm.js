const e=(e,t)=>{const o=new Date(e),n={M:o.getMonth()+1,d:o.getDate(),h:o.getHours(),m:o.getMinutes(),s:o.getSeconds(),S:o.getMilliseconds()};return t=t.replace(/([yMdhmsS])+/g,(function(e,t){let r=n[t];return void 0!==r?(e.length>1&&(r="0"+r,r=r.substr(r.length-2)),r):"y"===t?(o.getFullYear()+"").substr(4-e.length):e}))};var t={dateFormat:e};const o=e=>localStorage.getItem(e)||"",n=(e,t)=>localStorage.setItem(e,t),r=e=>{localStorage.removeItem(e)};var s={getLocalStorage:o,setLocalStorage:n,removeLocalStorage:r};const i="undefined"!=typeof window,a=e=>{const t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);return null!=o?decodeURIComponent(o[2]):""},l=(e={})=>{const t=Object.keys(e);if(0===t.length)return"";return t.map((t=>`${t}=${e[t]}`)).join("&")},c=(e,t)=>JSON.stringify(e)===JSON.stringify(t),u=e=>{const t=typeof e;if(null===e)return"null";if("object"===t){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}return t},d=e=>{if(!w(e))return e;if(Array.isArray(e))return e.map((e=>d(e)));if(h(e)){const t={};return Object.keys(e).forEach((o=>{t[o]=d(e[o])})),t}return e};var g={inBrowser:i,getUrlParam:a,objToUrlStr:l,isSameValue:c,getDataType:u,deepClone:d};const m=i?window.navigator.userAgent:"",p=()=>!!i&&m.indexOf("Android")>-1,f=()=>!!i&&/ios|iphone|ipad|ipod/.test(m.toLowerCase()),y=()=>!!i&&/(micromessenger)/i.test(m),v=e=>"function"==typeof e,h=e=>null!==e&&"object"==typeof e,b=e=>h(e)&&v(e.then)&&v(e.catch),w=e=>null!=e;var S={isAndroid:p,isiOS:f,isWeChat:y,isFunction:v,isBroadObject:h,isPromise:b,isDefined:w};const j={userName:/^[\u4e00-\u9fa5]+$/,identityCard:/\d{15}(\d\d[0-9xX])?/,mobile:/^1\d{10}$/,telephone:/^\d{10,12}$/,messageCode:/^\d{6}$/,password:/(?!^(\d+|[a-zA-Z]+|[_~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,16}$/,imageFileType:/image\/(?:jpeg|png|gif|jpg|bmp)/i},C={nameRule:{verify:j.userName,message:"请填写正确的姓名"},idCardRule:{verify:j.identityCard,message:"请输入正确的身份证号码"},mobileRule:{verify:j.mobile,message:"请输入正确的手机号码"},telRule:{verify:j.telephone,message:"请输入正确的固定电话"},msgCodeRule:{verify:j.messageCode,message:"请输入6位数字短信验证码"},pwdRule:{verify:j.password,message:"由数字、字母或符号组成8~16位，至少包含两种组合，符号包含_~!@#$%^&*?"},imgFileTypeRule:{verify:j.imageFileType,message:"请上传图片格式的文件"}};var $={regExpList:j,regExpRules:C};const O=e=>{if(i&&(document.title=e,/ip(hone|od|ad)/i.test(navigator.userAgent))){const e=document.createElement("iframe");e.src="/favicon.ico",e.style.display="none",e.onload=function(){setTimeout((function(){e.remove()}),10)},document.body.appendChild(e)}};var R={setPageTitle:O};const{hasOwnProperty:T}=Object.prototype,A=(e,t)=>(Object.keys(t).forEach((o=>{E(e,t,o)})),e),E=(e,t,o)=>{const n=t[o];w(n)&&(T.call(e,o)&&h(n)?e[o]=A(e[o],n):e[o]=n)},x=(e,...t)=>(0===t.length||(console.log(e,t),t.forEach((t=>{e=A(e,t)}))),e);const F=e=>Array.from(new Set(e));const L=(e,t,o=!1)=>{if(o){let o=0;return(...n)=>{const r=Date.now();r-o>=t&&(e.apply(void 0,n),o=r)}}{let o=null;return(...n)=>{console.log(1),o||(o=setTimeout((()=>{e.apply(void 0,n),o=null}),t))}}},D=(e,t,o=!1)=>{let n=null;return(...r)=>{n&&clearTimeout(n),o?(n||e.apply(void 0,r),n=setTimeout((()=>{n=null}),t)):n=setTimeout((()=>{e.apply(void 0,r)}),t)}};var M={...t,...s,...S,...g,...$,...R,...{deepAssign:x},...{noRepeat:F},...{throttle:L,debounce:D}};export{e as dateFormat,D as debounce,x as deepAssign,d as deepClone,M as default,u as getDataType,o as getLocalStorage,a as getUrlParam,i as inBrowser,p as isAndroid,h as isBroadObject,w as isDefined,v as isFunction,b as isPromise,c as isSameValue,y as isWeChat,f as isiOS,F as noRepeat,l as objToUrlStr,j as regExpList,C as regExpRules,r as removeLocalStorage,n as setLocalStorage,O as setPageTitle,L as throttle};
