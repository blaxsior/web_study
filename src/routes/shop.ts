import express from 'express';
import { getCart, getCheckout, getIndex, getOrders, getProduct, getProducts, postCart, postCartDeleteProduct, postOrder } from '../Controller/shop.js';

export const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);
/*GET : 개별 제품에 접근*/
router.get('/products/:prodId', getProduct);

router.get('/cart', getCart);

router.post('/cart', postCart);

router.post('/cart-delete-item', postCartDeleteProduct);

router.get('/orders', getOrders);

router.post('/create-order', postOrder);

router.get('/checkout', getCheckout);
