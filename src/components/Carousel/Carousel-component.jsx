import Carousel from "react-bootstrap/Carousel";

import "./Carousel-styles.scss";

const CarouselComponent = () => {
  return (
    <Carousel fade interval={6000}>
      <Carousel.Item>
        <img
          className="carousel-image"
          src="https://images.unsplash.com/photo-1665424285982-8f4052f9b72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2225&q=80"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src="https://images.unsplash.com/photo-1665424285982-8f4052f9b72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2225&q=80"
          alt="Second slide"
        />

        <Carousel.Caption className="carousel-caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src="https://images.unsplash.com/photo-1665424285982-8f4052f9b72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2225&q=80"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
