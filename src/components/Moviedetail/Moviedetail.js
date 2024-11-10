import star2 from '../../assets/images/star2.png';
import '../RatedFull/ratedfull.css';
import React, { useState, useEffect } from 'react';
import '../Moviedetail/moviedetail.css';

function Moviedetail({onBack, setbackTOLIst, data2, setmovieKoListKarega}) {

    const [hoveredStarIndex, setHoveredStarIndex] = useState(null);
    const [selectedStarIndex, setSelectedStarIndex] = useState(null);
    const [addToList, setAddToList] = useState(false);
    const [forStar, setForStar] = useState(true);

    const handleAddToList = () => {
        const newMovie = {
            title: data2.title,
            src: `https://image.tmdb.org/t/p/w500${poster_path}`,
            popularity:popularity,
            runtime: runtime,
            id :id ,
            rating: selectedStarIndex,
        };
        
        // Directly add the new movie object to the state
        setmovieKoListKarega(prevList => {
            const updatedList = [...prevList, newMovie]; // No wrapping in an array
            console.log(updatedList); // Log the updated list
            return updatedList;
        });
    };
    

    const movieId = data2?.id; // Assuming each movie has a unique ID

    // Load rating from local storage when data2 changes
    useEffect(() => {
        const storedRating = localStorage.getItem(`rating-${movieId}`);
        if (storedRating) {
            setSelectedStarIndex(parseInt(storedRating));
            setForStar(false); // If a rating exists, switch to the rated view
        } else {
            setSelectedStarIndex(null);
            setForStar(true);
        }
        setHoveredStarIndex(null);
        setAddToList(false);
    }, [data2]);

    const handleStarClick = (index) => {
        setSelectedStarIndex(index);
        localStorage.setItem(`rating-${movieId}`, index); // Save rating to local storage
        console.log(index + 1);
    };

    const { id,poster_path, release_date, runtime, genres, popularity, overview, tagline, production_countries } = data2 || {};
const value = false;
    return (
        <div className='movieDetail'>
            <div className="movieDetailHero">
                <div className="movieDetailImg">
                    <div className="backTOList" onClick={() => {onBack(value); setbackTOLIst(false)}}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <img src={data2 ? `https://image.tmdb.org/t/p/w500${poster_path}` : ''} alt="" />
                </div>
                <div className="movieDetailText">
                    <div className="DetailTextHead">
                        <h1>{data2.title ? data2.title : ''}</h1>
                    </div>
                    <p>
                        <span>{release_date ? release_date : "no date"}</span> . <span>{runtime ? runtime : 'not found'}</span> min
                    </p>
                    <p>{genres?.map((e, index) => <span key={index}>{e.name} </span>)}</p>
                    <p className='movieDetailRatingPara'>
                        <img className='movieDetailStarPng' src={star2} alt="" /> <span>{popularity}</span> IMDB rating
                    </p>
                </div>
            </div>
            <div className="movieDetailMain">
                {forStar ? (
                    <div className="stars">
                        <div className='coverAllStars'>
                            {Array.from({ length: 10 }, (_, index) => (
                                <div
                                    key={index}
                                    className="star"
                                    onMouseEnter={() => {
                                        setHoveredStarIndex(index);
                                        setAddToList(true); // Show button when hovering over stars
                                    }}
                                    onClick={() => handleStarClick(index)} // Handle click to set selected star index
                                >
                                    <i className={index <= hoveredStarIndex ? "fa-solid fa-star" : 'fa-regular fa-star'}></i>
                                </div>
                            ))}
                            <div className="movieDetailNOR">{selectedStarIndex !== null ? selectedStarIndex + 1 : 0}</div>
                        </div>
                        {addToList && (
                            <div className={`addListBtn ${addToList ? 'show' : ''}`}>
                                <button onClick={() => {
                                    setForStar(false); 
                                    handleAddToList();
                                }}>+ Add To List</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='rated'>
                        You rated this movie <span style={{ marginLeft: '8px' }}>{selectedStarIndex + 1}</span> <img className='ratedFullImg' src={star2} alt="" />
                    </div>
                )}
                <div className="movieDetailDesc">
                    <div className="movieDetailOverview">
                        {overview ? overview : ''}
                    </div>
                    <div className="movieDetailTagline">
                        {tagline ? tagline : ''}
                    </div>
                    <div className="movieDetailCompanies">
                        Country: {production_countries?.map((p, index) => <li key={index}>{p.name}</li>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Moviedetail;
