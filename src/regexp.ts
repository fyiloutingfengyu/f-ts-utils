/**
 * @description: 公共正则
 */
const regExpObj = {
  userName: /^[\u4e00-\u9fa5]+$/, // 姓名
  identityCard: /\d{15}(\d\d[0-9xX])?/, // 身份证
  mobile: /^1\d{10}$/, // 手机号 telephone
  telephone: /^\d{10,12}$/, // 固定电话 /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/
  messageCode: /^\d{6}$/, // 6位短信验证码
  password: /(?!^(\d+|[a-zA-Z]+|[_~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,16}$/,
  imageFileType: /image\/(?:jpeg|png|gif|jpg|bmp)/i // 图片文件 file.type(image/png)
};

const regExpRules = {
  nameRule: {
    verify: regExpObj.userName,
    message: '请填写正确的姓名',
  },
  idCardRule: {
    verify: regExpObj.identityCard,
    message: '请输入正确的身份证号码'
  },
  mobileRule: {
    verify: regExpObj.mobile,
    message: '请输入正确的手机号码'
  },
  telRule: {
    verify: regExpObj.telephone,
    message: '请输入正确的固定电话'
  },
  msgCodeRule: {
    verify: regExpObj.messageCode,
    message: '请输入6位数字短信验证码'
  },
  pwdRule: {
    verify: regExpObj.password,
    message: '由数字、字母或符号组成8~16位，至少包含两种组合，符号包含_~!@#$%^&*?',
  },
  imgFileTypeRule: {
    verify: regExpObj.imageFileType,
    message: '请上传图片格式的文件'
  }
};


export {
  regExpObj,
  regExpRules
};
