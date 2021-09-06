exports.keys = "123456";

exports.mongoose = {
  client: {
    url: "mongodb://nanlan:123456@139.198.161.161:27017/nanlan-blog",
    options: {},
  },
  // mongoose global plugins, expected a function or an array of function and options
  // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
};

exports.security = {
  csrf: {
    // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
    ignore: (ctx) => true,
  },
};
