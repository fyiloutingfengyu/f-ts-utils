var e=function(){return e=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},e.apply(this,arguments)},t=function(e,t){var n=new Date(e),o={M:n.getMonth()+1,d:n.getDate(),h:n.getHours(),m:n.getMinutes(),s:n.getSeconds(),S:n.getMilliseconds()};return t=t.replace(/([yMdhmsS])+/g,(function(e,t){var r=o[t];return void 0!==r?(e.length>1&&(r=(r="0"+r).substr(r.length-2)),r):"y"===t?(n.getFullYear()+"").substr(4-e.length):e}))},n={dateFormat:t},o=function(e){return localStorage.getItem(e)||""},r=function(e,t){return localStorage.setItem(e,t)},i=function(e){localStorage.removeItem(e)},a={getLocalStorage:o,setLocalStorage:r,removeLocalStorage:i},s="undefined"!=typeof window,u=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?decodeURIComponent(n[2]):""},l=function(e){void 0===e&&(e={});var t=Object.keys(e);return 0===t.length?"":t.map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")},c=function(e,t){return JSON.stringify(e)===JSON.stringify(t)},g=function(e){var t=typeof e;return null===e?"null":"object"===t?Object.prototype.toString.call(e).slice(8,-1).toLowerCase():t},d={inBrowser:s,getUrlParam:u,objToUrlStr:l,isSameValue:c,getDataType:g},f=s?window.navigator.userAgent:"",m=function(){return!!s&&f.indexOf("Android")>-1},p=function(){return!!s&&/ios|iphone|ipad|ipod/.test(f.toLowerCase())},y=function(){return!!s&&/(micromessenger)/i.test(f)},v=function(e){return"function"==typeof e},h=function(e){return null!==e&&"object"==typeof e},b=function(e){return h(e)&&v(e.then)&&v(e.catch)},w=function(e){return null!=e},S={isAndroid:m,isiOS:p,isWeChat:y,isFunction:v,isBroadObject:h,isPromise:b,isDefined:w},j={userName:/^[\u4e00-\u9fa5]+$/,identityCard:/\d{15}(\d\d[0-9xX])?/,mobile:/^1\d{10}$/,telephone:/^\d{10,12}$/,messageCode:/^\d{6}$/,password:/(?!^(\d+|[a-zA-Z]+|[_~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,16}$/,imageFileType:/image\/(?:jpeg|png|gif|jpg|bmp)/i},C={nameRule:{verify:j.userName,message:"请填写正确的姓名"},idCardRule:{verify:j.identityCard,message:"请输入正确的身份证号码"},mobileRule:{verify:j.mobile,message:"请输入正确的手机号码"},telRule:{verify:j.telephone,message:"请输入正确的固定电话"},msgCodeRule:{verify:j.messageCode,message:"请输入6位数字短信验证码"},pwdRule:{verify:j.password,message:"由数字、字母或符号组成8~16位，至少包含两种组合，符号包含_~!@#$%^&*?"},imgFileTypeRule:{verify:j.imageFileType,message:"请上传图片格式的文件"}},O={regExpList:j,regExpRules:C},R=function(e){if(s&&(document.title=e,/ip(hone|od|ad)/i.test(navigator.userAgent))){var t=document.createElement("iframe");t.src="/favicon.ico",t.style.display="none",t.onload=function(){setTimeout((function(){t.remove()}),10)},document.body.appendChild(t)}},$={setPageTitle:R},T=e(e(e(e(e(e({},n),a),S),d),O),$);export{t as dateFormat,T as default,g as getDataType,o as getLocalStorage,u as getUrlParam,s as inBrowser,m as isAndroid,h as isBroadObject,w as isDefined,v as isFunction,b as isPromise,c as isSameValue,y as isWeChat,p as isiOS,l as objToUrlStr,j as regExpList,C as regExpRules,i as removeLocalStorage,r as setLocalStorage,R as setPageTitle};
