import React, { useEffect, useState } from 'react';
import ConvertRow from "./convertRow";
import axios from "axios";
import Buttons from './Button'

let flag;
function App() {
  console.log('I WAS LOADED ');
  /**
   * React Hook - For all the diferent states
   */
  const [currencyOptions, setOption] = useState([]);       //state with the currency names
  const [currencyRate, setRate] = useState([]);           //state with the currency rates
  const [fromCurrency, setFromCurrency] = useState('EUR');//cuurency from first row
  const [toCurrency, setToCurrency] = useState('EUR');    //currency from second row
  const [fromRate, setFromRate] = useState(1);            //text from first row
  const [toRate, setToRate] = useState(1);                //text from second row

  /**
   * React Hook - The code inside its going to be run onMount 
   */
  useEffect(() => {
    /**
    * axios - get request to our backend
    */
    axios.get("/api/calculator").then(response => {
      setOption([response.data.base, ...Object.keys(response.data.rates)]);
      setRate([1, ...Object.values(response.data.rates)]);
      setToRate(1);

    });

  }, []);

  /**
   * React Hook - The code inside runs when the
   *  user changes the currency. The code does
   *  the conversion in the same row.
   */
  useEffect(() => {
    if (flag) {
      convert(toRate, !flag); //Passing a !flag to convert the same row
    } else {
      convert(fromRate, !flag);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromCurrency, toCurrency]);

  /**
   * Function that handles any change the user
   * does at the text fields
   * @param {the number in the text} value 
   * @param {which row} isTopRow 
   */
  function handleChange(value, isTopRow) {
    if (isTopRow) {
      convert(value, isTopRow);
      setFromRate(value);
    }
    else {
      convert(value, isTopRow);
      setToRate(value);
    }
  }

  /**
   * Function that changes the currancy at the <select>
   * @param {what currency was choosen} value 
   * @param {which row} isTopRow 
   */
  function setCurrency(value, isTopRow) {
    flag = isTopRow;
    if (isTopRow) {
      setFromCurrency(value);
    }
    else {
      setToCurrency(value);
    }
  }

  /**
   * Function that does the conversion
   * @param {the number in the text} value 
   * @param {which row} isTopRow 
   */
  function convert(value, isTopRow) {
    /**
     * to, from are the rates of each cuurency. 
     * The program 
     */
    let from = currencyRate[currencyOptions.indexOf(fromCurrency)];//ta rates perno
    let to = currencyRate[currencyOptions.indexOf(toCurrency)];
    let result;
    if (isTopRow) {
      result = (to / from) * value;
      setToRate(result);
    } else {
      result = (to * from) * value;
      setFromRate(result);
    }
  }

  function myFunction() {
    // make button work
    // the button : <button onClick={() => myFunction()}>Click me</button>
  }
  return (

    <div className="App-header">
      <h1>Currency Converter</h1>

      <ConvertRow
        option={fromCurrency}
        currencyOptions={currencyOptions}
        onChange={event => setCurrency(event.target.value, true)}
        onChangeNumber={event => handleChange(event.target.value, true)}
        number={fromRate}
      />

      <h2>↓</h2>

      <ConvertRow
        option={toCurrency}
        currencyOptions={currencyOptions}
        onChange={event => setCurrency(event.target.value, false)}
        onChangeNumber={event => handleChange(event.target.value, false)}
        number={toRate}
      />

    </div>

  );
}
export default App;