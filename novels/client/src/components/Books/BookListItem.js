import React from 'react'
import { Link } from 'react-router-dom';
// import BookFullPage from './BookFullPage';


function BookListItem(props){
  const match = props.match
  return(
    <div className='bookList'>
        {props.books.map(book => (
          <div className='book-covers-container' key={book.id}>
            <Link to={`${match.url}/${book.id}`}><img className='book-covers' src={book.image} alt={props.title}/></Link>
            {book.id > 4}
          </div>
        ))}
    </div>
  )
}




export default BookListItem
