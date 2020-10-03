const rules = require('./rules/all.js')
const c = require('ansi-colors')
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
function convert(args){
  const nodeRules = nodeRulesets[nodeName]? nodeRulesets[nodeName] : []
  for ( let i = 0; i < nodeRules.length; i++){
    let blocks = []
    let rule = nodeRules[i]
    let subnodeName = rule['nodeName']
    let found = args.text.matchAll(rule.regex)
    for(const match of found){
      let inner = match.groups.inner 
      let originalLength = match[0].length
      inner = convert(inner,subnodeName)
      match.groups.inner = inner
      const block = {
        content: rule.func(match),
        location: match['index'],
        originalLength: originalLength
      }
      blocks.push(block)
    }
  args.text = stitch(blocks, args.text)
  }
  return args.text
}

module.exports = convert
