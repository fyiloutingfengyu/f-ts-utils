/**
 * @description 数组相关
 */

/**
 * @description 数组去重
 * @param arr
 */
const noRepeat = (arr: any[]) => {
  return Array.from(new Set(arr));
};

export { noRepeat };

export default {
  noRepeat
};
