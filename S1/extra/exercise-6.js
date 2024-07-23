const goodProducts = [];

const badProducts = [];

const products = [
    { name: 'Gorra de rodilla', sellCount: 10 },
    { name: 'Pantalón de pana', sellCount: 302 },
    { name: 'Reloj de papel albal', sellCount: 23 },
    { name: 'Inpar de zapatos', sellCount: 6 }
];

products.forEach(product => {
    if (product.sellCount > 20) {
        goodProducts.push(product)
    } else {
        badProducts.push(product)
    }
});

console.log(goodProducts);
console.log(badProducts);