import { Model, Optional} from 'sequelize';

export interface IUser {
    id: number;
    name : string;
    email : string;
}

export interface IUserPrimaryKey extends Pick<IUser,'id'> {};

export interface IUserInput extends Optional<IUser, 'id'> {}
export class IUserInstance extends Model<IUser, IUserInput> {} // for define