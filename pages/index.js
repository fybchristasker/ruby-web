import React from 'react'

const world = '/static/imgs/world.png'

const IndexPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', zIndex: '-1' }} className="gradient-background-anim">
      <img src={world} alt="" className="entas-gif" />
      <div className="entas-title">龅 牙 梨 花 珍</div>
    </div>
  )
}
export default IndexPage
