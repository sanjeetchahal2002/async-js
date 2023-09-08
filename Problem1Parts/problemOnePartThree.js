const helperFunctions = require('./HelperFunctionForProject1Part3/createFileForPart3')
const createFileThree = helperFunctions.createFileThree
const deleteFileThree = helperFunctions.deleteFileThree

async function main(src,filesNumber) {
    try{
        const messageCreate = await createFileThree(src,filesNumber)
        console.log(messageCreate)
        const messageDelete = await deleteFileThree(src,filesNumber)
        console.log(messageDelete)
    }catch (error){
        console.log("Error", error)
    }
}


function createAndDeleteDir3(src){
    for(let files = 1;files <= 3;files++){
        main(src,files)
    }
}
module.exports = createAndDeleteDir3


