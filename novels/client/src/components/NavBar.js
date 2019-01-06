import React from 'react'
import { Link } from 'react-router-dom';

function NavBar(props){
  return(
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/mybooks'>MyBooks</Link>
        </li>
        <li>
          <Link to='/browse'>Browse</Link>
        </li>
        <li>
          <Link to='/signin'>Log In / Register</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
