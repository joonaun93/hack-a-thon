import "./Button-styles.scss";
import { useContext } from "react";
import { InfographicContext } from "../../context/InfographicContext-component";

const Button = ({ children, name }) => {
  const { setInfoClicked } = useContext(InfographicContext);

  const onClickHandler = (e) => {
    if (name) {
      setInfoClicked(e.target.getAttribute("name"));
    }
  };

  return (
    <button
      onClick={onClickHandler}
      name={name ? name : null}
      className="button-main"
    >
      {children}
    </button>
  );
};

export default Button;
