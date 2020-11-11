const express = require("express");
const bodyparser = require("body-parser");

let app = express();

// body parsor as middleware
app.use(bodyparser.urlencoded({ extended: false }));

// middleware for express (routing purpose)
// we serving static files using express.static
// which is in the directory of current directory + public
app.use("/login", express.static(__dirname + "/public"));

// handling general get req
app.get("/", (req, res) => {
  res.send("Hello, my application");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  // do some databse process
  //once logged in redirecting user to the my application page
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
