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
import config from './config';
import express from 'express';
//import fs from 'fs';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: '...'
    });

});



server.get('/', (req, res) => {
    res.send('hello express');

});
/* server.get('/about.html', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    });

}); */ //this can be simpler check it out below 

server.use(express.static('public'));

server.use('api', apiRouter);

server.listen(config.port, () => {
    console.info('express listening on port ', config.port);
});