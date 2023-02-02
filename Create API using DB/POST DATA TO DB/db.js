const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function getData() {
  const database = "sourav"; // database name from mongocompas sourav >>> bigdata >> json
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("public"); // collection name from mongocompas
}
console.log(getData());

module.exports = getData;
