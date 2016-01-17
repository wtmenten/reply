var reply = require('./../');

var opts = {
  color: {
    message: 'What is your favorite color?',
    default: 'blue'
  },
  shape: {
    message: 'And your favorite shape?',
    default: 'hexagon'
  }
}

reply.get(opts, function(err, result){
  if (err) return bye();

  console.log(result);
})