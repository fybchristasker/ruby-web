import React from 'react'
import { Icon, Rate, Carousel, Card, Row, Col } from 'antd'

const Recruit = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ background: '#999' }}>
        <div className="TA-C FS-30 PT-40" style={{ color: 'white' }}>招聘人才</div>
        <Row type="flex" style={{ paddingTop: '5%' }}>
          {[['global', 'Access quick apply'], ['like', 'Top employers'], ['safety-certificate', 'Self information protected'], ['phone', 'Contact us anytime']].map(v => 
            <Col lg={6} sm={12} xs={24} key={v} className="MB-20 FS-30 TA-C">
              <Icon style={{ borderRadius: '50%', background: '#006699', color: 'white', padding: 25 }} type={v[0]} />
              <div className="FS-9 MT-10">{v[1]}</div>
            </Col>
          )}
        </Row>
      </div>
      <Row>
        <Col lg={{ span: 12, push: 6 }} xs={24} className="MT-35">
          <Carousel autoplay dots={false}>
            {[
              ['I followed a link and uploaded my resume. I received an email from an employer looking for someone with my skills. I have a fantastic new job, Thanks Entas!!', 'Linda'],
              ['I had my resume public for only two days and I got flooded with interviews from serious competitive employers that resulted in me choosing between very tempting offers.', 'Sarah'],
              ['I uploaded my resume and within that week had several emails and calls about opportunities from recruiters. I decided to pursue an opportunity with HP and started working there that same month.', 'Jason']
            ].map(v => (
              <Col className="MB-20" key={v[0]}>
                <Card className="MTB-5" style={{ height: 260, background: '#fbfbff', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px' }}>
                  <div className="FS-8 MT-10" style={{ textAlign: 'justify'  }}>
                    {v[0]}
                  </div>
                  <div style={{ top: '60%', position: 'absolute'  }}>
                    <div style={{ color: '#663399'  }} className="bold">
                      {v[1]}
                    </div>
                    <Rate className="align-right FS-7" disabled defaultValue={5} />
                  </div>
                </Card>
              </Col>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default Recruit
