import "./HCWH-styles.scss";

import image from "../../assets/easy.png";

const HCWH = () => {
  return (
    <section className="hcwh-section">
      <h2 className="secondary-title">How can we help?</h2>
      <div className="hcwh-container">
        <div className="hcwh-content">
          <div className="hcwh-icon-container">
            <img className="hcwh-icon" src={image} alt="icon1" />
          </div>
          <p className="hcwh-description">
            How can we help paragraph 1. This is a placeholder for future
            content.
          </p>
        </div>
        <div className="hcwh-content">
          <div className="hcwh-icon-container">
            <img className="hcwh-icon" src={image} alt="icon2" />
          </div>
          <p className="hcwh-description">
            How can we help paragraph 1. This is a placeholder for future
            content.
          </p>
        </div>
        <div className="hcwh-content">
          <div className="hcwh-icon-container">
            <img className="hcwh-icon" src={image} alt="icon1" />
          </div>
          <p className="hcwh-description">
            How can we help paragraph 1. This is a placeholder for future
            content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HCWH;
