import React, { Component } from 'react'
import axios from 'axios'
import FilteredGenreList from './FilteredGenreList'

class FilteredGenre extends Component{
  constructor(props){
    super(props)
    this.state = ({
      genres: [],
      id: Number(this.props.match.params.id)
    })
  }

  async componentDidMount(){
    this.getGenres();
  }

  async getGenres() {
    const resp = await axios.get(`/genres/${this.state.id}/books/`);
    this.setState({
      genres: resp.data
    })
  }


  render() {
    return(
      <div>
        <FilteredGenreList genres={this.state.genres}/>
      </div>
    )
  }
}
export default FilteredGenre
