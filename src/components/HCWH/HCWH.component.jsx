import "./HCWH-styles.scss";

import image from "../../assets/easy.png";

const HCWH = () => {
  return (
    <section className="hcwh-section">
      <h2 className="secondary-title align-center">How can we help?</h2>
      <div className="hcwh-container">
        <div className="hcwh-content">
          <div className="hcwh-icon-container">
            <img className="hcwh-icon" src={image} alt="icon1" />
          </div>
          <p className="hcwh-description">
            Break down large impact concepts into an easy to consume interactive
            infographic.
          </p>
        </div>
        <div className="hcwh-content">
          <div className="hcwh-icon-container">
            <img className="hcwh-icon" src={image} alt="icon2" />
          </div>
          <p className="hcwh-description">
            Create an awareness for the user and redirect them to focus on the
            big impact items.
          </p>
        </div>
        <div className="hcwh-content">
          <div className="hcwh-icon-container">
            <img className="hcwh-icon" src={image} alt="icon1" />
          </div>
          <p className="hcwh-description">
            A simple budgeting simulator to help them immediately take action in
            their life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HCWH;
