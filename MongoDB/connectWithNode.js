// *CONNECT NODE WITH MONGODB*
// *get mongocompass data into console using mongoClient*

const MongoClient = require("mongodb").MongoClient;
// or
// const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";


const client = new MongoClient(url);

async function getData() {
  const database = "sourav"; // database name from mongocompas sourav >>> bigdata >> json
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("personal"); // collection name from mongocompas
  let resp = await collection.find({_id:'63d8f4fc9b4bbc285a64b46b'}).toArray();
  console.log(resp);
}
getData();
