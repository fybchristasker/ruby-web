import React from 'react'
import { Button } from 'antd'

const IndexPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', zIndex: '-1' }} className="gradient-background-anim">
      <div className="index-title">龅 牙 梨 花 珍</div>
      <div style={{ marginTop: '10vh', textAlign: 'center' }}>
        <Button type="primary">WELCOME TO RUBY</Button>
      </div>
    </div>
  )
}
export default IndexPage
