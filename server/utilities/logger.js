
module.exports = function (request, response, next) {
  console.info('- serving', req.method, 'request for', req.url);
  next();
}
