const fs = require('fs');

// class  Helpers {
//   read() {
//     return fs.readFile('./db.json');
//   }
// }

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

// module.exports = new Helpers();

module.exports = readAndAppend;