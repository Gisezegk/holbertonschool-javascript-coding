#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/:id';



request.get(url + id, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    if (response.statusCode === 200) {
      console.log(JSON.parse(body).title);
    }
  }
});
