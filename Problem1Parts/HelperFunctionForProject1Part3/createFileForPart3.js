const fs = require('fs');
const gentrateData = require('../helperFunctions/genrateData');

async function createFileThree(src,fileNumber) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      `${src}/fileName${fileNumber}.json`,
      JSON.stringify(gentrateData()),
      (error) => {
        if (error) {
          reject(`You Got error in File Creation! ${error} `);
        } else {
          resolve(`File Created  in ${src}`);
        }
      },
    );
  });
}

async function deleteFileThree(src,filesNumber) {
  return new Promise((resolve, reject) => {
    fs.unlink(`${src}/fileName${filesNumber}.json`, (error) => {
      if (error) {
        reject('Error in delete File');
      } else {
        resolve('File Deleted');
      }
    });
  });
}


module.exports = {createFileThree,deleteFileThree}
