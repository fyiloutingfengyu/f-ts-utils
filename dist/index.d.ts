import dateFormat from './date-formate';
import { getLocalStorage, setLocalStorage, removeLocalStorage } from './storage';
declare const fUtils: {
    dateFormat: (date: string | number, format: string) => string;
    getLocalStorage: (name: string) => string;
    setLocalStorage: (name: string, value: string) => void;
    removeLocalStorage: (name: string) => void;
};
export { dateFormat, getLocalStorage, setLocalStorage, removeLocalStorage };
export default fUtils;
