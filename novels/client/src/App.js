import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

async function getBooks() {
  const resp = await axios.get('/books');
  console.log(resp.data);
}

getBooks();

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
