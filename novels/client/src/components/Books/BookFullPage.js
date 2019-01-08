import React, { Component } from 'react'
import axios from 'axios'
import BookInfo from './BookInfo';
import Comments from './Comments';

// import { Redirect, Link } from 'react-router-dom'

class BookFullPage extends Component{
  constructor(props){
    super(props)
    this.state = ({
      id: Number(this.props.match.params.id),
      books: [],
      comments: []
    })
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

  render() {
    console.log(this.state.comments)
    return(
      <div>
        <BookInfo books={this.state.books} />
        <Comments comments={this.state.comments} />
      </div>
    )
  }
}

export default BookFullPage
