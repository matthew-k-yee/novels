import React from 'react'

function CommentList(props){
  console.log(props)
  return(
    <div>
      <h2>COMMUNITY REVIEWS</h2>
      {props.comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.review}</p>
        </div>
      ))}
    </div>
  )
}
export default CommentList
