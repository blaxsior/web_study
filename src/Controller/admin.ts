import { RequestHandler } from "express";
import { IProduct } from "../Interface/IProduct.interface.js";
import { Product } from "../model/product.model.js";

export const getAddProduct: RequestHandler = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

export const postAddProduct: RequestHandler = async (req, res, next) => {
    // const product = await Product.create({
    //     title: req.body.title,
    //     price: req.body.price,
    //     imageUrl: req.body.imageUrl,
    //     description: req.body.description,
    // });
    await req.user.createProduct({
        title: req.body.title,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
    });
    
    res.redirect('/admin/products');
};


export const getEditProduct: RequestHandler = async (req, res, next) => {
    const editMode = req.query['edit'];
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    const product = await Product.findByPk(prodId);
    if (!product) {
        return res.redirect('/');
    }
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
    });
};

export const postEditProduct: RequestHandler = async (req, res, next) => {
    const { id,
        title,
        price,
        imageUrl,
        description }: IProduct = req.body;

    const updatedProduct = await Product.findByPk(id);
    await updatedProduct?.update({ description, title, price, imageUrl });
    res.redirect('/admin/products');
};


export const getProducts: RequestHandler = async (req, res, next) => {
    const products = await Product.findAll();

    res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
    });
};

export const postDeleteProduct: RequestHandler = async (req, res, next) => {
    const prodId = parseInt(req.body.productId);
    const product = await Product.findByPk(prodId);
    await product?.destroy();
    // Product.deleteById(prodId);
    res.redirect('/admin/products');
};
