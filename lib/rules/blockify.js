const allRules = require('../rules.js')
const c = require('ansi-colors')
const smd = require('./text.js')
const rulesets = {
  root: allRules.filter(el=>{
    return ['ul'].includes(el.nodeName)
  }) ,
  ul: allRules.filter(el=>{
    return ['li'].includes(el.nodeName)
  }),
  li: []
}

function stitch(blocks, html){
  blocks = blocks.sort((a,b)=>a.index-b.index)
  if(blocks.length < 1) return html
  let newHtml = html.substring(0,blocks[0].location)
  for(let i = 0; i < blocks.length; i++){
    let block = blocks[i]
    if(i + 1 < blocks.length ) lastBlock = false
    else lastBlock = true
    newHtml += block.content
    const start = block.location + block.originalLength
    const end = lastBlock ? html.length -1 : blocks[i+1].location
    newHtml += html.substring(start, end)
  }
  return newHtml
}

function transpile(smd, nodeName = 'root'){
  let blocks = []
  const nodeRules = rulesets[nodeName]
  let html = smd
  
  for ( let i = 0; i < nodeRules.length; i++){
    let rule = nodeRules[i]
    let subnodeName = rule['nodeName']
    let found = html.matchAll(rule.regex)
    
    for(const match of found){
//console.log(match)
      match[1] = transpile(match[1],subnodeName)
      const block = {
        content: rule.func(match[0],match[1]),
        location: match['index'],
        originalString: match[0],
        originalLength: match[0].length
      }
      blocks.push(block)
    }
  }

  return stitch(blocks, html)
}

module.exports = transpile

const converted = transpile(smd)
console.log(converted)
