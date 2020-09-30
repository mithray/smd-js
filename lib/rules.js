const changeCase = require('change-case')
const c = require('ansi-colors')
const Prism = require('prismjs')
const paramCase = changeCase.paramCase
const debug = false
const tab = '  '
const arrow = '↓'
const processor = function(type,content){
  return content
}

const hx = {
  nodeName: 'hx',
	regex: /^(#{1,6}) (?<inner>.*)/mg,
  func: (args) => {
    let ret = "<h" + args[1].length
    ret += ' id="' + paramCase(args[2]) + '">'
    ret += args.groups.inner
    ret += "</h" + args[1].length + ">"
    if(debug) console.log(c.yellow('--- '))
    if(debug) console.log('hx called')
    if(debug) console.log(c.blue(args[0])) 
    if(debug) console.log(arrow)
    if(debug) console.log(c.green(ret)) 
    if(debug) console.log(c.yellow('--- '))
    return ret
  }
}
const p = {
  nodeName: 'p',
  regex: /^(?<inner>\w.*)$/mg,
  func: (args) => {
    let ret = "<p>"
    ret += args.groups.inner
    ret += "</p>"
    if(debug) console.log(c.yellow('--- '))
    if(debug) console.log('p called')
    if(debug) console.log(c.blue(args[0])) 
    if(debug) console.log(arrow)
    if(debug) console.log(c.green(ret)) 
    if(debug) console.log(c.yellow('--- '))
    return ret
  }
}
const ul = {
  nodeName: 'ul',
  regex: /^(?<inner>(- .*\n)+)/mg,
  func: (args) => {
    let ret = "<ul>\n"
    ret += args.groups.inner
    ret += "\n</ul>\n"
    if(debug) console.log(c.yellow('--- '))
    if(debug) console.log('ul called')
    if(debug) console.log(c.blue(args[0])) 
    if(debug) console.log(arrow)
    if(debug) console.log(c.green(ret)) 
    if(debug) console.log(c.yellow('--- '))
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
    if(debug) console.log(c.yellow('--- '))
    if(debug) console.log('li called')
    if(debug) console.log(c.blue(args[0])) 
    if(debug) console.log(arrow)
    if(debug) console.log(c.green(ret)) 
    if(debug) console.log(c.yellow('--- '))
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
    if(debug) console.log(c.yellow('--- '))
    if(debug) console.log('dl called')
    if(debug) console.log(c.blue(args[0])) 
    if(debug) console.log(arrow)
    if(debug) console.log(c.green(ret)) 
    if(debug) console.log(c.yellow('--- '))
    return ret
  }
}

const codeHighlight = {
  nodeName: 'codeHighlight',
  regex: /``` (?<type>.*)\n(?<inner>(.*\n)+)```/,
  func: (args) => {
    let type = args.groups.type
    let content = args.groups.inner
    content = Prism.highlight(content, Prism['languages'][type], type)
    highlighted = `<pre class="language-${type}"><code class="language-${type}">`
    highlighted += content
console.log(content)
    highlighted += '</code></pre>\n'
    if(debug) console.log(c.yellow('--- '))
    if(debug) console.log('highlight called ')
    if(debug) console.log(c.blue(args[0])) 
    if(debug) console.log('🠗')
    if(debug) console.log(c.green(highlighted)) 
    if(debug) console.log(c.yellow('--- '))
    return highlighted
  }
}
const codeExecute = {
  nodeName: 'codeExecute',
  regex: /\$\$\$ (?<type>.*$)\n(?<content>(.*\n)+)\$\$\$/,
  func: (args) => {
    let type = args.groups.type
    let content = args.groups.content
    return processor(type,content)
  }
}

module.exports = [ hx, p, ul, li, dl, codeHighlight ]
