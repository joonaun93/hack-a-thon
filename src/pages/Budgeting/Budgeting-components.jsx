import MyChart from "../../components/Chart/Chart-component";
import BudgetItem from "../../components/Budget-Item/Budget-Item-components.jsx";

import { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext-component";

import "./Budgeting-styles.scss";

const Budgeting = () => {
  const { budgetState, setBudgetState } = useContext(BudgetContext);
  const { active, unactive } = budgetState;

  const dragEnterContainerHandler = (e) => {
    const enterContainer = e.target.getAttribute("name");

    if (enterContainer)
      setBudgetState({ ...budgetState, enterPosition: `${enterContainer}` });
  };

  return (
    <section id="budgeting" className="budgeting-section">
      <h2 className="secondary-title align-center">Budgeting Application</h2>
      <div className="budgeting-section-container">
        <div
          onDragEnter={dragEnterContainerHandler}
          name="unactive"
          className="budgeting-unactive-component-container"
        >
          <h2 className="tertiary-title">UNACTIVE COMPONENTS</h2>
          {unactive.length > 0
            ? unactive.map((item, index) => (
                <BudgetItem key={index} index={index} name={"unactive"}>
                  {item}
                </BudgetItem>
              ))
            : null}
        </div>
        <div
          onDragEnter={dragEnterContainerHandler}
          name="active"
          className="budgeting-active-component-container"
        >
          <h2 className="tertiary-title">ACTIVE COMPONENTS</h2>
          {active.length > 0
            ? active.map((item, index) => (
                <BudgetItem key={index} index={index} name={"active"}>
                  {item}
                </BudgetItem>
              ))
            : null}
        </div>
        <div className="budgeting-main-container">
          <div className="budgeting-chart-container">
            <MyChart />
          </div>
          <div className="budgeting-main-advice"></div>
        </div>
      </div>
    </section>
  );
};

export default Budgeting;
