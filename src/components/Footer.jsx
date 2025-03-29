import whatsapp from '../assets/whatsapp.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__left">
            <a className="footer__a" href="">Iniciar Sesion</a>
            <a className="footer__a" href="">Registrate</a>
        </div>
        <div className="footer__center">
            <img className="footer__img" src={whatsapp} alt="WhatsApp"/>
            <img className="footer__img" src={facebook} alt="Facebook"/>
            <img className="footer__img" src={twitter} alt="Twitter"/>
        </div>
        <div className="footer__right">
            <a className="footer__a" href="">Contactenos aqui</a>
        </div>
    </footer>
  )
}

export default Footer