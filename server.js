//import config, {nodeEnv, logStars} from './config';

//logStars('Function');
//console.log(config, nodeEnv);

//Learning about HTTP/HTTPS modules
/*import https from 'https';

https.get('https://www.lynda.com', res => {
  console.log('Response status code: ', res.statusCode);

  res.on('data', chunk => {
    console.log(chunk.toString());
  });
}); */
/*import http from 'http';

const server = http.createServer((req,res)=> {
  res.write('hello HTTP\n'); //we can stream data to the user
  setTimeout(()=> {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});// the callback for this request recieves 2 objects, request objects
//and response objects


server.listen(8080); // runs the server on a certain port */

// **********LEARNING EXPRESS*************//
import config from './config';
import apiRouter from './api';
//import fs from 'fs';

import express from 'express';
const server = express(); // creats server
server.get('/', (req,res)=> {
  res.send('Hello Express');
});
server.use('/api', apiRouter);

server.use(express.static('public')); //will express any file in the public document
/*
server.get('/about.html', (req,res)=> {
  fs.readFile('./about.html', (err,data) => {
    res.send(data.toString()); // will send the about,html file to the respond file
  });
}); */

server.listen(config.port, ()=> {
  console.info('Express listening on port ', config.port);
});
