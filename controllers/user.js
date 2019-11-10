const Users = require('../model/user')
const Sequelize = require('sequelize')

const listAll = async (ctx) => {
  const data = await Users.findAll()
  ctx.body = {
    data,
    code: 1000,
    desc: 'success'
  }
  console.log('this is listAll: ', data)
}
const list = async (ctx) => {
  Sequelize.query('desc users').then(res => {
    console.log(JSON.stringify(res))
    ctx.body = {
      res,
      code: 1000,
      desc: 'success'
    }
  })
}

const destroy = async ctx => {
  await Users.destroy({ where: ctx.request.body })
  ctx.body = {
    code: 1000,
    desc: '删除成功'
  }
}

module.exports = {
  listAll,
  list,
  destroy
}