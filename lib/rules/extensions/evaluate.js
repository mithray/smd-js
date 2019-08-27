const math = require('mathjs')

function evaluateFunc(match, p1, p2){
	console.log(p1)
	let func_string = p1.trim()
				console.log(p2)
	let scope = p2.trim()

	console.log(func_string)
				f='sqrt(x/x+1)'
	func_string = eval(func_string) // this allows entering formula variables, meaning that you can reuse formulas

	let parsed = math.parse(func_string)
	let code = parsed.compile()
	
	let out = code.evaluate( scope )
	
	return out
}
const evaluate = {
	name: "evaluate",
	match: [
		{ pattern: "\\(\\$([^,]*),* *(.*)\\$\\)", flags: "mg" }
//		{ pattern: "\\(\\$(.*)\\$\\)", flags: "mg" }
	],
  out: evaluateFunc
}
module.exports = evaluate
