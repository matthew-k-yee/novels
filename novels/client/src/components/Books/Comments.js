import React, { Component } from 'react'
import axios from 'axios'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

class Comments extends Component{
  constructor(props){
    super(props)
    this.state = ({
      users: [],
      comments: [],
      // id: Number(this.props.match.params.id)
    })
  }

  render() {
    return(
      <div>
        <h3>Community Reviews</h3>
        <CommentList/>
        <CommentForm />
      </div>
    )
  }
}
export default Comments
