import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e, setter) => {
    const inputValue = e.target.value;
    setter(inputValue);
  };

  const validateInput = () => {
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
      setError("Please enter valid numbers in both fields.");
      return false;
    }

    setError("");
    return true;
  };

  const handleOperation = (operator) => {
    if (validateInput()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      switch (operator) {
        case "+":
          setResult(number1 + number2);
          break;
        case "-":
          setResult(number1 - number2);
          break;
        case "*":
          setResult(number1 * number2);
          break;
        case "/":
          if (number2 !== 0) {
            setResult(number1 / number2);
          } else {
            setError("Cannot divide by zero.");
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      <div>
        <label>
          Number 1:
          <input
            type="text"
            value={num1}
            onChange={(e) => handleInputChange(e, setNum1)}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="text"
            value={num2}
            onChange={(e) => handleInputChange(e, setNum2)}
          />
        </label>
      </div>
      <div>
        <button onClick={() => handleOperation("+")}>Add</button>
        <button onClick={() => handleOperation("-")}>Subtract</button>
        <button onClick={() => handleOperation("*")}>Multiply</button>
        <button onClick={() => handleOperation("/")}>Divide</button>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {result !== null && (
        <div style={{ color: "green" }}>
          Result: {result.toFixed(2)}{" "}
          {/* Assuming you want to display result with two decimal places */}
        </div>
      )}
    </div>
  );
};

export default Calculator;
