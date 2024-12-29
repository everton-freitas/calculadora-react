import Input from './components/Input'
import { Button, NumberButton, ImportantButton, BackButton } from './components/Button';
import './App.css'

import { Container, Content, Row } from "./styles";
import { useState } from 'react';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, SetOperation] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false); // Adicionada variável de controle

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    SetOperation('');
    setIsResultDisplayed(false); // Resetar o estado de resultado exibido
  };

  const handleAddNumber = (number) => {
    if (isResultDisplayed) {
      // Se um resultado foi exibido, começar uma nova entrada
      setCurrentNumber(number);
      setIsResultDisplayed(false);
    } else {
      setCurrentNumber((prev) => {
        const cleanPrev = prev.replace(/\./g, ''); // Remover formatação
        const newNumber = `${cleanPrev}${number}`;
        return new Intl.NumberFormat('pt-BR').format(Number(newNumber));
      });
    }
  };

  const handleRemoveLastDigit = () => {
    setCurrentNumber((prev) => {
      // Remove os pontos temporariamente
      const cleanNumber = prev.replace(/\./g, '');
  
      // Se o número tem apenas um caractere, retorna "0"
      if (cleanNumber.length <= 1) {
        return '0';
      }
  
      // Remove o último caractere e reformatar o número
      const updatedNumber = cleanNumber.slice(0, -1);
      return new Intl.NumberFormat('pt-BR').format(Number(updatedNumber));
    });
  };

  const handleOperation = (op) => {
    if (operation && currentNumber !== '0') {
      handleEquals(); // Completa a operação anterior antes de iniciar outra
    }
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    SetOperation(op);
    setIsResultDisplayed(false);
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
          result = Number(firstNumber) / Number(currentNumber);
          break;
        default:
          break;
      }
      setCurrentNumber(String(result));
      setFirstNumber('0');
      SetOperation('');
      setIsResultDisplayed(true); // Indicar que o resultado foi exibido
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <ImportantButton label="CE" onClick={() => setCurrentNumber('0')} />
          <ImportantButton label="C" onClick={handleOnClear} />
          <BackButton onClick={handleRemoveLastDigit}/>
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
          <NumberButton label='%' onClick={() => handleAddNumber('%')} />
          <NumberButton label="." onClick={() => handleAddNumber('.')} />
          <NumberButton label="0" onClick={() => handleAddNumber('0')} />
          <ImportantButton label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
