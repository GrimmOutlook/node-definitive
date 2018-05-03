const events = require('events');
const eventEmitter = new events.EventEmitter();


const ringBell = () => {
  console.log('ring ring ring');
}

eventEmitter.on('guestHere', ringBell);

const sayHello = () => {
  console.log('Who is there?');
}
eventEmitter.on('guestHere', sayHello);


eventEmitter.on('guestHere', (guestSpeaks) => {
  console.log(guestSpeaks)
})

eventEmitter.emit('guestHere', 'It\'s me, open the door!');
