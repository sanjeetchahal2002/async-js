/* eslint-disable no-undef */
const genrateData = require('./helperFunctions/genrateData');
const fs = require('fs');

function createAndDeleteDir1(src) {
  for (let totalFiles = 1; totalFiles <= 3; totalFiles++) {
    fs.writeFile(
      src + `/FileName${totalFiles}.json`,
      JSON.stringify(genrateData()),
      (error) => {
        if (error) {
          console.log(error);
        }
        console.log(`File Name${totalFiles} is saved`);
        fs.unlink(`./${src}/FileName${totalFiles}.json`, (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log(`File Name${totalFiles} is deleted`);
          }
        });
      },
    );
  }
}

module.exports = createAndDeleteDir1;
