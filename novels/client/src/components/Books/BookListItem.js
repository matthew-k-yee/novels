import React from 'react'
import { Link } from 'react-router-dom';
// import BookFullPage from './BookFullPage';


function BookListItem(props){
  const match = props.match
  return(
    <div className='bookList'>
      <ul>
        {props.books.map(book => (
          <li key={book.id}>
            <h1><Link to={`${match.url}/${book.id}`}>{book.title}</Link></h1>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}




export default BookListItem
