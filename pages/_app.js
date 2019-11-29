import React from 'react'
import App from 'next/app'
import Head from '../components/head'
import "../styles/main.scss"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <div>
      <Head />
      <Component {...pageProps} />
    </div>
  }
}

export default MyApp
