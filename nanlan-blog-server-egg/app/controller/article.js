const Controller = require("egg").Controller;
const Response = require("../extend/response");

class ArticleController extends Controller {
  async save() {
    let req = this.ctx.request.body;
    this.ctx.body = Response.success(await this.ctx.service.article.save())
  }
  async list() {
    let req = this.ctx.request.body;
    let params = {
      pageSize: req.pageSize,
      pageNumber: req.pageNumber,
      keyword: req.keyword,
    };
    console.log(params)
    this.ctx.body = Response.success(await this.ctx.service.article.list(params));
  }
}

module.exports = ArticleController;
