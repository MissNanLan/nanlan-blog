const RegisiterService = require("./../service/regisiter_service");
const Response = require("./../utils/response");

const regisiter = async (ctx, next) => {
  let req = ctx.request.body;
  let params = {
    username: req.username,
    password: req.password
  };
  let res = await RegisiterService.regisiterService(params);
  ctx.body = Response.success("",res);
};

module.exports = {
  regisiter
};
