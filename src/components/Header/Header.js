import React, {} from 'react'
import '../Header/header.css'
import popcornlogo from '../../assets/images/popcornlogo.png'
function Header({setKeyword , keyword , apiCaller ,data}) {
 

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      apiCaller(keyword);

    }
  };


  return (
    <div className='navBar'>
      <div className="logo">
        <img className='logoImg' src={popcornlogo} alt="" />
        <h1 className='logoName'>usePopcorn</h1>
      </div>
      <input
        type="text"
        className="input"
        placeholder='Search movies...'
        value={keyword}
        onChange={(e)=> setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="resultCount">Found <span className='resCount'>{data ? data.length : 0}</span> top result</div>
    </div>

  )
}

export default Header
