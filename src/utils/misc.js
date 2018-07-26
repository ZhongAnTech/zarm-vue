export function isThenable(obj) {
  return obj && typeof obj.then === 'function';
}

export function warn(msg) {
  console && console.warn && console.warn(msg); // eslint-disable-line
}


export function guid() {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);// eslint-disable-line
}
