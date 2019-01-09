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
      updatedComment: []
    }
  }
  componentDidMount = async () => {
    await this.getBooks()
    await this.getComment();
    await this.getUsers();
  }

  getBooks = async () => {
    const resp = await axios.get(`/books/${this.state.id}`);
    this.setState({books: resp.data})
  }

  getComment = async () => {
    const resp = await axios.get(`/books/${this.state.id}/comments`)
    this.setState({comments: resp.data})
  }

  getUsers = async () => {
    const resp = await axios.get(`/users`)
    this.setState({users: resp.data})
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
    console.log(this.state.newReview.review)
    await this.addComment(this.state.newReview.review)
  }

  // delete
  handleDelete = async (id) => {
    console.log(this.state.users)
    console.log(this.state.comments)
    const token = localStorage.getItem('token');
    console.log(token)
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
    console.log(id)
  }

  handleUpdate = async (id) => {
    const token = localStorage.getItem('token');
    const resp = await axios.put(`/books/${this.state.id}/comments/${id}`, {
      comment: {
        review: this.state.comments.review,
        book_id: this.state.id,
        user_id: this.state.comments.user_id
      }
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    this.setState(prevState => {
      return {
        ...prevState.comments
      }
    })
    console.log(resp.data)
  }

  // favorites
  addtoFav = (e) => {
    console.log('add')
  }

  render() {
    return (<div>
      <BookInfo books={this.state.books} addtoFav={this.addtoFav}/>

      <CommentList comments={this.state.comments}
                   handleDelete={this.handleDelete}
                   handleUpdate={this.handleUpdate}
                   toggleState={this.toggleState}
                   SubmitNewComment={this.submitNewComment}
                   editID={this.state.editID}
                   updatedComment={this.state.updatedComment}/>

      <CommentForm handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit}
                   review={this.state.newReview.review}/>
    </div>)
  }
}

export default BookFullPage
