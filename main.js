var events=require("events");
var eventEmitter=new events.EventEmitter();

//监听器1
var listener1=function listener1(){
    console.log('监听器listener1执行');
}

//监听器2
var listener2=function listener2(){
    console.log('监听器listener2执行');
}

//绑定connection事件，处理函数为listenner1
eventEmitter.addListener('connection',listener1);

eventEmitter.addListener('connection',listener2);



