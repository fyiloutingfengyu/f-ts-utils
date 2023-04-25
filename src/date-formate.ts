/**
 * @description: 格式化日期
 * @method dateFormat
 * @param {string|number} date 需要格式化的日期类型
 * @param {string} format 自定义的格式
 * @returns {string} 格式化之后的日期字符串
 */
const dateFormat = (date: string | number, format: string) => {
  const dateObj = new Date(date);
  const map: any = {
    M: dateObj.getMonth() + 1, // 月份
    d: dateObj.getDate(), // 日
    h: dateObj.getHours(), // 小时
    m: dateObj.getMinutes(), // 分
    s: dateObj.getSeconds(), // 秒
    S: dateObj.getMilliseconds() // 毫秒
  };

  format = format.replace(/([yMdhmsS])+/g, function (all, item) {
    let val = map[item];

    if (val !== undefined) {
      if (all.length > 1) {
        val = '0' + val;
        val = val.substr(val.length - 2);
      }
      return val;
    } else if (item === 'y') {
      return (dateObj.getFullYear() + '').substr(4 - all.length);
    }
    return all;
  });
  return format;
};

export default dateFormat;
