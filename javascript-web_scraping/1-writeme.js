#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
const stringy = process.argv[3];

if (!filePath) {
  console.error(err);
  process.exit(1);
}

fs.readFile(filePath, stringy, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
