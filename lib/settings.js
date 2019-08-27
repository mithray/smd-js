const path = require('path')

const settings = {
	nl: "␤",
	esc: "␛",
	ruleset: "default",
	debug: false,
	wrap: false,
	style: false,
	paths: {
		forms: path.join( __dirname, 'layouts/forms/')
	}
}

module.exports = settings
