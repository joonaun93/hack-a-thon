import "./Budget-Item-styles.scss";
import { useContext, useRef } from "react";
import { BudgetContext } from "../../context/BudgetContext-component";
import { ChartDataContext } from "../../context/ChartDataContext-component";

const BudgetItem = ({ children, index, name }) => {
  const { budgetState, setBudgetState } = useContext(BudgetContext);
  const { startPosition, enterPosition } = budgetState;

  const { setChartData } = useContext(ChartDataContext);

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

      newEnterContainer.push(dragItemContent);

      setBudgetState({
        ...budgetState,
        [enterPosition]: newEnterContainer,
        [startPosition]: newStartContainer,
      });
    }
  };

  const onChangeHandler = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.getAttribute("name");
    console.log(inputName, inputValue);
  };

  if (name === "active") {
    switch (children) {
      case "Investment":
      case "Loan":
      case "Inflation":
        return (
          <div
            className="budget-components"
            name={children}
            onDragStart={(e) => {
              dragStartHandler(e, index);
            }}
            onDragEnd={dragEndHandler}
            draggable
          >
            {children}
          </div>
        );
      default:
        return (
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
              <label className="budget-components-label">RM</label>
              <input
                onChange={onChangeHandler}
                className="budget-components-input"
                type="number"
                name={children}
                placeholder="0.00"
              ></input>
            </div>
          </div>
        );
    }
  }

  if (name === "unactive") {
    return (
      <div
        className="budget-components"
        name={children}
        onDragStart={(e) => {
          dragStartHandler(e, index);
        }}
        onDragEnd={dragEndHandler}
        draggable
      >
        {children}
      </div>
    );
  }
};

export default BudgetItem;
