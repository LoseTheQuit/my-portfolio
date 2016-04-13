'use strict';
var fs = require('fs');
var colors = require('colors');
var express = require('express');
var app = express();

app.use(express.static(__dirname + 'static'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {

    console.log('INCOMING GET REQUEST - Load Template');
    var html = fs.readFileSync('static/views/index.html');
    res.end(html);

});

app.listen(app.get('port'), function () {
    console.log('\n');
    console.log('********************************************'.black.bgWhite);
    console.log("The frontend server is running on port 5000!".black.bgWhite);
    console.log('********************************************'.black.bgWhite);
    console.log('\n');
});