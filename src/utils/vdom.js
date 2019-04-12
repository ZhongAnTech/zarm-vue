import { guid } from '@/utils/misc';

export default function (node) {
  return typeof node === 'object' && Object.prototype.hasOwnProperty.call(node, 'componentOptions');
}

export const deepCloneVNode = (h, vnode) => {
  if (!vnode) return;
  const clonedChildren = vnode.children && vnode.children.map(vd => deepCloneVNode(vd));
  const cloned = h(vnode.tag, vnode.data, clonedChildren);
  cloned.text = vnode.text;
  cloned.isComment = vnode.isComment;
  cloned.componentOptions = vnode.componentOptions;
  cloned.elm = vnode.elm;
  cloned.context = vnode.context;
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key + guid();
  return cloned;
};
