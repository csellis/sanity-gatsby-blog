import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className="bg-gray-100 py-4">
    <div className="mx-auto px-4 max-w-screen-lg z-50 min-h-screen">
      <Header />
      <div className="max-w-screen-lg px-4">{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.siteInfo}>
            &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
          &amp;
          {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
)

export default Layout
