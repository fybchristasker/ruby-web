import React from 'react'
import { Button } from '@mui/material'

const IndexPage = () => {
  return (
    <div className="w-full h-screen bg-blue-300">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center mt-6">
          <Button color="primary" variant="contained">
            Welcome
          </Button>
        </div>
      </div>
    </div>
  )
}
export default IndexPage
