// ES5 way

const EventEmitter = require('events');
const util = require('util');

function Message(){
  this.message = 'Hey Dude, what up?!';
}

util.inherits(Message, EventEmitter);

Message.prototype.showMessage = function(){
  this.emit('showIt', this.message);
}


const message = new Message;

// console.log(message.showMessage());

message.on('showIt', (data) => {
  console.log(data);
})

message.showMessage();
