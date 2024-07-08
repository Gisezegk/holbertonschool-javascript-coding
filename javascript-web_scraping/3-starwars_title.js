#!/usr/bin/node

const request = require('request');
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request.get(url, (error, body) => {
  if (error) {
    console.error(error);
  } else {

    console.log(`${JSON.parse(body).title}`);
  }
});
