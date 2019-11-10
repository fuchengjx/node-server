const router = require('koa-router')()

const Users = require('../controllers/user')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/login', Users.login)
router.post('/login', Users.loginIn)
router.get('/drop', Users.dropTable)

router.post('/register', Users.register)

module.exports = router
