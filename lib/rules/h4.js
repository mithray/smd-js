const changeCase = require('change-case')

function h4Func(match, p1, p2) {
	let out = `<h4 id='${changeCase.paramCase(p1)}'>${p1}</h4>`
	return out
}
const h4 = {
	name: "h4",
	match: [{pattern: "^#{4} (.*)", flags: "mg"}],
	out: h4Func,
}

module.exports = h4

