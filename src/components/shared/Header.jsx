import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to='/'>ecomerce</Link>
      </h1>
      <nav>
        <ul>
            <li><Link to='/user/login'>Login</Link></li>
            <li><Link to='/purchases'>Purchase</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header