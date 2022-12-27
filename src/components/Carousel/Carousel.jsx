import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function CarouselInicio() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-25 imgCarousel"
          src="difusor1.jpg"
          alt="difusor1"
        />
        <Carousel.Caption>
          <h3 id='h3Carousel'>Difusores</h3>
          <p id='pCarousel'>Vainilla, Caramelo y Mas!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-25 imgCarousel"
          src="lampara1.jpg"
          alt="lampara1"
        />
        <Carousel.Caption>
          <h3 id='h3Carousel'>Lamparas de Sal</h3>
          <p id='pCarousel'>Varios Tamaños!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-25 imgCarousel"
          src="vela1.jpg"
          alt="vela1"
        />

        <Carousel.Caption>
          <h3 id='h3Carousel'>Velas de Soja</h3>
          <p id='pCarousel'>Varios Modelos y Aromas!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInicio;