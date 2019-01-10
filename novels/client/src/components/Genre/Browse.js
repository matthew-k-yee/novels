import React, { Component } from 'react'
import ListGenre from './ListGenre';
import axios from 'axios'

class Browse extends Component{
  constructor(props){
    super(props)
    this.state = ({
      genres: []
    })
  }

  async componentDidMount(){
    this.getGenres();
  }

  async getGenres() {
    const resp = await axios.get('/genres');
    this.setState({
      genres: resp.data
    })
  }


  render() {
    console.log(this.state)
    return(
      <div>
        <h1 className='genre-title'>Genres</h1>
        <ListGenre genres={this.state.genres}/>
      </div>
    )
  }
}
export default Browse
