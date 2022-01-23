import { Model, Optional } from "sequelize";

export interface IProduct {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    description: string;
}

export interface IProductPrimaryKey extends Pick<IProduct,'id'> {};

export interface IProductInput extends Optional<IProduct, 'id'> { }
export class IProductInstance extends Model<IProduct, IProductInput> { }
