// streams! (the best way to do async i/o)
// 
// docs: https://nodejs.org/api/stream.html
// in-terminal learning workshop: https://github.com/substack/stream-adventure
// handbook: https://github.com/substack/stream-handbook
// faq: https://github.com/stephenplusplus/stream-faqs
//
var stream = require('readable-stream')
var pump = require('pump')

module.exports = createWorker

function createWorker (config, api) {

  return {
    start: function () {
      poll(config, function () {
        pump([
          readData(config),
          transformData(config),
          writeData(config, api)
        ])
      })
    }
  }
}

function poll (config, callback) {
  // TODO poll using `cron`
  //  use options from config.cron
  //  onTick, call `callback`
  callback()
}

function readData (config) {
  // TODO read data from Loomio's API
  // use `request` to do http calls
  // for each piece of data, push to stream
  return stream.Readable()
}

function transformData (config) {
  // TODO transform Loomio's data into
  // https://github.com/valueflows/agent
  // data format
  return stream.PassThrough()
}

function writeData (config, api) {
  // TODO write data into our api
  // using api.service('agents')
  // or api.service('relationships')
  // and the various service methods
  // at http://feathersjs.com/docs/#toc10
  return stream.Writable()
}
