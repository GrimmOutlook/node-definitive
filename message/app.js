const message = require('./message1');

message();
message.message1();


const message2 = require('./message2').message2;

message2();


// const message3 = require('./message3');

// message3.message3();
// message3.message3x();

const message3 = require('./message3').message3;

message3();

const message3x = require('./message3').message3x;

message3x();

const whatever = require('./message3');

whatever.message3();
console.log(whatever);


const message4 = require('./message4');

message4.message;
