const handler = require('./handler.js');
module.exports = (req, res) => {
  var endpoint = req.url;
  var extension = endpoint.split('.')[1];

  if (endpoint === '/') {
    handler.serveHome(req, res);
  } else if (extension === 'html' ||
    extension === 'css' ||
    extension === 'js' ||
    extension === 'ico' ||
    extension === 'png' ||
    extension === 'jpg') {
    handler.servePublic(req, res);
  } else if (endpoint === '/allOrder') {
    handler.sqlQueries(req, res);
  } else if (endpoint === '/create-order') {
    handler.setData(req, res);
  } else {
    handler.serveError(req, res);
  }
};
