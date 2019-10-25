import React from 'react'
import { Col, Card, Row } from 'antd'
import { Map, Marker } from 'react-amap'
import { grey } from '@ant-design/colors'

const mark = '/static/imgs/mark.png'
const lifang = '/static/imgs/lifang.png'
const bag = '/static/imgs/bag.png'
const swin = '/static/imgs/swin.png'

const  ContactUs = () => {
  return (
    <div>
      <div className="paiyou-contact-header" />
      <div className="paiyou-contact-text">联系我们</div>
      <div className="paiyou-contact-text">contact us</div>

      <div className="paiyou-contact-info">
        <p className="MTB-20">公司地址: 苏州市工业园区金鸡湖1355号国际科技园四期A0504</p>
        <p className="MTB-20">企业邮箱: info@paiyou.co</p>
      </div>
      <div>
        <Row className="paiyou-contact-row">
          <Map zoom={20} center={{ longitude: 120.665717, latitude: 31.295994 }}>
            <Marker position={{ longitude: 120.665717, latitude: 31.295994 }}>
              <img src={mark} alt="" className="W-3" />
            </Marker>
          </Map>
        </Row>
      </div>
      <div className="paiyou-container">
        <Row justify="center" className='MTB-30'>
          {[
            [swin, '市场合作——市场部', '邮箱：info@paiyou.co'],
            [lifang, '广告投放——周先生', '邮箱：zyc@paiyou.co'],
            [bag, '渠道合作——李先生', '邮箱：c@paiyou.co']
          ].map(v => (
            <Col lg={8} xs={24} className="MB-10" key={v}>
              <Card style={{ boxShadow: '#e5e5e5 0px 0px 50px' }} bordered={false} bodyStyle={{ minHeight: 197 }}>
                <Col span={4} offset={2} className="MTB-20 PT-5">
                  <img src={v[0]} alt="" style={{ width: '90%' }} />
                </Col>
                <Col span={18} className="FS-9 MTB-20" style={{ color: grey[9] }}>
                  <p>{v[1]}</p>
                  <p>{v[2]}</p>
                </Col>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
export default ContactUs
