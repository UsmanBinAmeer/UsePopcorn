import React from 'react'
import '../AllMovies/allmovies.css'
import Data from '../DataMap/Data'
import loader from '../../assets/images/loaderbc.gif'

function AllMovies({ handleMovieClick, setbackTOLIst, data, loading , setsingleHit , singleHit }) {
  // console.log()
  // console.log(data)
  return (
    <div className='allMovies'>
      {
        loading ? <img className='loader' src={loader} alt="" /> :

          data?.map((e) => <Data  setbackTOLIst={setbackTOLIst} singleHit={singleHit} setsingleHit={setsingleHit} title={e.title} src={e.src} year={e.year} id={e.key}/>)
          
      }
    </div>
  )
}

export default AllMovies
