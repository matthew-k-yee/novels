import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Browse from './Browse'
import ListGenre from './ListGenre'
// import BookList from '../Books/BookList'
// import BookListItem from '../Books/BookListItem'
import FilteredGenre from './FilteredGenre'




let MATCH_PATH = '';

class Genre extends Component {
  constructor(props){
    super(props)
    MATCH_PATH = props.match.path;
  }

  render() {
    return(
      <Switch>
        <Route exact path={`${MATCH_PATH}`} component={Browse} />
        {/* // <Route path={`${MATCH_PATH}/:id/books`} render={() => 'Hello, world!'}/> */}
        <Route path={`${MATCH_PATH}/:id/books`} component={FilteredGenre}/>
      </Switch>
    )
  }
}

export default Genre