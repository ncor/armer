import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { detector } from '../lib/keyboard/detector';
import { Keystroke } from '../lib/keyboard/types';


const app = express();
export const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: [ 'GET', 'POST' ]
    }
});


io.on('connection', socket => {
    console.log('New socket.io connection');

    const keystrokeHandler = (keystroke: Keystroke) => {
        socket.emit('keystroke', keystroke);
        console.log('Emmited keystroke event to client');
    }

    detector.on(keystrokeHandler);

    socket.on('disconnect', () => {
        detector.unlisten(keystrokeHandler);
        console.log('Lost socket.io connection');
    });

    socket.on('debug', console.log);
});

server.listen(8080, () => {
    console.log('Started server at port :8080');
});
