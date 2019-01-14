import React from 'react'
import { Link } from 'react-router-dom';

function FilteredGenreList(props){
  return(
    <div className='filtered-list'>
      <ul>
        {props.genres.map(book => (
          <div className='genre-list' key={book.id}>
            <Link to={`/books/${book.id}`}><img src={book.image} alt={book.title} /></Link>
          </div>
        ))}
      </ul>
    </div>
  )
}


export default FilteredGenreList
