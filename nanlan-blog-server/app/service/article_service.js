const articleDao = require("../models/article");
const category = require("../models/category");
async function articleService(params) {
  return new Promise((resolve, reject) => {
    const reg = new RegExp(/w/, "i");
    var query = articleDao;
    query.estimatedDocumentCount({}, function (err, total) {
      query
        .find({ category: params.category})
        .populate({ path: "category", select: "name", model: category })
        .skip((params.pageNumber - 1) * params.pageSize)
        .limit(params.pageSize)
        .exec(function (err, res) {
          if (err) {
            reject(err);
          } else {
            var res = {
              result: res,
              amount: total, // 总条数
              totalPage: parseInt(total / params.pageSize), // 总页数
            };
            resolve(res);
          }
        });
    });
  });
}

async function detailService(params) {
  return await articleDao
    .findOne({
      _id: params.id,
    })
    .lean();
}

async function insertArticleService(params) {
  await new articleDao({
    ...params,
    user_id: "",
    like_count: 0,
    comment_count: 0,
    view_count: 0,
  }).save("", (err, res) => {
    if (err) {
    } else {
      return "新增成功";
    }
  });
}

module.exports = {
  articleService,
  insertArticleService,
  detailService,
};
