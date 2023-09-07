const createAndDeleteDir1 = require('./Problem1Parts/problemOnePartOne.js')
const createAndDeleteDir2 = require('./Problem1Parts/problemOnePartTwo.js')
const createDirectory = require('./createDirectory.js')


for(let parts = 1;parts<=3;parts++){
    createDirectory(`./Directory${parts}`)
}
// createAndDeleteDir1('./Directory1')
createAndDeleteDir2('./Directory2')






