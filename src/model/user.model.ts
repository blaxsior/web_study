import {
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyCountAssociationsMixin,
    HasManyHasAssociationMixin,
    HasManyHasAssociationsMixin,
    HasManySetAssociationsMixin,
    HasManyAddAssociationsMixin,
    HasManyRemoveAssociationMixin,
    HasManyRemoveAssociationsMixin,
    HasManyCreateAssociationMixin,
    HasOneGetAssociationMixin,
    HasOneSetAssociationMixin,
    HasOneCreateAssociationMixin
} from 'sequelize'
import { sequelize as db } from '../util/database.js';
import { IUser, IUserInstance } from "../Interface/IUser.interface.js";
import { IProductPrimaryKey } from '../Interface/IProduct.interface.js';
import { ICartInstance, ICartPrimaryKey } from '../Interface/ICart.interface.js';
import { Product } from './product.model.js';
import { Cart } from './cart.model.js';
import { Order } from './order.model.js';
import { IOrderPrimaryKey } from '../Interface/IOrder.interface.js';

export class User extends IUserInstance  implements IUser {
    declare id: number;
    declare name: string;
    declare email: string;

    
    /*with Product*/
    declare getProducts: HasManyGetAssociationsMixin<Product>;
    declare countProducts: HasManyCountAssociationsMixin;
    declare hasProduct: HasManyHasAssociationMixin<Product, IProductPrimaryKey>;
    declare hasProducts: HasManyHasAssociationsMixin<Product, IProductPrimaryKey>;
    declare setProducts: HasManySetAssociationsMixin<Product, IProductPrimaryKey>;
    declare addProduct: HasManyAddAssociationMixin<Product, IProductPrimaryKey>;
    declare addProducts: HasManyAddAssociationsMixin<Product, IProductPrimaryKey>;
    declare removeProduct: HasManyRemoveAssociationMixin<Product, IProductPrimaryKey>;
    declare removeProducts: HasManyRemoveAssociationsMixin<Product, IProductPrimaryKey>;
    declare createProduct: HasManyCreateAssociationMixin<Product>;
    // 반드시 declare로 선언해야 한다!

    /*with Cart*/
    declare getCart: HasOneGetAssociationMixin<Cart>;
    declare setCart: HasOneSetAssociationMixin<Cart,IOrderPrimaryKey>;
    declare createCart: HasOneCreateAssociationMixin<Cart>;

    /*with Order*/
    declare getOrders: HasManyGetAssociationsMixin<Order>;
    declare countOrders: HasManyCountAssociationsMixin;
    declare hasOrder: HasManyHasAssociationMixin<Order, IOrderPrimaryKey>;
    declare hasOrders: HasManyHasAssociationsMixin<Order, IOrderPrimaryKey>;
    declare setOrders: HasManySetAssociationsMixin<Order, IOrderPrimaryKey>;
    declare addOrder: HasManyAddAssociationMixin<Order, IOrderPrimaryKey>;
    declare addOrders: HasManyAddAssociationsMixin<Order, IOrderPrimaryKey>;
    declare removeOrder: HasManyRemoveAssociationMixin<Order, IOrderPrimaryKey>;
    declare removeOrders: HasManyRemoveAssociationsMixin<Order, IOrderPrimaryKey>;
    declare createOrder: HasManyCreateAssociationMixin<Order>;
};

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize: db,
        tableName: 'user'
    }
);

// export const User = db.define<IUserInstance>('user', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// });