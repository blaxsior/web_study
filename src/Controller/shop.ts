import { RequestHandler } from 'express';
import { Product } from '../model/product.model.js';

export const getProducts: RequestHandler = async (req, res, next) => {
  const products = await Product.findAll();

  res.render('shop/product-list', {
    prods: products,
    pageTitle: 'All Products',
    path: '/products'
  });
}

// /products/:prodId
export const getProduct: RequestHandler = async (req, res, next) => {
  const prodId = parseInt(req.params['prodId']);
  const product = await Product.findByPk(prodId);
  if (product) {
    return res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  }
  res.redirect('/');
};

export const getIndex: RequestHandler = async (req, res, next) => {
  const products = await Product.findAll();

  res.render('shop/index', {
    prods: products,
    pageTitle: 'Shop',
    path: '/'
  });
};

export const getCart: RequestHandler = async (req, res, next) => {
  console.log(req.user.getCart);
  const cart = await req.user.getCart();
  const products = await cart.getProducts();
  // const cart = await Cart.getCart();
  // const products = await Product.fetchAll();
  // const cartProducts = [];
  // for (let product of products) {
  //   const cartProductData = cart.products.find(
  //     prod => prod.id === product.id
  //   );
  //   if (cartProductData) {
  //     cartProducts.push({ productData: product, qty: cartProductData.qty });
  //   }
  // }
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
    products: products
  });
  // res.redirect('/');
};

export const postCart: RequestHandler = async (req, res, next) => {
  const prodId = req.body.productId;
  const cart = await req.user.getCart();
  let newQuantity = 1;

  if (cart) {
    const products = await cart.getProducts({
      where: { id: prodId }
    });

    let product: Product;

    if (products.length > 0) {
      product = products[0];
      newQuantity += product.cartitem.quantity;
    } // 존재하면
    else {
      product = await Product.findByPk(prodId);
    }

    try {
      await cart.addProduct(product, {
        through: {
          quantity: newQuantity
        }
      });
    }
    catch (err) {
      console.log(err);
      return res.redirect('/');
    }
  }
  res.redirect('/cart');
};
export const postCartDeleteProduct: RequestHandler = async (req, res, next) => {
  const prodId = req.body.productId;
  const cart = await req.user.getCart();
  const products = await cart.getProducts({
    where: { id: prodId }
  });

  const delProduct = products?.[0];
  delProduct.destroy();

  // const product = await Product.findById(prodId);
  // console.log(product);
  // Cart.deleteProduct(prodId, product.price!);
  res.redirect('/cart');
};

export const getOrders: RequestHandler = async (req, res, next) => {
  let orders;
  try {
    orders = await req.user.getOrders({include: Product});
    console.log(orders);
  }
  catch (err) {
    console.log(err.trace);
  }
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
    orders: orders
  });
};

export const postOrder: RequestHandler = async (req, res, next) => {
  console.log('post order');
  const cart = await req.user.getCart();
  const products = await cart.getProducts();
  const order = await req.user.createOrder();
  try {
    await order.addProducts(products.map(product => {
      product.orderitem = { quantity: product.cartitem.quantity };
      return product;
    }));
    await cart.setProducts(null);
  }
  catch (err) {
    console.log(err.trace);
    return res.redirect('/');
  }
  res.redirect('/orders');
}

export const getCheckout: RequestHandler = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};