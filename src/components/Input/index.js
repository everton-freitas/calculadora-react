import { InputContainer, Creditos, CreditosInput } from "./styles";
const Input = ({ value }) => {
  return (
    <InputContainer>
      <Creditos>
        <a>
          DEV
        </a>
        <CreditosInput>
          EVERTON FREITAS
        </CreditosInput>
        <a>
          WEB
        </a>
      </Creditos>
      <input disabled value={value} />
    </InputContainer>
  );
}

export default Input;
