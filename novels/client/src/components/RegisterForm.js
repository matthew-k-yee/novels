import React from 'react'

function RegisterForm(props){
  return(
    <form onSubmit={props.handleSubmit}>
      <h3>Register</h3>
      <h4>First Name</h4>
      <input type='text'
             name="firstName"
             value={props.register.firstName}
             onChange={props.handleRegisterChange}/>
      <br/>
      <h4>Last Name</h4>
      <input type='text'
             name="lastName"
             value={props.register.lastName}
             onChange={props.handleRegisterChange}/>
      <br/>
      <h4>User Name</h4>
      <input type='text'
             name="userName"
             value={props.register.userName}
             onChange={props.handleRegisterChange}/>
      <br/>
      <h4>Email</h4>
      <input type='email'
             name="email"
             value={props.register.email}
             onChange={props.handleRegisterChange}/>
      <br/>
      <h4>Password</h4>
      <input type='password'
             name="password"
             value={props.register.password}
             onChange={props.handleRegisterChange}/>
      <br/><br/>
      <button type='submit'>Submit</button>
    </form>
  )
}
export default RegisterForm
