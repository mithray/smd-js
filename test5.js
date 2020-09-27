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
  "nodeName": "div",
  "tagName": "div",
  "attrs": [],
  "childNodes": [
    {
      "nodeName": "ul",
      "tagName": "ul",
      "attrs": [],
      "childNodes": {[
        "tagName": "li",
        "attrs": [],
        "childNodes": [
          {
            "nodeName": "#text",
            "value": "undefinedlist one"
          }
        ]
      ]}
    }]}

console.log(parse5.serialize(fragment))
