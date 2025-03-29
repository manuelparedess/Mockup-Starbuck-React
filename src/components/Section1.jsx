import logo from '../assets/logo.png';
import '../css/section1.css';

const Section1 = () => {
  return (
    <section className="section1">
        <div className="section1__prologo">
            <h1 className="section1__h1">No solo es Cafe es <span className="section1__word">Starbucks</span></h1>
            <p className="section1__p">Cada día, acudimos a trabajar con la esperanza de conseguir dos cosas: compartir el
                mejor café con
                nuestros amigos y contribuir a que el mundo sea un poco mejor. Así era cuando abrió la primera tienda
                Starbucks en 1971, y así continúa siendo hoy.</p>
        </div>
        <div className="section1__logo">
            <img className="section1__img-logo" src={logo} alt="Logo de Starbucks"/>
        </div>
    </section>
  )
}

export default Section1;