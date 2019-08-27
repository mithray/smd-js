#!/usr/bin/env node

const program = require('commander')
const fs = require('fs')
const smd = require('../index.js')

program
  .option('-w, --wrap', 'wrap in an html template')
  .option('-s, --style', 'include basic default styling')
  .option('-o, --output <output_file>', 'path to output file')
  .option('-i, --input <input_file>', 'path to input file')
	.parse(process.argv)

const filename = program.args[0]
const content = fs.readFileSync( filename, 'utf8')

let options = { 
	wrap: program.wrap, 
	style: program.style,
	output: program.output,
	input: program.output
}

let html = smd( content, options )

if (options.output) {
	fs.writeFileSync(options.output, html)
} else {
//	console.log(html)
}
