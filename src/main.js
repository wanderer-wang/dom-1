dom.style(test, {
  border: '1px solid red'
})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid ')



const testDiv = dom.find('#test')[0];
dom.find('.red', testDiv)
console.log(testDiv)



const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))