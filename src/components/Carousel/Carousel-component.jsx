import Carousel from "react-bootstrap/Carousel";

import picture1 from "../../assets/carousel1.jpg";
import picture2 from "../../assets/carousel2.jpg";
import picture3 from "../../assets/carousel3.jpg";

import "./Carousel-styles.scss";

const CarouselComponent = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel-item">
        <img className="carousel-image" src={picture1} alt="First slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-caption-header">Low Savings Rate</h3>
          <p className="carousel-caption-paragraph">
            <a href="https://www.sc.com.my/api/documentms/download.ashx?id=6385977c-bd2c-4612-bda8-9ce6a5961720#:~:text=1%20in%203%20Malaysians%20rate%20themselves%20to%20be%20of%20low%20financial%20knowledge.&text=75%25%20of%20Malaysians%20understand%20that,on%20their%20own%20purchasing%20power.&text=Low%20income%20households%20tend%20to%20have%20lower%20financial%20knowledge.">
              About half of Malaysians save less than RM500 per month and 84%
              who claim to save regularly typically withdraw at month-end to
              cover daily expenses.
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={picture2} alt="Second slide" />

        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-caption-header">Low Financial Knowledge</h3>
          <p className="carousel-caption-paragraph">
            <a href="https://www.sc.com.my/api/documentms/download.ashx?id=6385977c-bd2c-4612-bda8-9ce6a5961720#:~:text=1%20in%203%20Malaysians%20rate%20themselves%20to%20be%20of%20low%20financial%20knowledge.&text=75%25%20of%20Malaysians%20understand%20that,on%20their%20own%20purchasing%20power.&text=Low%20income%20households%20tend%20to%20have%20lower%20financial%20knowledge.">
              Malaysians have low confidence in regarding their own financial
              knowledge. 1 in 3 Malaysians rate themselves to be low financial
              knowledge.
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image-3" src={picture3} alt="Third slide" />

        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-caption-header">Unable to Retire</h3>
          <p className="carousel-caption-paragraph">
            <a href="https://www.sc.com.my/api/documentms/download.ashx?id=6385977c-bd2c-4612-bda8-9ce6a5961720#:~:text=1%20in%203%20Malaysians%20rate%20themselves%20to%20be%20of%20low%20financial%20knowledge.&text=75%25%20of%20Malaysians%20understand%20that,on%20their%20own%20purchasing%20power.&text=Low%20income%20households%20tend%20to%20have%20lower%20financial%20knowledge.">
              68% of active EPF members do not achieve the Basic Savings
              recommended according to the age band. The recommended savings at
              55 is RM240,000.
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
