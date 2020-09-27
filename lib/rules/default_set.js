const headings		= require('./headings/headings.js')
const phrasing		= require('./phrasing/phrasing.js')
const lists				= require('./lists/lists.js')
const critic			= require('./critic/critic.js')
const code				= require('./code/code.js')
const sectioning	= require('./sectioning/sectioning.js')
const extensions 	= require('./extensions/math.js')

module.exports = 
[ 
  extensions, 
  headings, 
  phrasing, 
  lists, 
  critic, 
  code, 
  sectioning 
]
