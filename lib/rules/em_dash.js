function emDashFunc( match, p1, p2 ) {
  let out = `&mdash;`
  return out
}
const em_dash = {
	name: "em dash",
  match: [
		{pattern: "[^␛]---", flags: "mg"}
	],
	out: emDashFunc
}

module.exports = em_dash
