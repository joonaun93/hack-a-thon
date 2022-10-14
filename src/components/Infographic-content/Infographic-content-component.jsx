import "./Infographic-content-styles.scss";

const InfographicContent = ({ state }) => {
  switch (state) {
    case "budgetting":
      return <div className="infographic-content-budgetting"></div>;
    case "interestRates":
      return <div className="infographic-content-interest"></div>;
    case "riskManagement":
      return <div className="infographic-content-risk"></div>;
    case "investing":
      return <div className="infographic-content-investing"></div>;
    case "game":
      return <div className="infographic-content-game"></div>;
    default:
      return <div className="infographic-content-introduction"></div>;
  }
};

export default InfographicContent;
