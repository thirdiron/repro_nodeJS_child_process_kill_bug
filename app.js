var child_process = require('child_process');

process.on('uncaughtException', function(err) {
  debugger;
  console.log(err.stack);
  process.exit();
});

var myUnkillableChild;

myUnkillableChild =
      child_process.spawn('node', ['./child_root/child.js']);

console.log('Hello world! A child should be running now');
debugger;

setTimeout(function() {
  // Wait for a few seconds to ensure the server is up and running
  // Then kill it and exit
  debugger;
  console.log('Sending SIGTERM signal to child process!');
  myUnkillableChild.kill('SIGTERM');
  debugger;
  process.exit(0);
}, 3000);


