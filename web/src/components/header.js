import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <header className="">
    <h1 className="">
      <Link to="/" className="text-orange-500">
        {'<<'} Home
      </Link>
    </h1>
  </header>
)

export default Header
