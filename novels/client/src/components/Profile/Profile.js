import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = ({
      books: [],
      redirectToAuth: false
    })
    this.logOut = this.logOut.bind(this)
  }

  logOut(e) {
    localStorage.removeItem('token');
    this.setState({
      redirectToAuth: true
    })
    console.log('logged out')
  }

  render() {
    if (this.state.redirectToAuth || !localStorage.getItem('token')) {
      return (<Redirect to="/signin" />)
    }
    return(
      <div>
        <h1>Hello!</h1>
        <h2>Your saved books!!</h2>
        <button onClick={this.logOut}>Log Out</button>
    </div>
    )
  }
}
export default Profile
