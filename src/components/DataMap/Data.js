import React from 'react'
import '../DataMap/data.css'
import calender from '../../assets/images/calenderbc.png'

function Data({ title, src, year, id ,setsingleHit , setbackTOLIst }) {
    // console.log(src)
    // console.log(title)
    // console.log(id)

    return (
        <div onClick={()=> {setsingleHit({ key: id}) ; setbackTOLIst(true) ;}} className='movie'>
            <div className="poster">
                <img src={src ? src : ''} alt={src ? '' : 'no img'} />
            </div>
            <div className="movieText">
                <div className="title"><h2>{title}</h2></div>
                <div className="others">
                    <div className="iconcalender"><img src={calender} alt="" /></div>
                    <div className="year">{year ? year : 'year not define'}</div>
                </div>
            </div>
        </div>
    )
}

export default Data
