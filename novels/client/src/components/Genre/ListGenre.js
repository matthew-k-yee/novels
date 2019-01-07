import React from 'react'

function ListGenre(props){
  return(

    <div>
      <ul>
        {props.genres.map(genre => (
          <div>
            <h3>{genre.genre_title}</h3>
          </div>
        ))}
      </ul>
    </div>
  )
}
export default ListGenre
