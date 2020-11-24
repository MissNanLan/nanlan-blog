const articleDao = require("../models/article");
const category = require("../models/category");
const tag = require("../models/tag");
const isNull = require("lodash/isNull");
async function articleService(params) {
  return new Promise((resolve, reject) => {
    const reg = new RegExp(/w/, "i");
    var query = articleDao;
    query.estimatedDocumentCount({}, function (err, total) {
      let payload = {};
      for (let o in params) {
        if (o === 'pageNumber' || o === 'pageSize') continue;
        payload[o] =!isNull(params[o]) && params[o];
      }
      query
        .find({ ...payload })
        .populate({ path: "category", select: "name", model: category })
        .populate({ path: "tag", select: "name", model: tag })
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
    }).populate({ path: "category", select: "name", model: category })
    .populate({ path: "tag", select: "name", model: tag })
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
