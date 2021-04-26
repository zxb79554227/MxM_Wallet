export function formatDate(date: Date, format = 'yyyy-MM-dd hh:mm:ss'): string {
    const formatMap: any = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
    };
    if (/(y+)/.test(format)) {
        format = format.replace(/(y+)/, (str) => {
            const year = date.getFullYear().toString();
            return year.slice(-str.length);
        });
    }
    Object.keys(formatMap).forEach(key => {
        const reg = new RegExp(`(${key})`);
        if (reg.test(format)) {
            // 如果格式要求只有一位，则时间位数一位就一位，两位就两位，保持不变。如果格式要求两位，则必须一位补0。
            format = format.replace(reg, RegExp.$1.length === 1 ? formatMap[key] : `0${formatMap[key]}`.slice(-2));
        }
    });
    return format;
}


export function is33Env(){
  const env = localStorage.getItem('env')
  if(env === '33cn'){
      return true
  }else{
      return false
  }
}