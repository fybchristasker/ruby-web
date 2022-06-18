---
title: Next.js嵌套路由
date: '2022-05-02'
tags: ['next.js', 'nested-route']
draft: false
summary: '博客模板支持嵌套子文件夹中的文章。这可用于对类似内容的文章进行分组，例如一个多部分的课程。这篇文章本身就是一个嵌套路由的例子。'
---

### 嵌套路由

博客模板支持嵌套子文件夹中的文章。这有助于对类似内容的文章进行分组，例如一个多部分的系列。这篇文章本身就是一个嵌套路由的例子！它位于 /data/blog/nested-route 文件夹中。

### 怎么使用

简化在主 `/data/blog` 文件夹中创建多个文件夹并将您的 `.md`/`.mdx` 文件添加到其中。你甚至可以创建类似`/data/blog/nested-route/deploy-blogs.md`

### 用例

这里是几个用到嵌套路由的原因

- 更符合逻辑的内容组织（博客仍将根据创建日期显示）
- 多部分文章
- 每个作者的不同子路线
- 国际化（虽然建议使用 [Next.js built-in i8n routing](https://nextjs.org/docs/advanced-features/i18n-routing)）
