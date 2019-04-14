import React from 'react'


function CommentList(props){
  const review =  props.comments.review
  return(
    <div>
      <h2 className='review-title'>COMMUNITY REVIEWS</h2>
      {props.comments.map((comment, index) => (
        <div className='comment-list' key={comment.id}>
          <p>{comment.review}</p>
            {
            props.editID === comment.id ?
            <form >
              <textarea type='text'
                        rows="6" cols="40"
                        name='review'
                        value = {review}
                        onChange={(e) => props.handleCommentChange(e, index)}
                        />
              <button onClick={(e) => {
                props.handleUpdate(e,comment,index);
                props.toggleState(0);
              }}>Submit</button>
            </form>
            :
            <button onClick={()=> {props.toggleState(comment.id)}}>Edit</button>
          }
          <button onClick={() => {props.handleDelete(comment.id)}}>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default CommentList
