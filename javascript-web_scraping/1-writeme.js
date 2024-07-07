#!/usr/bin/node

const fs = require('fs');
const filepath = process.argv[2];
const writedata = process.argv[3];

fs.writeFile(filepath, writedata, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});