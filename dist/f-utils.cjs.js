"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,t){console.log(666);var o=new Date(e),r={M:o.getMonth()+1,d:o.getDate(),h:o.getHours(),m:o.getMinutes(),s:o.getSeconds(),S:o.getMilliseconds()};return t=t.replace(/([yMdhmsS])+/g,(function(e,t){var a=r[t];return void 0!==a?(e.length>1&&(a=(a="0"+a).substr(a.length-2)),a):"y"===t?(o.getFullYear()+"").substr(4-e.length):e}))},t=function(e){return localStorage.getItem(e)||""},o=function(e,t){return localStorage.setItem(e,t)},r=function(e){localStorage.removeItem(e)},a=navigator.userAgent,n=a.indexOf("Android")>-1||a.indexOf("Adr")>-1,s=!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i="undefined"!=typeof window,l=function(e){if(i&&(document.title=e,/ip(hone|od|ad)/i.test(navigator.userAgent))){var t=document.createElement("iframe");t.src="/favicon.ico",t.style.display="none",t.onload=function(){setTimeout((function(){t.remove()}),10)},document.body.appendChild(t)}},g=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);return null!=o?decodeURIComponent(o[2]):""},d=function(e){void 0===e&&(e={});var t=Object.keys(e);return 0===t.length?"":t.map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")},u={userName:/^[\u4e00-\u9fa5]+$/,identityCard:/\d{15}(\d\d[0-9xX])?/,mobile:/^1\d{10}$/,telephone:/^\d{10,12}$/,messageCode:/^\d{6}$/,password:/(?!^(\d+|[a-zA-Z]+|[_~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,16}$/,imageFileType:/image\/(?:jpeg|png|gif|jpg|bmp)/i},c={nameRule:{verify:u.userName,message:"请填写正确的姓名"},idCardRule:{verify:u.identityCard,message:"请输入正确的身份证号码"},mobileRule:{verify:u.mobile,message:"请输入正确的手机号码"},telRule:{verify:u.telephone,message:"请输入正确的固定电话"},msgCodeRule:{verify:u.messageCode,message:"请输入6位数字短信验证码"},pwdRule:{verify:u.password,message:"由数字、字母或符号组成8~16位，至少包含两种组合，符号包含_~!@#$%^&*?"},imgFileTypeRule:{verify:u.imageFileType,message:"请上传图片格式的文件"}},m={dateFormat:e,getLocalStorage:t,setLocalStorage:o,removeLocalStorage:r,isiOS:s,isAndroid:n,setPageTitle:l,getUrlParam:g,objToUrlStr:d,regExpObj:u,regExpRules:c};exports.dateFormat=e,exports.default=m,exports.getLocalStorage=t,exports.getUrlParam=g,exports.isAndroid=n,exports.isiOS=s,exports.objToUrlStr=d,exports.regExpObj=u,exports.regExpRules=c,exports.removeLocalStorage=r,exports.setLocalStorage=o,exports.setPageTitle=l;
