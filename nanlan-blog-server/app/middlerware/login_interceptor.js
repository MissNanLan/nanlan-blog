const Response = require("./../utils/response");
const LoginService = require("./../service/login_service");

const allowUrl = ["/home", "/api/login", "/api/article"];

async function loginFilter(ctx, next) {
  let url = ctx.originalUrl;
  if (allowUrl.indexOf(url) > -1) {
    console.log("当前地址可直接访问");
    await next();
  } else {
    const token = ctx.header["x-token"];
    if (!token) {
      return (ctx.body = Response.error("not login", 403));
    }
    const res = LoginService.verifyToken(token);
    if (!res) {
      return (ctx.body = Response.error("not login", 403));
    }
    ctx.request.query["loginUser"] = res;
    await next();
  }
}

module.exports = {
  loginFilter
};
