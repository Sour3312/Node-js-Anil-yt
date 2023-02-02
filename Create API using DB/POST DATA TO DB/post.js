const exp = require("express");
const mongo = require("./db");

const app = exp();

app.use(exp.json());

app.post("/", async (req, resp) => {
  const db = await mongo();
  const result = await db.insertMany(req.body);
  console.log(result);
  resp.send(result);

});

app.listen("1001");

// POST http://localhost:1001 body{}