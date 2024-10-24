const { createServer } = require('node:http')
const { handleRouting } = require('./router')

const hostname = '127.0.0.1'
const port = 6060

function onRequest (request, response) {
  handleRouting(request, response)
}

const server = createServer(onRequest)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
