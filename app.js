// var stuff = require('./stuff')

// console.log(stuff.counter(['num1', 'num2','num3']))
// console.log(stuff.adder(5,6))
// console.log(stuff.adder(stuff.pi, 5))

var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log(msg)
})

myEmitter.emit('someEvent', 'the event was emitted')