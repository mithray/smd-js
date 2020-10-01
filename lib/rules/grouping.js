
const p = {
  nodeName: 'p',
  regex: /^(?<inner>\w.*)$/mg,
  tags: ['grouping']
  func: (args) => {
    let ret = "<p>"
    ret += args.groups.inner
    ret += "</p>"
    return ret
  }
}

/*
 * OL NEEDS IMPLEMENTATION
 */
const numerals = {
  arabic: '0-9',
  alphabet: 'a-zA-Z',
  roman: 'ivxlcdmIVXLCDM',
  chinese: '零〇一二三四五六七八九十百千万亿萬億'
}
const allNumerals = numerals.reduce( (acc,cur) => {
    return acc + cur
  })
const numeralRegExp = '^(?<inner>([' + allNumerals + '\. .*\n)+)'
const ol = {
  nodeName: 'ol',
  regex: new RegExp(numeralRegExp, 'mg')
  func: (args) => {
    let ret = "<ul>\n"
    ret += args.groups.inner
    ret += "</ul>\n"
    return ret
  }
}
const ul = {
  nodeName: 'ul',
  regex: /^(?<inner>(- .*\n)+)/mg,
  func: (args) => {
    let ret = "<ul>\n"
    ret += args.groups.inner
    ret += "</ul>\n"
    return ret
  }
}
const li = {
  nodeName: 'li',
  regex: /^- (?<inner>.*)$/mg,
  func: (args) => {
    let ret = tab
    ret += "<li>"
    ret += args.groups.inner
    ret += "</li>"
    return ret
  }
}
const dl = {
  nodeName: 'dl',
  regex: /^([a-zA-Z].*\n)(: (.*)\n)+/mg,
  func: (args) => {
    let ret = "<dl>"
    ret += args.groups.inner
    ret += "</dl>"
    return ret
  }
}

module.exports = [ p, ul, ol, li, dl ]
