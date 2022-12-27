import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Carousel.css'

function CarouselInicio() {
  return (
    <Carousel>
      <Carousel.Item>
      <Link to={'/category/Difusores'} ><img
          className="d-block w-25 imgCarousel"
          src="/difusor1.jpg"
          alt="difusor1"
        /></Link>
        <Carousel.Caption>
          <h3 id='h3Carousel'>Difusores</h3>
          <p id='pCarousel'>Vainilla, Caramelo y Mas!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Link to={'/category/Lamparas%20de%20Sal'} ><img
          className="d-block w-25 imgCarousel"
          src="/lampara1.jpg"
          alt="lampara1"
        /></Link>
        <Carousel.Caption>
          <h3 id='h3Carousel'>Lamparas de Sal</h3>
          <p id='pCarousel'>Varios Tamaños!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={'/category/Velas%20de%20Soja'} ><img
          className="d-block w-25 imgCarousel"
          src="/vela1.jpg"
          alt="vela1"
        /></Link>

        <Carousel.Caption>
          <h3 id='h3Carousel'>Velas de Soja</h3>
          <p id='pCarousel'>Varios Modelos y Aromas!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInicio;