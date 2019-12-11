const behavior = require("../service/behavior_service");
const response = require("./../utils/response");

/**
 * @description 点赞
 * @param {*} ctx
 * @param {*} next
 */
const star = async (ctx, next) => {
  const userId = ctx.request.query.loginUser.userId;
  const { articleId } = ctx.params;

  let res = await behavior.star(articleId, userId);
  ctx.body = response.success(res);
};
/**
 * @description 取消点赞
 * @param {*} ctx
 * @param {*} next
 */
const cancelStar = async (ctx, next) => {
  let userId = ctx.request.query.loginUser.userId;
  const articleId = ctx.params.articleId;

  let res = await behavior.star(articleId, userId, false);
  ctx.body = response.success(res);
};
module.exports = {
  star,
  cancelStar
};
