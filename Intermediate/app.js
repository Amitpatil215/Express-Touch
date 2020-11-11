const express = require("express");

const app = express();

//? A middleware function
// Some code wihich executes before sending response to the request
var myConsoleLog = function (req, res, next) {
  console.log("I am A MIDDLEWARE");
  next(); // says im done executing.
};

// Prints current time
var serverTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

//calling middleware
//app.use(myConsoleLog);
app.use(serverTime);
app.get("/", (req, res) => {
  res.send("Hello World" + " and time is " + req.requestTime);
});

app.listen(3000, () => console.log("Server is running at port 3000...."));
