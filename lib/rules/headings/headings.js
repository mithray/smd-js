const changeCase = require('change-case')

function hxFunc(match, p1, p2) {
	let x = p1.length
	let out = `<h${x} id='${changeCase.paramCase(p2)}'>${p2}</h${x}>`
	return out
}
const hx = {
	name: "hx",
	match: [{pattern: "^(#{1,6}) (.*)", flags: "mg"}],
	out: hxFunc,
}

module.exports = [ hx ]
