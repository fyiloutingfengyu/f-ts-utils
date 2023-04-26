var e = function (e, t) {
  var o = new Date(e), r = {
    M: o.getMonth() + 1,
    d: o.getDate(),
    h: o.getHours(),
    m: o.getMinutes(),
    s: o.getSeconds(),
    S: o.getMilliseconds()
  };
  return t = t.replace(/([yMdhmsS])+/g, (function (e, t) {
    var a = r[t];
    return void 0 !== a ? (e.length > 1 && (a = (a = '0' + a).substr(a.length - 2)), a) : 'y' === t ? (o.getFullYear() + '').substr(4 - e.length) : e;
  }));
}, t = function (e) {
  return localStorage.getItem(e) || '';
}, o = function (e, t) {
  return localStorage.setItem(e, t);
}, r = function (e) {
  localStorage.removeItem(e);
}, a = { dateFormat: e, getLocalStorage: t, setLocalStorage: o, removeLocalStorage: r };
export { e as dateFormat, a as default, t as getLocalStorage, r as removeLocalStorage, o as setLocalStorage };
