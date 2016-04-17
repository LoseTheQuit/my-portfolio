'use strict';
var fs = require('fs');
var colors = require('colors');
var express = require('express');
var mongoose = require('mongoose');



var app = express();

app.use(express.static('static'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {

    console.log('INCOMING GET REQUEST - Load Template');
    var html = fs.readFileSync('static/views/shell.html');
    res.end(html);

});

app.listen(app.get('port'), function () {
    console.log('\n');
    console.log('********************************************'.black.bgWhite);
    console.log("The frontend server is running on port 5000!".black.bgWhite);
    console.log('********************************************'.black.bgWhite);
    console.log('\n');
});

mongoose.connect('mongodb://localhost/test');


var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function () {
    console.log("connect has been made")
        // we're connected!
});


var mongoConnection = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/foobar');



//

//


const http = require('http');


const port = process.env.PORT || 1337;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fooobar');

let Post = mongoose.model('Post', {
    title: String
});

let post = new Post({
    title: 'My Awesome Goals for 2016!'
});

post.save(function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Blog post saved!');
});

http.createServer((req, res) => {
    Post.find((err, posts) => {
        if (err) {
            return console.log(err);
        }
        console.log(posts);
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(posts));
    })
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});