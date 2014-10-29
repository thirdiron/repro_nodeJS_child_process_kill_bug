/**
 * Created by michaellang on 6/23/14.
 */

var express = require('express');
var app = express();

console.log('Child Process Started!');
process.on('uncaughtException', function(err) {
    console.log(err);
    process.exit();
});

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.listen(3900);

console.log('Child process should be listening on port 3900!');
