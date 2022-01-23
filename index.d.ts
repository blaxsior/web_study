import { Request } from 'express';
import { Product } from './src/model/product.model';
import { User } from './src/model/user.model';

declare global {
    namespace Express {
        export interface Request {
            user?: User;
        }
    }
}