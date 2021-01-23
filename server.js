
const express = require("express");
const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello, world!");
});

app.get("/Contact", function(request, response){
  response.send("Contact me at: angla@gmail.com");
});

app.get("/about", function(request, response){
  response.send("My name is tian I own this website");
});

app.get("/hobbies", function(request, response){
  response.send("play computer games");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
