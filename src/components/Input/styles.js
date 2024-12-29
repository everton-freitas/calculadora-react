import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 128px;
    background-color: #2C2C2C;
    padding-bottom: 26px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;


    input {
        width: 92%;
    height: 69px;
    background-color: #CFE2E7;
    text-align: right;
    margin: 7px;
    padding: 0 7px;
    font-size: 40px;
    border-radius: 5px;
    border: 3px solid rgb(213, 213, 213);
    }
    
`

export const Creditos = styled.div`
    color: white;
    font-size: 15px;
    font-family: sans-serif;

    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    width: 91%;
    align-items: center;
    padding-bottom: 5px;
`

export const CreditosInput = styled.div`
    background: #4C2E23;
    color: rgb(228, 93, 44);
    padding: 9px;
    border-radius: 4px;
    font-size: 14px;
    letter-spacing: 1.4px;
    border: 2px solid #211d1d;
    font-family: 'MinhaFonte', sans-serif;
`