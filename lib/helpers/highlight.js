const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/')

function highlight(content, language){
    try {
      loadLanguages([language])
      content = Prism.highlight(content, Prism['languages'][language], language)
    } catch (e){}
    return {content: content, language: language}
}
module.exports = highlight
