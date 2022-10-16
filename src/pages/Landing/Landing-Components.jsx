import Navigation from "../../components/Navigation/Navigation-component";
import CarouselComponent from "../../components/Carousel/Carousel-component";
import HCWH from "../../components/HCWH/HCWH.component";

import "./Landing-styles.scss";

const Landing = () => {
  return (
    <section id="Landing" className="landing-section">
      <Navigation />
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="landing-title">
            Feeling Frustrated with Personal Finance?
          </h1>
          <p className="landing-tagline">
            Too much <span className="landing-tagline-span">to learn,</span> too
            little
            <span className="landing-tagline-span"> time</span>
          </p>
          <div className="landing-description-container">
            <p className="landing-description">
              Personal financial management is made complicated with the amount
              of overwhelming resources available nowadays. As a result, most
              put off learning. The statistics of the financial situation shown
              on the right paints a similar picture.
            </p>
          </div>

          <a className="button-main-secondary" href="#infographic">
            Let's start your journey now!
          </a>
        </div>
        <div className="landing-carousel">
          <CarouselComponent />
        </div>
      </div>
      <HCWH />
    </section>
  );
};

export default Landing;
