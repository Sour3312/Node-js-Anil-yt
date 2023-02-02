// *This is the Asynchronous way

/*console.log("1");

setTimeout(() => {
    console.log("2");
   
}, 1000);

console.log("3");*/

// *Disadvantage of asynchronous way

/*let a = 10;
let b = 0;

setTimeout(() => {
  b = 10;
  console.log(b);
}, 3000);

console.log(a + b);*/

/* Here the value of b will update by 3 sec late. 
    So we didn't get the desired output. 
    This is the drawback of asynchrous way

    To handle this drawback we need to use 'Promises' or 'Callbacks'()
*/

// handling the drawback using Promise

let x = 10;
let y = 0;

const wait = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(y=111);
    // y=111        // not working
  }, 3000);
});

wait.then(() => {
  console.log(x + y);
});
