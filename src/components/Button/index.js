import { ButtonContainer, NumberButtonContainer, ImportantButtonContainer } from "./styles";



const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

const NumberButton = ({ label, onClick }) => {
  return (
    <NumberButtonContainer onClick={onClick}>
      {label}
    </NumberButtonContainer>
  )
}

const ImportantButton = ({ label, onClick }) => {
  return (
    <ImportantButtonContainer onClick={onClick}>
      {label}
    </ImportantButtonContainer>
  )
}

const BackButton = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <i className="bi bi-backspace"></i>
    </ButtonContainer>
  )
}

export { Button, NumberButton, ImportantButton, BackButton }