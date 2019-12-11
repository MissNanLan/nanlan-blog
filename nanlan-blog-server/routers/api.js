/**
 * all api
 */
const router = require("koa-router")();

const exampleController = require("../app/controllers/example_controller");
const articleController = require("../app/controllers/article_controller");
const loginController = require("../app/controllers/login_controller");
const behaviorController = require("../app/controllers/behavior_controller");

const routers = router
  .post("/example", exampleController.listExample)
  .post("/login", loginController.login)

  .post("/article", articleController.article)
  .post("/detail", articleController.detail)
  .post("/insertArticle", articleController.insertArticle)

  .post("/article/:articleId/star", behaviorController.star)
  .delete("/article/:articleId/star", behaviorController.cancelStar);
module.exports = routers;
