import "./Navigation-styles.scss";

import image from "../../assets/wealth.jpg";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="icon-container">
        <h1 className="icon-title">BAJET</h1>
        <img className="icon" src={image} alt="icon" />
      </div>
      <ul className="nav-links">
        <li className="nav-links-list">
          <a className="nav-links-items" href="#infographic">
            Infographic
          </a>
        </li>
        <li className="nav-links-list">
          <a className="nav-links-items" href="#budgeting">
            Budgeting Application
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
