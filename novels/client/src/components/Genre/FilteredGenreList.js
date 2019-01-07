import React from 'react'
import { Link } from 'react-router-dom';

function FilteredGenreList(props){
  return(
    <div>
      <ul>
        {props.genres.map(book => (
          <div key={book.id}>
            <h1><Link to={`/books/${book.id}`}>{book.title}</Link></h1>
            <p>{book.author}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}


export default FilteredGenreList
