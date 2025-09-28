# Steem.io Clone

这是使用 Next.js 和 Tailwind CSS 克隆的 Steem.io 静态网站项目。

## 功能特性

- 🚀 使用 Next.js 15 和 React 19
- 🎨 使用 Tailwind CSS 4 进行样式设计
- 📱 完全响应式设计
- ⚡ 快速加载和优化的图片
- 🔍 SEO 优化
- 📄 TypeScript 支持

## 页面结构

- **首页** (`/`) - 主要介绍页面，包含英雄区域、功能展示和用户案例
- **关于页面** (`/about`) - 公司历史和团队信息
- **开发者页面** (`/developers`) - 针对开发者的信息和资源
- **企业家页面** (`/entrepreneurs`) - 针对企业家的机会和工具
- **社交用户页面** (`/social-users`) - 针对内容创作者的信息
- **联系页面** (`/contact`) - 联系表单和联系信息

## 技术栈

- **框架**: Next.js 15
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **字体**: Roboto (Google Fonts)
- **图片优化**: Next.js Image 组件

## 开始使用

1. 安装依赖：
```bash
pnpm install
```

2. 启动开发服务器：
```bash
pnpm dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 构建生产版本

```bash
pnpm build
pnpm start
```

## 项目结构

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── developers/
│   │   └── page.tsx
│   ├── entrepreneurs/
│   │   └── page.tsx
│   ├── social-users/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    └── Footer.tsx
```

## 样式系统

项目使用自定义的 Steem 品牌色彩系统：

- `steem-blue`: #4BA3F3
- `steem-lightblue`: #7BC4F4
- `steem-purple`: #8B5CF6
- `steem-grey`: #6B7280
- `steem-offwhite`: #F9FAFB
- `steem-offblack`: #1F2937

## 响应式设计

- 移动端优先设计
- 支持平板和桌面端
- 使用 Tailwind CSS 的响应式工具类

## 许可证

MIT License