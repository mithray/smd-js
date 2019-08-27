function enDashFunc( match, p1, p2 ) {
  let out = `&ndash;`
  return out
}
const en_dash = {
	name: "En Dash",
  match: [
		{pattern: "[^␛]--", flags: "mg"}
	],
  out: enDashFunc
}

module.exports = en_dash
