import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'


async function getBooks() {
  const resp = await axios.get('/books');
  console.log(resp.data);
}

getBooks();

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      login: {
        email: '',
        password: ''
      },
      register: {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
      }
    })
    this.handleRegisterChange = this.handleRegisterChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleRegisterChange(e) {
    const { name, value } = e.target
    this.setState(prevState => {
      return {
        register: {
          ...prevState.register,
          [name]: value
        }
      }
    })
  }

  handleSubmit(e) {


  }

  render() {
    return (
      <div className="App">
        <RegisterForm register={this.state.register}
                      handleRegisterChange={this.handleRegisterChange}/>
      </div>
    );
  }
}

export default App;
