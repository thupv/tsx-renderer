export const render = function (vnode: any) {
  if (typeof vnode === 'string') return document.createTextNode(vnode);
  let n = document.createElement(vnode.elementName);
  Object.keys(vnode.attributes || {}).forEach(k => n.setAttribute(k, vnode.attributes[k]));
  (vnode.children || []).forEach((c: any) => n.appendChild(render(c)));
  return n;
};