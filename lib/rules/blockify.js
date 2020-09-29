const rules = require('../rules.js')
const c = require('ansi-colors')
const smd = require('./text.js')
function getRuleset(ruleset){
  const nodeRuleset = []
  for (let i = 0; i < ruleset.length; i++){
    for (let j = 0; j < rules.length; j++){
      if(rules[j].nodeName === ruleset[i]){
        nodeRuleset.push(rules[j])
        break
      }
    }
  }
  return nodeRuleset
}
const nodeRulesets = {
  root: getRuleset(['hx','ul','p']),
  ul: getRuleset(['li']),
//  hx: getRuleset([])
}

function stitch(blocks, html){
  if(blocks.length < 1) return html
  blocks = blocks.sort((a,b)=>a.index-b.index)
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
  const nodeRules = nodeRulesets[nodeName]? nodeRulesets[nodeName] : []
  for ( let i = 0; i < nodeRules.length; i++){
    let rule = nodeRules[i]
    let subnodeName = rule['nodeName']
    let found = smd.matchAll(rule.regex)
    
    for(const match of found){
      let inner = ''
      inner = match.groups.inner 
      inner = transpile(inner,subnodeName)
      match[match.length -1].inner = inner
      const block = {
        content: rule.func(...match),
        location: match['index'],
        originalString: match[0],
        originalLength: match[0].length
      }
      blocks.push(block)
    }
  }

  return stitch(blocks, smd)
}

module.exports = transpile

const converted = transpile(smd)
console.log(converted)
