const prism = require('prismjs')
const highlight = prism.highlight
const languages = prism.languages
const minifier = require('html-minifier').minify

/*
 * Utility
 */
function minify( html ){
	const options = {
	  removeAttributeQuotes: true,
	  collapseWhitespace: true,
	  removeComments: true,
	  useShortDoctype: true,
	  quoteCharacter: "'",
	  sortAttributes: true,
	  sortClassName: true,
	  removeStyleLinkTypeAttributes: true,
	  removeScriptTypeAttributes: true,
	  collapseInlineTagWhitespace: true
	}
	return minifier(html, options)
}

//

applyRuleset()

function code_func( match, p1, p2 ){
	let content = highlight( p2, languages[p1.trim()], p1.trim() )

	content = applyRuleset(content)

	let content_lines = content.replace(/^/gm,'<span class="line-of-code"><span class="dirty-border-hack"> </span>').replace(/$/gm,'</span>')
	let escaped_lines = content_lines//.replace(/[:?`]/,"␛$1")
	
  let open_pre = `<pre class='language-${p1.trim()} line-numbers'>`
	let open_code = `<code class='language-${p1.trim()} line-numbers-rows'>`
	let close_code = `</code>`
	let close_pre = `</pre>`
	let out = open_pre + open_code + escaped_lines + close_code + close_pre
	let minified_output = minify(out)
	return minified_output
}
const code = {
  in: [{pattern: "```(.*?)\n(.*)```", variable: "(.*)", flags: "mgs"}],
	out: code_func
}


const code = {
  in: [{pattern: `((-) (.*)${nl})+`, flags: "mgs"}],
	out: code_func
}
