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

const codeHighlight = {
  nodeName: 'codeHighlight',
  regex: /``` (?<type>.*)\n(?<inner>(.*\n)+)```/,
  func: (args) => {
    let type = args.groups.type
    let content = args.groups.inner
    content = Prism.highlight(content, Prism['languages'][type], type)
    highlighted = `<pre class="language-${type}"><code class="language-${type}">`
    highlighted += content
    highlighted += '</code></pre>'
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

const comment = {
  nodeName: 'comment',
	description: "markup for adding comments on a document",
  regex: /{>(?<inner>.*?)<}/mg,
  func: (args) => {
    let ret = '<mark><em>'
    ret += args.groups.inner
    ret += '</em></mark>'
    return ret
  }
}

const delete = {

}


module.exports = [ hx, p, ul, li, dl, codeHighlight ]
	regex: new RegExp(

module.exports = comment

function delFunc( match, p1, p2 ){
	let out = `<del>${p1}</del>`
	return out
}
const del = {
	name: "delete",
	description: "HTML delete tag",
	match: [
		{ pattern: "{-(.*?)-}", flags: "mg" }
	],
  out: delFunc
}

module.exports = del
function insFunc( match, p1, p2 ){
	let out = `<ins>${p1}</ins>`
	return out
}
const ins = {
	name: "ins",
	description: "HTML insert tag",
	match: [
		{ pattern: "{\\+(.*?)\\+}", flags: "mg"	}
	],
	out: insFunc
}

module.exports = ins
function mark_func( match, p1, p2 ){
	let out = `<mark>${p1}</mark>`
	return out
}
const mark = {
	name: "mark",
	description: "HTML mark tag",
  match: [
		{ pattern: "{=(.*?)=}", flags: "mg" }
	],
	out: mark_func
}

module.exports = mark
