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
    Inflation,
    Investment,
    reset,
  } = chartData;

  let months = 0;
  const today = new Date();
  const expenses = Number(FixedExpenses) + Number(VariableExpenses);
  const monthlySaved = Number(Income - expenses);
  const rates =
    Number(active.includes("Investment") ? Investment : 0) -
    Number(active.includes("Inflation") ? Inflation : 0);
  const realRates = Math.pow(1 + rates * 0.01, 1 / 12);

  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  // let dd = today.getDate();
  let newSavingsData = [];

  const onClickHandler = () => {
    setChartData({
      ...chartData,
      savingsData: [],
      reset: false,
    });

    if (Number(Income) > 0 && monthlySaved > 0) {
      for (
        let netWorth = 0;
        netWorth < Number(Goal);
        netWorth = netWorth * realRates + monthlySaved
      ) {
        if (mm + 1 === 13) {
          mm = 1;
          yyyy = yyyy + 1;
        } else {
          mm = mm + 1;
        }

        newSavingsData.push({ x: `${mm}/${yyyy}`, y: netWorth });

        months++;
      }

      setChartData({
        ...chartData,
        toReachGoal: months,
        savingsData: newSavingsData,
        negative: false,
      });
    }

    if (Number(Income) > 0 && expenses >= Income) {
      setChartData({
        ...chartData,
        negative: true,
      });
    }
  };

  const onClickHandlerReset = () => {
    setChartData({
      Goal: 0,
      Income: 0,
      FixedExpenses: 0,
      VariableExpenses: 0,
      Investment: 7,
      Inflation: 3,
      toReachGoal: 0,
      reset: true,
      savingsData: [
        { x: `10/2022`, y: 2000 },
        { x: `11/2022`, y: 1000 },
        { x: `12/2022`, y: 3000 },
        { x: `1/2023`, y: 500 },
      ],
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
                <BudgetItem
                  item={item}
                  key={index}
                  index={index}
                  name={"unactive"}
                >
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
                <BudgetItem
                  key={index}
                  index={index}
                  name={"active"}
                  item={item}
                >
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
            {reset ? (
              <p className="budgeting-main-advice-paragraph">
                Try inputting some numbers into the active rows in the left hand
                side! You can also drag and drop the "Investment" and
                "Inflation" items from the unactive column to add some input to
                it! They are initialized with 7% and 3% respestively to reflect
                real world numbers but feel free to play around with it.
              </p>
            ) : (
              <p className="budgeting-main-advice-paragraph">
                {negative
                  ? `You won't reach your goals as your monthly income is lower than your fixed and variable expenses combined!`
                  : `It takes ${toReachGoal} months to reach your goal. You can try to reduce your fixed expenses of RM${FixedExpenses} and variable expenses of RM${VariableExpenses} or increase your income of RM${Income} to reach your goal earlier.`}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* <div className="footer"></div> */}
    </section>
  );
};

export default Budgeting;
