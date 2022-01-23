import { Model, Optional } from "sequelize";

export interface IOrderItem {
    id : string;
    quantity : number;
};

export interface IOrderItemPrimaryKey extends Pick<IOrderItem,'id'> {}
export interface IOrderItemInput extends Optional<IOrderItem, 'id'> {}
export class IOrderItemInstance extends Model<IOrderItem,IOrderItemInput> {}