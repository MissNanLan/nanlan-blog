module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.post("/api/article/list", controller.article.list);
  router.post("/api/article/save", controller.article.save);
};
