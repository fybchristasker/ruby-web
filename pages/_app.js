import React from 'react'
import App from 'next/app'
import Head from '../components/head'
import Nav from '../components/nav'
import 'antd/dist/antd.css'
import "../styles/main.scss"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <div>
      <Head />
      <Nav />
      <Component {...pageProps} />
    </div>
  }
}

export default MyApp
