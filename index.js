const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")
const { application, response } = require("express");
require("dotenv").config({ path: "./config/env"})
const port = process.env.PORT || 3030;
app.use(cors());
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let list = ["Bugs Bunny", "Tweety bird"];

app.get("/api/list", (req, res) => {

  res.json(list);
});

app.post("/api/list", (req, res) => {
  list = req.body.list;
  res.json(list);
  // console.log(req.body);
  // res.json({status: "it worked"});
})

app.post("/api/list/add", (req, res) => {
  console.log(req.body);

  if(req.body.hasOwnProperty("item")){
    list.push(req.body.item);
    res.json(list);
  }else{
    res.json({ message: "Invalid Format"})
  }
})

app.post("/api/list/delete", (req, res) => {
  console.log(req.body);



  
})

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
