const ArticleService = require("./../service/article_service");
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
  const res = await ArticleService.detailService(params);
  ctx.body = Response.success(res[0]);
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
