import "./Navegationbar.css"
function Navegationbar () {
    return(
        <div id="navbar-container">
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <img src="./images/logo.png" alt="logo" />
                <ul>
                    <li><a className="active" href="#home">Inicio</a></li>
                    <li><a href="#proyect">Proyectos</a></li>
                    <li><a href="#skill-contact">Habilidades</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navegationbar 