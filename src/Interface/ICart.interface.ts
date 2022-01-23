import {Model,Optional} from 'sequelize';

// export interface ICart {
//     products: {
//         id: string,
//         qty: number
//     }[];
//     totalPrice: number
// }

export interface ICart {
    id : string;
};

export interface ICartPrimaryKey extends Pick<ICart,'id'> {}
export interface ICartInput extends Optional<ICart, 'id'> {}
export class ICartInstance extends Model<ICart,ICartInput> {}