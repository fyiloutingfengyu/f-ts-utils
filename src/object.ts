/**
 * @description 对象相关
 */
import { isDefined, isBroadObject } from './validate';
import { ObjectType } from './types/common';


const { hasOwnProperty } = Object.prototype;

const _deepAssignFn = (to: ObjectType, from: ObjectType) => {
  Object.keys(from).forEach(key => {
    _assignKey(to, from, key);
  });

  return to;
};

const _assignKey = (to: ObjectType, from: ObjectType, key: string) => {
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
const deepAssign = (target: ObjectType, ...rest: ObjectType[]) => {
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
