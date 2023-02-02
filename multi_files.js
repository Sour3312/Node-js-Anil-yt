// create multiple files into 'files' folder

const fs = require("fs");
const path = require("path"); // for making path for files

const dirPath = path.join(__dirname, "files2");
console.log(dirPath); // D:\srv react\node\Anil Sidhu\files

// creating multiple files
for (i = 0; i < 5; i++) {
  fs.writeFileSync(dirPath + "/map" + i + ".png", "I am A software developer");
}

// reading files of 'files' folder
fs.readdir(dirPath, (err, files) => {
  console.warn("as an array: ", files);
  files.forEach((item, i) => {
    console.log(i, item);
  });
});
