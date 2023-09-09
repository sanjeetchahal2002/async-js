const fs = require('fs');
async function writeFile(destination,content) {
    try {
      await fs.promises.writeFile(destination, content);
      console.log(`Writing ${destination} File` )
    } catch(error) {
      console.log(`Error in Writing ${destination} File` + error);
    }
}

module.exports = writeFile