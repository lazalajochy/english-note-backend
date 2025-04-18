import { Sequelize } from 'sequelize'

export const db = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
})
