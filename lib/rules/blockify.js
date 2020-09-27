//const hashtml = require('@mithray/hashtml')
function lineify(smd){return smd.split('\n')}
function blockify(lines){
	const blocks = []

    for(let i=0; i<lines.length; i++){
      if(lines[i].match(/^- /)){
        console.log(lines[i])
     	 const block = {
   	     	tag: 'ul',
   		 	inner: lines.splice(i,1)
     	 }
         i--
      	blocks.push(block)
      }
    }
  	for(let i=0; i<lines.length; i++){
      const block = {
        tag: 'p',
      	inner: lines.splice(i,1)
      }
      blocks.push(block)
    }
    return blocks
}

const blockify = {
  name: 'blockify',
  description: 'divides a block into subblocks',
  out: blockifyFunc
}

module.exports = blockify



const smd = `# Semantic Markdown (SMD)
DON'T USE THIS YET! I RECOMMEND WAITING FOR VERSION 1.0.0
- list one
- list two
oaeu
- oeuaoue
Semantic Markdown is a bit like a custom markdown development environment as well as contains a default implementation in javascript. The default implementation of SMD attempts to make easy marking up web pages with good HTML5 and schema, and contains tools for adding styling, so you can run it on a markdown document and immediately sent to a friend or upload it.`

const lines = lineify(smd)
const blocks = blockify(lines)
console.log(JSON.stringify(blocks, null, 2))
