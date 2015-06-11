var http = require("http");
var fs = require("fs");
var request = require('request');
var DB = require('./usermysql.js');

var server = http.createServer(function(req, res){}).listen(50082);
console.log("http start");

//if (!fs.existsSync("uploads/tv/vod")) {
//    fs.mkdirSync("uploads/tv/vod");
//}

//request("http://app.shafa.com/api/push/download/54aa40ff726e09a651b0432c?response-content-type=application%2fvnd.android.package-archive").on('response', function(response) {
//    console.log("success:");
//    console.log(response.headers['content-type']);
//}).on('error', function() {
//    console.log('error index: ');
//}).pipe(fs.createWriteStream("uploads/tv/vod/hello.apk"));

DB.queryCallback(function(results) {
    for(var i = 0; i < results.length; i++){
        var path = 'uploads/'+results[i].list+"/"+results[i].category;
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
        request(results[i].link).on('response', function(response) {
            console.log("success");
        }).on('error', function() {
            console.log('error');
        }).pipe(fs.createWriteStream(path+"/"+i+".apk"));
    }
});


console.log('end');