import productList from '../productAPI'


const sportsList = []
const electronicsList = []

let product
for (let index = 0; index < productList.length; index++) {

    product = productList[index]

    if (product.category === 'sports') {
        sportsList.push(product)
    } else {
        electronicsList.push(product)
    }
}



export {
    sportsList,
    electronicsList
}