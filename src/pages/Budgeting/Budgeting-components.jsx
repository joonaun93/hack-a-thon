import MyChart from "../../components/Chart/Chart-component";
import BudgetItem from "../../components/Budget-Item/Budget-Item-components.jsx";

import { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext-component";
import { ChartDataContext } from "../../context/ChartDataContext-component";

import "./Budgeting-styles.scss";

const Budgeting = () => {
  const { budgetState, setBudgetState } = useContext(BudgetContext);
  const { active, unactive } = budgetState;

  const dragEnterContainerHandler = (e) => {
    const enterContainer = e.target.getAttribute("name");

    if (enterContainer)
      setBudgetState({ ...budgetState, enterPosition: `${enterContainer}` });
  };

  const { chartData, setChartData } = useContext(ChartDataContext);

  const {
    Goal,
    Income,
    FixedExpenses,
    VariableExpenses,
    toReachGoal,
    negative,
  } = chartData;

  let i = 0;

  const onClickHandler = () => {
    const today = new Date();
    const monthlySaved = Income - FixedExpenses - VariableExpenses;
    const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();
    let newSavingsData = [];

    try {
      if (Income > 0 && monthlySaved > 0) {
        for (
          let netWorth = 0;
          netWorth < Goal;
          netWorth = netWorth + monthlySaved
        ) {
          newSavingsData.push({ x: `${yyyy}-${mm + i}-${dd}`, y: netWorth });
          i++;
        }
        newSavingsData.push({
          x: `${yyyy}-${mm + i}-${dd}`,
          y: monthlySaved * i,
        });

        setChartData({
          ...chartData,
          toReachGoal: i,
          savingsData: newSavingsData,
          negative: false,
        });
      }

      if (Income > 0 && monthlySaved >= Income) {
        setChartData({
          ...chartData,
          negative: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onClickHandlerReset = () => {
    setChartData({
      Goal: 0,
      Income: 0,
      FixedExpenses: 0,
      VariableExpenses: 0,
      Investment: 0,
      Loan: 0,
      Inflation: 0,
      toReachGoal: 0,
      savingsData: [],
      negative: false,
    });
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

          <button
            onClick={onClickHandler}
            name="chart"
            className="button-main bottom-left"
          >
            Run Simulation
          </button>
          <button
            onClick={onClickHandlerReset}
            name="chart"
            className="button-main bottom-right"
          >
            Reset
          </button>
        </div>
        <div className="budgeting-main-container">
          <div className="budgeting-chart-container">
            <MyChart />
          </div>
          <div className="budgeting-main-advice">
            <h2 className="tertiary-title">
              How Long Will It Take to Reach Your goal?
            </h2>
            <p>
              {negative
                ? `You won't reach your goals as your monthly income is lower than your fixed and variable expenses combined!`
                : `It takes ${toReachGoal} months to reach your goals`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Budgeting;
