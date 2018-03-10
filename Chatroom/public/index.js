var socket = io.connect();

socket.emit("hello", "A user has connected")

socket.on("onReady", function(data) {
  console.log(data)
})

socket.on("messageReceive", function(data) {
  console.log(data)
  var message = $(document.createElement("div"))
  var messageText = $(document.createElement("p"))
  messageText.html(data)
  message.addClass("text-box left")
  $("#aa").append(message)
  message.append(messageText)
})

$("#message-button").click(function() {
  var messageContent = $("#message-send").val()
  socket.emit("messageSend", messageContent)
  var message = $(document.createElement("div"))
  var messageText = $(document.createElement("p"))
  messageText.html(messageContent)
  message.addClass("text-box right")
  $("#aa").append(message)
  message.append(messageText)
})
