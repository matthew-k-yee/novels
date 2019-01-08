import React from 'react'

function CommentForm(props){
  return(
    <div>
      <form className='comment-form' onSubmit={props.handleSubmit}>
        <label>
            <h3>Review:</h3>
          <textarea type='text'
                    rows="6" cols="40"
                    name='review'
                    onChange={props.handleChange}
                    value={props.review}
                    />
        </label>
        <br/>
        <button type='submit'>Post!</button>
      </form>
    </div>
  )
}
export default CommentForm
