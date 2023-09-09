const textToUpperCase = require('./Problem2Parts/textToUpperCase');
const writeFile = require('./Problem2Parts/writeFile');
const textToLowerCase = require('./Problem2Parts/textToLowerCase');
const fetchingAndsortingContent = require('./Problem2Parts/fetchingAndsortingContent');
const deleteFiles = require('./Problem2Parts/deleteFiles');

async function main() {
  try{
    const content = await textToUpperCase();
    const sourceForUpperText = './uppercase.txt';
    writeFile(sourceForUpperText, content);
    writeFile('./filenames.txt', sourceForUpperText + '\n');
    await textToLowerCase(sourceForUpperText);
    const filesnamesArray = await fetchingAndsortingContent();
    await deleteFiles(filesnamesArray);
  }catch(error){
    console.log("Error : ",error)
  }
}

module.exports = main;
