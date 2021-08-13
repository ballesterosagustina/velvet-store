import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () =>{
    return(
        <nav id="headerNavBar">
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#aboutus">Nosotros</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;