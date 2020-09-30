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
}
function stitch(blocks, original){
console.log(c.blue('########blocks##########'))
console.log(c.blue(JSON.stringify(blocks, null, 2)))
  if(blocks.length < 1) return original
  blocks = blocks.sort((a,b)=>a.index-b.index)
  let newHtml = original.substring(0,blocks[0].location)
  for(let i = 0; i < blocks.length; i++){
    let block = blocks[i]
    if(i + 1 < blocks.length ) lastBlock = false
    else lastBlock = true
    newHtml += block.content
//console.log(c.blue('###########################'))
//console.log('block.content')
//console.log(block.content)
//console.log(c.blue('###########################'))
    const start = block.location + block.originalLength 
    const end = lastBlock ? original.length : blocks[i+1].location
console.log(c.cyan('########indexes##########'))
console.log(c.cyan("start: "+start))
console.log(c.cyan("end:   "+end))
console.log(c.red('aeotnhunHUUUUUUUUUUUUUUU################################################################################################################'))
console.log('lastBlock='+lastBlock)
console.log(original.substring(start - 5, start)+
c.bgRed(original.substring(start, start +1))+
original.substring(start + 1, start + 5)
)
console.log(original[end-1])
    newHtml += original.substring(start, end)
  }
console.log(c.green('########original##########'))
console.log(c.green(original))
console.log(c.yellow('########stitched##########'))
console.log(c.yellow(newHtml))
  return newHtml
}
function transpile(originalText, nodeName = 'root'){
/*
  console.log('---originalText:'+nodeName)
  console.log(originalText)
  console.log('---/originalText')
*/
  const nodeRules = nodeRulesets[nodeName]? nodeRulesets[nodeName] : []
  for ( let i = 0; i < nodeRules.length; i++){
    let blocks = []
    let rule = nodeRules[i]
    let subnodeName = rule['nodeName']
    let found = originalText.matchAll(rule.regex)
    for(const match of found){
      let inner = match.groups.inner 
//console.log(match)
//console.log(rule)
      let originalLength = match[0].length
      inner = transpile(inner,subnodeName)
      match.groups.inner = inner
//console.log(match)
      const block = {
        content: rule.func(match),
        location: match['index'],
        originalLength: originalLength
      }
      blocks.push(block)
    }
  originalText = stitch(blocks, originalText)
  }
/*
  console.log('---blocks:'+nodeName)
  console.log(blocks)
  console.log('---/blocks')
  console.log('---stitched:'+nodeName)
  console.log(stitched)
  console.log('---/stitched')
*/
  return originalText
}
module.exports = transpile
console.log(c.red('#####################################'))
console.log(c.red('############# START #################'))
console.log(c.red('#####################################'))
const converted = transpile(smd)
console.log(converted)
