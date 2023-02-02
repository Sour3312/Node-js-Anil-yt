// *INSERT DB DATA WITH NODE JS*

const DBconnect = require("./connection");

const insertData = async () => {
  const data = await DBconnect();
  const result = await data.insertMany([
    { name: "a", age: 53663453 },
    { name: "c", age: 423 },
    { name: "d", age: 746653663453 },
    { name: "e", age: 53663453 },
    { name: "h", age: 423 },
    { name: "f", age: 746653663453 },
  ]);
  console.log(result);
};

insertData();
