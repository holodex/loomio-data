var test = require('ava')
var http = require('http')
var miss = require('mississippi')
var testReq = require('test-request')

var createApi = require('../src/api')

var port = 5100

test.cb('the api works', function (t) {
  var api = createApi({})

  var server = http.createServer(api)
  server.listen(port)

  var req = http.request({
    port: port,
    method: 'GET',
    path: '/agents/',
  })

  testReq(t.end, server, req, function (res) {
    t.ok(res, 'res exists')
    miss.pipe(res, miss.concat(function (buffer) {
      var data = JSON.parse(buffer)
      t.same(data, [], 'data is empty')
    }))
  })

  req.end()
})
