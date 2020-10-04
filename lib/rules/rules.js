/*
const math = require('mathjs')
const c = require('ansi-colors')
const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/')
const changeCase = require('change-case')
const paramCase = changeCase.paramCase
const debug = false
const tab = '  '

module.exports = [ hx, p, ul, li, dl, codeHighlightBlock, codeHighlightInline, comment, del, ins, mark ]

function evaluateFunc(match, p1, p2){
  console.log(p1)
  let func_string = p1.trim()
  			console.log(p2)
  let scope = p2.trim()

  console.log(func_string)
  			f='sqrt(x/x+1)'
  func_string = eval(func_string) // this allows entering formula variables, meaning that you can reuse formulas

  let parsed = math.parse(func_string)
  let code = parsed.compile()
  
  let out = code.evaluate( scope )
  
  return out
}
const evaluate = {
  name: "evaluate",
  match: [
  	{ pattern: "\\(\\$([^,]*),* *(.*)\\$\\)", flags: "mg" }
//  	{ pattern: "\\(\\$(.*)\\$\\)", flags: "mg" }
  ],
  out: evaluateFunc
}
module.exports = evaluate
const toTex  		= require('./toTex.js')
const evaluate  = require('./evaluate.js')

module.exports = [ toTex, evaluate ]
const math = require('mathjs')
const evaluate = require('./evaluate.js')

function toTexFunc( match, p1, p2){
//  console.log(match)
//  console.log(p1)
//  console.log(p2)
  let code_string = p1.trim()
  			let pattern = evaluate.match[0].pattern
  			let flags = evaluate.match[0].flags
  			let evaluate_func = evaluate.out
  			let regex = new RegExp( pattern, flags)
  			code_string = code_string.replace(regex, evaluate_func)
  let parsed = math.parse(code_string)
  let out = parsed.toTex()
  return out
}
const toTex = {
  name: "toTex",
  match: [
  	{ pattern: "\\[\\$(.*)\\$\\]", flags: "mg" }
  ],
  out: toTexFunc
}
module.exports = toTex
function em_func(match, p1, p2) {
    let out = `<em>${p1}</em>`
    return out
}
const em = {
    name: 'em',
    description: 'emphasis',
    match: [
        { pattern: '\\*\\b(.*?)\\b\\*', flags: '' },
        { pattern: '_(.*?)_', flags: 'mg' }
    ],
    out: em_func
}

module.exports = em
const strong   = require('./strong.js')
const em  		= require('./em.js')
const sup  		= require('./sub.js')
const sub  		= require('./sup.js')

module.exports = [ strong, em, sup, sub ]
function strong_func( match, p1, p2 ){
  let out = `<strong>${p1}</strong>`
  return out
}
const strong = {
  name: "strong",
  description: "strong tag",
  match: [ 
  	{ pattern: "\\*\\*\\b(.+?)\\b\\*\\*", flags: ""}, 
  	{ pattern: "__(.*?)__", flags: "mg" }
  ],
  out: strong_func,
}

module.exports = strong
function sub_func( match, p1, p2 ){
  let out = `<sub>${p1}</sub>`
  return out
}
const sub = {
  name: "subscript",
  description: "subscript",
  match: [ 
  	{ pattern: "~\\b(.+?)\\b~", flags: "mg"} 
  ],
  out: sub_func,
}

module.exports = sub
function sup_func( match, p1, p2 ){
  let out = `<sup>${p1}</sup>`
  return out
}
const sup = {
  name: "superscript",
  description: "superscript",
  match: [ 
  	{ pattern: "\\^\\b(.+?)\\b\\^", flags: "mg"} 
  ],
  out: sup_func,
}

module.exports = sup
function blockquote_func( match, p1, p2 ){
  let start = '<blockquote>'
  let mid = p1 + p2
  let end = '</blockquote>'
  let out = start + mid + end
  return out
}
const blockquote = {
  name: "blockquote",
  description: "blockquote",
  match: [ 
  	{ pattern: "> (.*)", flags: "g"} 
  ],
  out: blockquote_func,
}

module.exports = blockquote
function paragraphFunc( match, p1 ){
  let start = '<p>'
  let mid = p1 
  let end = '</p>'
  let out = start + mid + end
  return out
}
const paragraph = {
  name: "paragraph",
  description: "paragraph",
  match: [ 
  	{ pattern: "^([a-zA-Z].*)", flags: "g"} 
//  	{ pattern: "^[a-zA-Z]", flags: "g"} 
  ],
  out: paragraphFunc,
}

module.exports = paragraph
const blockquote = require('./blockquote.js')
const paragraph = require('./paragraph.js')

module.exports = [ blockquote, paragraph ]
var tabChar = "  "

function liFunc( match, p1, p2) {
  out = `${tabChar}<li>${p1}</li>`
  return out
}

const li = {
  name: "li",
  match: [
  	{ pattern: "^[\\\*-+] (.*)", flags: "mg"}
  ],
  out: liFunc
}

function ulFunc( match, p1, p2 ) {
  let pattern = li.match[0].pattern
  let flags = li.match[0].flags
  let regex = new RegExp(pattern,flags)
  let outFunc = li.out
  let block = match.replace(regex, outFunc)

  out = '<ul>\n' + block + '</ul>\n'
  return out
}
const ul = {
  name: "ul",
  description: "unordered list",
  match: [
  	{ pattern: "(^[\\\*-+] (.*?)$\n)+", flags: "mgs"}
  ],
  out: ulFunc
}
*/
