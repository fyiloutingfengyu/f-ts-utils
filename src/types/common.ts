// 通用对象类型
export interface ObjectType {
  [key: string]: any;
}

// 通用函数类型
export type FunctionType = (...args: any[]) => any;
