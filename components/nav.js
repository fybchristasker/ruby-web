import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import Link from 'next/link'
import { Menu, Icon, Dropdown } from 'antd'
import { scroll } from '../pages/index'

const links = [
  { href: '/#product', label: '产品' },
  { href: '/contact', label: '联系我们' },
  { href: '/hire', label: '人才招聘' }
]

const Nav = props => {
  const [headerColor, setHeaderColor] = useState('')
  useEffect(() => {
    const onScrollHandler = _.throttle(() => {
      const className = window.scrollY > 0 ? 'menu-sticky' : 'menu-transparent'
      if (headerColor !== className) {
        setHeaderColor(className)
      }
    }, 200)
    onScrollHandler()
    window.addEventListener('scroll', onScrollHandler)
    return () => {
      window.removeEventListener('scroll', onScrollHandler)
    }
  }, [])

  const menu = (
    <Menu>
      {links.map(({ href, label }) => (
        <Menu.Item key={href}>
          <Link href={href}>
            <a className="FS-7">
              {label}
            </a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <nav className={`main-nav menu-light js-transparent ${headerColor}`}>
      <div className="container">
        <div className="navbar">
          <div className="brand-logo fadeInLeft animated">
            <Link href="/">
              <div className="logo-paiyou" />
            </Link>
          </div>

          <div className="navbar-header inner-nav right-nav">
            <ul>
              <li className="navbar-toggle">
                <Dropdown overlay={menu} trigger={['click']}>
                  <a><Icon type="unordered-list" className="FS-10" /></a>
                </Dropdown>
              </li>
            </ul>
          </div>

          <div className="custom-collapse navbar-collapse collapse inner-nav">
            <ul className="nav navbar-nav">
              {links.map(({ href, label, onClick }) => (
                <li className="mega-menu" key={href}>
                  <Link href={href} >
                    <a className="underline FS-7" onClick={onClick}>
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
