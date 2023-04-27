declare const _default: {
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
    setPageTitle: (title: string) => void;
    getUrlParam: (name: string) => string;
    objToUrlStr: (query?: {}) => string;
    isSameValue: (valueA: any, valueB: any) => boolean;
    isAndroid: boolean;
    isiOS: boolean;
    getLocalStorage: (name: string) => string;
    setLocalStorage: (name: string, value: string) => void;
    removeLocalStorage: (name: string) => void;
    dateFormat: (date: string | number, format: string) => string;
};
export default _default;
export * from './date-formate';
export * from './storage';
export * from './system-info';
export * from './basic';
export * from './regexp';
