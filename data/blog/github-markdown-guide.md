---
title: 'Markdown指南'
date: '2022-07-15'
tags: ['github', 'markdown', 'guide']
draft: false
summary: '满足您所有博客需求的 Markdown 语法指南 - 标题、列表、图像、表格等等！基于 GitHub Flavored Markdown 的插图指南。'
---

# 介绍

使用简单的语法在 GitHub 上为您的博客和代码创建复杂的格式。

原文链接: https://guides.github.com/features/mastering-markdown/

# 语法指南

这是您可以在 GitHub 上的任何位置或您自己的文本文件中使用的 Markdown 语法概述。

## 标题

```
# 这是一个h1标签

## 这是一个h2标签

### 这是一个h3标签
```

# 这是一级标题

## 这是二级标题

### 这是三级标题

## 着重

```
_这是一段倾斜文字_

**这是一段加粗文字**

_你可以**组合使用**他们_
```

_这是一段倾斜文字_

**这是一段加粗文字**

_你可以**组合使用**他们_

## 列表

### 无序列表

```
- 列表一
- 列表二
  - 子列表一
  - 子列表二
```

- 列表一
- 列表二
  - 子列表一
  - 子列表二

### 有序列表

```
1. 列表一
1. 列表二
   1. 子列表一
   1. 子列表二
```

1. 列表一
1. 列表二
   1. 子列表一
   1. 子列表二

## 图片

```
![GitHub](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
Format: ![Alt Text](url)
```

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## 链接

```
http://github.com - github!
[GitHub](http://github.com)
```

http://github.com - github!
[GitHub](http://github.com)

## 引号

```
鲁迅说过：

> 我没说过这句话
```

鲁迅说过：

> 我没说过这句话

## 行内代码

```
我认为你应该用`<button>`代替
```

我认为你应该用`<button>`代替

## 语法高亮

这是一个语法高亮的例子，[查看更多](https://help.github.com/articles/basic-writing-and-formatting-syntax/)

````
```js:getName.js
function getName(param) {
  if (param) {
    return { name: 'fybchristasker' }
  }
}
```
````

```js:getName.js
function getName(param) {
  if (param) {
    return { name: 'fybchristasker' }
  }
}
```

## 脚注

```
这是一个脚注[^1]

[^1]: 参考
```

这是一个脚注[^1]

[^1]: 参考

## 任务列表

```
- [x] 这是一个已完成项目
- [ ] 这是一个未完成项目
```

- [x] 这是一个已完成项目
- [ ] 这是一个未完成项目

## 表格

```
| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |
```

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

## 删除线

这是一根~~删除线~~
