const fs = require('fs')
function deleteFile(src,fileNumber){
    fs.unlink(src,(error) => {
        if(error){
            console.log(error)
        }else{
            console.log(`FileName ${fileNumber}is deleted`)
        }
    })
}

module.exports = deleteFile