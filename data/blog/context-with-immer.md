---
title: 基于React Context的全局状态管理
date: '2022-07-22'
tags: ['react', 'immer', 'context']
draft: false
summary: '使用 immer 作为 React Hooks来操作状态的钩子，好处就是轻便、简洁，适合小型项目使用'
---

### 状态管理器

```js:Store.js
import React, { useContext, useCallback, useReducer, createContext } from 'react'
import { set } from 'lodash-es'
import produce from 'immer'

const initialState = {
  blogs: []
}

const StateContext = createContext(initialState)
const UpdateContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [view, setView] = useReducer(produce, initialState)
  const viewSet = useCallback((path, value) => {
    setView(produce((draft) => set(draft, path, value)))
  }, [])

  return (
    <UpdateContext.Provider value={viewSet}>
      <StateContext.Provider value={view}>{children}</StateContext.Provider>
    </UpdateContext.Provider>
  )
}

export function useView() {
  return [useContext(StateContext), useContext(UpdateContext)]
}
```

### 引入 Provider

```js:App.js
import { ContextProvider } from '@/Store'

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
        <Component {...pageProps} />
    </ContextProvider>
  )
}
```

### 在组件中使用

```js:index.js
import React from 'react'
import { useView } from '@/Store'

export default function Index() {
  const [view, viewSet] = useView()
  const blogs = [
    {
      name: 'blog1',
      content: 'my blog1'
    },
    {
      name: 'blog2',
      content: 'my blog2'
    }
  ]
  return (
    <>
      <button onClick={() => viewSet('blogs', blog)}></button>
      {blogs.map(v => (
        <>
          <div>{v.name}</div>
          <div>{v.content}</div>
        <>
      ))}
    </>
  )
}
```

### 大功告成啦
