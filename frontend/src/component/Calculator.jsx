import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (value) => {
    setInput((prev) => prev + value);
  };

  const handleOperator = (operator) => {
    setInput((prev) => prev + operator);
  };

  const calculate = () => {
    try {
     
      if (!/^[0-9+\-*/.]+$/.test(input)) {
        setResult("Error");
        return;
      }

      const answer = Function(`"use strict"; return (${input})`)();

      setResult(answer);
    } catch {
      setResult("Error");
    }
  };

  const clearAll = () => {
    setInput("");
    setResult("");
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div>
      <div id="border">
        <div id="display">
          <h1>Calculator</h1>

          <input type="text" value={input} readOnly />
          <input type="text" value={result} readOnly />
        </div>

        <div id="buttons">
          <button onClick={() => handleOperator("+")}>+</button>
          <button onClick={() => handleOperator("-")}>-</button>
          <button onClick={() => handleOperator("*")}>*</button>
          <button onClick={() => handleOperator("/")}>/</button>

          <button onClick={clearAll}>AC</button>
          <button onClick={deleteLast}>DEL</button>

          <button onClick={() => handleNumber("1")}>1</button>
          <button onClick={() => handleNumber("2")}>2</button>
          <button onClick={() => handleNumber("3")}>3</button>
          <button onClick={() => handleNumber("4")}>4</button>

          <button onClick={() => handleNumber("5")}>5</button>
          <button onClick={() => handleNumber("6")}>6</button>
          <button onClick={() => handleNumber("7")}>7</button>
          <button onClick={() => handleNumber("8")}>8</button>

          <button onClick={() => handleNumber("9")}>9</button>
          <button onClick={() => handleNumber("0")}>0</button>
          <button onClick={() => handleNumber(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;