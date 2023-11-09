import React, { useEffect } from 'react'
import Header from './header'

const body = (response) => {
    const loadMovies = () => { 
            response.Search.foreach((movie) => {
            console.log(movie.tittle)
        })
    }

    /*useEffect(() => {
        loadMovies()
    }, ["#a"])*/

  return (
    <div>
        <button id='a'>A</button>
    </div>
  )
}

export default body