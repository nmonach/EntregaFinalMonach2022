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
          <h3>Difusores</h3>
          <p>Vainilla, Caramelo y Mas!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-25 imgCarousel"
          src="lampara1.jpg"
          alt="lampara1"
        />
        <Carousel.Caption>
          <h3>Lamparas de Sal</h3>
          <p>Varios Tamaños!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-25 imgCarousel"
          src="vela1.jpg"
          alt="vela1"
        />

        <Carousel.Caption>
          <h3>Velas de Soja</h3>
          <p>Varios Modelos y Aromas!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInicio;