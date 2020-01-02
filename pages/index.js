import React from 'react'
import Button from '@material-ui/core/Button'

const IndexPage = () => {
  const upload = file => {
    const formData = new FormData()
    formData.append('smfile', file)

    fetch('https://sm.ms/api/v2/upload', {
      headers: { Authorization: 'dFj8URDsnK33D4cyA334eQH16MRiprR9' },
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(body => {
        console.info('body', body)
      })
      .catch(error => console.error(error))
  }
  return (
    <div style={{ width: '100%', height: '100vh', zIndex: '-1' }} className="gradient-background-anim">
      <div className="index-title">龅 牙 梨 花 珍</div>
      <div style={{ marginTop: '10vh', textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={() => upload()}>
          WELCOME TO RUBY
        </Button>
      </div>
    </div>
  )
}
export default IndexPage
