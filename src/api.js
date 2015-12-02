var bodyParser = require('body-parser')
var feathers = require('feathers')
var memory = require('feathers-memory')

module.exports = createApi

function createApi (config) {
  return feathers()
    .configure(feathers.rest())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/agents', memory())
    .use('/relationships', memory())
}
