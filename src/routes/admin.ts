import express from 'express';
import { getAddProduct, getEditProduct, getProducts, postAddProduct, postDeleteProduct, postEditProduct } from '../Controller/admin.js';

export const router = express.Router();

// router.use((req, res, next) => {
//     console.log(`[ip : ${req.ip}] : ${req.path}`);
//     next();
// });


// /admin/add-product => GET
router.get('/add-product', getAddProduct);
// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product',postAddProduct);

router.get('/edit-product/:productId', getEditProduct);

router.post('/edit-product', postEditProduct);

router.post('/delete-product', postDeleteProduct);