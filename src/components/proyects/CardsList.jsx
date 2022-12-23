import React from 'react';
import './Cards.css'
import Cards from './Cards';

function CardsList() {
  const datacards =[ 
  {
    "id": 1,
    "images": './public/images/calculator.png',
    "name": "Calculadora",
    "description": "Proyecto introductorio para el aprendizaje del lenguaje de javascript, y tambien se implementa algunos de los conocimientos adquiridos en html y css para la creacción de una calculadora simple.",
    "url":"https://github.com/Lesther1/calculator",
    "despliegue" : "https://lesther1.github.io/calculator/",
    "tegnologia": "Javascript",
    "logo": "https://img.icons8.com/color/48/null/javascript--v1.png",
  },
  {
    "id": 2,
    "images": './public/images/whell-of-dom.png',
    "name": "Wheel of doom",
    "description": "Un wheel of name es una herramienta que se utiliza para generar nombres aleatorios a partir de una lista de palabras o frases predefinidas. Este tipo de herramientas suelen ser muy útiles para encontrar nombres creativos.",
    "url":"",
    "tegnologia": "javascript",
    "logo": "https://img.icons8.com/color/48/null/javascript--v1.png",
  },
  {
    "id": 3,
    "images": './public/images/nft.png',
    "name": "Pages Nft",
    "description": " Una landing page de NFT es una página web diseñada para promocionar y vender NFT (non-fungible tokens), que son tokens digitales únicos que representan activos digitales.",
    "url":"https://github.com/Lesther1/web2-nft",
    "despliegue":"https://lesther1.github.io/web2-nft/",
    "tegnologia": "Bootstrap 5",
    "logo": "https://img.icons8.com/color/48/null/bootstrap.png",
  },
  {
    "id": 4,
    "images": './public/images/web-tributo.png',
    "name":"Web tributo",
    "description": "Este proyecto es una página web que recopila libros y artículos sobre salud mental que me han sido de interés. La página incluye reseñas, citas y enlaces a más información sobre cada libro o artículo.",
    "url":"https://github.com/Lesther1/web-tributo",
    "despliegue" : "https://lesther1.github.io/web-tributo/",
    "tegnologia": "Html and Css",
    "logo": "https://img.icons8.com/color/48/null/css3.png",
  },
  {
    "id": 5,
    "images": "",
    "name":"To do list",
    "description": "To do list",
    "url":"",
    "tegnologia": "javascript",
    "logo": "https://img.icons8.com/color/48/null/javascript--v1.png",
  },
  {
    "id": 6,
    "images": './public/images/rick-and-morty.png',
    "name":"Rick and morty api",
    "description": "Rick and morty api",
    "url":"https://github.com/Lesther1/Rick-and-Morty-api",
    "despliegue" : "",
    "tegnologia": "React",
    "logo": "https://img.icons8.com/office/16/null/react.png",
  }
  ];
  return (
    <div>
    <h3 id='title-card'>Proyectos</h3>
    <div id='card-list'>
      {
        datacards.map(datacard=>{
          return(
            <Cards key={datacard.id} datacard={datacard}/>
          )
        })
      }
    </div>
    </div>
  )
}

export default CardsList