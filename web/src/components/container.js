import React from 'react'

import styles from './container.module.css'

const Container = ({ children }) => {
  return <div className="bg-gray-100 p-6 mx-auto max-w-screen-lg">{children}</div>
}

export default Container
