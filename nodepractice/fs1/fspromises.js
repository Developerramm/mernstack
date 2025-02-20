const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

const file = __dirname;

fs.promises
  .writeFile(filePath, "This is another data ", "utf-8")
  .then(() => {
    console.log("Data added successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

fs.promises
  .readFile(filePath, "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

fs.promises
  .readdir(file)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
