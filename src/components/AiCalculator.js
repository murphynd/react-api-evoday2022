/* create a simple calculator using react functional components */
import React, { useEffect, useState, useCallback } from "react";
export const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const handleNum1Change = (e) => {
      setNum1(e.target.value);
    };
    const handleNum2Change = (e) => {
      setNum2(e.target.value);
    };
    const handleAddition = () => {
      setResult(parseInt(num1) + parseInt(num2));
    };
    const handleSubtraction = () => {
      setResult(parseInt(num1) - parseInt(num2));
    };
    const handleMultiplication = () => {
      setResult(parseInt(num1) * parseInt(num2));
    };
    const handleDivision = () => {
      setResult(parseInt(num1) / parseInt(num2));
    };
    return (
      <div>
        <input type="text" value={num1} onChange={handleNum1Change} />
        <input type="text" value={num2} onChange={handleNum2Change} />
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
        <h1>{result}</h1>
      </div>
    );
  };