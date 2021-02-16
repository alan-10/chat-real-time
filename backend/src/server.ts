import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from "socket.io";

import cors from 'cors';

const app = express();
app.use(cors({ origin: ['*'] }));
app.use(express.json());


const server = createServer(app);


const io = new Server(server);

let totalConnection = 0;

let totalMessages = [];


interface Imessage {
  id: string;
  message: string; 
}

io.on('connection', ioSocket => {
  totalConnection++;

  console.log(`socket new connection [${totalConnection} conexões]`);

  
  io.emit('totalConnected', totalConnection)


  ioSocket.on('chatMessage', (data: Imessage) => {
    totalMessages.push(data);
    console.log(`to message is ${data.message}`);
    io.emit('chatMessage', data);
  });

  ioSocket.on('disconnect', () => {
    totalConnection--;
    console.log(`desconted new sockt `);
    io.emit('totalConnected', totalConnection);
    
  });

});


server.listen(3333, () => {
  console.log('server conected');
});




