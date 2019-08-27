function lessThanFunc( match, p1, p2 ) {
  let out = `&lt;`
  return out
}
const less_than = {
	name: "less than",
  match: [
		{pattern: "[^␛]<[^}]", flags: "mg"}
	],
  out: lessThanFunc
}

module.exports = less_than
