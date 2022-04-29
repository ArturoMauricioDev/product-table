const faker = require('faker')
const { getRandomInt } = require('./getRandom')

const theme = ['black', 'red', 'blue']
const category = ['electronics', 'sports']

const productList = []

for (let index = 0; index < 20; index++) {
    const newProduct = {
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        weight: faker.datatype.number(500),
        description: faker.commerce.productDescription(),
        image: faker.internet.url(),
        category: category[getRandomInt(0, theme.length - 1)],
        theme: theme[getRandomInt(0, theme.length - 1)]
    }
    productList.push(newProduct)
}


module.exports = productList