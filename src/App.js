import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CurrencyLine from "./components/CurrencyLine";
import ConvertButtons from "./components/ConvertButtons";

import "./App.css";
import rates from "./assets/data/data.json";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowDown, faArrowUp);

const App = () => {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");

  const [amountX, setamountX] = useState(0);
  const [amountY, setamountY] = useState(0);

  return (
    <div className="container">
      <Header title="💵 Converter 💵" />
      <main className="main-holder column-flex-center">
        <CurrencyLine
          currencyName={fromCurrency}
          setCurrencyName={setFromCurrency}
          listOfCurrencies={Object.keys(rates)}
          amountToConvert={amountX}
          setAmountToConvert={setamountX}
        />
        <ConvertButtons
          amountX={amountX}
          setAmountX={setamountX}
          amountY={amountY}
          setAmountY={setamountY}
          rates={rates}
          fromCurrency={fromCurrency}
          targetCurrency={targetCurrency}
        />
        <CurrencyLine
          currencyName={targetCurrency}
          setCurrencyName={setTargetCurrency}
          listOfCurrencies={Object.keys(rates)}
          amountToConvert={amountY}
          setAmountToConvert={setamountY}
        />
      </main>

      <Footer title="Made by Adrien" />
    </div>
  );
};

export default App;
