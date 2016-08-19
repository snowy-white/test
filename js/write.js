var fs=require("fs");
var data="it is raining";

//创建一个写入流。写到文件output.xt
var writerStream=fs.createWriteStream('data/output.txt');
 writerStream.write(data,'utf8');

//标记文件末尾
 writerStream.end();

 //处理流事件-->data end  error
 writerStream.on('finish',function(){
     console.log("写入完成");
 });

  writerStream.on('error',function(err){
     console.log(err.stack);
 });
