const express = require("express");
const cors = require("cors");
const app = express();

// Enabling CORS for domains on whiteList.
var whiteList = ["http://localhost:3000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whiteList.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
}

app.use(cors(corsOptionsDelegate));

// App listening.
app.listen(8080, function () {
  console.log("App listening on port 8080!");
});

// Root route.
app.get("/", function (req, res, next) {
  res.status(200).send("Hey, I am responding to your request!");
});

const lessons = {
  1: {
    id: "1",
    name: "Introduction to Docker"
  }
};

// Route with parameters
app.get("/lessons/:id", function (req, res, next) {
  if(lessons[req.params.id] !== undefined){
    res.status(200).send(lessons[req.params.id]);
  } else {
    res.status(404).send("Oops! 404: Team not found!");
  }
});
