const rules = require('../rules.js')
const c = require('ansi-colors')
const smd = require('./text.js')
function getRuleset(ruleset){
  const nodeRuleset = []
  for (let i = 0; i < ruleset.length; i++){
    for (let j = 0; j < rules.length; j++){
      if(rules[j]['nodeName'] === ruleset[i]){
        nodeRuleset.push(rules[j])
        break
      }
    }
  }
  return nodeRuleset
}
const nodeRulesets = {
  root: getRuleset(['codeHighlight','hx','ul','p']),
  ul: getRuleset(['li']),
//  hx: getRuleset([])
  p: getRuleset(['comment', 'mark', 'ins', 'del'])
}
function stitch(blocks, original){
  if(blocks.length < 1) return original
  blocks = blocks.sort((a,b)=>a.index-b.index)
  let newHtml = original.substring(0,blocks[0].location)
  for(let i = 0; i < blocks.length; i++){
    let block = blocks[i]
    if(i + 1 < blocks.length ) lastBlock = false
    else lastBlock = true
    newHtml += block.content
    const start = block.location + block.originalLength 
    const end = lastBlock ? original.length : blocks[i+1].location
    newHtml += original.substring(start, end)
  }
  return newHtml
}
function transpile(originalText, nodeName = 'root'){
  const nodeRules = nodeRulesets[nodeName]? nodeRulesets[nodeName] : []
  for ( let i = 0; i < nodeRules.length; i++){
    let blocks = []
    let rule = nodeRules[i]
    let subnodeName = rule['nodeName']
    let found = originalText.matchAll(rule.regex)
    for(const match of found){
      let inner = match.groups.inner 
      let originalLength = match[0].length
      inner = transpile(inner,subnodeName)
      match.groups.inner = inner
      const block = {
        content: rule.func(match),
        location: match['index'],
        originalLength: originalLength
      }
      blocks.push(block)
    }
  originalText = stitch(blocks, originalText)
  }
  return originalText
}
module.exports = transpile
const converted = transpile(smd)
console.log(converted)
