import React, { useState, useEffect } from 'react';
import '../MainChild/mainchild.css';
import AllMovies from '../AllMovies/AllMovies';
import SingleMovie from '../Singlemovie/Singlemovie';

function Mainchild({ data, data2, loading, setsingleHit, singleHit, backTOLIst, setbackTOLIst }) {
  const [showSingleMovie, setShowSingleMovie] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 540);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 540);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMovieClick = (movie) => {
    setsingleHit(movie);
    if (isMobile) {
      setShowSingleMovie(true);
    }
  };

  const handleBack = (value) => {
    setShowSingleMovie(value);
  };

  return (
    <div className='main-child'>
      {isMobile ? (
        showSingleMovie ? (
          <SingleMovie
            backTOLIst={backTOLIst}
            singleHit={singleHit}
            setbackTOLIst={setbackTOLIst}
            data={data}
            data2={data2}
            onBack={handleBack}
          />
        ) : (
          <AllMovies 
            setbackTOLIst={setbackTOLIst} 
            singleHit={singleHit} 
            setsingleHit={handleMovieClick} 
            data={data} 
            loading={loading}
          />
        )
      ) : (
        <>
          <AllMovies 
            setbackTOLIst={setbackTOLIst} 
            singleHit={singleHit} 
            setsingleHit={handleMovieClick} 
            data={data} 
            loading={loading}
          />
          <SingleMovie
            backTOLIst={backTOLIst}
            singleHit={singleHit}
            setbackTOLIst={setbackTOLIst}
            data={data}
            data2={data2}
            onBack={handleBack}
          />
        </>
      )}
    </div>
  );
}

export default Mainchild;
