
module.exports = (request, response, next) => {
  console.info('- serving', request.method, 'for', request.url);
  next();
}
