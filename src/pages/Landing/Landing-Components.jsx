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
              Financial management is made complicated with the overwhelming
              resources available causing most individuals to put off learning.
              The statistics of the financial demographic in Malaysia shows a
              similar picture.
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
