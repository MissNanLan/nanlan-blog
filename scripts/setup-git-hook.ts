import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function setupGitHooks() {
  const rootDir = path.join(__dirname, "..");

  // 1. 安装必要的依赖
  console.log("📦 Installing dependencies...");
  execSync(
    "yarn add -D @commitlint/cli @commitlint/config-conventional husky",
    { stdio: "inherit" }
  );

  // 2. 创建 commitlint 配置文件
  const commitlintConfig = `module.exports = {
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
  `;

  fs.writeFileSync(
    path.join(rootDir, "commitlint.config.js"),
    commitlintConfig
  );

  // 3. 初始化 husky
  console.log("🐶 Initializing husky...");
  execSync("yarn husky init", { stdio: "inherit" });

  // 4. 创建 commit-msg hook
  const huskyDir = path.join(rootDir, ".husky");
  const commitMsgHook = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit \${1}
`;

  fs.writeFileSync(path.join(huskyDir, "commit-msg"), commitMsgHook);
  execSync(`chmod +x ${path.join(huskyDir, "commit-msg")}`, {
    stdio: "inherit",
  });

  // 5. 更新 package.json
  const packageJsonPath = path.join(rootDir, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  packageJson.scripts = {
    ...packageJson.scripts,
    prepare: "husky",
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log("✅ Git hooks setup completed!");
  console.log(`
  🎉 Now you can use conventional commits:
  feat: new feature
  fix: bug fix
  docs: documentation changes
  style: code style changes
  refactor: code refactoring
  perf: performance improvements
  test: test cases
  chore: other changes
  `);
}

setupGitHooks();
