import { Nav } from "react-bootstrap";
import "./Navigation-styles.scss";

import image from "../../assets/wealth.jpg";

const Navigation = () => {
  return (
    <Nav className="nav-container">
      <div className="icon-container">
        <h1 className="icon-title">BAJET</h1>
        <img className="icon" src={image} alt="icon" />
      </div>
      <ul className="nav-links">
        <li className="nav-links-list">
          <a className="nav-links-items" href="/">
            Infographic
          </a>
        </li>
        <li className="nav-links-list">
          <a className="nav-links-items" href="/">
            Budgeting Application
          </a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
