import {
    DataTypes,
    BelongsToGetAssociationMixin,
    BelongsToSetAssociationMixin,
    BelongsToCreateAssociationMixin,
    BelongsToManyGetAssociationsMixin,
    BelongsToManyCountAssociationsMixin,
    BelongsToManyHasAssociationMixin,
    BelongsToManyHasAssociationsMixin,
    BelongsToManySetAssociationsMixin,
    BelongsToManyAddAssociationMixin,
    BelongsToManyAddAssociationsMixin,
    BelongsToManyRemoveAssociationMixin,
    BelongsToManyRemoveAssociationsMixin,
    BelongsToManyCreateAssociationMixin
} from 'Sequelize';
import { IOrder, IOrderInstance } from '../Interface/IOrder.interface.js';
import { IOrderItemInput } from '../Interface/IOrderItem.interface.js';
import { IProductPrimaryKey } from '../Interface/IProduct.interface.js';
import { IUserPrimaryKey } from '../Interface/IUser.interface.js';
import { sequelize as db } from '../util/database.js';
import { OrderItem } from './order-item.model.js';
import { Product } from './product.model.js';
import { User } from './user.model.js';

export class Order extends IOrderInstance implements IOrder {
    declare id: string;

    /*with Product*/
    declare getProducts: BelongsToManyGetAssociationsMixin<Product>;
    declare countProducts: BelongsToManyCountAssociationsMixin
    declare hasProduct: BelongsToManyHasAssociationMixin<Product, IProductPrimaryKey>
    declare hasProducts: BelongsToManyHasAssociationsMixin<Product, IProductPrimaryKey>
    declare setProducts: BelongsToManySetAssociationsMixin<Product, IProductPrimaryKey>
    declare addProduct: BelongsToManyAddAssociationMixin<Product, IProductPrimaryKey>
    declare addProducts: BelongsToManyAddAssociationsMixin<Product, IProductPrimaryKey>
    declare removeProduct: BelongsToManyRemoveAssociationMixin<Product, IProductPrimaryKey>
    declare removeProducts: BelongsToManyRemoveAssociationsMixin<Product, IProductPrimaryKey>
    declare createProduct: BelongsToManyCreateAssociationMixin<Product>;
    declare OrderItem: OrderItem|IOrderItemInput;

    /*with User*/
    declare getUser?: BelongsToGetAssociationMixin<User>;
    declare setUser?: BelongsToSetAssociationMixin<User, IUserPrimaryKey>;
    declare createUser?: BelongsToCreateAssociationMixin<User>;

}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    sequelize: db,
    tableName: 'order'
});