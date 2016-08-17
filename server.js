var events=require('events');
var emitter=new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
    console.log('listenner1',arg1,arg2);

});

emitter.on('someEvent',function(arg1,arg2){
    console.log('listenner2',arg1,arg2);

});
emitter.emit('someEvent','arg1参数','arg2参数');
