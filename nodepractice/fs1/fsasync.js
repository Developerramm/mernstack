const fs = require("fs");
const path = require("path");

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName);

// fs.writeFile(filePath, "This is the initial data", "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File has been saved");
//   }
// });

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.appendFile(filePath, " added extra data", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Extra data added ");
  }
});

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.unlink(filePath, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File deleted successfully");
  }
});
