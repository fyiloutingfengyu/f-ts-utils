import dateFormat from './date-formate';
import storageObj from './storage';
import systemInfo from './validate';
import basicObj from './basic';
import regExpObj from './regexp';
import elementObj from './element';
import objectFn from './object';
import arrayObj from './array';

export default {
  ...dateFormat,
  ...storageObj,
  ...systemInfo,
  ...basicObj,
  ...regExpObj,
  ...elementObj,
  ...objectFn,
  ...arrayObj
};

// 导出文件中所有非default的export
export * from './date-formate';
export * from './storage';
export * from './validate';
export * from './basic';
export * from './regexp';
export * from './element';
export * from './object';
export * from './array';

