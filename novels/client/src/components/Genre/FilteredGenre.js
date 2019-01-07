import React, { Component } from 'react'
import ListGenre from './ListGenre';
import axios from 'axios'

class FilteredGenre extends Component{
  constructor(props){
    super(props)
    this.state = ({
      genres: [],
      books: [],
      id: Number(this.props.match.params.id)
    })
  }

  async componentDidMount(){
    this.getGenres();
    // this.getBooks();
  }

  async getGenres() {
    const resp = await axios.get(`/genres/${this.state.id}/books/`);
    this.setState({
      genres: resp.data
    })
  }

  renderList(){

  }

  render() {
    console.log(this.state.genres)
    return(
      <div>
        <ul>
        {this.state.genres.map(genre => (
          <div key={genre.id}>
            <h1>{genre.title}</h1>
          </div>
        ))}
        </ul>
      </div>
    )
  }
}
export default FilteredGenre
