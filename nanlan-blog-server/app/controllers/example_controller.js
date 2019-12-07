const ExampleService = require("./../service/example_service");
const Response = require("./../utils/response");

const listExample = async (ctx, next) => {
  // 请求参数 校验参数，校验登录信息
  const req = ctx.request.body;
  // 处理 返回值
  const res = await ExampleService.listExample();
  ctx.body = Response.success(res);
};

const helloWord = async ctx => {
  ctx.body = Response.success("this is data");
};

module.exports = {
  listExample,
  helloWord
};
