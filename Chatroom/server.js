const express = require("express")
const app = express()
const io = require("socket.io");

app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 8080;

var server = app.listen(PORT);
var socket = io.listen(server);

socket.on("connection", function(socket) {

  socket.on("hello", function(data) {
    console.log(data)
  })

})
