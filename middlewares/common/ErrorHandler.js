const createError = require("http-errors");

function notFoundErrorHandler(req, res, next) {
  next(createError(404, "your requested content was nto found"));
}

function auth(req, res, next) {
  console.log("authenticated");
  next();
}
function access(req, res, next) {
  console.log("authorized");
  next();
}
module.exports = {
  notFoundErrorHandler,
  auth,
  access,
};
