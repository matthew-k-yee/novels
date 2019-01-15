import React, {Component} from 'react'
import axios from 'axios'
import BookInfo from './BookInfo';
import CommentList from './CommentList'
import CommentForm from './CommentForm';

class BookFullPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Number(this.props.match.params.id),
      books: [],
      comments: [],
      users: [],
      newReview: {
        review: ''
      },
      editID: 0,
      favorites: []
     }
  }
  componentDidMount = async () => {
    await this.getBooks()
    await this.getComment();
  }

  getBooks = async () => {
    const resp = await axios.get(`/books/${this.state.id}`);
    this.setState({books: resp.data})
  }

  getComment = async () => {
    const resp = await axios.get(`/books/${this.state.id}/comments`)
    this.setState({comments: resp.data})
  }

  handleDelete = async (id) => {
    console.log(`Deleting class with an id ${id}`);
  }

  addComment = async () => {
    const token = localStorage.getItem('token');
    const resp = await axios.post(`/books/${this.state.id}/comments/`, {
      comment: {
        review: this.state.newReview.review,
        book_id: this.state.id
      }
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const comment = resp.data
    this.setState(prevState => {
      return {
        comments: [
          ...prevState.comments,
          comment
        ],
        newReview: {
          review: ''
        }
      }
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState(prevState => {
      return {
        newReview: {
          ...prevState.newReview,
          [name]: value
        }
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.addComment(this.state.newReview.review)
  }

  handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    const resp = await axios.delete(`/books/${this.state.id}/comments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    this.setState(prevState => {
      return {
        comments: prevState.comments.filter(c => c.id !== id)
      }
    })
  }

  toggleState = (id) => {
    this.setState({editID: id})
  }

  handleUpdate = async (e, id, index) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const resp = await axios.put(`/books/${this.state.id}/comments/${id.id}`, {comment: {
        review: id.review,
        book_id: this.state.id,
      }}, {
      headers: {
          Authorization: `Bearer ${token}`,
        }
    });
    this.setState(prevState => {
      return {
        ...prevState.comments
      }
    })
  }

  handleCommentChange = (e,index) => {
    const { value } = e.target
  const comments = this.state.comments
    comments[index]["review"] = value;
    this.setState(prevState => {
      return {
         comments: comments
        }
      }
    )
  }

  //http://localhost:3001/users/1/books/
  addToFavorites = async (e) => {
    let favorites = this.state.favorites
    favorites.push({
      books: this.state.books.title
    })
    const token = localStorage.getItem('token');
    const resp = await axios.put(`/users/1/books/${this.state.id}`, {book: {
      title: this.state.books.title,
      summary: this.state.books.summary
    }}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    this.setState(prevState => {
      return {
        ...prevState.favorites
      }
    })
    console.log('added')
    console.log(this.state.favorites)
  }

  render() {
    return (
      <div>
        <BookInfo books={this.state.books} addToFavorites={this.addToFavorites}/>
        <div className='reviews'>

        <CommentList comments={this.state.comments}
                     handleDelete={this.handleDelete}
                     handleUpdate={this.handleUpdate}
                     toggleState={this.toggleState}
                     handleCommentChange={this.handleCommentChange}
                     editID={this.state.editID}
                     updatedComment={this.state.updatedComment}/>

        <CommentForm handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                     review={this.state.newReview.review}/>
       </div>
    </div>)
  }
}

export default BookFullPage
