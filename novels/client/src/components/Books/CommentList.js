import React from 'react'

function CommentList(props){
  return(
    <div>
      <h2>COMMUNITY REVIEWS</h2>
      {props.comments.map(comment => (
        <div className='comment-list' key={comment.id}>
          <p>{comment.review}</p>
          <button onClick={() => {props.handleDelete(comment.id)}}>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default CommentList


// deleteButton = async (id,index) => {
//     let comments = this.state.data.comments.filter((item) => item.id !== id);
//     comments = this.makeEditabler(comments);
//
//     const resp = await axios.delete(
//       `${this.props.server_url}/comments/${id}`
//     );
//     this.setState(
//       prevState => {
//         return {
//           data: {
//             ...prevState.data,
//             comments: comments,
//           }
//         }
//       }
//     );
//
//   }
//
//   const deleteButton = item.editable
//     ? <div className="comment-delete-button-div">
//       <button className="comment-delete-button"
//         type='button'
//         onClick={ () => this.deleteButton(item.id,index)}>
//         delete
//       </button>
//      </div>
//     : <div className="comment-delete-button-div">
//       <button className="comment-delete-button"
//         type='button'
//         >
//         delete
//       </button>
//     </div>
