var Calcs = (function() {
  
  const init = function() {
    return this
  }
  
  const name = 'calculation methods';
  
  const about = function() {
    return 'A class of calculation methods';
  }
  
  const author = function() {
    return 'This ' + name + 'class is written by Brian.'
  }
  
  const add = function(a ,b) {
    if(!isNumber(a)) { throw new TypeError }
    if(!isNumber(b)) { throw new CustomError('This deserves a custom message.'); }
    
    return a + b
    
  }
  
  const isNumber = function(val) {
    
    if(typeof(val) === 'number') {
      return true;
    }
    
    return false
    
  }
  
  const addArray = function(arr, int) {
    
    // Check the params
    if (!Array.isArray(arr)) { return false }
    if (typeof int !== 'number') { return false }
    
    var addArr = arr.map(function(val) { return val + int })
    
    return addArr;
    
  }
  
  return {
    init: init,
    name: name,
    about: about,
    author: author,
    add: add,
    isNumber: isNumber,
    addArray: addArray,
  }

})()