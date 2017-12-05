import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Twitter from 'twitter';

var client = new Twitter({
  consumer_key:'yzOGIgdFO0RET6j9rjNio3Cm6',
  consumer_secret:'2yPkrkt0CIHpbIHUPh9AOqonW4zfGn7BpYsqTkAupQngpiMb1r',
  access_token_key:'938017226992553984-dRm60aVBgJFFv0HKBKAKEKs8nIw4MW7',
  access_token_secret: 'yh3t7bzMJxyyGR55frSU4l64Nalgiy2beMNMdftPLZ5RW'
});
// var error = function (err, response, body) {
//         console.log('ERROR [%s]', err);
//     };
//     var res = function (data) {
//         console.log('Data [%s]', data);
//     };
//  let twitter = new Twitter(config);

client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
