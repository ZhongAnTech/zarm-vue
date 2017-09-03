export function enumGenerator(enumArr = []) {
  return function (v) {
    return enumArr.indexOf(v) >= 0;
  };
}

export function defaultThemeValidator(v) {
  return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
  // return /(^default$)|(^primary$)|(^info$)|(^success$)|(^warning$)|(^error$)/.test(v);
}
