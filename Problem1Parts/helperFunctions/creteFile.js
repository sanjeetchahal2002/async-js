const genrateData = require('./genrateData')
const fs = require('fs')
function createFile(src,fileNumber){
    console.log(src)
    fs.writeFile(src,JSON.stringify(genrateData),(error) => {
        if(error){
            return error
        }else{
            return `FileName ${fileNumber} is generated`
        }    
    })
    return true;
}

module.exports = createFile