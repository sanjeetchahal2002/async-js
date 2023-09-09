const fs = require('fs')
function createDirectory(src){
    fs.mkdir(`${src}`, (error) => {
        if(error){
            console.log(error)
            return
        }
        console.log('Directory created succesfully')
    })
}

module.exports = createDirectory