import React from 'react'
import './Cards.css'
function Cards({datacard}) {
  return (
    <div id='card-container'>
        <div id='card-header'>
            <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
        </div>
        <div id='card-body'>
            <h3>{datacard.name}</h3>
            <h4>{datacard.description}</h4>
            <a href="">ver</a>
        </div>
        <div id='card-footer'>
            <p>{datacard.tegnologia}</p>
            <p>{datacard.logo}</p>
        </div>
    </div>
  )
}

export default Cards