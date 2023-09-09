const fs = require('fs')
async function textToLowerCase(destination) {
    try{
        const lowerContent = await fs.promises.readFile(destination, 'utf-8');
        let elements  = 1
        lowerContent
        .toLowerCase()
        .split('.')
        .forEach((sentence) => {
            let sourceForEverySentence = `./sentences/FileName${elements}.txt`;
            fs.promises.writeFile(sourceForEverySentence, sentence.trim('\n',''));
            fs.promises.appendFile('./filenames.txt', sourceForEverySentence + '\n');
            elements++;
        });
    }catch(error){
        console.log('Error in Converting content to Lower' + error)
    }
}

module.exports = textToLowerCase