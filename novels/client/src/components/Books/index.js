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
        {/* Render a list of articles*/}
        {/* <Route exact path={`${MATCH_PATH}`} render={(props) => {
          return (<BookList {...props}  />)
        }}/> */}
        {/* Render the article page*/}
        {/* <Route exact path={`${MATCH_PATH}/:id`} render={(props) => {
          return (<BookFullPage {...props} credentials={this.props.credentials} />)
        }}/> */}
        <Route exact path={`${MATCH_PATH}`} component={BookList}/>
        {/* Render the article page*/}
        <Route exact path={`${MATCH_PATH}/:id`} component={BookFullPage}/>
      </Switch>
    )
  }
}

export default Books
