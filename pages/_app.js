import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import Head from '../components/head'
import '../styles/tailwind.css'
import { lightTheme } from '../components/theme'
import { createEmotionCache } from '../utils/index'

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head />
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
