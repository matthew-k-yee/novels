import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BookList from './BookList'
import BookFullPage from './BookFullPage'

let MATCH_PATH = '';

class Books extends Component{
  constructor(props){
    super(props)
    MATCH_PATH = props.match.path;
  }

  render(){
    return (
      <Switch>
        <Route exact path={`${MATCH_PATH}`} component={BookList}/>
        <Route exact path={`${MATCH_PATH}/:id/`} component={BookFullPage}/>
      </Switch>
    )
  }
}

export default Books
