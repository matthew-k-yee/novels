import React, { Component } from 'react'
import axios from 'axios'
// import { Redirect, Link } from 'react-router-dom'

class BookFullPage extends Component{
  constructor(props){
    super(props)
    this.state = ({
      data: {
        book: {},
        comments: []
      }
    })
}

  async getBooks() {
    const resp = await axios.get('/books/');
    this.setState({
      books: resp.data
    })
  }

  render() {
    return (
      <h1></h1>
    )
  }
}

export default BookFullPage
