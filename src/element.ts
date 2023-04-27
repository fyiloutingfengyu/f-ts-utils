/**
 * @description 页面元素相关
 */

import { inBrowser } from './basic';

/**
 * @description: 设置页面标题
 * @method setPageTitle
 * @param {string} title - 标题内容
 */
const setPageTitle = (title: string) => {
  if (inBrowser) {
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

export {
  setPageTitle
};

export default {
  setPageTitle
};
