var Calcs = (function() {
  
  const name = 'calculation methods';
  
  const about = function() {
    return 'A class of calculation methods';
  }
  
  const author = function() {
    return 'This ' + name + 'class is written by Brian.'
  }
  
  const add = function(a ,b) {
    if(isNumber(a) && isNumber(b)) {
      return a + b
    } else {
      return false
    }
  }
  
  const isNumber = function(val) {
    
    if(typeof(val) === 'number') {
      return true;
    }
    
    return false;
    
  }
  
  return {
    name: name,
    about: about,
    author: author,
    add: add,
    isNumber: isNumber
  }

})()