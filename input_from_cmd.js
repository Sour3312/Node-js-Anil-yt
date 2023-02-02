// create & delete a file using user input just after node run cmd

const fs = require("fs");

// 'process' is node keyword

console.log(process);
console.log(process.argv());

// ############################

if (process.argv[2] == "add") {
  fs.writeFileSync(process.argv[3], process.argv[4]); // dynamic way
 //or
 // fs.writeFileSync('new.txt','This file is made by static way');  // static way
} else if (process.argv[2] == "remove") {
  fs.unlinkSync(process.argv[3]);
} else {
  console.log("invalid input");
}
