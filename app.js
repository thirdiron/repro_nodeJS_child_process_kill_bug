var child_process = require('child_process');

var myUnkillableChild =
  child_process.exec('node ./app.js',
                     {cwd:process.cwd() + '/child_root'},
                     function(err, stdout, stderr) {
                       debugger;
                       if (err) console.log(err);
                       console.log('My child process should be dead');
                     });

// Wait for about 5 seconds then kill child and exit.
setTimeout(function() {
  debugger;
  myUnkillableChild.kill('SIGTERM');
  process.exit();
}, 5000);
