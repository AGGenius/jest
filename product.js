let products = [];
let baseID = 0

function resetProducts() {
    products = [
        {
            id: 1,
            name: "paper",
            value: 30
        },
        {
            id: 2,
            name: "rock",
            value: 15
        },
        {
            id: 3,
            name: "scissors",
            value: 20
        }
    ];

    baseID = products[products.length - 1].id;
}

function addProduct(productName, productValue) {
    if(typeof productName === 'undefined' || typeof  productValue === 'undefined') {
        throw new Error('One of the parameters is not defined.');
    }
    products.forEach(product => {
        if(product.name === productName) {
            throw new Error('This product alrready exists in the database.');
        }
    });

    baseID++;

    const newProduct = {
        id: baseID,
        name: productName,
        value: productValue
    }

    products.push(newProduct);

    return newProduct;
}

function removeProduct(productId) {  
    if(!checkForProduct(productId)) { 
        throw new Error('This product does not exist in the database.'); 
    }  

    products.forEach(product => {
        if(product.id === productId) {
            products = products.filter(product => product.id !== productId)
        }
    });
        
    return true; 
}

function getProducts(){}

function getProduct(productId) {
    if(!checkForProduct(productId)) {
        throw new Error('This product does not exist in the database.')
    }

    let foundProduct = {};

    products.forEach(product => {
        if(product.id === productId) {
            foundProduct = products.filter(product => product.id === productId)
        }
    });

    return foundProduct;
}

function updateProduct(productId, productName, productValue) {
    if(!checkForProduct(productId)) {
        throw new Error('This product does not exist in the database.')
    }

    const productToUpdate = productId - 1;

    if(typeof productName === 'undefined' || productName === "") {
        products[productToUpdate].value = productValue;
    } else if (typeof productValue === 'undefined' || productValue === "") {
        products[productToUpdate].name = productName;
    } else {
        products[productToUpdate].name = productName;
        products[productToUpdate].value = productValue;
    }

    return products[productToUpdate];
}

function checkForProduct(productId) {
    const checkValue = productId <= products.length;

    return checkValue;
}


module.exports = { resetProducts, addProduct, removeProduct, getProduct, updateProduct}