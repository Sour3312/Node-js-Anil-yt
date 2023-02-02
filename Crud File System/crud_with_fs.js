//* ###### CRUD with file System ###### *

const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "file1");
const filePath = `${dirPath}/crud.txt`;
// console.log(dirPath);
// console.log(filePath);


//*create
fs.writeFileSync(filePath,'I an learning node js with youtube')

//*read
// >>> output as binary
fs.readFile(filePath, (err, item) => {
  console.log(item);
});

// >>> output as string
fs.readFile(filePath, "utf8", (err, item) => {
  console.log(item);
});

// *update
fs.appendFile(filePath, " and crud with file system", (err) => {
  if (!err) {
    console.log("file updated");
  }
});

// *rename
fs.rename(filePath,`${dirPath}/srv.txt`,(err)=>{
    if(!err)console.log('file name updated!');
})

// *delete
// fs.unlinkSync(`${dirPath}/srv.txt`);