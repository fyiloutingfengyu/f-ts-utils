declare const setPageTitle: (title: string) => void;
declare const getUrlParam: (name: string) => string;
declare const objToUrlStr: (query?: {}) => string;
declare const isSameValue: (valueA: any, valueB: any) => boolean;
export { setPageTitle, getUrlParam, objToUrlStr, isSameValue };
declare const _default: {
    setPageTitle: (title: string) => void;
    getUrlParam: (name: string) => string;
    objToUrlStr: (query?: {}) => string;
    isSameValue: (valueA: any, valueB: any) => boolean;
};
export default _default;
