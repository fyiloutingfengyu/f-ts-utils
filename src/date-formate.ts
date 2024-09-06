interface DateMap {
  M: number;
  d: number;
  h: number;
  m: number;
  s: number;
  S: number;
}

type KeyType = keyof DateMap;
type FormatItem = KeyType | 'y';

/**
 * @description: 格式化日期
 * @method dateFormat
 * @param date 需要格式化的日期
 * @param format 自定义的格式
 * @returns 格式化之后的日期字符串
 */
const dateFormat = (date: number | string | Date, format: string) => {
  const dateObj = new Date(date);
  const map: DateMap = {
    M: dateObj.getMonth() + 1, // 月份
    d: dateObj.getDate(), // 日
    h: dateObj.getHours(), // 小时
    m: dateObj.getMinutes(), // 分
    s: dateObj.getSeconds(), // 秒
    S: dateObj.getMilliseconds() // 毫秒
  };

  format = format.replace(
    /([yMdhmsS])+/g,
    function (all: string, item: FormatItem) {
      if (item === 'y') {
        return (dateObj.getFullYear() + '').substring(4 - all.length);
      } else {
        let val = String(map[item]);

        if (all.length > 1) {
          val = '0' + val;
          val = val.substring(val.length - 2);
        }

        return val;
      }
    }
  );

  return format;
};

export { dateFormat };

export default { dateFormat };
