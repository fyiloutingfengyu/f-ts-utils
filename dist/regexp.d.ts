declare const regExpObj: {
    userName: RegExp;
    identityCard: RegExp;
    mobile: RegExp;
    telephone: RegExp;
    messageCode: RegExp;
    password: RegExp;
    imageFileType: RegExp;
};
declare const regExpRules: {
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
export { regExpObj, regExpRules };
