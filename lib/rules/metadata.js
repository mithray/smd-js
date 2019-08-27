const nl = require('../settings.js').nl

function frontMatterFunc(content){
	var yaml_content
	content = content.replace( regex, (match, p1) => { 
		yaml_content = p1.replace(`${nl}`,'\n')
		return ''
	})
	
	let data = yaml.safeLoad(yaml_content)

	//console.log( "content:" + content )
	//console.log( "data:" + Object.keys(data) )
	return { data: data, content: content }
}

const frontMatter = {
	in: [
		{ pattern: `^---${nl}(.*)${nl}---`, flags: "mgs" }
	],
  out: interpolacteFunc
}

module.exports = [ frontMatter ]
