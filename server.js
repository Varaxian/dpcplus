const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT || 3000);
const host = '0.0.0.0';
const rootDir = __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8'
};

const server = http.createServer((req, res) => {
  const reqPathRaw = req.url.split('?')[0];

  if (reqPathRaw === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('ok');
    return;
  }

  let reqPath = reqPathRaw;
  if (reqPath === '/') reqPath = '/index.html';

  const filePath = path.join(rootDir, reqPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream'
    });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
