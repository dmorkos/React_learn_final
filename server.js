//import config, {nodeEnv, logStars} from './config';

//logStars('Function');
//console.log(config, nodeEnv);

//Learning about HTTP/HTTPS modules
import https from 'https';

https.get('https://www.lynda.com', res => {
  console.log('Response status code: ', res.statusCode);

  res.on('data', chunk => {
    console.log(chunk.toString());
  });
});
