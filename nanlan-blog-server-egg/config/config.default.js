exports.keys = "123456";

exports.mongoose = {
  url: "mongodb://localhost:27017/nanlan-blog",
  options: {
    useUnifiedTopology: true,
  },
  // mongoose global plugins, expected a function or an array of function and options
  // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
};

exports.security = {
  csrf: {
    // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
    ignore: ctx => true,
  },
}
