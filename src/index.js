var createApi = require('./api')
var createWorker = require('./worker')
var config = require('./config')

var api = createApi(config)
var worker = createWorker(config, api)

worker.start()
api.listen(config.port)
