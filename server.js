// pure nodejs server
// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

const express = require('express');
const server = express();

server.get('/',(req, res) => {
  res.send('<h1>hola</h1>');
  res.end();
})

server.get('/contact',(req, res) => {
  res.send('<h1>hola, bienvenido a la seccion de contactos</h1>');
  res.end();
})

server.listen(3000, () => console.log('Server on port 3000'))