const changeCase = require('change-case')

function h3Func(match, p1, p2) {
	let out = `<h3 id='${changeCase.paramCase(p1)}'>${p1}</h3>`
	return out
}
const h3 = {
	name: "h3",
	match: [{pattern: "^#{3} (.*)", flags: "mg"}],
	out: h3Func,
}

module.exports = h3
