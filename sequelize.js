const Sequelize = require('sequelize')
const config = require('./database.json')
const sequelize = new Sequelize( 
  config.database,
  config.user,
  config.password,
  {
    port: config.port,
    host: config.server,
    dialect: config.driver,
    // dialectOptions: {
    //   socketPath: '/tmp/mysql.sock' // 指定套接字文件路径
    // },
    define: {
      timestamps: false
    }
  }
)
sequelize.authenticate().then(() => {
  console.log('。。。 MYSQL 连接成功 。。。')
}).catch(err => {
  console.log('... mysql连接失败 ...', err)
})
// 根据模型自动创建表
sequelize.sync()
module.exports = sequelize