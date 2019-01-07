import React from 'react'
import { Redirect, Link } from 'react-router-dom'

function ListGenre(props){
  return(

    <div className='listgenre'>
      <ul>
        {props.genres.map(genre => (
          <li key={genre.id}>
            <Link to={`/browse/?genre_title=${genre.genre_title}`}>{genre.genre_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ListGenre
