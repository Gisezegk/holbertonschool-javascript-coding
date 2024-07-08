#!/usr/bin/node
const axios = require('axios');
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

axios.get(url).then((response) => {
    const values = Object.values(response.data);
    console.log(`${values[0]}`);
})
    .catch(err => console.log(err));
