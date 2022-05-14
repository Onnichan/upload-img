module.exports = function(message, status){
  const error = new Error();
  error.status = status;
  error.message = message;
  throw error; // throw an exception and the error middleware captures it
}

