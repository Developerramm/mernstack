const fs = require("fs");
const path = require("path");

const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);

const writeFile = fs.writeFileSync(
  fileName,
  "This is the initial data updated",
  "utf-8"
);
console.log(writeFile);
// console.log(fileName)

const readfile = fs.readFileSync(filePath);
const readfile1 = fs.readFileSync(filePath, "utf-8");
console.log(readfile);
console.log(readfile1);

const appendFile = fs.appendFileSync(filePath, " new data ", "utf-8");
console.log(appendFile);

const read1 = fs.readFileSync(filePath, "utf-8");
console.log(read1);

if (fs.unlinkSync(filePath)) {
  console.log("File is deleted successfully");
} else {
  console.log("File does not deleted");
}
