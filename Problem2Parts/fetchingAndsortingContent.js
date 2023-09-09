const fs = require('fs')



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
        for (let files = 1; files < filesnamesArray.length; files++) {
            const src3 = filesnamesArray[files];
            if (src3 != '') {
                const dataLower = await fs.promises.readFile(src3);
                    getAllSentence.push(dataLower);
            }
        }
        getAllSentence.sort();
        for (let i = 1; i < getAllSentence.length; i++) {
            const data = getAllSentence[i];
            if(data !== ' '){
                fs.promises.appendFile('./sorted.txt', data + '\n');
            }
        }
        let getSortedFileData = await fs.promises.readFile('./sorted.txt')
        fs.promises.writeFile('./sorted.txt',getSortedFileData)
        fs.promises.appendFile('./filenames.txt', './sorted.txt');
        filesnamesArray.push('./sorted.txt');
        return filesnamesArray;
    }catch(error){
        console.log(error)
    }
}
module.exports = fetchingAndsortingContent