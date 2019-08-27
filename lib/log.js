const fancyLog		= require('fancy-log')
const logSymbols	= require('log-symbols')
const winston			= require('winston')

function logInfo(message){
	fancyLog(`${logSymbols.info} ${message}`)
}
function logSuccess(message){
	fancyLog(`${logSymbols.success} ${message}`)
}
function logDir(message){
	fancyLog(`${message}`)
}
function logWarn(message){
	fancyLog(`${logSymbols.warning} ${message}`)
}
function logError(message){
	fancyLog(`${logSymbols.error} ${message}`)
}

const log = {
	info: logInfo,
	success: logSuccess,
	dir: logDir,
	warn: logWarn,
	error: logError,
}

module.exports = log
