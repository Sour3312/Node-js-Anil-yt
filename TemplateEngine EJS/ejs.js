const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.get("/profile", (_, res) => {
  const user = {
    name: "srv",
    age: 23,
    height: "12cm",
    listt: [1, 2, 3, 4, 4, 5],
  };
  res.render("profile", { user });
});

app.get("/login", (_, resp) => {
  resp.render("login");
});

app.get("*", (_, res) => {
  res.send("page not found");
});

app.listen(1001);
