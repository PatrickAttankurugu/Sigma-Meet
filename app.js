const express=require("express");
const http=require("http");
const { SocketAddress } = require("net");
const PORT=process.env.PORT || 3000;
//const PORT=3000;
const app=express();
const server=http.createServer(app);
const io=require("socket.io")(server);

io.on("connection",(socket)=>{
 connectedPeers.push(socket.id);
console.log(connectedPeers);
 socket.on("disconnect",()=>{
   console.log("user disconnected");

   const newConnectedPeers=connectedPeers.filter((peerSocketId)=>{
     peerSocketId !==socket.io;
   });
   connectedPeers=newConnectedPeers;
 });
});

app.use(express.static("public"));


app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");

});
let connectedPeers=[];

server.listen(PORT,()=>
  console.log(`listening on ${PORT}`));
