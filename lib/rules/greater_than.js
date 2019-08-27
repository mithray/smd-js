function greaterThanFunc( match, p1, p2 ) {
  let out = `&gt;`
  return out
}
const greater_than = {
	name: "Greater Than",
  match: [
		{ pattern: "[^␛][^{]>", flags: "mg" }
	],
  out: greaterThanFunc
}

module.exports = greater_than  
