export function enumGenerator(enumArr = []) {
  return function (v) {
    return enumArr.indexOf(v) >= 0;
  };
}

export function isArray(val) {
  return Object.prototype.toString.call(val) === '[object Array]';
}

export const isString = (val) => {
  return Object.prototype.toString.call(val) === '[object String]';
};

export const isObject = (val) => {
  return Object.prototype.toString.call(val) === '[object Object]';
};

export const isCascader = ({ dataSource }) => {
  return dataSource && dataSource[0] && !isArray(dataSource[0]);
};

export function defaultThemeValidator(v) {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger', 'error'].indexOf(v) >= 0;
}
