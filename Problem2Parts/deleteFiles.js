const fs = require('fs')
async function deleteFiles(filesnamesArray) {
    setTimeout(() => {
      for (let files in filesnamesArray) {
        if (filesnamesArray[files] != '') {
          fs.unlink(filesnamesArray[files], () => {
            console.log(`${filesnamesArray[files]} Deleted`);
          });
        }
        console.log(filesnamesArray[files]);
      }
    }, 5000);
  }
module.exports =  deleteFiles