declare const _default: {
    setPageTitle: (title: string) => void;
    regExpList: {
        userName: RegExp;
        identityCard: RegExp;
        mobile: RegExp;
        telephone: RegExp;
        messageCode: RegExp;
        password: RegExp;
        imageFileType: RegExp;
    };
    regExpRules: {
        nameRule: {
            verify: RegExp;
            message: string;
        };
        idCardRule: {
            verify: RegExp;
            message: string;
        };
        mobileRule: {
            verify: RegExp;
            message: string;
        };
        telRule: {
            verify: RegExp;
            message: string;
        };
        msgCodeRule: {
            verify: RegExp;
            message: string;
        };
        pwdRule: {
            verify: RegExp;
            message: string;
        };
        imgFileTypeRule: {
            verify: RegExp;
            message: string;
        };
    };
    inBrowser: boolean;
    getUrlParam: (name: string) => string;
    objToUrlStr: (query?: {}) => string;
    isSameValue: (valueA: any, valueB: any) => boolean;
    getDataType: (data: any) => string;
    isAndroid: () => boolean;
    isiOS: () => boolean;
    isWeChat: () => boolean;
    isFunction: (val: any) => boolean;
    isBroadObject: (val: any) => boolean;
    isPromise: (val: any) => boolean;
    isDefined: (val: any) => boolean;
    getLocalStorage: (name: string) => string;
    setLocalStorage: (name: string, value: string) => void;
    removeLocalStorage: (name: string) => void;
    dateFormat: (date: string | number, format: string) => string;
};
export default _default;
export * from './date-formate';
export * from './storage';
export * from './validate';
export * from './basic';
export * from './regexp';
export * from './element';
