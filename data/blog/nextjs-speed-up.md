---
title: Next.js构建体积优化及启动速度提升
date: '2022-06-21'
tags: ['next.js', 'bundle', 'preact']
draft: false
summary: '项目构建体积大小影响网站性能，有效优化构建体积能够使网站更流畅'
---

### 使用 preact 替代 react（react < 18）

Preact 是具有相同 API 的 React 替代品，但它的大小只有 3kb。因为它不会因为使用像 React 这样的合成事件而产生额外的开销，而是使用浏览器的原生 API。也许完全替换 React 不太现实，但是一些小型项目中利用它来减少打包体积还是可行的。目前还未全面支持 React18，需要静静观察一波。

```js:next.config.js
module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
}
```

### 使用 lodash-es 替代 lodash

lodash 库本身提供了 lodash-es 导出 ES Module 格式，可用于 webpack 的 Tree Shaking 操作。这将有效地减少顶层引入导致的构建体积变大的影响。

**修改前**

```js
import _ from 'lodash'
_.get(x)
```

**修改后**

```js
import { get } from 'lodash-es'
get(x)
```

### 依赖包查重

由于不同的库版本，单个库可能多次包含在 webpack 捆绑软件中。这种情况可能会在没有任何警告的情况下发生，从而导致捆绑软件中出现额外的重复引用，不仅会导致构建体积变大，还可能导致难以发现的错误。

```js:next.config.js
const path = require('path')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.plugins.push(new DuplicatePackageCheckerPlugin())
      config.resolve.alias['packages'] = path.resolve(_dirname, 'nodemodules', 'packages')
    }
    return config
  }
}
```

### 动态引入

通过动态导入实现代码拆分，成功地将首次加载的 JS 包大小减少，但是不建议到处使用动态导入，使用过多的动态导入实际上会降低性能。

```js
import React from 'react'
import { Provider } from 'Store'
const Layout = dynamic(() => import('../components/layout'))
const MyApp = (props) => {
  const { Component, pageProps } = props
  return (
    <Provider>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
```

### 未完待续
