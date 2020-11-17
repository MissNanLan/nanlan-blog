const Tag = require("./../service/tag_service");
const Response = require("./../utils/response");

const  tagList = async (ctx, next) => {
  let res = await Tag.tagService({});
  ctx.body = Response.success(res);
};

module.exports = {
  tagList
};
