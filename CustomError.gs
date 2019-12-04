var CustomError = function(message) {
  
  this.message = message || "There was a problem.";
  
}

CustomError.prototype.toString = function() {
  
  return this.message;
  
}