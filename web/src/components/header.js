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
    <header className="max-w-prose prose-lg z-50">
      <Link to={match.route} className="text-orange-500 font-medium text-lg sm:text-xl">
        {'<<'} {match.text}
      </Link>
    </header >
  )
}

export default Header
