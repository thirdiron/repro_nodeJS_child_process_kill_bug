var child_process = require('child_process');

var myUnkillableChild;

myUnkillableChild =
      child_process.exec('node ./child_root/child.js',
                     {},
                     function(err, stdout, stderr) {
                       debugger;
                       if (err) console.log(err);
                       console.log('My child process should be dead');
                     });

console.log('Hello world! A child should be running now');
debugger;

setTimeout(function() {
  // Wait for a few seconds to ensure the server is up and running
  // Then kill it and exit
  console.log('Sending SIGTERM signal to child process!');
  myUnkillableChild.kill('SIGTERM');
  debugger;
  process.exit(0);
}, 3000);


