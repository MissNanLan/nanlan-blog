/**
 * all api
 */
const router = require("koa-router")();

const exampleController = require("../app/controllers/example_controller");
const articleController = require("../app/controllers/article_controller");
const loginController = require("../app/controllers/login_controller");
const regisiterController = require("../app/controllers/regisiter_controller");
const behaviorController = require("../app/controllers/behavior_controller");
const tagController = require("../app/controllers/tag_controller")


const routers = router
  .post("/example", exampleController.listExample)
  .post("/login", loginController.login)
  .post("/regisiter", regisiterController.regisiter)

  .post("/article/list", articleController.articleList)
  .post("/article/detail", articleController.articleDetail)
  .post("/article/insert", articleController.articleInsert)

  .post("/article/star", behaviorController.star)
  .delete("/article/:articleId/star", behaviorController.cancelStar)

  .get("/tag/list", tagController.tagList)
  .post("/tag/list/insert", tagController.tagInsert)
module.exports = routers;
