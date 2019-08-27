//var create = require('mathjs').create
//var all = require('mathjs').all
const math = require('mathjs')

//const config = { }
//const math = create(all, config)


// {{ f = 'x+1' }} sets f
let f = 'sqrt(x/x+1)'

// ($(.*),(.*)$) => 
// let result = p1.trim().evaluate(p2.trim())
// return result
//
// [$(.*)$] => 
// let parsed = math.parse(p1.trim())
// let tex = parsed.toTex()
// return tex
//
//[$ f[x] = ($ f, {x:1} $) $]

function evaluate(match, p1, p2){
				/*
	console.log(match)
	console.log(func_string)
	console.log(scope)
	console.log(func_string)
				console.log(scope)
	*/
	let func_string = p1.trim()
	let scope = p2.trim()
	func_string = eval(func_string)

	let parsed = math.parse(func_string)
	let code = parsed.compile()

	let result = code.evaluate({x:1})
	
	return result
}

function toTex( match, p1, p2){
	let code_string = p1.trim()
	console.log(code_string)
	let parsed = math.parse(code_string)
	let result = parsed.toTex()
	return result
}

// {{ f = 'sqrt(x/x+1)' }}
f = 'sqrt(x/x+1)'
md = `

This is markdown, it can do tex equations 

[$ f[x] = sqrt(x/x+1) $]
[$ f[1] = ($ f, {x:1} $) $]

`


let result = md.replace(/\(\$([^,]*),* *(.*)\$\)/mg, evaluate)
result = result.replace(/\[\$(.*)\$\]/mg, toTex)

//let result = parsed.toTex()

console.log(result)
