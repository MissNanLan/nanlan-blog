const Service = require('egg').Service;

class ArticleService extends Service{
    async save() {
        let category = new this.ctx.model.Category({
            name:'test'
        })
        category = await category.save()
        console.log(category)
        const artilce  = new this.ctx.model.Article({
            title: 'test',
            abstract: 'test',
            date:new Date(),
            category: [category]
        })
        return artilce.save()
      
    }
    async list(param = {}) {
        console.log(param)
        const res = await this.ctx.model.Article.find({}).populate({path:'category',select:'name'}).sort({date:-1}).skip(0).limit(40);
        console.log(res.length)
        return res;
        // return await  this.ctx.model.Article.find({});
    }
   
}

module.exports = ArticleService;