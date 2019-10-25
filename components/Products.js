import React, { Component } from 'react'
import { Col, Row } from 'antd'

const devops = '/static/imgs/rallets-logo.png'
const qikuakua = '/static/imgs/qikuakua-logo.png'
const esheep = '/static/imgs/esheep-logo.png'
const lingti = '/static/imgs/lingti-logo.png'

const cards = [
  ['devops', '星际运维', '简单易用的网络测试维护工具', 'https://rallets.org'],
  ['qikuakua', '企跨跨', '为数万企业管理超过100万APIs', 'https://qikuakua.com'],
  ['lingti', '灵缇加速', '顶级玩家首选游戏加速器', 'https://lingti.io'],
  ['esheep', '电子绵羊', '极速回国加速器', 'https://esheep.io']
]

const Products = () => {
  const showLogo = v => {
    switch (v) {
      case 'devops':
        return <img src={devops} alt="" style={{ height: 70, paddingTop: 10 }} />
      case 'qikuakua':
        return <img src={qikuakua} alt="" style={{ height: 50, marginTop: 20 }} />
      case 'esheep':
        return <img src={esheep} alt="" style={{ height: 70, marginTop: 0 }} />
      case 'lingti':
        return <img src={lingti} alt="" style={{ height: 60, marginTop: 10 }} />
      default:
        return null
    }
  }

  return (
    <Row className="MB-20" id='product'>
      <div className="paiyou-index-text TA-C MB-10">排忧产品及服务</div>
      <div className="paiyou-index-label TA-C MB-40">Our products and services</div>
      {cards.map(v => (
        <Col xl={6} md={12} sm={24} key={v} className="MB-20">
          <div className="TA-C C-P MB-10 paiyou-index-card" onClick={() => window.open(v[3])} role="presentation">
            {showLogo(v[0])}
            <div className="FS-8 MT-30 pf-m" style={{ letterSpacing: 3 }}>
              {v[1]}
            </div>
            <div className="FS-6 MT-25 pf-r" style={{ letterSpacing: 1 }}>
              {v[2]}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default Products
