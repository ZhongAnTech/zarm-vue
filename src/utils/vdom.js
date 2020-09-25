import { cloneVNode } from 'vue';

export default function (node) {
  return typeof node === 'object' && Object.prototype.hasOwnProperty.call(node, 'componentOptions');
}

export const cloneElement = (vnode, nodeProps = {}, override = true) => {
  if (!vnode) return;
  const node = cloneVNode(vnode, nodeProps);

  // cloneVNode内部是合并属性，这里改成覆盖属性
  node.props = override ? { ...node.props, ...nodeProps } : node.props;
  return node;
};

export function cloneVNodes(vnodes, nodeProps = {}, override = true) {
  return vnodes.map(vnode => cloneElement(vnode, nodeProps, override));
}
