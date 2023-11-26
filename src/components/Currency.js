import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const handleCurrency = (event) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
  };
  return (
    <div className={`alert alert-success`}>
      <label htmlFor="inputGroupSelect05">Currency: </label>
      {""}
      <select
        className="currency-select"
        id="inputGroupSelect05"
        onChange={handleCurrency}
      >
        <option value="$" name="dollar">
          $ Dollar
        </option>
        <option selected={true} value="£" name="pound">
          £ Pound
        </option>
        <option value="€" name="euro">
          € Euro
        </option>
        <option value="₹" name="ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default Currency;
