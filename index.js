const http = require('http');
// const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let parsedUrl = new URL(req.url, 'http://localhost:3000');

  let urlPath = parsedUrl.pathname;

  if(urlPath == '/') {
    urlPath = './index.html';
  }else {
    urlPath = './' + urlPath + '.html';
  }

  fs.readFile(urlPath, function(err, data) {
    if(err) {
      fs.readFile('./404.html', (err, data) => {
        if(err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.write('404 file not found');
          return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      })
    }else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end()
    }
  });
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});