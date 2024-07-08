#!/usr/bin/node

const req = require('request');
req('https://swapi-api.hbtn.io/api/films/' + process.argv[2], (error, content) => {
  if (error) {
    console.error(error);

  }
  console.log(JSON.parse(content.body).title);
});
