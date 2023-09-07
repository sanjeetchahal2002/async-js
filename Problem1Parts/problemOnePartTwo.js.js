const fs = require('fs')
const { error } = require('console')
const createFile = require('../helperFunctions/creteFile')
const deleteFile = require('../helperFunctions/deleteFile')


function createAndDeleteDir2(src){
    for(let fileNumber = 1; fileNumber <=3;fileNumber++){
        let source = src + `/FileName${fileNumber}.json`
        const promiseForCreateFiles =  new Promise((resolve,reject) => {
            if(createFile(source,fileNumber) != error){
                resolve(`File ${fileNumber} is genrated`)
            }else{
                reject('Error occured in Making File')
            }
        })
        promiseForCreateFiles.then((data) => {
            console.log('Success:', data);
            deleteFile(source,fileNumber)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}
    
module.exports = createAndDeleteDir2