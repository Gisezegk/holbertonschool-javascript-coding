import fs from 'fs';
import readline from 'readline';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      reject(new Error('Cannot load the database'));
    }

    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    const students = {};

    rl.on('line', (line) => {
      const [firstname, field] = line.split(',');
      if (field && firstname) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    });

    rl.on('close', () => resolve(students));
    rl.on('error', (error) => reject(new Error('Cannot load the database')));
  });
}
