// ES6 way
const EventEmitter = require('events');

class Message extends EventEmitter {
  constructor(){
    super();
    this.message = 'Hey man, what\'s shaking?';
    this.showMessage = () => {
      this.emit('showItToMe', this.message);
    }
  }
}

const message = new Message;

message.on('showItToMe', (data) => {
  console.log(data);
})


message.showMessage();
