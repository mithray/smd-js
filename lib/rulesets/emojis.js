const emoji	 = require('node-emoji')

function emojis_func( match, p1, p2 ){
	let out= emoji.get(p1)
	return out
}
const emojis = {
	name: "emojis",
	description: "emojis using shortcodes like :coffee:",
	match: [ 
		{ pattern: ":(.*?):", flags: "mg"} 
	],
	out: emojis_func,
}

module.exports = emojis
