import React from 'react'

function BookInfo(props){
  console.log(props)
  return(
    <div>
      <div key={props.books.id}>
        <h1>{props.books.title}</h1>
        <p>{props.books.summary}</p>
      </div>
    </div>
  )
}

export default BookInfo
