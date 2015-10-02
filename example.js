getcodes = require(__dirname + '/index.js');
chalk = require('chalk');

var log = {
  '2' : chalk.green,
  '3' : chalk.yellow,
  '4' : chalk.bold.red,
  '5' : chalk.bold.underline.red
};

var urls = ['https://www.google.com','http://facebook.com'];

getcodes(urls,function(err, codes){
  if(err){
    console.log(chalk.red.bold('something happened :('));
      console.log(err.stack);
    console.error(err);
    return;
  }

  for(i=0; i<urls.length; i++){
    codetype = codes[i].toString().substring(0,1);
    console.log(urls[i], log[codetype](codes[i]));
  }
});

