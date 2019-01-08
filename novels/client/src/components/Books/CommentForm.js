import React from 'react'

function CommentForm(props){
  return(
    <div>
      <form className='comment-form'>
        <label>
          <h3>Title:</h3>
          <input type='text'
                 name='title'/>
        </label>
        <br/>
        <label>
            <h3>Comment:</h3>
          <textarea type='text'
                    name='Comment'/>
        </label>
        <br/>
        <button type='submit'>Post!</button>
      </form>
    </div>
  )
}
export default CommentForm
