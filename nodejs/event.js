var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('doubleClick',function(){
    console.log('双击点我');
});
event.emit('doubleClick');

console.log('end');