/**
 * @description: 获取localStorage
 * @method getLocalStorage
 * @param {string} name - localStorage的名称
 */
const getLocalStorage = (name: string) => {
  return localStorage.getItem(name) || '';
};

/**
 * @description: 存入localStorage
 * @method setLocalStorage
 * @param {string} name - localStorage的名称
 * @param {string} value - 存入的值
 */
const setLocalStorage = (name: string, value: string) => {
  return localStorage.setItem(name, value);
};

/**
 * @description: 删除localStorage
 * @method removeLocalStorage
 * @param {string} name - localStorage的名称
 */
const removeLocalStorage = (name: string) => {
  localStorage.removeItem(name);
};

export {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage
};

export default {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage
};
