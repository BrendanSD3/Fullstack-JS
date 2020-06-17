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
/* import config from './config';
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
/*
server.use(express.static('public'));

server.use('api', apiRouter);

server.listen(config.port, () => {
    console.info('express listening on port ', config.port);
}); */
import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import bodyParser from 'body-parser';



import express from 'express';
const server = express();
server.use(bodyParser.json());
server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get(['/', '/contest/:contestId'], (req, res) => {
    serverRender(req.params.contestId)
        .then(({ initialMarkup, initialData }) => {
            res.render('index', {
                initialMarkup,
                initialData
            });
        })
        .catch(error => {
            console.error(error);
            res.status(404).send('Bad Request');
        });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
});