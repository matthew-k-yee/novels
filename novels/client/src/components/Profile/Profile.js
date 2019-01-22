import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import MyBooks from './MyBooks'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = ({
      books: [],
      users: [],
      favorites: [],
      userId: 1,
      redirectToAuth: false
    })
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount = async() => {
    await this.getUsers(this.state.userId)
  }

  logOut(e) {
    localStorage.removeItem('token');
    this.setState({
      redirectToAuth: true
    })
    console.log('logged out')
  }

  getUsers = async(id) => {
    const resp = await axios.get(`users/${id}`)
    this.setState({favorites: resp.data.books})
  }

  unFavorite = async (id) => {
    const token = localStorage.getItem('token');
    const resp = await axios.delete(`/users/1/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    this.setState(prevState => {
      return {
        favorites: prevState.favorites.filter(book => book.id !== id)
      }
    })
  }

  render() {
    if (this.state.redirectToAuth || !localStorage.getItem('token')) {
      return (<Redirect to="/signin" />)
    }
    return(
      <div className='profile'>
        <h1>Hello!</h1>
        <h2>Your saved books</h2>
        <MyBooks favorites={this.state.favorites}
                 unFavorite={this.unFavorite}
        />
        <button onClick={this.logOut}>Log Out</button>
    </div>
    )
  }
}
export default Profile
