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
      books: []
    })
}

  async componentDidMount(){
    await this.getBooks()
  }

  async getBooks() {
    const resp = await axios.get(`/books/${this.state.id}`);
    this.setState({
      books: resp.data
    })
  }
  render() {
    return(
      <div>
        <BookInfo books={this.state.books} />
        <Comments books={this.state.books} />
      </div>
    )
  }
}

export default BookFullPage
