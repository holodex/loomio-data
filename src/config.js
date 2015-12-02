// TODO (@ahdinosaur) move into separate module
var join = require('path').join
var assign = require('object-assign')

var nodeEnv = process.env.NODE_ENV || 'development'
var baseDir = process.cwd()
var configDir = join(baseDir, 'config')

var defaultConfig = require(join(configDir, 'default'))
var envConfig = require(join(configDir, nodeEnv))

var config = assign({}, defaultConfig, envConfig)

module.exports = config
