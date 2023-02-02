// *get the data directly from DB

const expres = require("express");
const connectDB = require("./db");

const app = expres();


app.get("/", async (req, resp) => {
  let data = await connectDB();
  data = await data.find().toArray();
  resp.send(data);
  console.log(data);
  console.log('Data printed on screen coming from DB');
});

app.listen("1000");


// we cannot pass the body to GET opreation 