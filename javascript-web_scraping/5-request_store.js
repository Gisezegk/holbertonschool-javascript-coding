#!/usr/bin/node

const req = require('request');
const fs = require('fs');
req(process.argv[2], (error, response, content) => {
  if (error) {
    console.error(error);
  }
  fs.writeFile(process.argv[3], content, (er) => {
    if (error) {
      console.error(er);
    }
  });

});
