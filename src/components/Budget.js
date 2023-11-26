import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);

    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  };

  return (
    <div className="alert alert-secondary">
      <div className="custom-budget">
        <label>Budget: {currency}</label>
        <input
          type="number"
          step="10"
          value={newBudget}
          onChange={handleBudgetChange}
        />
      </div>
    </div>
  );
};

export default Budget;
