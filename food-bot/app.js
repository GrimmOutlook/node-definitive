const fs = require('fs');

const commandLineArgs = require('command-line-args');

const optionsDefinitions = [
  {name: 'name', type: String},
  {name: 'order', type: String},
  {name: 'payment', type: Number},
  {name: 'exit', type: Boolean}
]

const options = commandLineArgs(optionsDefinitions);

let getJSON = fs.readFileSync('db.json');
let data = JSON.parse(getJSON);

const saveIt = (newData) => {
  const toJSON = JSON.stringify(newData);
  fs.writeFileSync('db.json', toJSON);
}

if(options.name){
  data.name = options.name;
  console.log(`Hello, ${options.name}, we are serving burgers, fries, and salads.`);
  saveIt(data);
}
else if(options.order){
  data.order = options.order;
  console.log(`Ok, that will be $15. You will pay with...`);
  saveIt(data);
}
else if(options.payment){
  data.payment = options.payment;
  console.log(`Your change is ${options.payment - 15}.  Thank you for eating at Grimm's.  Type --exit to complete your order.`);
  saveIt(data);
}
else if(options.exit){
  console.log('See ya!!');
  data.name = '';
  data.order = '';
  data.payment = '';
  saveIt(data);
}
else {
  console.log('Hello, please type your name:');
}
