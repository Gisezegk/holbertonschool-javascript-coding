#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
const stringy = process.argv[3];

fs.writeFile(filePath, 'utf8', stringy, (err) => {
  if (err) {
    console.error(err);
  }
});
