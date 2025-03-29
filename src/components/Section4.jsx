import card1 from '../assets/card-1.png';
import card2 from '../assets/card-2.png';
import card3 from '../assets/card-3.png';
import card4 from '../assets/card-4.png';
import '../css/section4.css';

const Section4 = () => {
  return (
    <section className="section4">
        <article className="section4__card">
            <img className="section4__img-card" src={card1} alt="Cafeteria Starbucks"/>
            <h2 className="section4__h2">Aplicacion de <span className="section4__word">Starbucks</span></h2>
            <p className="section4__p">Ahorre tiempo con click & collect y recolecte sus estrellas.</p>
            <p className="section4__p">Hacer pedido nunca ha sido tan facil.</p>
            <button className="section4__button">Pruebelo</button>
            <div className="section4__circle">
                5%
            </div>
        </article>

        <article className="section4__card">
            <img className="section4__img-card" src={card2} alt="Producto Starbucks"/>
            <h2 className="section4__h2">Starbucks <span className="section4__word">Delivery</span></h2>
            <p className="section4__p">Starbucks entrega su comida y bebida favorita en la puerta de su casa.</p>
            <div className="section4__buttons">
                <button className="section4__button">Entrega por UberEat</button>
                <button className="section4__button">Entrega por PedidosYa</button>
            </div>
            <div className="section4__circle">
                10%
            </div>
        </article>

        <article className="section4__card">
            <img className="section4__img-card" src={card3} alt="Servicio Starbucks"/>
            <h2 className="section4__h2">Novedades <span className="section4__word">Starbucks</span></h2>
            <p className="section4__p">Mantengase informado de nuestras ultimas novedades y actualizaciones</p>
            <button className="section4__button">Mas informacion</button>
        </article>

        <article className="section4__card">
            <img className="section4__img-card" src={card4} alt="Clientes Starbucks"/>
            <h2 className="section4__h2">Historias de <span className="section4__word">Starbucks</span></h2>
            <p className="section4__p">Descrubra nuestra empresa y nuestra historia.</p>
            <button className="section4__button">Mas informacion</button>
        </article>
    </section>
  )
}

export default Section4;