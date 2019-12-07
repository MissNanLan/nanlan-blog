/**
 * home page
 */
const router = require('koa-router')()

// 主页
const routers = router.get("/", async ctx => {
    let html = `
        <ul>
          <li><a href="/page/helloworld">/page/helloworld</a></li>
          <li><a href="/page/404">/page/404</a></li>
        </ul>
      `;
    ctx.body = html;
  });

module.exports = routers