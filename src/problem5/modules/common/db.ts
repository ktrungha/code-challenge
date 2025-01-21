import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('tech', 'postgres', 'test', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
})
