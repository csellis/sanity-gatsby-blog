import React from 'react'

import styles from './container.module.css'

const Container = ({ children }) => {
  return <div className="bg-gray-100 p-6 mx-auto w-3/4">{children}</div>
}

export default Container
