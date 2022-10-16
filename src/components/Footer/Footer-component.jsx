import "./Footer-styles.scss";

import image from "../../assets/wealth.jpg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icon-container">
        <a href="#Landing">
          <h1 className="icon-title-footer">BAJET</h1>
          <img className="icon" src={image} alt="icon" />
        </a>
      </div>
      <div className="details-container">
        <ul className="footer-list">
          <h3>Attribution</h3>
          <li className="footer-list-items">
            Images <a href="https://unsplash.com/">Unsplash</a>
          </li>
          <li className="footer-list-items">
            Icons <a href="https://www.flaticon.com/">Flaticon</a>
          </li>
        </ul>
        <ul className="footer-list">
          <h3>Contact Me</h3>
          <li className="footer-list-items">
            <a href="https://www.edmundkja.dev/">Personal Website</a>
          </li>
          <li className="footer-list-items">
            <a href="https://www.linkedin.com/in/edmund-joonaun/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
