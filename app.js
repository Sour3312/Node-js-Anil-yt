// https://www.youtube.com/watch?v=VrQgmNY96wo

const http = require("http");
const color = require("colors");
const data=require('./data')

http
  .createServer((req, res) => {
    res.writeHead(402, { "Content-Type": "application\json" });
    res.write(
      JSON.stringify(data)
    );
    res.end();
    console.log("12356789".bgMagenta);
  })
  .listen(1000);
