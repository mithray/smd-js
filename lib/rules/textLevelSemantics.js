const codeHighlightInline = {
  nodeName: 'codeHighlightInline',
	description: "inline code",
  regex: /`(?<language>\w*) (?<inner>.*?)`/,
		//{ pattern: "`\\b(.+?)\\b`", flags: "mg"} 
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
  regex: /``` (?<type>.*)\n(?<inner>(.*\n)+)```/,
  func: (args) => {
    let type = args.groups.type
    let content = args.groups.inner
    content = Prism.highlight(content, Prism['languages'][type], type)
    highlighted = `<pre class="language-${type}"><code class="language-${type}">`
    highlighted += content
    highlighted += '</code></pre>'
    return highlighted
  }
}

const comment = {
  nodeName: 'comment',
	description: "markup for adding comments on a document",
  regex: /{>(?<inner>.*?)<}/mg,
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
  regex: /{=(?<inner>.*?)=}/mg,
  func: (args) => {
    let ret = '<mark>'   
    ret += args.groups.inner
    ret += '</mark>'
    return ret
  }
}

module.exports = [ codeHighlightInline, codeHighlightBlock, comment, mark]
