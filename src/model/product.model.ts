import {
    DataTypes,
    BelongsToGetAssociationMixin,
    BelongsToSetAssociationMixin,
    BelongsToManyGetAssociationsMixin,
    BelongsToManyCountAssociationsMixin,
    BelongsToManyHasAssociationMixin,
    BelongsToManyHasAssociationsMixin,
    BelongsToManySetAssociationsMixin,
    BelongsToManyAddAssociationMixin,
    BelongsToManyAddAssociationsMixin,
    BelongsToManyRemoveAssociationMixin,
    BelongsToManyRemoveAssociationsMixin,
    BelongsToManyCreateAssociationMixin,
    BelongsToCreateAssociationMixin,
} from 'sequelize';
import { sequelize as db } from '../util/database.js';
import { IProduct, IProductInstance } from '../Interface/IProduct.interface.js';
import { IUserPrimaryKey } from '../Interface/IUser.interface.js';
import {ICartPrimaryKey } from '../Interface/ICart.interface.js';
import { Cart } from './cart.model.js';
import { User } from './user.model.js';
import { CartItem } from './cart-item.model.js';
import { Order } from './order.model.js';
import { OrderItem } from './order-item.model.js';
import { IOrderPrimaryKey } from '../Interface/IOrder.interface.js';
import { IOrderItemInput } from '../Interface/IOrderItem.interface.js';
import { ICartItemInput } from '../Interface/ICartItem.interface.js';


export class Product extends IProductInstance implements IProduct {
    declare id: number;
    declare title: string;
    declare imageUrl: string;
    declare price: number;
    declare description: string;

    /*with User*/
    declare getUser?: BelongsToGetAssociationMixin<User>;
    declare setUser?: BelongsToSetAssociationMixin<User, IUserPrimaryKey>;
    declare createUser?: BelongsToCreateAssociationMixin<User>;

    /*with Cart*/
    declare getCarts: BelongsToManyGetAssociationsMixin<Cart>;
    declare countCarts: BelongsToManyCountAssociationsMixin
    declare hasCart: BelongsToManyHasAssociationMixin<Cart, ICartPrimaryKey>
    declare hasCarts: BelongsToManyHasAssociationsMixin<Cart, ICartPrimaryKey>
    declare setCarts: BelongsToManySetAssociationsMixin<Cart, ICartPrimaryKey>
    declare addCart: BelongsToManyAddAssociationMixin<Cart, ICartPrimaryKey>
    declare addCarts: BelongsToManyAddAssociationsMixin<Cart, ICartPrimaryKey>
    declare removeCart: BelongsToManyRemoveAssociationMixin<Cart, ICartPrimaryKey>
    declare removeCarts: BelongsToManyRemoveAssociationsMixin<Cart, ICartPrimaryKey>
    declare createCart: BelongsToManyCreateAssociationMixin<Cart>;
    declare CartItem: CartItem|ICartItemInput;

    /*with Order*/
    declare getOrders: BelongsToManyGetAssociationsMixin<Order>;
    declare countOrders: BelongsToManyCountAssociationsMixin
    declare hasOrder: BelongsToManyHasAssociationMixin<Order, IOrderPrimaryKey>
    declare hasOrders: BelongsToManyHasAssociationsMixin<Order, IOrderPrimaryKey>
    declare setOrders: BelongsToManySetAssociationsMixin<Order, IOrderPrimaryKey>
    declare addOrder: BelongsToManyAddAssociationMixin<Order, IOrderPrimaryKey>
    declare addOrders: BelongsToManyAddAssociationsMixin<Order, IOrderPrimaryKey>
    declare removeOrder: BelongsToManyRemoveAssociationMixin<Order, IOrderPrimaryKey>
    declare removeOrders: BelongsToManyRemoveAssociationsMixin<Order, IOrderPrimaryKey>
    declare createOrder: BelongsToManyCreateAssociationMixin<Order>;
    declare OrderItem: OrderItem|IOrderItemInput;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL(20,5)
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize: db,
        tableName: 'product'
    }
);

// export const Product = db.define<IProductInstance>('product', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     title: {
//         type: DataTypes.STRING
//     },
//     price: {
//         type: DataTypes.INTEGER
//     },
//     imageUrl: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }
// );
