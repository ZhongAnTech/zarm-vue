export function enumGenerator(enumArr = []) {
  return function (v) {
    return enumArr.indexOf(v) >= 0;
  };
}

export function isArray(val) {
  return Object.prototype.toString.call(val) === '[object Array]';
}

export function defaultThemeValidator(v) {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger', 'error'].indexOf(v) >= 0;
}
