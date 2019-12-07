/**
 * all api
 */
const router = require("koa-router")();

const exampleController = require("../app/controllers/example_controller");
const articleController = require("../app/controllers/article_controller");
const loginController = require("../app/controllers/login_controller");

const routers = router
  .post("/example", exampleController.listExample)
  .post("/article", articleController.article)
  .post("/detail", articleController.detail)
  .post("/login", loginController.login)
  .post("/insertArticle", articleController.insertArticle);

module.exports = routers;
