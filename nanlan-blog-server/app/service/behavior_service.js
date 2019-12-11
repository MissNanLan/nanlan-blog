const behaviorDao = require("../models/behavior");
const articleDao = require("../models/article");
/**
 * 点赞
 * @param {*} articleId 文章id
 * @param {*} userId 用户id
 */
async function star(articleId, userId, isStar = true) {
  let article = await finArticle(articleId);
  console.log(article);
  // 检查文章是否存在
  if (!article) {
    return "文章未找到";
  }
  let starBehavior = await behaviorDao.findOne({
    article_id: articleId,
    user_id: userId,
    type: "star"
  });
  // 是点赞行为 且未点赞,新增
  if (isStar && !starBehavior) {
    //  没有点赞记录,执行新增逻辑
    const newBehavior = new behaviorDao({
      article_id: articleId,
      user_id: userId,
      type: "star",
      status: true
    });
    await newBehavior.save();
    //  更新文章点赞数量
    updateArticleStarCount(article, 1);
    return "ok";
  } else {
    // 是点赞
    if (isStar) {
      // 之前记录为取消赞状态,更新为点赞状态
      if (!starBehavior.status) {
        starBehavior.status = true;
        await doUpdate(starBehavior);
        //  更新文章点赞数量
        updateArticleStarCount(article, 1);
      }
    } else {
      // 取消点赞
      //之前记录为点赞状态,更新为取消点赞状态
      if (starBehavior.status) {
        starBehavior.status = false;
        await doUpdate(starBehavior);
        updateArticleStarCount(article, -1);
      }
    }
    return "ok";
  }
}
async function doUpdate(starBehavior) {
  await behaviorDao.updateOne(starBehavior);
}

async function finArticle(articleId) {
  return await articleDao.findOne({ _id: articleId });
}

async function updateArticleStarCount(article, count) {
  article.like_count = article.like_count + count;
  await articleDao.updateOne(article);
}

// return new Promise((resolve, reject) => {
//   let result = {
//     status: false,
//     likeCount: 0
//   };
//   behavior
//     .find({
//       article_id: params.article_id,
//       user_id: params.user_id,
//       type: "star"
//     })
//     .exec(function(err, res) {
//       if (err) {
//         reject(err);
//       } else {
//         if (res.length == 0) {
//           // 新增行为
//           new Behavior({
//             article_id: params.article_id,
//             user_id: params.user_id,
//             type: "star",
//             status: true
//           }).save((error, success) => {
//             if (error) {
//               reject(error);
//             } else {
//               updateArticle(params.article_id).then(count => {
//                 result.status = true;
//                 result.likeCount = count;
//                 resolve(result);
//               });
//             }
//           });
//         } else if (res[0].status == false) {
//           // 增加点赞
//           updateBehavior(res[0]._id, params.article_id, true).then(
//             success => {
//               result = success;
//               resolve(result);
//             }
//           );
//         } else if (res[0].status == true) {
//           // 取消点赞
//           updateBehavior(res[0]._id, params.article_id, false).then(
//             success => {
//               result = success;
//               resolve(result);
//             }
//           );
//         }
//       }
//     });
// });

// 更新behavior
function updateBehavior(behaviorId, articleId, status) {
  let result = {
    status: false,
    likeCount: 0
  };
  return new Promise((resolve, reject) => {
    Behavior.updateOne(
      { _id: behaviorId },
      {
        status: status
      },
      function(err, res) {
        if (err) {
          reject(err);
        } else {
          updateArticle(articleId).then(count => {
            result.status = status;
            result.likeCount = count;
            resolve(result);
          });
        }
      }
    );
  });
}

// 更新article的like_count
function updateArticle(id, type) {
  let resultCount = 0,
    reqCcount = 0;
  return new Promise((resolve, reject) => {
    Article.find({ _id: id }).exec(function(err, res) {
      if (err) {
        reject(err);
      } else {
        reqCcount =
          type == "cancel" ? res[0].like_count - 1 : res[0].like_count + 1;
        Article.updateOne(
          { _id: id },
          { like_count: reqCcount },
          (err, success) => {
            if (err) {
              reject(err);
            } else {
              resultCount = res[0].like_count;
              if (resultCount !== 0) {
                resolve(resultCount);
              }
            }
          }
        );
      }
    });
  });
}

module.exports = {
  star
};
