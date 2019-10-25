import React from 'react'
import { Row, Col, Collapse } from 'antd'
import { grey } from '@ant-design/colors'

const frontEnd = '/static/imgs/frontend_icon.png'
const backEnd = '/static/imgs/backend_icon.png'
const fullStack = '/static/imgs/fullstack_icon.png'
const designer = '/static/imgs/designer_icon.png'
const administrator = '/static/imgs/administrator_icon.png'

import FrontEndMD from '../static/md/FrontEnd.md'
import FullStackMD from '../static/md/FullStack.md'
import BackEndMD from '../static/md/BackEnd.md'
import DesignerMD from '../static/md/Designer.md'
import AdministratorMD from '../static/md/Administrator.md'

const collapse = [
  ['前端工程师', 'frontEnd', FrontEndMD, frontEnd],
  ['全栈工程师', 'fullStack', FullStackMD, backEnd],
  ['后端工程师', 'backEnd', BackEndMD, fullStack],
  ['产品设计师', 'designer', DesignerMD, designer],
  ['行政专员', 'administrator', AdministratorMD, administrator]
]

const Recruit = () => {
  const showIcon = (v) => {
    switch (v) {
      case 'frontEnd':
        return <img className="paiyou-recruit-icon" src={frontEnd} alt="" />
      case 'backEnd':
        return <img className="paiyou-recruit-icon" src={backEnd} alt="" />
      case 'fullStack':
        return <img className="paiyou-recruit-icon" src={fullStack} alt="" />
      case 'designer':
        return <img className="paiyou-recruit-icon" src={designer} alt="" />
      default:
        return <img className="paiyou-recruit-icon" src={administrator} alt="" />
    }
  }

  const { Panel } = Collapse
  const customPanelStyle = {
    background: '#FFFFFF',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
    boxShadow: '0px 0px 5px #999'
  } 
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="paiyou-recruit-header" />
      <div className="paiyou-recruit-title" style={{ zIndex: 1 }}>
        选择我们 成就自己 实现梦想
      </div>
      <div className="paiyou-recruit-job">岗位信息</div>
      <div className="paiyou-recruit-info">Job information</div>
      <div className="MT-10 collapse-style">
        {collapse.map(v => (
          <Row key={v} className="paiyou-index-container">
            <Col span={2} className="align-right">
              <img className="paiyou-recruit-icon" src={v[3]} alt='' />
            </Col>
            <Col span={20}>
              <Collapse bordered={false}>
                <Panel header={`${v[0]}`} key={`${v[1]}`} style={customPanelStyle}>
                  <div className="ML-10" style={{ color: grey[9] }} dangerouslySetInnerHTML={{ __html: v[2].html }} />
                </Panel>
              </Collapse>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  )
}
export default Recruit
