import "./Navegationbar.css"
function Navegationbar () {
    return(
        <div id="navbar-container">
            <nav>
                <ul id="nav-bar-ul">
                    <li id="nav-bar-item"><img src="./images/logo.png" alt="" /></li>
                    <li id="nav-bar-item"><a href="">Proyectos</a></li>
                    <li id="nav-bar-item"><a href="">Habilidades</a></li>
                    <li id="nav-bar-item"><a href="">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navegationbar 