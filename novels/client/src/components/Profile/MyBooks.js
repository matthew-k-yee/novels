import React from 'react'

function MyBooks(props) {
  return(
    <div>
      {props.favorites.map(book => (
        <div key={book.id}>
          <img src={book.image} alt={book.title}/>
        </div>
      ))}
    </div>
  )
}
export default MyBooks
