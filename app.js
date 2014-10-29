var child_process = require('child_process');



describe('Fixture that needs a stub dataservice as a child process', function() {
  before(function(done) {
    myUnkillableChild =
      child_process.exec('node ./child_root/child.js',
                     {},
                     function(err, stdout, stderr) {
                       debugger;
                       if (err) console.log(err);
                       console.log('My child process should be dead');
                     });

      setTimeout(function() {
        // Wait for a few seconds to ensure the server is up and running
        // Then continue.
        done();
      }, 3000)
  });

  it('Mocha should run this test function before tearing down', function(done) {
    debugger;
    console.log('Hello world!');
    done();
  });

  after(function(done) {
    console.log('Sending SIGTERM signal to child process!');
    myUnkillableChild.kill('SIGTERM');
    done();
  });


