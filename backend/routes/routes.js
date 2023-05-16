const express = require("express");
const dbo = require("../db/conn");
const listRoutes = express.Router();
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the foods.
listRoutes.route("/characters").get(function (req, res) {
    let db_connect = dbo.getDb("training");
    db_connect
       .collection("contact-list")
       .find({})
       .toArray()
       .then((data) => {
         console.log(data);
         res.json(data);
       });
   
   });