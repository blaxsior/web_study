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
import { ICart, ICartInstance } from '../Interface/ICart.interface.js';
import { ICartItemInput } from '../Interface/ICartItem.interface.js';
import { IProductPrimaryKey } from '../Interface/IProduct.interface.js';
import { IUserPrimaryKey } from '../Interface/IUser.interface.js';
import { sequelize as db } from '../util/database.js';
import { CartItem } from './cart-item.model.js';
import { Product } from './product.model.js';
import { User } from './user.model.js';

export class Cart extends ICartInstance implements ICart {
    declare id: string;

    declare getUser: BelongsToGetAssociationMixin<User>;
    declare setUser: BelongsToSetAssociationMixin<User, IUserPrimaryKey>;
    declare createUser: BelongsToCreateAssociationMixin<User>;

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
    declare CartItem: CartItem | ICartItemInput; // 단순 객체로 사용해야 되는 경우가 존재함...
}

Cart.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    sequelize: db,
    tableName: 'cart'
});