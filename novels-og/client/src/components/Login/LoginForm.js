import React from 'react'

function LoginForm(props) {
  return(
    <div className='login-form'>
      <form onSubmit={props.handlelogin}>
        <h2>Sign In</h2>
        <h3>Email:</h3>
        <input type='email'
               name='email'
               value={props.login.email}
               onChange={props.handleChange}/>
        <h3>Password:</h3>
        <input type='password'
               name='password'
               value={props.login.password}
               onChange={props.handleChange}/>
        <br/><br/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
