function handlePing(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write('pong');
  response.end();
}

function handleHello(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write('Hello World\n');
  response.end();
}

module.exports = {
  handlePing,
  handleHello
};