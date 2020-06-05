const request = require('request');
const fs = require('fs');

let commandArg = process.argv.slice(2)[0];

const getter = function(cb, url) {
  request(url, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
    cb(body);
  });
};

const writer = function(data) {
  fs.writeFile('index.html', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

getter(writer, commandArg);