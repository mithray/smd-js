//const hashtml = require('@mithray/hashtml')
class Block{
  constructor(options){
    if (options.nodeName != "#text"){
      this.tagName = options.nodeName
      this.attrs = options.attrs ? options.attrs : []
      this.childNodes = options.childNodes ? options.childNodes : []
    }
  }
  object(){
    const obj = {}
    for (const [key, value] of Object.entries(this)) {
      obj[key] = value
    }
    return obj
  }

}
class Text extends Block{
  constructor(text){
    super({nodeName: "#text"})
    this.nodeName = "#text"
    this.value = text
  }
}
class Li extends Block{
  constructor(text){
    super({nodeName: 'li',childNodes: [new Text(text)]})
  }
}
class P extends Block{
  constructor(text){
    super({nodeName: 'p', childNodes: [new Text(text)]})
  }
}
class Ul extends Block{
  constructor(text){
    super({nodeName: 'ul',childNodes: [new Li(text)]})
  }
}
class Ol extends Block{
  constructor(text){
    super({nodeName: 'ol',childNodes: [new Li(text)]})
  }
}
const parse5 = require('parse5')
const regexes = {
  list: {
    pattern: /^- /,
    flags: ''
  }, 
  paragraph: {
    pattern: /^([a-zA-Z])/,
    flags: ''
  }
}
function list(line, blocks){
  const previousBlock = blocks[blocks.length - 1]
  if(line.match(regexes.list.pattern)){
    const regex = new RegExp(regexes.list.pattern, regexes.list.flags)
    if(previousBlock.nodeName === 'ul'){
      const obj = new Li(line.replace(regex,''))
      blocks[blocks.length - 1].childNodes.push(obj.object())
    } else {
      const obj = new Ul(line.replace(regex,''))
      blocks.push(obj.object())
    }
  }

  return blocks

}
function paragraph(line, blocks){
  const previousBlock = blocks[blocks.length - 1]
  if(line.match(regexes.paragraph.pattern)){
    const obj = new P(line)
    blocks.push(obj.object())
  }
  return blocks
}
function blockify(smd){
  const lines = smd.split('\n')
	let blocks = []
  const listTypes = ['ol','ul','dl']
  for(let i = 0; i < lines.length; i++){
    blocks = list(lines[i], blocks)
    blocks = paragraph(lines[i], blocks)
  }
  const document = {
    tagName: "div",
    attrs: [],
    childNodes: blocks
  }
//console.log(document)
  return document
}

module.exports = blockify

const smd = `# Semantic Markdown (SMD)
DON'T USE THIS YET! I RECOMMEND WAITING FOR VERSION 1.0.0
- list one
- list two
oaeu
- oeuaoue
Semantic Markdown is a bit like a custom markdown development environment as well as contains a default implementation in javascript. The default implementation of SMD attempts to make easy marking up web pages with good HTML5 and schema, and contains tools for adding styling, so you can run it on a markdown document and immediately sent to a friend or upload it.`

const tree = blockify(smd)
console.log(tree)
const html = parse5.serialize(tree)
console.log(html)
const json = JSON.stringify(tree, null, 2)
//console.log(json)
