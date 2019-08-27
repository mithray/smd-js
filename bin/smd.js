#!/usr/bin/env node

const program = require('commander')
const package_json = require('../package.json')

program
	.version(package_json.version)
	.command('convert [filename]', 'convert markdown')
	.parse(process.argv)
