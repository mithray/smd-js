function elipsisFunc( match, p1, p2 ) {
  let out = `&hellip;`
  return out
}
const elipsis = {
	name: "elipsis",
  match: [
		{pattern: "[^␛]\\.\\.\\.", flags: "mg"}
	],
	out: elipsisFunc
}

module.exports = elipsis
