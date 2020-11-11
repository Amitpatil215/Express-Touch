const express = require("express");
const app = express();

///? Get Requests

app.get("/", (req, res) => {
  res.send("Hello world");
});

//first '/' is important
app.get("/about", (req, res) => {
  res.status(200).json({
    user: "Jhon",
    balance: 2000,
    id: "123Hgyt",
  });
});

// * can be naything it is known as regex

app.get("/ab*cd", (req, res) => {
  res.send("<h1>I am a regex page</h1>");
});

//How to request: //localhost:3000/user/22/status/221
app.get("/user/:id/status/:status_id", (req, res) => {
  res.send(req.params);
});
// : used for getting input from user
app.get("/flight/:from-:to", (req, res) => {
  res.send(req.params);
});

///? Post Requests
app.post("/login", (req, res) => {
  res.send("Login Suceed");
});

///? Delete route
app.delete("/delete", (req, res) => {
  res.send("Deleting Route");
});

app.listen(3000, () => console.log(`Server is running at port 3000....`));
