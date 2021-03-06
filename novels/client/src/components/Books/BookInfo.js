import React from 'react'

function BookInfo(props){
  return(
    <div>
      <div className='bookInfo' key={props.books.id}>
        <h1 className='bookInFo-title'>{props.books.title}</h1>
        <img src={props.books.image} alt={props.books.title}/>
        <h3>By {props.books.author}</h3>
        <p className='bookInfo-summary'>{props.books.summary}</p>
        <button onClick={()=>{props.addToFavorites(props.book_id)}}>Add to Favorites</button>
      </div>
    </div>
  )
}

export default BookInfo
