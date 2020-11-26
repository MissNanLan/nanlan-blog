const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.service.article.list()
    // this.ctx.body = "Hello world";
  }
}

module.exports = HomeController;
