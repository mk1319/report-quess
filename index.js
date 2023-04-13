const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("frontend/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(process.env.PORT || 80, function () {
  console.log("Express app running on port " + (process.env.PORT || 80));
});
