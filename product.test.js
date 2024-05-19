const {resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product.js');

// To reset products before a test -->
beforeEach(() => {
    resetProducts();
})

/* To reset products after a test -->
afterEach(() => {
    resetProducts();
});
*/

describe('addProduct', () => {
    it('Should return true if a new product is added to the databse.', () => {
        expect(addProduct('pomelo', 9001)).not.toBe(null);
    });
    it('Both parameter should be defined beforehand', () => {
        expect(() => addProduct('paper')).toThrow('One of the parameters is not defined.');
    });
    it('Product shouldnt already exist in the database', () => {
        expect(() => addProduct('paper', 50)).toThrow('This product alrready exists in the database.');
    });
});


describe('removeProduct', () => {
    it('Should return true if a existent product is removed from the database.', () => {
        expect(removeProduct(1)).toBe(true);
    });
    it('Product should exist to be removed.', () => {
        expect(() => removeProduct(25)).toThrow('This product does not exist in the database.');
    });
});


describe('getProduct', () => {
    it('Should return true if return gets a existent product from the database.', () => {
        expect(getProduct(1)).not.toBe(null);
    });
    it('Product should exist to be able to retrieve it.', () => {
        expect(() => getProduct(25)).toThrow('This product does not exist in the database.');
    });
});


describe('updateProduct', () => {
    it('Should return true if the product changes values', () => {
        expect(updateProduct(1, 'bigPaper', 75)).not.toBe(null);
    });
    it('Product should already exist to be able to update it.', () => {
        expect(() => updateProduct(25, 'Gafa', 160)).toThrow('This product does not exist in the database.');
    });
    it('Should update only the name.', () => {
        expect(updateProduct(2, 'smallRock')).not.toBe(null);
    });
    it('Should update only the value.', () => {
        expect(updateProduct(3, "", 60)).not.toBe(null);
    });
});

