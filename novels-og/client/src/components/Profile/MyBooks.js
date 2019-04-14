import React from 'react'

function MyBooks(props) {
  return(
    <div>
      {props.favorites.map(book => (
        <div key={book.id}>
          <img src={book.image} alt={book.title}/>
          <br/>
          <button onClick={() => {props.unFavorite(book.id)}}>Remove</button>
        </div>
      ))}
    </div>
  )
}
export default MyBooks
