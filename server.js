const http = require( 'http' )
require('./src/database/index')
const app = require('./src/app')
const server = http.createServer(app)

server.listen(3000)