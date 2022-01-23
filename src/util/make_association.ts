import { CartItem } from "../model/cart-item.model.js";
import { Cart } from "../model/cart.model.js";
import { OrderItem } from "../model/order-item.model.js";
import { Order } from "../model/order.model.js";
import { Product } from "../model/product.model.js";
import { User } from "../model/user.model.js";


// one to one : hasOne / belongsTo
// one to many : hasMany / belongsTo
// many to many : belongsToMany / belongsToMany

export const make_association = () => {
    //User : Product => one to many
    User.hasMany(Product);
    Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });

    //User : Cart => one to one
    User.hasOne(Cart);
    Cart.belongsTo(User, {constraints: true});

    //User : Order => one to many
    User.hasMany(Order);
    Order.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });

    //Cart : Product => many to many, through CartItem
    Cart.belongsToMany(Product, {through : CartItem});
    Product.belongsToMany(Cart, {through : CartItem});

    //Order : Product => many to many, through OrderItem
    Order.belongsToMany(Product, {through: OrderItem, });
    Product.belongsToMany(Order, {through: OrderItem});
}