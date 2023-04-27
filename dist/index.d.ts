import dateFormat from './date-formate';
import { getLocalStorage, setLocalStorage, removeLocalStorage } from './storage';
import { isiOS, isAndroid } from './system-info';
import { setPageTitle, getUrlParam, objToUrlStr } from './basic';
import { regExpObj, regExpRules } from './regexp';
declare const fUtils: {
    dateFormat: (date: string | number, format: string) => string;
    getLocalStorage: (name: string) => string;
    setLocalStorage: (name: string, value: string) => void;
    removeLocalStorage: (name: string) => void;
    isiOS: boolean;
    isAndroid: boolean;
    setPageTitle: (title: string) => void;
    getUrlParam: (name: string) => string;
    objToUrlStr: (query?: {}) => string;
    regExpObj: {
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
};
export { dateFormat, getLocalStorage, setLocalStorage, removeLocalStorage, isiOS, isAndroid, setPageTitle, getUrlParam, objToUrlStr, regExpObj, regExpRules };
export default fUtils;
