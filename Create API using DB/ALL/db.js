// database name = sourav
// collection name = crud

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function getData() {
  const database = "sourav"; // database name from mongocompass 
  let result = await client.connect();
  let db = result.db(database);
return db.collection("crud"); // collection name from mongocompass
}
console.log(getData());


module.exports=getData;