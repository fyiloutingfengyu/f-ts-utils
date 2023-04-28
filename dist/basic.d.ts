declare const inBrowser: boolean;
declare const getUrlParam: (name: string) => string;
declare const objToUrlStr: (query?: {}) => string;
declare const isSameValue: (valueA: any, valueB: any) => boolean;
declare const getDataType: (data: any) => string;
declare const deepClone: (obj: any) => any;
export { inBrowser, getUrlParam, objToUrlStr, isSameValue, getDataType, deepClone };
declare const _default: {
    inBrowser: boolean;
    getUrlParam: (name: string) => string;
    objToUrlStr: (query?: {}) => string;
    isSameValue: (valueA: any, valueB: any) => boolean;
    getDataType: (data: any) => string;
    deepClone: (obj: any) => any;
};
export default _default;
