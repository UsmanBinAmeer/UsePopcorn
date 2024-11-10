import React from 'react'
import '../MovieList/movielist.css'
import star2 from '../../assets/images/star2.png'
import bright from '../../assets/images/bright.png'
import hourGlass from '../../assets/images/hourglass.png'

function Movielist({ movie , onRemove , key}) {
  const { id,src, popularity, title, rating, runtime } = movie
  return (
    <div className='movieList'>
      <div className="cutOverlay" onClick={()=> onRemove(id)}>
        <div className="x">X</div>
      </div>
      <div className="movieListImg">
        <img src={src} alt="" />
      </div>
      <div className="movieListText">
        <div>
        <div className="movieListTitle"><h2>{title}</h2></div>
        </div>
        <div className='movieListDetails'>
          <div className='movieListDetailChilds'><img className='movieListIcons' src={star2} alt="" /> <span>{popularity}</span></div>
          <div className='movieListDetailChilds'><img className='movieListIcons' src={bright} alt="" /> <span>{rating + 1}</span></div>
          <div className='movieListDetailChilds'><img className='movieListIcons' src={hourGlass} alt="" /> <span>{runtime}</span> min</div>
        </div>

      </div>
    </div>
  )
}

export default Movielist
