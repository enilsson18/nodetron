var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 2000;

app.get('/', function(req,res){
  res.sendFile(dirname__ + '/index.html');
});

io.on('connection', function(socket){
  
});