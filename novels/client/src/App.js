import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AuthForm from './components/Login/AuthForm';
import Profile from './components/Profile/Profile';
import BookList from './components/Books/BookList';
import BookFullPage from './components/Books/BookFullPage';
import Books from './components/Books/';
import Genre from './components/Genre/';


class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      login: {
        email: '',
        password: ''
      }      // register: {
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
            <Route path='/genres' component={Genre} />
            <Route path='/books' component={Books} />
            <Route path='/signin' component={AuthForm} />
        </div>
      </Router>
    );
  }
}

export default App;
