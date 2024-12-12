import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createPage(pageName: string) {
  const pageDir = path.join(__dirname, "../src/app", pageName);
  const pageFile = path.join(pageDir, "page.tsx");

  // 创建页面目录
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  // 页面模板
  const pageTemplate = `"use client";

import { useEffect } from "react";

export default function ${toPascalCase(pageName)}Page() {
  useEffect(() => {
    // 组件加载时的副作用
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">${toPascalCase(pageName)}</h1>
      {/* 页面内容 */}
    </div>
  );
}
`;

  // 写入文件
  fs.writeFileSync(pageFile, pageTemplate);
  console.log(`✅ Created page: ${pageName}`);
}

// 辅助函数：转换为 PascalCase
function toPascalCase(str: string) {
  return (
    str
      .split("/")
      .pop()
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") || ""
  );
}

// 获取命令行参数
const pageName = process.argv[2];

if (!pageName) {
  console.error("❌ Please provide a page name");
  process.exit(1);
}

createPage(pageName);
