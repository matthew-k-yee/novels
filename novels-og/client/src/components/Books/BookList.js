import React, { Component } from 'react'
import axios from 'axios'
import BookListItem from './BookListItem';

class BookList extends Component {
  constructor(props){
    super(props)
    this.state = ({
      books: []
    })
  }

  async componentDidMount() {
    await this.getBooks();
  }

  async getBooks() {
    const resp = await axios.get('/books');
    this.setState({
      books: resp.data
    })
  }

  render() {
    return(
      <div>
        <h1 className='book-title'>Books</h1>
        <BookListItem books={this.state.books} match={this.props.match}/>
      </div>
    )
  }
}



export default BookList
