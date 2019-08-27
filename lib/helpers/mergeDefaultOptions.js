function mergeDefaultOptions( options ){
	const defaults = {
		ruleset: 'default',
    wrap: true,
    style: true,
		verbose: false
  }
  if ( typeof options !== "undefined" ) {
    if (options.verbose){
      console.log('not undefined:')
      console.log(options)
      console.log( typeof options.ruleset )
    }
    if ( typeof options.ruleset == "undefined" ) {
      options.ruleset = defaults.ruleset
    }
    if ( typeof options.wrap === undefined ){
      options.wrap = defaults.wrap
    }
    if ( typeof options.style === undefined ){
      options.style = defaults.style
    }
   } else {
	    options = {}
  	  options.ruleset = defaults.ruleset
  	  options.wrap 		= defaults.wrap
  	  options.style		= defaults.style
   }

  return options
}

module.exports = mergeDefaultOptions
