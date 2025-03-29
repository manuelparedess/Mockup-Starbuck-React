import gallery1 from '../assets/gallery-1.png';
import gallery2 from '../assets/gallery-2.png';
import gallery3 from '../assets/gallery-3.png';
import '../css/section2.css';

const Section2 = () => {
  return (
    <section className="section2">
        <div className="section2__gallery">
            <img className="section2__img-gallery" src={gallery1} alt="Cafe y batido Starbucks"/>
        </div>

        <div className="section2__gallery">
            <img className="section2__img-gallery" src={gallery2} alt="Batido Starbucks"/>
        </div>

        <div className="section2__gallery">
            <img className="section2__img-gallery" src={gallery3} alt="Cafe Starbucks"/>
        </div>
    </section>
  )
}

export default Section2;