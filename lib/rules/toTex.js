const math = require('mathjs')
const evaluate = require('./evaluate.js')

function toTexFunc( match, p1, p2){
//	console.log(match)
//	console.log(p1)
//	console.log(p2)
	let code_string = p1.trim()
				let pattern = evaluate.match[0].pattern
				let flags = evaluate.match[0].flags
				let evaluate_func = evaluate.out
				let regex = new RegExp( pattern, flags)
				code_string = code_string.replace(regex, evaluate_func)
	console.log(code_string)
	let parsed = math.parse(code_string)
	let out = parsed.toTex()
	return out
}
const toTex = {
	name: "toTex",
	match: [
		{ pattern: "\\[\\$(.*)\\$\\]", flags: "mg" }
	],
  out: toTexFunc
}
module.exports = toTex
