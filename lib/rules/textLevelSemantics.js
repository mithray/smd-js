const highlight = require('../helpers/highlight.js')

const codeHighlightInline = {
  nodeName: 'codeHighlightInline',
  description: "Inline Code. Unlike regular markdown, a language must be provided for it to work.",
  example: "`javascript const someVar = 'hello'`",
  regex: {
    toHTML: /`(?<language>\w*) (?<inner>.*?)`/,
  },
  func: (args) => {
    const lang = args.groups.language
    const inner = args.groups.inner
    const {content, language} = highlight(inner, lang)
    if(language){
      var ret = `<code class="language-${language}">`
    } else {
      var ret  = `<code>`
    }
    ret += content
    ret += '</code>'
    return ret
  }
}

const codeHighlightBlock = {
  nodeName: 'codeHighlightBlock',
  description: 'Code Highlight Block. Uses the syntax `',
  example: "``` javascript\nconst someVar = 'hello there'\n```",
  regex: {
    toHTML: /``` (?<language>.*)\n(?<inner>(.*\n)+)```/mg,
  },
  func: (args) => {
    let lang = args.groups.language
    let inner = args.groups.inner
    const { content, language } = highlight(inner, lang)
    highlighted = `<pre class="language-${language}"><code class="language-${language}">`
    highlighted += content
    highlighted += '</code></pre>'
    return highlighted
  }
}

const comment = {
  nodeName: 'comment',
  description: "markup for adding comments on a document",
  example: '{>Text goes here<}',
  regex: {
    toHTML: /{>(?<inner>.*?)<}/mg,
  },
  func: (args) => {
    let ret = '<mark><em>'
    ret += args.groups.inner
    ret += '</em></mark>'
    return ret
  }
}

const mark = {
  nodeName: "mark",
  description: "HTML mark tag",
  regex: {
    toHTML: /{=(?<inner>.*?)=}/mg,
  },
  func: (args) => {
    let ret = '<mark>'   
    ret += args.groups.inner
    ret += '</mark>'
    return ret
  }
}

module.exports = [ codeHighlightInline, codeHighlightBlock, comment, mark]
