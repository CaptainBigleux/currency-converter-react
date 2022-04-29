import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const ConvertButtons = ({
  setAmountX,
  setAmountY,
  amountX,
  amountY,
  rates,
  fromCurrency,
  targetCurrency,
}) => {
  const convertCurrency = (
    initialCurrencyName,
    targetCurrencyName,
    amountToConvert
  ) => {
    const euro = 1;
    let rate1 = 0;
    let rate2 = 0;
    for (const key in rates) {
      if (key === initialCurrencyName) {
        rate1 = rates[key];
      } else if (key === targetCurrencyName) rate2 = rates[key];

      if (rate1 !== 0 && rate2 !== 0)
        return ((rate1 * euro) / rate2) * amountToConvert;
    }
  };
  return (
    <div className="convert-buttons row-flex-center">
      <div
        className="individual-item"
        onClick={() => {
          setAmountY(convertCurrency(targetCurrency, fromCurrency, amountX));
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-down"
          size="4x"
          color="white"
        />
      </div>
      <div
        className="individual-item"
        onClick={() => {
          setAmountX(convertCurrency(fromCurrency, targetCurrency, amountY));
        }}
      >
        <FontAwesomeIcon icon="fa-solid fa-arrow-up" size="4x" color="white" />
      </div>
    </div>
  );
};

export default ConvertButtons;
