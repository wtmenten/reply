var reply = require('./../');

reply.confirm('Are you certain you want to learn this module?', function(err, yes){

  if (!err && yes)
    console.log("Let's get it going!");
  else
    console.log("Ok then.");

});
