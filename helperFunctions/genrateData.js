const faker = require('faker')
function genrateData(){
    const newData  = {
        name : faker.name.findName(),
        email : faker.internet.email()
    }
    return newData
}

module.exports = genrateData