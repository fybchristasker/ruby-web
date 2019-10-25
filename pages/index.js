import React, { useEffect, useState } from 'react'
import Products from '../components/Products'
import Head from '../components/head'
import Foot from '../components/foot'
import Link from 'next/link'

const table = '/static/imgs/index-table.png'
const gif = '/static/imgs/index-gif.gif'
const box = '/static/imgs/index-box.png'
const tool = '/static/imgs/index-tool.png'
const pc = '/static/imgs/index-pc.png'
const position = {}

export const scroll = anchorName => {
  if (position[anchorName]) {
    position[anchorName].scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    position.name = anchorName
  }
}

const IndexPage = () => {
  const [loadPc, setLoadPc] = useState(false)
  const [loadBox, setLoadBox] = useState(false)

  useEffect(() => {
    const anchorName = position.name
    if (anchorName) position[anchorName].scrollIntoView()
  })

  return (
    <div>
      <Head title='Suzhou Paiyou Network Technology Co., Ltd' />
      <div style={{ width: '100%', height: '100vh', zIndex: '-1', background: '#0943e1' }} />
      <img src={gif} alt="" className="paiyou-index-gif" />
      <div className="paiyou-index-img TA-C">
        <img src={table} alt="" className="paiyou-index-table" style={{ zIndex: '2' }} />
        <img
          src={tool}
          alt=""
          className="paiyou-index-anim paiyou-index-tool"
          onLoad={() => {
            setTimeout(() => setLoadPc(true) , 1000)
            setTimeout(() => setLoadBox(true) , 2000)
          }}
        />
        <img src={pc} alt="" className='paiyou-index-anim paiyou-index-pc' />
        <img src={box} alt="" className='paiyou-index-anim paiyou-index-box' />
      </div>
      <div className="paiyou-index-title">LESS IS MORE</div>
      <div
        ref={r => {
          position.product = r
        }}
      />
      <Products />
      <Foot />
    </div>
  )
}
export default IndexPage
