import { Link } from 'gatsby'
import React from 'react'

const Header = () => {

  // Get url at run time
  const url = typeof window !== 'undefined' ? window.location.href : '';
  // Options to go back on
  const linkLocations = [
    {
      match: "/project/",
      text: "Projects",
      route: "/projects"
    },
    {
      match: "/blog/",
      text: "Blog",
      route: "/blog"
    }
  ]
  // Match or return home
  const match = linkLocations.find(linkLocation => url.includes(linkLocation.match)) || { text: "Home", route: "/" }

  return (
    <header className="">
      <h1 className="">
        <Link to={match.route} className="text-orange-500">
          {'<<'} {match.text}
        </Link>
      </h1>
    </header>
  )
}

export default Header
