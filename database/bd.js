const {Sequelize} = require('sequelize')

const db = new Sequelize({
  dialect:'postgres',
  host:'localhost',
  username:'postgres',
  password:'sergio0_',
  database:'ecommersDB',
  logging:false
})

module.exports = { db }