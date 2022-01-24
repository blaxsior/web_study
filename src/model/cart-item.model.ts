import { DataTypes } from 'Sequelize';
import { ICartItem, ICartItemInstance } from '../Interface/ICartItem.interface.js';
import { sequelize as db } from '../util/database.js';

export class CartItem extends ICartItemInstance implements ICartItem {
    declare id: string;
    declare quantity: number;
}

CartItem.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: db,
    modelName: 'cartitem'
});