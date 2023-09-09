const createDirectory = require('./Problem1Parts/helperFunctions/createDirectory.js')

const createAndDeleteDir1 = require('./Problem1Parts/problemOnePartOne.js')
const createAndDeleteDir2 = require('./Problem1Parts/problemOnePartTwo.js')
const createAndDeleteDir3 = require('./Problem1Parts/problemOnePartThree.js')



for(let parts = 1;parts<=3;parts++){
    createDirectory(`./Directory${parts}`)
}

function main(){
    console.log("Part 1 : ")
    createAndDeleteDir1('./Directory1')
    console.log("Part 2 : ")
    createAndDeleteDir2('./Directory2')
    console.log("Part 3 : ")
    createAndDeleteDir3('./Directory3')
}

module.exports = main


