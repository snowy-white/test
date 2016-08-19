var fs=require("fs");

//异步读取
fs.readFile('data/input.txt',function(err,data){
    if(err){
       return console.log(err);
    }

    console.log("异步读取"+data.toString());
});

//同步读取
var data=fs.readFileSync('data/input.txt');
console.log("同步读取"+data.toString());

console.log("finish");

console.log("创建目录 /nodejs/test");
fs.mkdir("/nodejs/test",function(err){
    if(err){
      return  console.log(err);
    }

    console.log("目录创建成功");
});

console.log("查看目录");
fs.readdir("/nodejs/",function(err,files){
    if(err){
      return  console.log(err);
    }

    files.forEach(function(file){
        console.log(file);
    });
});

