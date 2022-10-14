import { useContext } from "react";
import { InfographicContext } from "../../context/InfographicContext-component";

import Button from "../../components/Button/Button-component";

import "./Infographic-styles.scss";
import InfographicContent from "../../components/Infographic-content/Infographic-content-component";

const Infographic = () => {
  const { infoClicked, setInfoClicked } = useContext(InfographicContext);

  const onClickHandler = (e) => {
    setInfoClicked(e.target.getAttribute("name"));
  };

  return (
    <section id="infographic" className="infographic-section">
      <h2 className="secondary-title align-center">Interactive Infographic</h2>
      <div className="infographic-section-container">
        <div className="infographic-sidetab-container">
          <div className="infographic-sidetab-content">
            <div className="infographic-sidetab-card">
              <h2
                onClick={onClickHandler}
                name="budgetting"
                className="tertiary-title"
              >
                Budgeting
              </h2>
              <h3>Fixed vs Variable Expense</h3>
            </div>
            <div className="infographic-sidetab-card">
              <h2
                onClick={onClickHandler}
                name="interestRates"
                className="tertiary-title"
              >
                Interest Rates
              </h2>
              <h3>Loans and Debts</h3>
              <h3>Compound Interest</h3>
              <h3>Inflation</h3>
            </div>
            <div className="infographic-sidetab-card">
              <h2
                onClick={onClickHandler}
                name="riskManagement"
                className="tertiary-title"
              >
                Risk Management
              </h2>
              <h3>Medical Insurance</h3>
              <h3>Life Insurance</h3>
              <h3>Emergency Funds</h3>
            </div>
            <div className="infographic-sidetab-card">
              <h2
                onClick={onClickHandler}
                name="investing"
                className="tertiary-title"
              >
                Investing
              </h2>
              <h3>Risk Apetite</h3>
              <h3>Active vs Passive Investment</h3>
            </div>
          </div>

          <Button name="game">Play Game</Button>
        </div>
        <div className="infographic-main-container">
          <div className="infographic-main-container-primary">
            <InfographicContent state={infoClicked} />
          </div>
          <div className="infographic-main-container-secondary"></div>
        </div>
      </div>
    </section>
  );
};

export default Infographic;
