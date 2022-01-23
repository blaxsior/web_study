import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_ID ?? "root",
    process.env.DB_PASSWORD ?? "",
    {
        host : '127.0.0.1',
        dialect: 'mysql',
        port: 3306
    }
);
