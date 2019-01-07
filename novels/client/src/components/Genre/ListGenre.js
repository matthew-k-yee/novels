import React from 'react'
import {  Link } from 'react-router-dom'

function ListGenre(props){
  return(

    <div className='listgenre'>
      <ul>
        {props.genres.map(genre => (
          <li key={genre.id}>
            {/* <Link to={`/genres/${genre.id}/books`}>{genre.genre_title}</Link> */}
            <Link to={`/genres/${genre.id}/books`}>{genre.genre_title}</Link>
          </li>)
        )}
      </ul>
    </div>
  )
}
export default ListGenre
