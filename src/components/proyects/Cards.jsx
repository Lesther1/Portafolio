import React from 'react'
import './Cards.css'
function Cards({datacard}) {
  return (
    <div id='card-container'>
        <div id='card-header'>
            <img src={datacard.images} alt="" id='portada' />
        </div>
        <div id='card-body'>
            <h3>{datacard.name}</h3>
            <p>{datacard.description}</p>
            <div id='btn-container'>
              <a href={datacard.url}><img src="https://img.icons8.com/ios/50/null/github--v1.png"/></a>
              <a href={datacard.despliegue}><img src="https://img.icons8.com/ios-glyphs/30/null/ophthalmology.png"/></a>
            </div>
        </div>
        <div id='card-footer'>
            <p>{datacard.tegnologia}</p>
            <img src={datacard.logo} alt="" id="logo-cards" />
        </div>
    </div>
  )
}

export default Cards