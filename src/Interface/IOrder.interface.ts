import { Model, Optional } from "sequelize";

export interface IOrder {
    id : string;
};

export interface IOrderPrimaryKey extends Pick<IOrder,'id'> {}
export interface IOrderInput extends Optional<IOrder, 'id'> {}
export class IOrderInstance extends Model<IOrder,IOrderInput> {}