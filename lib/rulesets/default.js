/*
 *	Read the set of rules from the rules directory
 */
const fs = require('fs')
const path = require('path')
const rules = fs.readdirSync(path.join(__dirname,'../rules'))

/*
 * rulesets
 */
const inline 				= require("./inline.js")
const html_escapes 	= require("./html_escapes.js")
const typography		= require("./typography.js")
const escapes 			= require("./escapes.js")

/*
 * rules
 */
const hx 				= require("../rules/hx.js")
const ul 				= require("../rules/ul.js")
const toTex			= require("../rules/toTex.js")


//console.log(hx)
//console.log(ul)

/*
 * Define which rules your markdown will use
 */
const ruleset = {
	name: 'smd',
	description: "The default ruleset for Semantic Markdown",
	nl: "␤",
	esc: "␛",
	rules: [
		{ ...hx,						rules: [ inline ] },
/*
		{ ...ul, 						rules: [ ul, inline, escapes ].flat() },
		{ ...toTex,					subrules: [ ]},
		{ name:	"codeblock",	rules: [ prism_highlighting ]},
		{ name: "hr",					rules: [ inline, escapes ]},
		{ name: "p",					rules: [ inline, escapes ]},
*/

	]
}

module.exports = ruleset

/*
console.log(ruleset)
console.log( headings.h1 )
console.log(inline)
*/
