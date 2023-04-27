import dateFormat from './date-formate';
import { getLocalStorage, setLocalStorage, removeLocalStorage } from './storage';
import { isiOS, isAndroid } from './system-info';
import { setPageTitle, getUrlParam, objToUrlStr } from './basic';
import { regExpObj, regExpRules } from './regexp';

const fUtils = {
  dateFormat,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  isiOS,
  isAndroid,
  setPageTitle,
  getUrlParam,
  objToUrlStr,
  regExpObj,
  regExpRules
};

export {
  dateFormat,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  isiOS,
  isAndroid,
  setPageTitle,
  getUrlParam,
  objToUrlStr,
  regExpObj,
  regExpRules
};

export default fUtils;
