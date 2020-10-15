import React, { useEffect, useState } from 'react'
import { IconButton, Fade } from '@material-ui/core'
import { ArrowUpward } from '@material-ui/icons'

const BackTop = () => {
  const [, setVisible] = useState(false)
  const pageVisible = () => {
    if (global.pageYOffset > 800) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  useEffect(() => {
    setInterval(() => pageVisible(), 200)
  }, [])
  return (
    <Fade in>
      <IconButton
        role="presentation"
        color="primary"
        style={{
          opacity: global.pageYOffset < 800 ? 0 : 1,
          zIndex: 1000,
          color: 'white',
          background: '#FF4053',
          position: 'fixed',
          top: '85%',
          right: '4%'
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowUpward />
      </IconButton>
    </Fade>
  )
}

export default BackTop
