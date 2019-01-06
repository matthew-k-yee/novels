import React from 'react'
import LoginForm from './LoginForm';

class AuthForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      credentials: {
        email_account: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    // const { name, value } = e.target
  }

  render(){
    return(
      <LoginForm credentials={this.state.credentials} handleChange ={this.handleChange}/>
    )
  }
}

export default AuthForm
