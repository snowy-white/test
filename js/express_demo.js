var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send('hello');
});

var sever=app.listen(8081);