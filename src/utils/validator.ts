export function enumGenerator(enumArr: any = []) {
  return function (v: any) {
    return enumArr.indexOf(v) >= 0;
  };
}

export function isArray(val: any) {
  return Object.prototype.toString.call(val) === '[object Array]';
}

export function defaultThemeValidator(v: any) {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger', 'error'].indexOf(v) >= 0;
}
