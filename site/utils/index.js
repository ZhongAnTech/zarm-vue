const Utils = {
  getQueryString(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const searchStr = decodeURI(window.location.search);
    const r = searchStr.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
};

export default Utils;