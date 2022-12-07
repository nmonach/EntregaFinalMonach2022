import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function CarouselInicio() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/img/poloMSI.webp"
          alt="Polo"
        />
        <Carousel.Caption>
          <h3>Polo</h3>
          <p>Nuevo Modelo</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/img/virtusMSI.webp"
          alt="Virtus"
        />
        <Carousel.Caption>
          <h3>Virtus</h3>
          <p>Nuevo Modelo</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/img/amarokV6.webp"
          alt="Amarok"
        />

        <Carousel.Caption>
          <h3>Amarok</h3>
          <p>Nuevo Modelo</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInicio;