const Login = require("./../service/login_service");
const Response = require("./../utils/response");

const login = async (ctx, next) => {
  let req = ctx.request.body;
  let params = {
    username: req.username,
    password: req.password
  };
  let res = await Login.loginService(params);
  ctx.body = Response.success(res.data,res.msg);
};

module.exports = {
  login
};
