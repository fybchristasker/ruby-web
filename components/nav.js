import React, { useState } from 'react'
import { useRouter } from 'next/router'
import _ from 'lodash'
import Link from 'next/link'
import { Menu, Modal, Button, Icon, Dropdown } from 'antd'
const logo = '/static/imgs/entas-logo.png'

const Nav = () => {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const RightIconMenu = () => {
    const { SubMenu } = Menu
    const menu = (
      <Menu>
        <Menu.Item>
          <a>
            <span role="presentation" onClick={() => setVisible(true)}>
              联系我们
            </span>
          </a>
        </Menu.Item>
        <Menu.Item>
          <Link href="/recruit">
            <a>招聘人才</a>
          </Link>
        </Menu.Item>
      </Menu>
    )
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" style={{ textDecoration: 'none'  }}>
          <Icon type="menu" style={{ fontSize: 20  }} />
        </a>
      </Dropdown>
    )
  }

  const HorizontalMenu = () => {
    return (
      <ul className="nav navbar-nav bold">
        <li className="mega-menu">
          <a>
            <span role="presentation" onClick={() => setVisible(true)}>
              联系我们
            </span>
          </a>
        </li>
        <li className="mega-menu">
          <Link href='/recruit'>
            <a>
              招聘人才
            </a>
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <nav className='main-nav menu-light js-transparent menu-transparent'>
      <div className="container">
        <div className="navbar">
          <div className="brand-logo">
            <span className="C-P navbar-brand" style={{ textDecoration: 'none'  }} onClick={() => router.push('/')}>
              <span className="entas-logo" />
            </span>
          </div>
        </div>
        <div className="navbar-header inner-nav right-nav">
          <ul>
            <li className="navbar-toggle">
              <RightIconMenu />
            </li>
          </ul>
        </div>
        <div className="custom-collapse navbar-collapse collapse inner-nav">
          <HorizontalMenu />
        </div>
        <Modal style={{ minWidth: '70vw' }} closable={false} visible={visible} footer={null} onCancel={() => setVisible(false)}>
          <div className="TA-C bold" style={{ color: 'white', height: '60vh' }}>
            <div style={{ fontSize: '1.5em' }} className="MTB-10">联系我们</div>
            <img src={logo} alt="" style={{ maxWidth: '10%', background: 'white' }} />
            <div style={{ fontSize: '1.2em' }} className="MTB-10">电话: 13641559250</div>
            <div style={{ fontSize: '1.2em' }} className="MTB-10">邮箱: 769661156@qq.com</div>
          </div>
          </Modal>
      </div>
    </nav>
  )
}

export default Nav
