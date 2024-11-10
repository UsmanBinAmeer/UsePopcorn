import React from 'react'
import '../Watchedmovies/watchedmovies.css'
import hashimg from '../../assets/images/hash-removebg-preview.png'
import star2 from '../../assets/images/star2.png'
import brightstar from '../../assets/images/bright.png'
import hourglass from '../../assets/images/hourglass.png'
import Movielist from '../MovieList/Movielist'
function Watchedmovies({movieKoListKarega , setmovieKoListKarega}) {
  console.log(movieKoListKarega ,'movieKoListKarega')
  const removeMovie = (id) => {
    setmovieKoListKarega(prevList => prevList.filter(movie => movie.id !== id));
  };

  const totalMovies = movieKoListKarega.length;
  const totalPopularity = movieKoListKarega.reduce((acc, movie) => acc + movie.popularity, 0);
  const totalRuntime = movieKoListKarega.reduce((acc, movie) => acc + movie.runtime, 0);
  const totalRating = totalMovies > 0 
    ? movieKoListKarega.reduce((acc, movie) => acc + movie.rating + 1, 0) 
    : 0;
  return (
    <>
      <div className='watchedMovies'>
        <div className="h2">
          <h2>Movies you watched</h2>
        </div>
        <div className="data">
          <div className="movies">
            <div className="icon"><img src={hashimg} alt="" /></div>
            <p><span>{totalMovies}</span> movies
            </p>
          </div>
          <div className="rate">
            <div className="rateIcon"><img src={star2} alt="" /></div>
            <p><span>{totalPopularity}</span></p>
          </div>
          <div className="brightRate">
            <div className="brightRateIcon"><img src={brightstar} alt="" /></div>
            <p><span>{totalRating}</span></p>
          </div>
          <div className="brightRate">
            <div className="brightRateIcon"><img src={hourglass} alt="" /></div>
            <p><span>{totalRuntime}</span> min</p>
          </div>
        </div>
      </div>
      {movieKoListKarega?.map((movie , index) => (
        <Movielist key={index} movie={movie} onRemove={removeMovie}/>
      ))}
    </>


  )
}

export default Watchedmovies
