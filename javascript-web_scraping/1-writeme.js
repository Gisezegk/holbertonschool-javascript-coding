#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const stringToWrite = process.argv[3];

if (!filePath || !stringToWrite) {
  console.error("Error: Missing file path or string to write.");
  process.exit(1);
}

fs.writeFile(filePath, stringToWrite, 'utf8', (err) => {
  if (err) {
    console.error(err);
  }
});