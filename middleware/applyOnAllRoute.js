const exp = require("express");
const middle = require("./middleWare");

const app = exp();

// http://localhost:1002/?age=111
// http://localhost:1002/user2?age=11

app.use(middle); // apllied on all routes

app.get("/", (_, res) => {
  res.send("Welcome to home page");
});
app.get("/user1", (_, res) => {
  res.send("Welcome to home page");
});
app.get("/user2", (_, res) => {
  res.send("Welcome to home page");
});

app.listen(1002);
