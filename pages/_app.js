import React from 'react'
import App from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import localStorage from 'localStorage'
import { darkTheme, lightTheme } from 'components/theme'
import Nav from 'components/nav'
import { Box } from '@material-ui/core'
import Head from 'components/head'
import 'styles/main.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head />
        <ThemeProvider theme={localStorage.getItem('THEME') === 'light' ? lightTheme : darkTheme}>
          <Box bgcolor="background.paper" color="text.primary">
            <Nav />
            <div style={{ minHeight: '100vh' }}>
              <Component {...pageProps} />
            </div>
          </Box>
        </ThemeProvider>
      </div>
    )
  }
}

export default MyApp
