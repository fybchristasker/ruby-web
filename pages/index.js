import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

const IndexPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ width: '100%', height: '100vh', zIndex: '-1' }} className="gradient-background-anim">
      <div className="index-title">龅 牙 梨 花 珍</div>
      <div style={{ marginTop: '10vh', textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          WELCOME TO RUBY
        </Button>
      </div>
      <Modal open={open} style={{ marginTop: '20vh' }} onClose={() => setOpen(false)}>
        <div>龅牙梨花珍</div>
      </Modal>
    </div>
  )
}
export default IndexPage
