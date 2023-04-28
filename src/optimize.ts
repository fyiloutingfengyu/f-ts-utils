/**
 * @description 优化相关
 */

/**
 * @description 节流函数
 * @param callback
 * @param time
 * @param immediate
 */
const throttle = (callback, time, immediate = false) => {
  if (immediate) {
    let prevTime = 0;

    return (...args: any) => {
      const nowTime = Date.now();

      if (nowTime - prevTime >= time) {
        callback.apply(this, args);
        prevTime = nowTime;
      }
    };
  } else {
    let timer: number | null = null;

    return (...args: any) => {
      console.log(1);
      if (!timer) {
        timer = setTimeout(() => {
          callback.apply(this, args);
          timer = null;
        }, time);
      }
    };
  }
};

/**
 * @description 防抖函数
 * @param callback
 * @param time
 * @param immediate
 */

const debounce = (callback, time, immediate = false) => {
  let timer: number | null = null;

  return (...args: any) => {
    if (timer) clearInterval(timer);

    if (immediate) {
      if (!timer) callback.apply(this, args);

      timer = setTimeout(() => {
        timer = null;
      }, time);
    } else {
      timer = setTimeout(() => {
        callback.apply(this, args);
      }, time);
    }
  };
};

export {
  throttle,
  debounce
};

export default {
  throttle,
  debounce
};
