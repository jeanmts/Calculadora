import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row, Column } from "./styles.js";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNUmber = (num) => {
    setCurrentNumber((prev) => `${prev == "0" ? "" : prev}${num}`);
  };
  const handleClearNumber = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleSumNumbers = () => {
    if (firstNumber == "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0");
    }
  };
  const handleNumbers = () => {
    if (firstNumber == "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0");
      setOperation("");
    }
  };
  const handleRemNumbers = () => {
    if (firstNumber == "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0");
    }
  };
  const handleMultiply = () => {
    if (firstNumber == "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0");
    }
  };
  const handleDivide = () => {
    if (firstNumber == "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0");
    }
  };
  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== " " && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleRemNumbers();
        case "*":
          handleMultiply();
        case "/":
          handleDivide();
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="X" onClick={handleMultiply} />
          <Button label="/" onClick={handleDivide} />
          <Button label="C" onClick={handleClearNumber} />
          <Button label="CE" onClick={() => handleAddNUmber("")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNUmber("7")} />
          <Button label="8" onClick={() => handleAddNUmber("8")} />
          <Button label="9" onClick={() => handleAddNUmber("9")} />
          <Button label="-" onClick={handleRemNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNUmber("4")} />
          <Button label="5" onClick={() => handleAddNUmber("5")} />
          <Button label="6" onClick={() => handleAddNUmber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNUmber("1")} />
          <Button label="2" onClick={() => handleAddNUmber("2")} />
          <Button label="3" onClick={() => handleAddNUmber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
