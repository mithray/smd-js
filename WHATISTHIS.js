const path				= require('path')
const yaml				= require('js-yaml')
const changeCase		= require('change-case')
const c = require('ansi-colors')
const pug = require('pug')

const ruleset = require('./lib/rulesets/default.js')

const settings = require('./lib/settings.js')
const mergeDefaultOptions = require('./lib/helpers/mergeDefaultOptions.js')

const verbose = true

function changeNewLineChar(content, nl_char){
	let regex = new RegExp('[\r\n]')
	content = content.replace(regex, nl_char)
	if (typeof verbose === "boolean" && verbose == true) {
		console.log(content)
		console.log(nl_char)
	}
	return content
}
function getRules(ruleset){
	let rules = []
	if ( ruleset.rules !== "undefined" ){
		rules.push(ruleset.rules)
	}
	
	return rules
}

function applyRules(content, rules){
	rules.forEach( rule => {
		if (typeof verbose === "boolean" && verbose === true) {
			console.log( c.gray(`applying rule `) + c.blue(rule.name))
		}

		var regex_arr = rule.match
					console.log('rule')
//					console.log(rule)
					console.log('content')
//					console.log(content)
		regex_arr.forEach( regex_info => {
			let pattern = regex_info.pattern
			let flags = regex_info.flags
			let regex = new RegExp( pattern, flags )
			content = content.replace(regex, function subRules(match, p1, p2){
				let subrulesets = rule.rules
//				if (typeof verbose === "boolean" && verbose === true) {
//					console.log(rule.name)
//					console.log(subrules)
//				}
//				console.log(match)
//				console.log(subrulesets)
//				console.log(p1)
				subrulesets.forEach( subruleset => {
					p1 = applyRuleset(p1, subruleset)
				})
//				console.log(p1)
				return p1
			})
		})
	})
	return content
}

function applyRuleset(content, ruleset){
	let name = ruleset.name
	let document_level = "document"
	let rules = getRules(ruleset)
	if ( typeof rules === "undefined") {
		return content
	} else {
		if (typeof verbose === "boolean" && verbose === true) {
			console.log(c.green(`applying ruleset ${c.bold.italic(name)} at level ${c.bold.italic(document_level)}`))
			rules.forEach( rule => {
				console.log(c.blue('  ' + rule.name +':')+c.blueBright(' ' + rule.description))
			})
		}

		content = applyRules(content, rules)
		return content
	}
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

//	console.log(content)
	return content
}

module.exports = smd
