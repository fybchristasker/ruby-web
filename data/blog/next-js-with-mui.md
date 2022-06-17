---
title: 在Next.js中使用Mui
date: '2022-05-18'
tags: ['next.js', 'mui', 'emotion']
draft: false
summary: 使用 Next.js 框架。它包括@mui/material 及其对等依赖项，包括emotion，MUI v5 中的默认样式引擎。
---

### 安装依赖

```js
yarn add @mui/material @mui/icons-material @mui/styles
@emotion/cache @emotion/react @emotion/server @emotion/styled

```

### 样式缓存

```js:utils/index.js
import createCache from '@emotion/cache'

export const createEmotionCache = () => {
  return createCache({ key: 'css' })
}
```

### 配置主题

```js:components/theme.js
import { createTheme } from '@mui/material/styles'
import { zhCN } from '@mui/material/locale'

export default Theme = createTheme(
  {
    palette: {
      primary: {
        main: '#663399',
        contrastText: '#fff',
      },
      ...
    },
  },
  zhCN
)
```

### 全局配置

```js:pages/_app.js
import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '@/components/theme'
import { createEmotionCache } from '@/utils'

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
```

### 渲染样式

```js:pages/_document.js
import { Children } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import { createEmotionCache } from '@/utils'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

CustomDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style data-emotion={`${style.key} ${style.ids.join(' ')}`} key={style.key} dangerouslySetInnerHTML={{ __html: style.css }} />
  ))

  return {
    ...initialProps,
    styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
  }
}

export default CustomDocument
```

### 编写页面

```js:pages/index.js
import React from 'react'
import { Container, Button } from '@mui/material'
import { ShoppingCartOutlined } from '@mui/icons-material'

const Home = () => {
  return (
    <Container>
      <Button startIcon={<ShoppingCartOutlined />}>购物车</Button>
    </Container>
  )
}

export default Home
```

### 大功告成啦
