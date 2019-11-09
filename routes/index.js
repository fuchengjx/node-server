var router = require('koa-router')();
const User = require('../controllers/user')

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});


router.get('/user', User.list)

// router.get('/user', function *(next) {
//   yield this.render('index', {
//     title: 'this is User'
//   })
// })

module.exports = router;
