/**
 * @description 对象相关
 */
import { isDefined, isBroadObject } from './validate';


const { hasOwnProperty } = Object.prototype;

const _deepAssignFn = (to, from) => {
  Object.keys(from).forEach(key => {
    _assignKey(to, from, key);
  });

  return to;
};

const _assignKey = (to, from, key) => {
  const val = from[key];

  if (!isDefined(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !isBroadObject(val)) {
    to[key] = val;
  } else {
    to[key] = _deepAssignFn(to[key], val);
  }
};

/**
 * @description 对象深度合并
 * @param target 合并后的目标对象
 * @param rest 要合并进目标对象的对象列表
 */
const deepAssign = (target, ...rest) => {
  if (rest.length === 0) return target;

  console.log(target, rest);

  rest.forEach(item => {
    target = _deepAssignFn(target, item);
  });

  return target;
};

export {
  deepAssign
};

export default {
  deepAssign
};
