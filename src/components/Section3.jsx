import '../css/section3.css';

const Section3 = () => {
  return (
    <section className="section3">
        <h1 className="section3__h1">CONTACTANOS</h1>
        <form className="section3__form">
            <div className="section3__form-email">
                <label className="section3__label">correo electronico</label>
                <input className="section3__input1" type="email" placeholder="coloque su correo electronico" required/>
            </div>
            <div className="section3__form-comment">
                <label className="section3__label">comentario</label>
                <textarea className="section3__input2" placeholder="coloque su comentario" required></textarea>
            </div>
            <button className="section3__button">Enviar consulta</button>
        </form>
    </section>
  )
}

export default Section3;