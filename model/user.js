const sequelize = require('../sequelize')
const Sequelize = require('sequelize')

const users =  sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER(11), // 设置字段类型
    primaryKey: true, // 设置为主建
    autoIncrement: true // 自增
  },
  name: {
    type: Sequelize.STRING,
    unique: { // 唯一
      msg: '已添加'
    }
  },
  desc: {
    type: Sequelize.STRING
  }
}, {
    // sequelize会自动使用传入的模型名（define的第一个参数）的复数做为表名 设置true取消默认设置
    freezeTableName: true
});
module.exports = users