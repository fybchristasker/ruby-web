import { Row, Col, Layout  } from 'antd'
import { grey  } from '@ant-design/colors'
const Beian = '/static/imgs/police-badge.png'


const Foot = props => (
  <Layout.Footer className='footer-bottom'>
    <Row>
      <div className="footer-headline FS-7">
        <Col md={24} className="TA-C">
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32059002001589" className="D-IB">
            <img alt="" src={Beian} height="20" /> 苏公网安备 32059002001589号
          </a>
          <span className="MLR-4 disp" style={{ color: grey[4] }}>
            |
          </span>
          <a href="http://www.miibeian.gov.cn" className="D-IB">
            苏ICP备16028313号
          </a>
        </Col>
        <Col md={24} className="TA-C">
          <span className="FS-6">© 苏州排忧网络技术有限责任公司 版权所有</span>
        </Col>
      </div>
    </Row>
  </Layout.Footer>
)

export default Foot
