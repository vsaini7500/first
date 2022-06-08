
const express = require('express')


const { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
 } =require('../controller/product')
 

const router = express.Router();
 
// Route get all products
router.get('/products', getProducts);
// Route get product by id
router.get('/products/:id', getProductById);
// Route create a new product
router.post('/products', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct);
// Route delete product by id
router.delete('/products/:id', deleteProduct);
 

module.exports=router