const rules = require('./rules/all.js')
const c = require('ansi-colors')
const fs = require('fs')
const path = require('path')
const doctypePath= path.join(__dirname,'languages')
const doctypeNames = fs.readdirSync(doctypePath)
var transform = undefined

function generateLanguageTransform(inputLanguage, outputLanguage){
  if(process.env.DEBUG) console.time('GENERATED LANGUAGE TRANSFORM')
  if(!(typeof inputLanguage === 'string')) return 
  const languageDefinitionPath = path.join(doctypePath, inputLanguage) + '.js'
  var languageDefinitionAccess = false
  try {
    fs.accessSync(languageDefinitionPath, fs.constants.R_OK)
    languageDefinitionAccess = true
  } catch (err) {}

  if(languageDefinitionAccess){
    const languageDefinition = require(languageDefinitionPath)
    const transform = languageDefinition
    for ( const [nodeName, nodeRuleNames] of Object.entries(languageDefinition)){
      for (let i = 0; i < nodeRuleNames.length; i++){
        let ruleFound = false
        for ( let j = 0; j < rules.length; j++ ){
          if(rules[j]['nodeName'] === nodeRuleNames[i]){
            ruleFound = true
            transform[nodeName][i] = rules[j]
            break
          }
        }
        if(!ruleFound){
          transform[nodeName].splice(i,1)
          i--
        }
      }
    }
    if(process.env.DEBUG) console.timeEnd('GENERATED LANGUAGE TRANSFORM')
    return transform
  }
  return
}
function stitch(blocks, original){
  let rand = ''.padEnd(10,Math.random() * Math.pow(10,11))
  if(process.env.DEBUG) console.time('STITCHED_BLOCK_' + rand)
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
  if(process.env.DEBUG) console.log(c.green('---Stiched Blocks---'))
  if(process.env.DEBUG) blocks.forEach((block)=>{console.log(block)})
  if(process.env.DEBUG) console.timeEnd('STITCHED_BLOCK_' + rand)
  if(process.env.DEBUG) console.log(c.green('---/Stiched Blocks---'))
  return newHtml
}
function convert(args){
  args.text = args.text ? args.text : undefined
  args.inputLanguage = args.inputLanguage ? args.inputLanguage : 'smd'
  args.outputLanguage = args.outputLanguage ? args.outputLanguage: 'html'
  args.nodeName = args.nodeName ? args.nodeName : 'root'
  transform = transform ? transform : generateLanguageTransform(args.inputLanguage, args.outputLanguage)
  const nodeRules = transform[args.nodeName] ? transform[args.nodeName] : []
  for ( let i = 0; i < nodeRules.length; i++){
    let blocks = []
    let rule = nodeRules[i]
    let subnodeName = rule['nodeName']
    let found = args.text.matchAll(rule.regex.toHTML)
    for(const match of found){
      let inner = match.groups.inner 
      let originalLength = match[0].length
      inner = convert({text: inner, nodeName: subnodeName})
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
