import React from 'react'
import App from 'next/app'
import Head from '../components/head'
import Nav from '../components/nav'
import "../styles/main.scss"
import { Button } from 'antd'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <div>
      <Head />
      <Button>sfkjskjsfksfkjkjkkjk</Button>
      <Component {...pageProps} />
    </div>
  }
}

export default MyApp
