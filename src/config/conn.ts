import { Sequelize } from 'sequelize'

export const db = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || '', {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: Number(process.env.DB_PORT),
})
