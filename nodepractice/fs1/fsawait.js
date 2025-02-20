const fs = require("fs");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

const filePath1 = __dirname;

const writeFileExample = async () => {
  try {
    await fs.promises.writeFile(filePath, "This is new data ", "utf-8");
    console.log("File created succssfully");
  } catch (error) {
    console.log(error.message);
  }
};

const readFileData = async () => {
  try {
    const response = await fs.promises.readFile(filePath, "utf-8");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const appendData = async () => {
  try {
    await fs.promises.appendFile(filePath, " new data is added", "utf-8");
    console.log("Data is appended");
  } catch (error) {
    console.log(error.message);
  }
};

writeFileExample();

readFileData();
appendData();

readFileData();

const readFolder = async () => {
  try {
    const response = await fs.promises.readdir(filePath1);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

readFolder();
