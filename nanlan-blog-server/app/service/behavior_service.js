const behaviorDao = require("../models/behavior");
const articleDao = require("../models/article");
/**
 * 点赞
 * @param {*} articleId 文章id
 * @param {*} userId 用户id
 */
async function star(articleId, userId, isStar = true) {
  let article = await finArticle(articleId);
  // 检查文章是否存在
  if (!article) {
    return "文章未找到";
  }
  let starBehavior = await behaviorDao.findOne({
    article_id: articleId,
    user_id: userId,
    type: "star",
  });
  // 是点赞行为 且未点赞,新增
  if (isStar && !starBehavior) {
    //  没有点赞记录,执行新增逻辑
    const newBehavior = new behaviorDao({
      article_id: articleId,
      user_id: userId,
      type: "star",
      status: true,
    });
    await newBehavior.save();
    //  更新文章点赞数量
    updateArticleStarCount(article, 1);
    return { like_count: article.like_count };
  } else {
    // 是点赞
    if (isStar) {
      // 之前记录为取消赞状态,更新为点赞状态
      if (!starBehavior.status) {
        starBehavior.status = true;
        await behaviorDao.updateOne(
          { article_id: starBehavior.article_id },
          { status: starBehavior.status }
        );
        // await doUpdate(starBehavior);
        //  更新文章点赞数量
        await updateArticleStarCount(article, 1);
      }
    } else {
      // 取消点赞
      //之前记录为点赞状态,更新为取消点赞状态
      if (starBehavior.status) {
        starBehavior.status = false;
        await behaviorDao.updateOne(
          { article_id: starBehavior.article_id },
          { status: starBehavior.status }
        );
        await updateArticleStarCount(article, -1);
      }
    }
    return { like_count: article.like_count };
  }
}

async function finArticle(articleId) {
  return await articleDao.findOne({ _id: articleId });
}

async function updateArticleStarCount(article, count) {
  article.like_count = article.like_count + count;
  await articleDao.updateOne(
    { _id: article._id },
    { like_count: article.like_count }
  );
}

async function findUserStarStatusToPost(postId, userId) {
  if (userId) {
    let startBe = await behaviorDao.findOne({
      article_id: postId,
      user_id: userId,
      type: "star",
      status: true,
    });
    if (startBe) {
      return true;
    }
    return false;
  }
}

module.exports = {
  star,
  findUserStarStatusToPost,
};
