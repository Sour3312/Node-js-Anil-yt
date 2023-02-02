// *READ DB DATA WITH NODE JS*



const DBconnect = require("./connection");

// *### read data with PROMISES ###*
// DBconnect().then((resp) => {
//   resp.find().toArray().then((data) => {
//     console.log(data);
//   });
// });
 



// *### read data with ASYNC/AWAIT (easy) ###*
const main = async () => {
  let data = await DBconnect();
  data = await data.find().toArray();
  console.log(data);
};
main();
