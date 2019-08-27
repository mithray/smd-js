const less_than 		= require('../rules/less_than.js')
const greater_than	= require('../rules/greater_than.js')
const ampersand 		= require('../rules/ampersand.js')
const double_quote	= require('../rules/double_quote.js')
const single_quote	= require('../rules/single_quote.js')

const html_escapes = { 
	ampersand, 
	less_than, 
	greater_than, 
	double_quote, 
	single_quote 
}

module.exports = html_escapes
