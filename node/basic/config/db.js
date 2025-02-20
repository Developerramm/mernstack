const url = "mongodb://127.0.0.1:27017/school";
const mongoose = require("mongoose");

const dbConnection = ()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("DB Connection successfully");
    }).catch((error)=>{
        console.log("DB Connection failed");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = dbConnection;