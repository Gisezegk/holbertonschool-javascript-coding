#!/usr/bin/env node

const fs = require('fs');

const filePath = process.argv[2];
const stringToWrite = process.argv[3];

if (!filePath || !stringToWrite) {
  console.error(err);
  process.exit(1);
}

// Write the string to the file in UTF-8
fs.writeFile(filePath, stringToWrite, 'utf8', (err, data) => {
  if (err) {
    // Print the error object if an error occurred
    console.error(err);
  } else {
    console.log(data);
  }
});
