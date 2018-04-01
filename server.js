var express = require('express');
var app = express();
Object.assign=require('object-assign');

app.set('view engine', 'ejs');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || 'localhost';

app.get("/",function(req,res){

     res.render("index");

});

app.listen(port,ip);

console.log('Server running on http://%s:%s', ip, port);