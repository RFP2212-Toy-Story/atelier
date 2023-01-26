
module.exports = function (request, response, next) {
  console.info('- adding API token to header');
  request.set('Authentication', process.env.API_TOKEN);
  next();
}
