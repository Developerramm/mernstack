const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log(`server is runnin on port 3000`);
})

app.get("/",(req,res)=>{
    res.send("<h3>This is home page baby!!!!....</h3>")
})

// middlewar for body parser
const bodyParser = require('body-parser');
// specially parse json data & add it to the req.body object
app.use(bodyParser.json());

app.post("/api/cars",(req,res)=>{
    const {name,brand} = req.body;
    console.log(name)
    console.log(brand);
    res.send("Car submitted successfully");
})