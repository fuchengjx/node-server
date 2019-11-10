const Users = require('../model/user')
const Op = require('sequelize').Op

const listAll = async (ctx) => {
  const data = await Users.findAll()
  ctx.body = {
    data,
    code: 1000,
    desc: 'success'
  }
}

const login = async (ctx) => {
  ctx.response.body = `<h1>Index</h1>
        <form action='login' method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`
}

const loginIn = async (ctx) => {
  console.log('ctx: ', ctx)
  const user = ctx.request.body
  const data = await Users.findOne({
    where: {
      name: {
        [Op.eq]: `${user.userName}`
      },
      password: user.password
    }
  }).catch(
    ctx.throw(502)
  )
  ctx.body = {
    code: data ? 1000 : 1003,
    data,
    desc: data ? '登陆成功' : '账号或密码错误'
  }
}

const register = async (ctx) => {
  console.log(ctx.request)
  let name = ctx.request.body.name;
  let password = ctx.request.body.password;
  console.log('name :', name, 'password: ', password)
  await Users.upsert({name: name, password: password, desc: 'this is a desc'}, { returning: true } ).then((res)=> {
    ctx.body = 'upsert 成功 ' + res
  }).catch(err => {
    ctx.body = 'upsert 失败' + err
  })
}

const dropTable = async (ctx) => {
  await Users.drop().then((res)=> {
    console.log('删除成功', res)
    ctx.body = '删除成功'
  }).catch((err)=> {
    console.log('删除失败', err)
    ctx.body = '删除失败'
  })
}

module.exports = {
  listAll,
  login,
  loginIn,
  register,
  dropTable,
}