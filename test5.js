const parse5 = require('parse5')
const fragment2={
  "nodeName": "body",
  "tagName": "body",
  "attrs": [],
  "childNodes": [{
    "nodeName": "ul",
    "tagName": "ul",
    "attrs": [],
    "childNodes": [{
      "nodeName": "li",
      "tagName": "li",
      "attrs": [],
      "childNodes": [{
        "nodeName": "#text",
        "value": "aeueoaoeu",
      }]
    }] 
  }]
}

const fragment = {
  tagName: 'div',
  nodeName: 'div',
  attrs: [],
  childNodes: [{
    nodeName: '#text',
    value: "# Semantic Markdown (SMD)\nDON'T USE THIS YET! I RECOMMEND WAITING FOR "
  }]
}

console.log(parse5.serialize(fragment))
