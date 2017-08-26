const http = require('http');
const router = require('./router.js');

const port = process.env.PORT || 3000;
const host = process.env.HOSR || 'localhost';

const server = http.createServer(router);
server.listen(port, () => {
  console.log(`Server is up and running on : http://${host}:${port}`);
});
