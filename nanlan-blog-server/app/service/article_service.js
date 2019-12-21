const articleDao = require("../models/article");
const behaviorDao = require("../models/behavior");

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

async function insertArticleService() {
  return new Promise((resolve, reject) => {
    let articleList = [];
    for (let i = 0; i < 100; i++) {
      let list = new Article({
        title: i + "Hello mongoose",
        abstract: "点点滴滴",
        content: "",
        date: new Date(),
        user_id: "",
        like_count: Math.floor(Math.random() * 100),
        comment_count: Math.floor(Math.random() * 50),
        view_count: Math.floor(Math.random() * 1000),
        images: ""
      });
      articleList.push(list);
    }
    Article.insertMany(articleList, function(err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = {
  articleService,
  insertArticleService,
  detailService
};
