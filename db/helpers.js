const fs = require('fs');

class  Helpers {
  read() {
    return fs.readFile('./db.json');
  }
}

module.exports = new Helpers();