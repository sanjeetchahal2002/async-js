const fs = require('fs');
async function textToUpperCase() {
    try {
      const content = await fs.promises.readFile('./lipsum.txt', 'utf8');
      return content.toUpperCase();
    } catch(error) {
      console.log('Error in Upper Case' + error);
    }
  }
  
module.exports = textToUpperCase
