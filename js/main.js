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

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");
console.log("程序执行完毕。");

