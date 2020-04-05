const articleDao = require("../models/article");

async function articleService(params) {
  return new Promise((resolve, reject) => {
    const reg = new RegExp(params.keyword, "i");
    var query = articleDao.find({ title: reg });
    query
      .skip((params.pageNumber - 1) * params.pageSize)
      .limit(params.pageSize);
    query.exec(function(err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function detailService(params) {
  return  await articleDao.findOne({
    _id: params.id
  }).lean()
}

async function insertArticleService(params) {
  await new articleDao({
    ...params,
    user_id: "", 
    like_count: 0, 
    comment_count: 0, 
    view_count: 0, 
  }).save('', (err, res) => { 
    if (err) {
    } else { 
      return "新增成功"
    }
  })
}

module.exports = {
  articleService,
  insertArticleService,
  detailService
};
