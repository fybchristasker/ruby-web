import React from 'react'
import Button from '@material-ui/core/Button'
import 'styles/main.scss'

const IndexPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', zIndex: '-1' }} className="gradient-background-anim">
      <div className="index-title">龅 牙 梨 花 珍</div>
      <div style={{ marginTop: '10vh', textAlign: 'center' }}>
        <Button color="primary">WELCOME</Button>
      </div>
    </div>
  )
}
export default IndexPage
