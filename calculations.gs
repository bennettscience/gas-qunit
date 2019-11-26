var Calcs = (function() {
  
  const name = 'calculation methods';
  
  const about = function() {
    return 'A class of calculation methods';
  }
  
  const author = function() {
    return 'This ' + name + 'class is written by Brian.'
  }
  
  return {
    name: name,
    about: about,
    author: author,
  }

})()