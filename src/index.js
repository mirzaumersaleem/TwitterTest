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


client.get("https://api.twitter.com/1.1/search/tweets.json", {q:'%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4'}, 
   function(error, tweets, response) {
   console.log("error"+error)
   console.log("here is the responce"+response);
   console.log("Tweets"+tweets)
});



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
