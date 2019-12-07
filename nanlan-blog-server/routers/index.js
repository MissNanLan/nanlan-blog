/**
 * 整合所有路由
 */
const router = require('koa-router')()

const home = require('./home')
const error = require('./error')
const api = require('./api')


router.use('/',home.routes(),home.allowedMethods())
router.use('/error',error.routes(),error.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())




module.exports = router



