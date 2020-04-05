const moment = require('moment');
const ArticleService = require("./../service/article_service");
const BehaviorService = require("./../service/behavior_service");
const Response = require("./../utils/response");



// 查询文章
const articleList = async (ctx, next) => {
  let req = ctx.request.body;
  let params = {
    pageSize: req.pageSize,
    pageNumber: req.pageNumber,
    keyword: req.keyword
  };
  const res = await ArticleService.articleService(params);
  ctx.body = Response.success(res);
};

// 文章详情
const articleDetail = async (ctx, next) => {
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

//  新增文章
const articleInsert = async (ctx, next) => {
  let params = {
    ...ctx.request.body,
    date: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
  }
  const res = await ArticleService.insertArticleService(params);
  ctx.body = Response.success("",res);
};

module.exports = {
  articleList,
  articleDetail,
  articleInsert
};
