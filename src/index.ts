import dateFormat from './date-formate';
import storageObj from './storage';
import systemInfo from './system-info';
import basicObj from './basic';
import regExpObj from './regexp';

export default {
  ...dateFormat,
  ...storageObj,
  ...systemInfo,
  ...basicObj,
  ...regExpObj
};

// 导出文件中所有非default的export
export * from './date-formate';
export * from './storage';
export * from './system-info';
export * from './basic';
export * from './regexp';
