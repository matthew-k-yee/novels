import React from 'react'

function BookInfo(props){
  return(
    <div>
      <div className='bookInfo' key={props.books.id}>
        <h1>{props.books.title}</h1>
        <p>{props.books.summary}</p>
      </div>
    </div>
  )
}

export default BookInfo
