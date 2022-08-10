import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <h2>Satish Learning Blog</h2>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/article'>All Articles</Link></li>
        </ul>
    </div>
  )
}

export default Header
