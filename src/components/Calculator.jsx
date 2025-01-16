import React, { useState } from 'react';
    import './Calculator.css';

    function Calculator() {
      const [display, setDisplay] = useState('0');
      const [firstOperand, setFirstOperand] = useState(null);
      const [operator, setOperator] = useState(null);
      const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

      const handleDigitClick = (digit) => {
        if (waitingForSecondOperand) {
          setDisplay(String(digit));
          setWaitingForSecondOperand(false);
        } else {
          setDisplay(display === '0' ? String(digit) : display + digit);
        }
      };

      const handleOperatorClick = (nextOperator) => {
        const inputValue = parseFloat(display);

        if (firstOperand === null) {
          setFirstOperand(inputValue);
        } else if (operator) {
          const result = calculate(firstOperand, inputValue, operator);
          setDisplay(String(result));
          setFirstOperand(result);
        }

        setWaitingForSecondOperand(true);
        setOperator(nextOperator);
      };

      const handleEqualClick = () => {
        if (operator) {
          const inputValue = parseFloat(display);
          const result = calculate(firstOperand, inputValue, operator);
          setDisplay(String(result));
          setFirstOperand(result);
          setOperator(null);
          setWaitingForSecondOperand(false);
        }
      };

      const handleClearClick = () => {
        setDisplay('0');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
      };

      const handleFunctionClick = (func) => {
        const inputValue = parseFloat(display);
        let result;
        switch (func) {
          case 'sin':
            result = Math.sin(inputValue * (Math.PI / 180));
            break;
          case 'cos':
            result = Math.cos(inputValue * (Math.PI / 180));
            break;
          case 'tan':
            result = Math.tan(inputValue * (Math.PI / 180));
            break;
          case 'sqrt':
            result = Math.sqrt(inputValue);
            break;
          case 'log':
              result = Math.log10(inputValue);
              break;
          case 'pow':
            setFirstOperand(inputValue);
            setOperator('pow');
            setWaitingForSecondOperand(true);
            return;
          default:
            return;
        }
        setDisplay(String(result));
      };

      const calculate = (firstOperand, secondOperand, operator) => {
        switch (operator) {
          case '+':
            return firstOperand + secondOperand;
          case '-':
            return firstOperand - secondOperand;
          case '*':
            return firstOperand * secondOperand;
          case '/':
            return firstOperand / secondOperand;
          case 'pow':
            return Math.pow(firstOperand, secondOperand);
          default:
            return secondOperand;
        }
      };

      return (
        <div className="calculator">
          <div className="display">{display}</div>
          <div className="buttons">
            <button onClick={() => handleClearClick()}>C</button>
            <button onClick={() => handleFunctionClick('sin')}>sin</button>
            <button onClick={() => handleFunctionClick('cos')}>cos</button>
            <button onClick={() => handleFunctionClick('tan')}>tan</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
            <button onClick={() => handleFunctionClick('sqrt')}>√</button>
            <button onClick={() => handleFunctionClick('log')}>log</button>
            <button onClick={() => handleDigitClick(7)}>7</button>
            <button onClick={() => handleDigitClick(8)}>8</button>
            <button onClick={() => handleDigitClick(9)}>9</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            <button onClick={() => handleDigitClick(4)}>4</button>
            <button onClick={() => handleDigitClick(5)}>5</button>
            <button onClick={() => handleDigitClick(6)}>6</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
            <button onClick={() => handleDigitClick(1)}>1</button>
            <button onClick={() => handleDigitClick(2)}>2</button>
            <button onClick={() => handleDigitClick(3)}>3</button>
            <button onClick={() => handleEqualClick()}>=</button>
            <button onClick={() => handleDigitClick(0)}>0</button>
            <button onClick={() => handleDigitClick('.')}>.</button>
            <button onClick={() => handleFunctionClick('pow')}>x^y</button>
          </div>
        </div>
      );
    }

    export default Calculator;
