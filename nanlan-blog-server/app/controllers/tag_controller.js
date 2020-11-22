const Tag = require("./../service/tag_service");
const Response = require("./../utils/response");

const tagList = async (ctx, next) => {
  let res = await Tag.tagService({});
  ctx.body = Response.success(res);
};

const tagInsert = async (ctx, next) => {
  let req = ctx.request.body;
  let params = {
    tags: req.tags,
  };
  let res = await Tag.insertTagService(params);
  ctx.body = Response.success(res);
};

module.exports = {
  tagList,
  tagInsert,
};
