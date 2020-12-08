
const article = require("../models/article");
const tagDao = require("../models/tag");


function tagService() {
  return new Promise((resolve, reject) => {
    tagDao.find({}).exec(function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

function insertTagService(parmas) {
  return new Promise((resolve, reject) => {
    tagDao
      .find({ name: { $in: parmas.tags } })
      .populate({ path: "article", select: "_id", model: article })
      .exec(function (err, res) {
        if (err) {
          reject(err);
        } else {
          let tags = parmas.tags.map((v) => {
            return { name: v };
          });
          // 求出入参与查询结果的差集
          let diff = [...tags].filter((x) =>
            [...res].every((y) => y.name !== x.name)
          );
          if (diff.length > 0) {
            tagDao.insertMany(diff, function (err, docs) {
              if (err) console.log(err);
              resolve({ data: res.concat(docs), msg: "新增成功" });
            });
          } else {
            resolve({ data: res, msg: "无新增标签" });
          }
        }
      });
  });
}

module.exports = {
  tagService,
  insertTagService,
};
