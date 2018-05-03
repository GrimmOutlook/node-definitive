const events = require('events');
const eventEmitter = new events.EventEmitter();

const message = 'Trigger only once!';

eventEmitter.once('showMeTheMessage', () => {
  console.log(message);
})

eventEmitter.emit('showMeTheMessage');
eventEmitter.emit('showMeTheMessage');
