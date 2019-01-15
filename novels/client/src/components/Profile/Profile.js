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
      redirectToAuth: false
    })
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount = async() => {
    await this.getUsers()
  }

  logOut(e) {
    localStorage.removeItem('token');
    this.setState({
      redirectToAuth: true
    })
    console.log('logged out')
  }

  getUsers = async(e) => {
    const resp = await axios.get(`users/1`)
    console.log(resp.data)
    this.setState({favorites: resp.data.books})
  }

  render() {
    console.log(this.state.favorites)
    if (this.state.redirectToAuth || !localStorage.getItem('token')) {
      return (<Redirect to="/signin" />)
    }
    return(
      <div className='profile'>
        <h1>Hello!</h1>
        <h2>Your saved books</h2>
        <MyBooks favorites={this.state.favorites}/>
        <button onClick={this.logOut}>Log Out</button>
    </div>
    )
  }
}
export default Profile
