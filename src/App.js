import Input from './components/Input';
import { Button, NumberButton, ImportantButton, BackButton } from './components/Button';
import './App.css';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setIsResultDisplayed(false);
  };

  const handleAddNumber = (number) => {
    if (isResultDisplayed) {
      setCurrentNumber(number);
      setIsResultDisplayed(false);
    } else {
      if (number === '.' && currentNumber.includes('.')) return; // Impedir múltiplos pontos
      setCurrentNumber((prev) => (prev === '0' ? number : prev + number));
    }
  };

  const handleRemoveLastDigit = () => {
    setCurrentNumber((prev) => {
      if (prev.length <= 1 || prev === '0') return '0';
      return prev.slice(0, -1);
    });
  };

  const handleOperation = (op) => {
    if (operation && currentNumber !== '0') {
      handleEquals();
    }
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation(op);
    setIsResultDisplayed(false);
  };

  const handlePercentage = () => {
    setCurrentNumber((prev) => String(Number(prev) / 100));
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      let result = 0;
      switch (operation) {
        case '+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case 'x':
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case '/':
          result = Number(currentNumber) === 0 ? 'Erro' : Number(firstNumber) / Number(currentNumber);
          break;
        default:
          break;
      }
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
      setIsResultDisplayed(true);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={new Intl.NumberFormat('pt-BR').format(Number(currentNumber))} />
        <Row>
          <ImportantButton label="CE" onClick={() => setCurrentNumber('0')} />
          <ImportantButton label="C" onClick={handleOnClear} />
          <BackButton onClick={handleRemoveLastDigit} />
          <Button label="/" onClick={() => handleOperation('/')} />
        </Row>
        <Row>
          <NumberButton label="7" onClick={() => handleAddNumber('7')} />
          <NumberButton label="8" onClick={() => handleAddNumber('8')} />
          <NumberButton label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={() => handleOperation('x')} />
        </Row>
        <Row>
          <NumberButton label="4" onClick={() => handleAddNumber('4')} />
          <NumberButton label="5" onClick={() => handleAddNumber('5')} />
          <NumberButton label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <NumberButton label="1" onClick={() => handleAddNumber('1')} />
          <NumberButton label="2" onClick={() => handleAddNumber('2')} />
          <NumberButton label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <NumberButton label="%" onClick={handlePercentage} />
          <NumberButton label="0" onClick={() => handleAddNumber('0')} />
          <NumberButton label="," onClick={() => handleAddNumber('.')} />
          <ImportantButton label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
