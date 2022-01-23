import { Model, Optional } from "sequelize";

export interface ICartItem {
    id : string;
    quantity : number;
};

export interface ICartItemPrimaryKey extends Pick<ICartItem,'id'> {}
export interface ICartItemInput extends Optional<ICartItem, 'id'> {}
export class ICartItemInstance extends Model<ICartItem,ICartItemInput> {}