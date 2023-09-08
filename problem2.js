const { error } = require('console');
const fs = require('fs');

async function textToUpperCase() {
  try {
    const content = await fs.promises.readFile('./lipsum.txt', 'utf8');
    return content.toUpperCase();
  } catch(error) {
    console.log('Error in Upper Case' + error);
  }
}

function writeFile(destination,content) {
  try {
    fs.promises.writeFile(destination, content);
  } catch(error) {
    console.log('Error in Writing ${destination} File' + error);
  }
}

async function textToLowerCase(destination) {
    try{
        const lowerContent = await fs.promises.readFile(destination, 'utf-8');
        let element = 1;
        lowerContent
        .toLowerCase()
        .split('.')
        .forEach((sentence) => {
            let sourceForEverySentence = `./sentences/FileName${element}.txt`;
            fs.promises.writeFile(sourceForEverySentence, sentence);
            fs.promises.appendFile('./filenames.txt', sourceForEverySentence + '\n');
            element++;
        });
    }catch(error){
        console.log('Error in Converting content to Lower' + error)
    }
}

async function fetchingAndsortingContent() {
    try{
        const filesnamesArray = [];
        const contentofFilesnameFile = await fs.promises.readFile(
            './filenames.txt',
            'utf-8',
            );
        contentofFilesnameFile.split('\n').forEach((filesName) => {
            filesnamesArray.push(filesName);
        });
        const getAllSentence = [];
        for (let files = 0; files < filesnamesArray.length; files++) {
            const src3 = filesnamesArray[files];
            if (src3 != '') {
                const dataLower = await fs.promises.readFile(src3);
                getAllSentence.push(dataLower);
            }
        }
        getAllSentence.sort();
        for (let i = 0; i < getAllSentence.length; i++) {
            const data = getAllSentence[i];
            fs.promises.appendFile('./sorted.txt', data + '\n');
        }
        fs.promises.appendFile('./filenames.txt', './sorted.txt');
        filesnamesArray.push('./sorted.txt');
        return filesnamesArray;
    }catch(error){
        console.log(error)
    }
}


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

async function main() {
  const content = await textToUpperCase();
  const sourceForUpperText = './uppercase.txt'
  writeFile(sourceForUpperText,content);
  writeFile('./filenames.txt',sourceForUpperText +'\n') 
  await textToLowerCase(sourceForUpperText);
  const filesnamesArray = await fetchingAndsortingContent();
  deleteFiles(filesnamesArray);
}

main();
