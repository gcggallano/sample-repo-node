const http = require('http');

const server = http.createServer(
  // callback func
  // takes 2 objs colloquially req and res and is a void func
  (req, res) => {
    // if req is forawrd slash
    if(req.url == '/') {
      res.end('Hello World!')
    }
    // if req or you add /anout in url
    if(req.url === '/about') {
      res.end('About Us')
    }
  }
)

//what port our server will listen
server.listen(5000)