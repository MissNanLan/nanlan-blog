const articleDao = require("../models/article");
const category = require("../models/category");
const tag = require("../models/tag");
const isNull = require("lodash/isNull");
const article = require("../models/article");

async function articleList(params) {
  return new Promise((resolve, reject) => {
    const reg = new RegExp(/w/, "i");
    var query = articleDao;
    query.estimatedDocumentCount({}, function (err, total) {
      let payload = {};
      for (let o in params) {
        if (o === "pageNumber" || o === "pageSize") continue;
        payload[o] = !isNull(params[o]) && params[o];
      }
      query
        .find({ ...payload })
        .populate({ path: "category", select: "name", model: category })
        .populate({ path: "tag", select: "name", model: tag })
        .skip((params.pageNumber - 1) * params.pageSize)
        .sort({ _id: -1 })
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

async function articleDetail(params) {
  const article = await articleDao
    .findOne({
      _id: params.id,
    })
    .populate({ path: "category", select: "name", model: category })
    .populate({ path: "tag", select: "name", model: tag })
    .lean();
  await updateViewCount(params.userId, article);
  return article;
}

async function updateViewCount(userId = 0, article) {
  if (!userId || !article) {
    return;
  }
  return articleDao.updateOne(
    { _id: article._id },
    { view_count: ++article.view_count }
  );
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

async function archivesService() {
  return await articleDao.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m", date: "$date" } },
        num: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        date: "$_id",
        num: 1,
      },
    },
  ]);
}

async function recommendService() {
  return articleDao
    .find({}, { _id: 1, like_count: 1, title: 1 })
    .sort({ like_count: -1 })
    .limit(5);
}

module.exports = {
  articleList,
  insertArticleService,
  articleDetail,
  archivesService,
  recommendService,
};
