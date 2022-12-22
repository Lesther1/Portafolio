import React from 'react';
import './Cards.css'
import Cards from './Cards';

function CardsList() {
  const datacards =[ 
  {
    "id": 1,
    "images": "",
    "name": "Calculadora",
    "description": "Proyecto introductorio para el aprendizaje del lenguaje de javascript, y tambien se implementa algunos de los conocimientos adquiridos en html y css para la creacción de una calculadora simple.",
    "tegnologia": "Javascript",
    "logo": <img src="https://img.icons8.com/color/48/null/javascript--v1.png"/>,
  },
  {
    "id": 2,
    "images": "",
    "name": "Wheel of doom",
    "description": "ruleta de nombrees",
    "tegnologia": "javascript",
    "logo": <img src="https://img.icons8.com/color/48/null/javascript--v1.png"/>,
  },
  {
    "id": 3,
    "images": "",
    "name": "Pages Nft",
    "description": "Pagina de nft",
    "tegnologia": "Bootstrap 5",
    "logo": <img src="https://img.icons8.com/color/48/null/bootstrap.png"/>,
  },
  {
    "id": 4,
    "images": "",
    "name":"Web tribuno",
    "description": "Pagina tributo",
    "tegnologia": "Html and Css",
    "logo": <img src="https://img.icons8.com/color/48/null/css3.png"/>,
  },
  {
    "id": 5,
    "images": "",
    "name":"To do list",
    "description": "To do list",
    "tegnologia": "javascript",
    "logo": <img src="https://img.icons8.com/color/48/null/javascript--v1.png"/>,
  },
  {
    "id": 6,
    "images": "",
    "name":"Rick and morty api",
    "description": "Rick and morty api",
    "tegnologia": "React",
    "logo": <img src="https://img.icons8.com/office/16/null/react.png"/>,
  }
  ];
  return (
    <div id='card-list'>
      {
        datacards.map(datacard=>{
          return(
            <Cards key={datacard.id} datacard={datacard}/>
          )
        })
      }
    </div>
  )
}

export default CardsList