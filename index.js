const path				= require('path')
const yaml				= require('js-yaml')
const changeCase		= require('change-case')
const c = require('ansi-colors')
const pug = require('pug')
const log = require('./lib/log.js')

const ruleset = require('./lib/rulesets/default.js')

const settings = require('./lib/settings.js')
const mergeDefaultOptions = require('./lib/helpers/mergeDefaultOptions.js')

const verbosity = 0

function flattenRules(ruleset){
	let rules = []
	let base_rules = []
	if (ruleset.rules){
		base_rules= ruleset.rules
	} else {
		console.log('no rules found for ruleset')
		console.log(ruleset)
	}

	return base_rules
}

function applyRuleset(content, ruleset){
	let rules = flattenRules(ruleset)
				console.log(rules)
	let name = ruleset.name
	let document_level = "x"
	rules.forEach( rule => {
		var regex_arr = rule.match
		regex_arr.forEach( regex_info => {
			let pattern = regex_info.pattern
			let flags = regex_info.flags
			let regex = new RegExp( pattern, flags )
			content = content.replace(regex, function subRules(match, p1, p2){
				let subrulesets = rule.rules
				subrulesets.forEach( subruleset => {
					p1 = applyRuleset(p1, subruleset)
				})
				return p1
			})
		})
	})

	return content
}

function smd( content, options ){
	options = mergeDefaultOptions(options)
	content = applyRuleset(content, ruleset)

	if ( options.wrap ) {
		let template_path = './lib/layouts/basic.pug'
		let wrapper = pug.renderFile(template_path)
		let wrapped_content = wrapper.replace(/<!--\s*template_content\s*-->/, content)
		content = wrapped_content
	}
	if ( options.style ){}

//	console.log(content)
	return content
}

module.exports = smd
