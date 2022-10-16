import "./Budget-Item-styles.scss";
import { useContext, useRef } from "react";
import { BudgetContext } from "../../context/BudgetContext-component";
import { ChartDataContext } from "../../context/ChartDataContext-component";

const BudgetItem = ({ children, index, name, item }) => {
  const { budgetState, setBudgetState } = useContext(BudgetContext);
  const { startPosition, enterPosition } = budgetState;

  const { chartData, setChartData } = useContext(ChartDataContext);

  const dragItem = useRef();
  //   const dragOverItem = useRef();

  const dragStartHandler = (e, position) => {
    const startingContainer = e.target.parentNode.getAttribute("name");

    if (startingContainer) {
      setBudgetState({ ...budgetState, startPosition: `${startingContainer}` });
    }

    dragItem.current = position;
  };

  const dragEndHandler = (e) => {
    const newEnterContainer = budgetState[enterPosition];

    if (newEnterContainer) {
      const newStartContainer = budgetState[startPosition];

      const dragItemContent = newStartContainer.splice(dragItem.current, 1);

      newEnterContainer.push(...dragItemContent);

      setBudgetState({
        ...budgetState,
        [enterPosition]: newEnterContainer,
        [startPosition]: newStartContainer,
      });
    }
  };

  const onChangeHandler = (e) => {
    const inputValue = e.target.value;
    let inputName = e.target.getAttribute("name");

    if (inputName.includes(" ")) {
      inputName =
        e.target.getAttribute("name").split(" ")[0] +
        e.target.getAttribute("name").split(" ")[1];
    }

    setChartData({ ...chartData, [inputName]: inputValue });
  };

  return name === "active" ? (
    <div
      className="budget-components"
      name={children}
      onDragStart={(e) => {
        dragStartHandler(e, index);
      }}
      onDragEnd={dragEndHandler}
      draggable
    >
      <span className="budget-components-title">{`${children}`}</span>
      <div>
        <label className="budget-components-label">
          {
            // eslint-disable-next-line
            children == "Investment" || children == "Inflation" ? "%" : "RM"
          }
        </label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          className="budget-components-input"
          type="number"
          name={children}
          placeholder="0"
          value={
            children === "Fixed Expenses" || children === "Variable Expenses"
              ? chartData[children.split(" ")[0] + children.split(" ")[1]]
              : chartData[children]
          }
        ></input>
      </div>
    </div>
  ) : (
    <div
      className="budget-components"
      name={children}
      onDragStart={(e) => {
        dragStartHandler(e, index);
      }}
      onDragEnd={dragEndHandler}
      draggable
    >
      <span className="budget-components-title">{`${children}`}</span>
    </div>
  );
};

export default BudgetItem;
