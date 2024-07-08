#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];

if (!movieId) {
  console.error("Error: No movie ID provided.");
  process.exit(1);
}

const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error.message);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    return;
  }

  const film = JSON.parse(body);
  console.log(film.title);
});
