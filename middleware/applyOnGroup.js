const exp = require("express");
const middle = require("./middleWare");

const app = exp();
const routee = exp.Router();

routee.use(middle); // apllied on all routes

app.get("/", (_, res) => {
  res.send("Welcome to home page");
});
routee.get("/user1", (_, res) => {
  res.send("Welcome to home page");
});
app.get("/user2", (_, res) => {
  res.send("Welcome to home page");
});
app.get("/user3", (_, res) => {
  res.send("Welcome to home page");
});
routee.get("/user4", (_, res) => {
  res.send("Welcome to home page");
});
app.get("/user5", (_, res) => {
  res.send("Welcome to home page");
});

app.use("/", routee);

app.listen(1003);
