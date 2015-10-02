async = require('async');
request = require('superagent');

function getHead(url, done){
  request.head(url).end(function(err, res){
    if(err){
      try{ //the "error" might be http 301 or something
        done(null, err.response.statusCode);
      }catch(e){
        done(err);
      }
      return;
    }
    done(null, res.statusCode);
  });
}

module.exports = function(urls, callback){
  async.map(urls, getHead, callback);
};
