// *UPDATE DB DATA WITH NODE JS*

const DBconnect = require("./connection");

const insertData = async () => {
  const data = await DBconnect();
  const result=await data.updateMany({name:"seenu"},{$set:{name:'seenu',age:12,height:100}})
  console.log(result);
};

insertData();
