import { 
    DataTypes
 } from 'Sequelize';
import { IOrderItem, IOrderItemInstance } from '../Interface/IOrderItem.interface.js';
import { sequelize as db } from '../util/database.js';

export class OrderItem extends IOrderItemInstance implements IOrderItem {
    declare id: string;
    declare quantity: number;
}

OrderItem.init({
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
    modelName: 'orderitem'
});