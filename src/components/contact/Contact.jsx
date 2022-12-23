import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div id='form-container'>
        <h4>Escribe tu comentario o si necesitas algun desarrollo</h4>
        <form action="">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Correo' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Comentarios'></textarea>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Contact