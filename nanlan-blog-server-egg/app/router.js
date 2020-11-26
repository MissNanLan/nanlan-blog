module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.post("/article/list", controller.article.list);
  router.post("/article/save",controller.article.save)
};
