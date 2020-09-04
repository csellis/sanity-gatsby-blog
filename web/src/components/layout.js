import React from 'react'
import Header from './header'
import Footer from './footer';


import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className="bg-gray-100 ">
    <div className="mx-auto px-4 min-h-screen max-w-screen-lg z-50 py-4 flex flex-col">
      <Header />
      <div className="flex flex-col max-w-screen-lg px-4 flex-1">{children}</div>
      <Footer />
    </div>
  </div>
)

export default Layout
