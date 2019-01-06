import React from 'react'

function LoginForm(props) {
  return (
    <form>
      <h2>Sign In</h2>
      <h3>Email</h3>
      <input type='text'
             name='email_account'
             value={props.credentials.email_account}
             onChange={props.handleChange}/>
      <br/>
      <h3>Password</h3>
      <input type='password'
             value={props.credentials.password}
             onChange={props.handleChange}
             name='password'/>
      <br/><br/>
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm
