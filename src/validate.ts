/**
 * @description 校验相关
 */

import { inBrowser } from './basic';

const userAgent = inBrowser ? window.navigator.userAgent : '';

/**
 * @description: 判断是否Android
 * @return {boolean}
 */
const isAndroid = () => {
  if (inBrowser) {
    return userAgent.indexOf('Android') > -1;
  } else {
    return false;
  }
};

/**
 * @description: 判断是否iOS
 * @return {boolean}
 */
const isiOS = () => {
  if (inBrowser) {
    return /ios|iphone|ipad|ipod/.test(userAgent.toLowerCase());
  } else {
    return false;
  }
};

/**
 * @description 判断是否在微信环境下
 * @return {boolean}
 */
const isWeChat = () => {
  if (inBrowser) {
    return /(micromessenger)/i.test(userAgent);
  } else {
    return false;
  }
};

/**
 * @description 判断是否函数
 * @return {boolean}
 */
const isFunction = (val) => {
  return typeof val === 'function';
};

/**
 * @description 判断是否Object(宽泛的Object)
 * @return {boolean}
 */
const isBroadObject = (val) => {
  return val !== null && typeof val === 'object';
};

/**
 * @description 判断是否promise
 * @return {boolean}
 */
const isPromise = (val) => {
  return isBroadObject(val) && isFunction(val.then) && isFunction(val.catch);
};

/**
 * @description 是否定义
 * @return {boolean}
 */
const isDefined = (val) => {
  return val !== undefined && val !== null;
};


export {
  isAndroid,
  isiOS,
  isWeChat,
  isFunction,
  isBroadObject,
  isPromise,
  isDefined
};

export default {
  isAndroid,
  isiOS,
  isWeChat,
  isFunction,
  isBroadObject,
  isPromise,
  isDefined
};
