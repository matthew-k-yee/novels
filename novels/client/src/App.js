import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AuthForm from './components/Login/AuthForm';
import Profile from './components/Profile/Profile';
import Browse from './components/Genre/Browse';
import BookList from './components/Books/BookList';




// async function getBooks() {
//   const resp = await axios.get('/books');
//   console.log(resp.data);
// }
//
// getBooks();

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      login: {
        email: '',
        password: ''
      }
      // register: {
      //   firstName: '',
      //   lastName: '',
      //   userName: '',
      //   email: '',
      //   password: ''
      // }
    })
    // this.handleRegisterChange = this.handleRegisterChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleRegisterChange(e) {
  //   const { name, value } = e.target
  //   this.setState(prevState => {
  //     return {
  //       register: {
  //         ...prevState.register,
  //         [name]: value
  //       }
  //     }
  //   })
  // }
  //
  // handleSubmit(e) {
  //   e.preventDefault();
  // }


  render() {
    return (
      <Router>
        <div className="App">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/browse' component={Browse} />
            <Route path='/books' component={BookList} />
            <Route path='/signin' component={AuthForm} />
        </div>
      </Router>
    );
  }
}

export default App;
