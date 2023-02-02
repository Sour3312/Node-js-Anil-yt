const express = require("express");
const path = require("path");
const app = express();

// render html files from folder 'html files'
const FilePath = path.join(__dirname, "html files");
console.log(FilePath);
app.use(express.static(FilePath));
// http://localhost:8000/file1.html
// http://localhost:8000/file2.html

  // #####################################################
// url without .html
app.get("/form0", (_, res) => {
  res.sendFile(`${FilePath}/file1.html`);
});
app.get("/form1", (_, res) => {
  res.sendFile(`${FilePath}/file2.html`);
});

// render direct html as string
app.get("/", (req, res) => {
  console.log(req.query);
  res.send("I am home page");
});

app.get("/help", (req, res) => {
  console.log(req.query);
  res.send(`<a href="/home">click</a>`);
});

app.get("/home", (req, res) => {
  const ss = req.query.name;
  res.send(`<h1>Html generated</h1>
    <input typr="text" value=${ss} />`);
});

app.get("*", (_, res) => {
  res.sendFile(`${FilePath}/erroe.html`);
});

app.listen(8000, () => {
  console.log(`server started at http://localhost:8000`);
});
