import Navigation from "../../components/Navigation/Navigation-component";
import CarouselComponent from "../../components/Carousel/Carousel-component";
import HCWH from "../../components/HCWH/HCWH.component";

import "./Landing-styles.scss";
import Button from "../../components/Button/Button-component";

const Landing = () => {
  return (
    <section className="landing-section">
      <Navigation />
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="landing-title">This is the Landing Title</h1>
          <p className="landing-tagline">
            This is the Landing tagline. There will be some text here in the
            future. At the moment, it is currently a placeholder.
          </p>
          <Button>Let's start your journey now!</Button>
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
