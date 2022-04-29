import React from "react";

const CurrencyLine = ({
  currencyName,
  setCurrencyName,
  amountToConvert,
  setAmountToConvert,
  listOfCurrencies,
}) => {
  return (
    <div className="currency-line-holder row-flex-center">
      <input
        placeholder="0"
        type="text"
        value={amountToConvert}
        className="part1-line-element grey-bg"
        onChange={(event) => {
          setAmountToConvert(event.target.value);
        }}
      />
      <select
        className="part2-line-element grey-bg"
        value={currencyName}
        onChange={(event) => {
          setCurrencyName(event.target.value);
        }}
      >
        {listOfCurrencies.map((el, index) => {
          return (
            <option key={index} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CurrencyLine;
