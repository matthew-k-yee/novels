import React, { Component } from 'react'
import CommentForm from './CommentForm'

class Comments extends Component{
  constructor(props){
    super(props)
    this.state = ({})
  }

  render() {
    return(
      <div>
        <h3>Community Reviews</h3>
        <CommentForm />
      </div>
    )
  }
}
export default Comments
