/**
 * @description 基础工具类
 */

/**
 * @description 判断是否在浏览器环境下
 * @return {boolean}
 */
const inBrowser = typeof window !== 'undefined';

/**
 * @description: 读取location.search中的参数值
 * @param {string} name 名称
 * @return {string} url中的参数的值
 */
const getUrlParam = (name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const search = window.location.search.substr(1);
  const result = search.match(reg);

  if (result != null) {
    return decodeURIComponent(result[2]);
  } else {
    return '';
  }
};

/**
 * @description 对象数据转为url参数格式
 */
const objToUrlStr = (query = {}) => {
  const queryKeys = Object.keys(query);

  if (queryKeys.length === 0) return '';

  const params = queryKeys.map(key => `${key}=${query[key]}`);

  return params.join('&');
};

/**
 * @description 判断两个引用类型的值是否相等
 */
const isSameValue = (valueA, valueB) => {
  return JSON.stringify(valueA) === JSON.stringify(valueB);
};

/**
 * @description 获取数据类型
 */
const getDataType = (data) => {
  const type = typeof data;

  if (data === null) {
    return 'null';
  } else if (type === 'object') {
    const typeStr = Object.prototype.toString.call(data);

    return typeStr.slice(8, -1).toLowerCase();
  }

  return type;
};


export {
  inBrowser,
  getUrlParam,
  objToUrlStr,
  isSameValue,
  getDataType
};

export default {
  inBrowser,
  getUrlParam,
  objToUrlStr,
  isSameValue,
  getDataType
};
