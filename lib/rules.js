const changeCase = require('change-case')
const tab = '  '

const hx = {
  nodeName: 'hx',
	regex: /^(#{1,6}) (?<inner>.*)/mg,
	func: (...args) => `<h${args[1].length} id='${changeCase.paramCase(args[2])}'>${args}</h${args[1].length}>`
}
const p = {
  nodeName: 'p',
  regex: /^(?<inner>\w.*)/mg,
  func: (...args) => `<p>${args[args.length-1].inner}</p>`
}
const ul = {
  nodeName: 'ul',
  regex: /^(?<inner>(- .*\n)+)/mg,
  func: (...args) => {`<ul>
${args[args.length-1].inner}
</ul>`}
}
const li = {
  nodeName: 'li',
  regex: /^- (?<inner>.*)$/mg,
  func: (...args) => `${tab}<li>${args[args.length-1].inner}</li>`
}
const dl = {
  nodeName: 'dl',
  regex: /^([a-zA-Z].*\n)(: (.*)\n)+/mg,
  func: (...args) => `<dl>${p2}</dl>`
}

module.exports = [ hx, p, ul, li, dl ]
