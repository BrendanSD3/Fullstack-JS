/* import http from 'http';
const server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
    res.write('hello HTTP:\n');
    setTimeout(() => {
        res.write('I can Stream!\n');
        res.end();
    }, 3000);
}); */ //HTTP server

// Express Server
import express from 'express';