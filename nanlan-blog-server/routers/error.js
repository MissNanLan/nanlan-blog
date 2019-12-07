const router = require('koa-router')()

const routers = router.get("/404", async ctx => {
    ctx.body = "404 page!";
  });

module.exports = routers