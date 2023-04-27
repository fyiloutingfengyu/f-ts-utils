/**
 * @description 系统相关信息，设备相关信息
 */


const userAgent = navigator.userAgent;

/**
 * @description: 判断是否是Android
 * @return {boolean}
 */
const isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1;

/**
 * @description: 判断是否是iOS
 * @return {boolean}
 */
const isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

export {
  isAndroid,
  isiOS
};

export default {
  isAndroid,
  isiOS
};
