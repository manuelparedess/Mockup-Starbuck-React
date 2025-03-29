import '../css/header.css';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png';
import menu from '../assets/menu.png';

const Header = () => {
  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="Logo de Starbucks"/>
        <nav className="header__nav">
            <a className="header__nav-item" href="">INICIO</a>
            <a className="header__nav-item" href="">CAFE</a>
            <a className="header__nav-item" href="">SOBRE NOSOTROS</a>
            <a className="header__nav-item" href="">DELIVERY</a>
        </nav>
        <img className="header__user" src={avatar} alt="Icono de Usuario"/>
        <img className="header__menu" src={menu} alt="Icono de Menu"/>
    </header>
  )
}

export default Header;