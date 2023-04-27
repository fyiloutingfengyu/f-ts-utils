/**
 * @description 基础工具类
 */

const isBrowser = typeof window !== 'undefined';

/**
 * @description: 设置页面标题
 * @method setPageTitle
 * @param {string} title - 标题内容
 */
const setPageTitle = (title: string) => {
  if (isBrowser) {
    document.title = title;

    if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
      const iframe = document.createElement('iframe');

      iframe.src = '/favicon.ico';
      iframe.style.display = 'none';
      iframe.onload = function () {
        setTimeout(function () {
          iframe.remove();
        }, 10);
      };

      document.body.appendChild(iframe);
    }
  }
};

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

export {
  setPageTitle,
  getUrlParam,
  objToUrlStr
};
