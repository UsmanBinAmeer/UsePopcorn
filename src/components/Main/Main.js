import React from 'react'
import '../Main/main.css'
import Mainchild from '../MainChild/Mainchild'

function Main({setbackTOLIst ,backTOLIst, data, data2 , loading , setsingleHit , singleHit}) {
  return (
    <div className='main'>
      <Mainchild setbackTOLIst={setbackTOLIst} backTOLIst={backTOLIst} data2={data2} singleHit={singleHit} data={data} loading={loading} setsingleHit={setsingleHit}/>
    </div>
  )
}

export default Main
