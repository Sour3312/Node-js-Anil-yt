// *DELETE DB DATA WITH NODE JS*

const DBconnect = require("./connection");

const insertData = async () => {
  const data = await DBconnect();
  const result=await data.deleteOne({name:'sourab'})
//   const result=await data.deleteMany({name:'seenu'})
  console.log(result);
};

insertData();
