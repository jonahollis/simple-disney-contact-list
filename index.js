const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config/env"})
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });

