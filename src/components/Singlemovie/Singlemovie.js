// import React, { useState } from 'react'
import '../Singlemovie/singlemovie.css'
import Moviedetail from '../Moviedetail/Moviedetail'
import Watchedmovies from '../Watchedmovies/Watchedmovies'
import { useState } from 'react'

function Singlemovie({ onBack , data2 , backTOLIst , setbackTOLIst, singleHit }) {
  const [movieKoListKarega,setmovieKoListKarega] = useState([]);

  // console.log(movieKoListKarega, '===========moviekolistkaregA')
  // console.log(data2, '===============data')
  return (
    <div className='singleMovie'>
      {data2 && backTOLIst ?(
        <Moviedetail onBack={onBack} data2={data2} movieKoListKarega={movieKoListKarega} setmovieKoListKarega={setmovieKoListKarega} setbackTOLIst={setbackTOLIst} singleHit={singleHit}/>) :(
        <Watchedmovies movieKoListKarega={movieKoListKarega} setmovieKoListKarega={setmovieKoListKarega}/>)
      }
    </div>
  )
}

export default Singlemovie
