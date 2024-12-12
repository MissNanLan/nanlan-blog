module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "type-enum": [
        2,
        "always",
        [
          "feat", // 新功能
          "fix", // 修复bug
          "docs", // 文档修改
          "style", // 代码格式修改
          "refactor", // 重构
          "perf", // 性能优化
          "test", // 测试用例修改
          "chore", // 其他修改
          "revert", // 回滚
          "build", // 构建相关
          "ci", // CI/CD相关
        ],
      ],
      "type-case": [2, "always", "lower-case"],
      "subject-case": [0],
    },
  };
  