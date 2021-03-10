
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// const devicetype = sequelize.define('devicetype', {
//   // Model attributes are defined here
//   ID: {
//     type: DataTypes.INTEGER,
//     allowNull: true
//   },
//   DeviceType: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   },
//   IsActive:{
//       type:DataTypes.BOOLEAN
//   }
// }, {
//   // Other model options go here
// });

// // `sequelize.define` also returns the model
// console.log(devicetype === sequelize.models.devicetype); // true
// module.exports=devicetype;

const db= require('../config/db')

const Sequelize=require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const deviceModel=db.define('deviceModel',{
  ID:{
    type:Sequelize.NUMBER,
    allowNull:false
  },
  DeviceType:{
    type:Sequelize.STRING,
    allowNull:false
  },
  IsActive:{
    type:Sequelize.BOOLEAN
  }
})

exports=deviceModel;

