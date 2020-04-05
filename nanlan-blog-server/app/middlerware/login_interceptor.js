const Response = require("./../utils/response");
const LoginService = require("./../service/login_service");

const allowUrl = ["/home", "/api/login", "/api/article/list", "/api/article/detail","/api/regisiter","/api/article/insert"];

async function loginFilter(ctx, next) {
  let url = ctx.originalUrl;

  const token = ctx.header["x-token"];
  let tokenVerifyRes = "";
  if (token) {
    tokenVerifyRes = await LoginService.verifyToken(token);
    ctx.request.query["loginUser"] = tokenVerifyRes;
  }
  if (allowUrl.indexOf(url) > -1) {
    await next();
  } else {
    if (!token) {
      return (ctx.body = Response.error("not login", 403));
    }
    if (!tokenVerifyRes) {
      return (ctx.body = Response.error("not login", 403));
    }
    await next();
  }
}

module.exports = {
  loginFilter
};
