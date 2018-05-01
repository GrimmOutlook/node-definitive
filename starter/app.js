const os = require('os');
const fs = require('fs');
const userData = require('./user.js');

let user = os.userInfo();
let platform = os.platform();
let date = new Date();

console.log(userData.user.firstName);
// console.log(module);

let message = `User ${user.username} started app at ${date}\n`;

fs.appendFile('random.txt', message, (err) =>{
  if(err){
    console.log('You done messed up!');
  }
})
