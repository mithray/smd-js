const changeCase = require('change-case')

function h5Func(match, p1, p2) {
	let out = `<h5 id='${changeCase.paramCase(p1)}'>${p1}</h5>`
	return out
}
const h5 = {
	name: "h5",
	match: [{pattern: "^#{5} (.*)", flags: "mg"}],
	out: h5Func,
}

module.exports = h5

