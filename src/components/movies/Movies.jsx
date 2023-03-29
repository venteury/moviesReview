import React from 'react'
import "./Movies.css"

const Movies = (props) => {
  return (
    <div className='movie'> 
        <img src={props.pic} alt="" />
        <p>{props.title}</p>
        <p>{props.year}</p>
    </div>
  )
}

export default Movies
