import React from 'react'


function CommentList(props){
  return(
    <div>
      <h2>COMMUNITY REVIEWS</h2>
      {props.comments.map(comment => (
        <div className='comment-list' key={comment.id}>
          <p>{comment.review}</p>
            {
            props.editID === comment.id ?
            <form>
              <textarea type='text'
                        rows="6" cols="40"
                        name='updatedComment'
                        value = {props.updatedComment}
                        />
              <button onClick={() => {props.handleUpdate(comment.id)}}>Submit</button>
            </form>
            :
            <button onClick={()=> {props.toggleState(comment.id)}}

            >Edit</button>
          }
          <button onClick={() => {props.handleDelete(comment.id)}}>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default CommentList
