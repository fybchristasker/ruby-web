import React, { useState } from 'react'
import { Button, Drawer, List, ListItem, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore, MenuOutlined } from '@material-ui/icons'
import Link from 'next/link'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import localStorage from 'localStorage'
import { THEME_NAME, SUPPORTED_THEMES } from 'consts'

const BackTop = dynamic(import('components/BackTop'), { ssr: false })

const Nav = () => {
  const COMMON_MENU = [['/blogs', '博客']]
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false)
  const ThemeMenuHorizontal = () => {
    return (
      <li className="dropdown mega-menu">
        <a
          role="presentation"
          onClick={() => {
            localStorage.setItem('THEME', localStorage.getItem('THEME') === 'light' ? 'dark' : 'light')
            window.location.reload()
          }}
        >
          切换主题
        </a>
        <style jsx>
          {`
            .no-bullet {
              list-style-type: none;
            }
          `}
        </style>
      </li>
    )
  }
  const rightIconMenuNotLoggedIn = () => {
    return (
      <List>
        {[['/signup', '免费注册'], ...COMMON_MENU].map(v => (
          <Link href={v[0]} key={v[0]}>
            <ListItem button onClick={() => setVisible(false)}>
              <span>{v[1]}</span>
            </ListItem>
          </Link>
        ))}
        <ListItem button onClick={() => setShow(!show)}>
          {THEME_NAME[localStorage.getItem('THEME') || 'dark']}
          {show ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={show} timeout="auto" unmountOnExit>
          <List>
            {SUPPORTED_THEMES.map(v => (
              <ListItem
                key={v}
                button
                onClick={() => {
                  localStorage.setItem('THEME', v)
                  window.location.reload()
                }}
              >
                {THEME_NAME[v]}
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    )
  }

  const rightIconMenuLoggedIn = () => {
    return (
      <List>
        {[...COMMON_MENU, ['/my/account', '会员中心']].map(v => (
          <Link href={v[0]} key={v[0]}>
            <ListItem button onClick={() => setVisible(false)}>
              <span>{v[1]}</span>
            </ListItem>
          </Link>
        ))}
        <ListItem button onClick={() => setShow(!show)}>
          {THEME_NAME[localStorage.getItem('THEME') || 'dark']}
          {show ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={show} timeout="auto" unmountOnExit>
          <List>
            {SUPPORTED_THEMES.map(v => (
              <ListItem
                key={v}
                button
                onClick={() => {
                  localStorage.setItem('THEME', v)
                  window.location.reload()
                }}
              >
                {THEME_NAME[v]}
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItem button>登出</ListItem>
      </List>
    )
  }

  const horizontalMenuNotLoggedIn = () => {
    return (
      <ul className="nav navbar-nav">
        {COMMON_MENU.map(v => (
          <li className="mega-menu" key={v} id={v[1]}>
            <Link href={v[0]}>
              <a>{v[1]}</a>
            </Link>
          </li>
        ))}
        {ThemeMenuHorizontal()}
        <li className="mega-menu" id="免费注册">
          <a>
            <Button disableElevation color="primary" variant="contained" onClick={() => Router.push('/signup')}>
              免费注册
            </Button>
          </a>
        </li>
      </ul>
    )
  }

  const horizontalMenuLoggedIn = () => {
    return (
      <ul className="nav navbar-nav">
        {[...COMMON_MENU].map(v => (
          <li className="mega-menu" key={v}>
            <Link href={v[0]}>
              <a className="C-P">{v[1]}</a>
            </Link>
          </li>
        ))}
        <li className="mega-menu">
          <Link href="/my/account">
            <a target="_blank" rel="noreferrer" className="C-P">
              会员中心
            </a>
          </Link>
        </li>
        {ThemeMenuHorizontal()}
        <li className="mega-menu">
          <a>
            <div role="presentation" className="C-P">
              登出
            </div>
          </a>
        </li>
      </ul>
    )
  }
  return (
    <>
      <nav className="main-nav">
        <div className="container">
          <div className="brand-logo">
            <span role="presentation" onClick={() => Router.push('/')}>
              <img src="/imgs/lingti-logo.png" alt="" style={{ height: 40, marginTop: -10 }} />
            </span>
          </div>
          <div className="navbar-header">
            <div className="inner-nav">
              <ul>
                <li className="navbar-toggle">
                  <a style={{ textDecoration: 'none' }}>
                    <MenuOutlined onClick={() => setVisible(true)} style={{ fontSize: 20, color: 'currentColor' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Drawer anchor="right" open={visible} onClose={() => setVisible(false)}>
            {localStorage.getItem('Token') ? rightIconMenuLoggedIn() : rightIconMenuNotLoggedIn()}
          </Drawer>
          <div className="navbar-collapse collapse inner-nav">{localStorage.getItem('Token') ? horizontalMenuLoggedIn() : horizontalMenuNotLoggedIn()}</div>
        </div>
      </nav>
      <BackTop />
      <style jsx>
        {`
          .navbar-toggle {
            position: relative;
            float: right;
            background-image: none;
            border-radius: 4px;
            transition: all 0.4s ease-in-out;
            line-height: 100%;
            @media (min-width: 1199px) {
              display: none;
            }
            @media (max-width: 1199px) {
              display: block;
            }
          }
          .main-nav {
            letter-spacing: 2px;
            position: fixed;
            width: 100%;
            z-index: 101;
            .inner-nav {
              float: right;
            }
          }
        `}
      </style>
    </>
  )
}

export default Nav
