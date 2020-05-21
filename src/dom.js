window.dom = {
  // 修改style
  style(node, name, value) {
    if (arguments.length === 3) {
      // dom.style(div,'color','red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      // dom.style(div,'color')
      if (typeof name === 'string') {
        return node.style[name];
      } else if (name instanceof Object) {
        // dom.style(div,{color:'red'})
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },

  // 获取标签
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  // 遍历所有节点
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },

  children(node) {
    return node.children
  },



}