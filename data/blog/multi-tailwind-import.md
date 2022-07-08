---
title: 安装包和主项目都引入了tailwind出现问题的处理
date: '2022-07-08'
tags: ['tailwind', 'css', 'react']
draft: false
summary: '如果安装包中引入了tailwind，而且主项目中也引入了tailwind，那么有可能会造成样式的混乱和冲突。'
---

### 情景复现

如果主项目选用了 tailwind，且安装的依赖也是由 tailwind 开发的，那么有可能会因为配置不同而造成样式的混乱和冲突。

### 问题原因

```js:tailwind.config.js //主项目
module.exports = {
  content: ['PROJECT_PATH'],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```js:tailwind.config.js //安装包
module.exports = {
  content: ['PACKAGE_PATH'],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}
```

因为 tailwind 的 css 文件引入顺序后样式的权重不同导致样式出现以下问题：

```css
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
```

这样会将 antd,mui 等按钮背景覆盖成透明色。

### 解决方案

- 弃车保帅

将安装包中的 tailwind.config.js 里的 css 权重去掉

```js:tailwind.config.js //安装包
module.exports = {
  content: ['PACKAGE_PATH'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- 道高一尺，魔高一丈

将主项目中 UI 框架等 css 样式权重提高

```css
.ant-btn {
  background: blue !important;
}
```

### 未完待续
