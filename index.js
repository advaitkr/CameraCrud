const express = require('express');
const app = express();
const mongoose = require('./config/mongoose');
const bodyParser = require('body-parser')
app.use(express.json());
require("dotenv").config({path: '.env'});
app.use(bodyParser.json());
const camera = require("./camera/controller")
const network = require("./camera_Network/controller")
app.use("/camera",camera)
app.use("/network",network)
app.get('/',(req,res)=>{
  res.send({"msg":"Hello World"})
})






const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});