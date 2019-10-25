import { Row, Col, Layout  } from 'antd'
import { grey  } from '@ant-design/colors'

const Foot = props => (
  <Layout.Footer className='footer-bottom'>
    <Row>
      <div className="footer-headline FS-7">
        <Col md={24} className="TA-C">
          <span className="D-IB">Business address: 7/113-115 Main Road，Moonah，TAS 7009</span>
          <span className="MLR-4 disp" style={{ color: grey[4] }}>
            |
          </span>
          <span className="D-IB">
            Phone Number: 1800865166
          </span>
        </Col>
        <Col md={24} className="TA-C">
          <span className="FS-7">Work Email: info@entasit.com.au</span>
          <span className="MLR-4 disp" style={{ color: grey[4] }}>
            |
          </span>
          <span className="FS-7">Legal business name: ENTAS IT PTY LTD</span>
        </Col>
      </div>
    </Row>
  </Layout.Footer>
)

export default Foot
