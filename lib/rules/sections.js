const changeCase = require('change-case')
const paramCase = changeCase.paramCase

const hx = {
  nodeName: 'hx',
  regex: {
    toHTML: /^(#{1,6}) (?<inner>.*)/mg,
  },
  func: (args) => {
    let ret = "<h" + args[1].length
    ret += ' id="' + paramCase(args[2]) + '">'
    ret += args.groups.inner
    ret += "</h" + args[1].length + ">"
    return ret
  }
}


module.exports = [ hx ]
