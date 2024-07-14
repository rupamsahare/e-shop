const express = require("express");
const bodyParer = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose")
require("dotenv/config");

const app = express();

// middile ware
app.use(bodyParer.json());
app.use(morgan("tiny"));

const api = process.env.API_URL;

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('database connection is ready')
})
.catch((err)=>{console.log(err,"==================================")})

app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "cup",
    image: "url",
  };
  res.send(product);
});

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct);
});

app.listen(4000, () => {
  console.log("Helllo node js servver running");
});
