export default function (node) {
  return typeof node === 'object' && Object.prototype.hasOwnProperty.call(node, 'componentOptions');
}
