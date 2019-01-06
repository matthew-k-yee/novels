import React, { Component } from 'react';
import { login } from '../services/auth';
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm';

class AuthForm extends Component{
  constructor(props){
    super(props)
    this.state = ({
      credentials: {
        email: '',
        password: ''
      },
      redirectToProfile: false
    })
    this.handleChange = this.handleChange.bind(this)
    this.handlelogin = this.handlelogin.bind(this)
  }

  handleChange(e){
    const { name, value } = e.target
    this.setState(prevState => {
      return {
        credentials: {
          ...prevState.credentials,
          [name] : value
        }
      }
    })
  }

  async handlelogin(e){
    e.preventDefault();
    const tokenData = await login(this.state.credentials);
    console.log(tokenData)
    localStorage.setItem('token', tokenData.jwt);
    this.setState({ redirectToProfile: true})
    console.log('loggedin')
  }

  render() {
    if (this.state.redirectToProfile) return (<Redirect to="/profile"/>)
    return(
      <div>
      <LoginForm login={this.state.credentials}
                 handleChange={this.handleChange}
                 handlelogin={this.handlelogin}/>
      </div>
    )
  }
}

export default AuthForm
