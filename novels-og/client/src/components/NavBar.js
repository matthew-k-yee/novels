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
          <Link to='/profile'>MyBooks</Link>
        </li>
        <li>
          <Link to='/genres'>Browse</Link>
        </li>
        <li>
          <Link to='/signin'>Log In / Register</Link>
        </li>
        <li>
          <Link to='/books'>Books</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
