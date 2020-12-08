const moment = require("moment");
const user = require("../models/user");
const ArticleService = require("./../service/article_service");
const BehaviorService = require("./../service/behavior_service");
const Response = require("./../utils/response");

// 查询文章
const articleList = async (ctx, next) => {
  let req = ctx.request.body;
  const res = await ArticleService.articleList(req);
  ctx.body = Response.success(res);
};

// 文章详情
const articleDetail = async (ctx, next) => {
  let req = ctx.request.body;
  let params = {
    id: req.id,
  };
  let loginInfo = ctx.request.query;
  // 判断是否登录
  let userId = 0;
  if (loginInfo && loginInfo.loginUser) {
    userId = loginInfo.loginUser.userId;
  }
  params['userId'] = userId
  let article = await ArticleService.articleDetail(params);
  article["star_status"] = false;
  if (userId !== 0 && article && article.like_count !== 0) {
    article["star_status"] = await BehaviorService.findUserStarStatusToPost(
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
    date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  };
  const res = await ArticleService.insertArticleService(params);
  ctx.body = Response.success("", res);
};

const archivesList = async (ctx, next) => {
  const res = await ArticleService.archivesService();
  let result = res;
  // if (Array.isArray(res)) {
  //   result = res.map((it) => {
  //     return {
  //       date: it._id,
  //       num: it.num,
  //     };
  //   });
  // }
  ctx.body = Response.success(result);
};

const recommendList = async (ctx, next) => {
  let res = await ArticleService.recommendService();
  ctx.body = Response.success(res);
};

module.exports = {
  articleList,
  archivesList,
  articleDetail,
  articleInsert,
  recommendList,
};
