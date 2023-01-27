const { DataTypes } = require("sequelize");
const { db } = require("../database/bd");

const Repairs = db.define('repairs',{
  id:{
    primaryKey:true,
    allowNull:false,
    autoIncrement:true,
    type:DataTypes.INTEGER
  },
  amount:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  senderUserId:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  receiverUserId:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
})

module.exports = Repairs