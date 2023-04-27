/**
 * @description 对象相关
 */
import { isDefined, isBroadObject } from './validate';


/**
 * @description 对象深度合并
 */
const assignKey = (to, from, key) => {
  const val = from[key];

  if (!isDefined(val)) {
    return;
  }

  if (!to.hasOwnProperty(key) || !isBroadObject(val)) {
    to[key] = val;
  } else {
    to[key] = deepAssign(to[key], val);
  }
};

const deepAssign = (to, from) => {
  Object.keys(from).forEach((key) => {
    assignKey(to, from, key);
  });

  return to;
};

export {
  deepAssign
};

export default {
  deepAssign
};
