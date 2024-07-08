#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/:id';

if (!id) {
  console.error("Error: No movie ID provided.");
  process.exit(1);
}

request.get(url + id, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    if (response.statusCode === 200) {
      console.log(JSON.parse(body).title);
    }
  }
});
