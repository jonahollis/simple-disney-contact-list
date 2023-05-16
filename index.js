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

let list = [
  { 
      name: "Simba",
      movie: "The Lion King",
      movieYear: "1994",
      imageUrl: "https://resizing.flixster.com/-9O860xiuHUyNtotR_JtUrGqU3I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FiZWI5MTcwLWE0ZTctNGQyNy05NWJlLTM3MzMxMTliZDlhNS53ZWJw",
  }, 
  { 
      name: "Moana",
      movie: "Moana",
      movieYear: "2016",
      imageUrl: "https://m.media-amazon.com/images/I/A1JOaV3B6fL._AC_SY879_.jpg",
  }, 
  { 
      name: "Ariel",
      movie: "The Little Mermaid",
      movieYear: "1989",
      imageUrl: "https://m.media-amazon.com/images/I/71VV1OFO4JL._AC_SY879_.jpg",
  },
];

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
  
  // list = req.body.list;
  // res.json(list);

  
})

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
