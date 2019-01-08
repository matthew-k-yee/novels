import React, { Component } from 'react'
// import { login } from '../../services/auth';
import axios from 'axios'
import BookInfo from './BookInfo';
import CommentList from './CommentList'
import CommentForm from './CommentForm';


// import { Redirect, Link } from 'react-router-dom'

class BookFullPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: Number(this.props.match.params.id),
      books: [],
      comments: [],
      newReview: {
        review: ''
      }
    }
}

  async componentDidMount(){
    await this.getBooks()
    await this.getComment();
  }

  async getBooks() {
    const resp = await axios.get(`/books/${this.state.id}`);
    this.setState({
      books: resp.data
    })
  }

  async getComment(){
    const resp = await axios.get(`/books/${this.state.id}/comments`)
    this.setState({
      comments: resp.data
    })
  }

  async addComment() {
    const token = localStorage.getItem('token');
    console.log(token)
    const resp = await axios.post(`/books/${this.state.id}/comments`,
      {comment:
        {review: this.state.newReview.review,
        book_id: this.state.id}} ,
      {headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const comment = resp.data
    this.setState(prevState => {
      return {
        comments: [...prevState.comments, comment],
        newReview: {
          review: ''
        }
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState( prevState => {
      return {
        newReview: {
          ...prevState.newReview,
          [name]: value
        }
      }
    })
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    console.log(this.state.newReview.review)
    await this.addComment(this.state.newReview.review)
  }

  render() {
    console.log(this.state.comments)
    return(
      <div>
        <BookInfo books={this.state.books} />
        <CommentList comments={this.state.comments}/>
        <CommentForm handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                     review={this.state.newReview.review}
        />
      </div>
    )
  }
}

export default BookFullPage
