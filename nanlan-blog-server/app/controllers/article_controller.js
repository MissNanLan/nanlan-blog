const ArticleService = require("./../service/article_service");
const BehaviorService = require("./../service/behavior_service");
const Response = require("./../utils/response");

const article = async (ctx, next) => {
  let req = ctx.request.body;
  let params = {
    pageSize: req.pageSize,
    pageNumber: req.pageNumber,
    keyword: req.keyword
  };
  const res = await ArticleService.articleService(params);
  ctx.body = Response.success(res);
};

const detail = async (ctx, next) => {
  let req = ctx.request.body;
  let params = {
    id: req.id
  };
  let loginInfo = ctx.request.query;
  // 判断是否登录
  let userId = 0;
  if (loginInfo && loginInfo.loginUser) {
    userId = loginInfo.loginUser.userId;
  }
  console.log(loginInfo)
  let article = await ArticleService.detailService(params);
  article["starStatus"] = false;
  if (userId != 0 && article) {
    article["starStatus"] = await BehaviorService.findUserStarStatusToPost(
      article._id,
      userId
    );
  }

  ctx.body = Response.success(article);
};

const insertArticle = async (ctx, next) => {
  const req = ctx.request.body;
  const res = await ArticleService.insertArticleService();
  ctx.body = Response.success(res);
};

module.exports = {
  article,
  detail,
  insertArticle
};
