import styled from 'styled-components';

const FormSectionWrapper = styled.div`
    display: flex;
`;

const Form = styled.form`
    width: 480px;
`;

const Fieldset = styled.fieldset`
    border: none;
    display: block;
    margin: 10px 0;
    padding: 0;
    width: auto;
`;

const Label = styled.label`
    display: block;
    font-weight: bold;
`;

const Input = styled.input`
    margin-top: 5px;
    outline: none;
    padding: 5px;
`;

const Button = styled.button`
    background: #000;
    border: none;
    box-shadow: none;
    color: #FFF;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    margin-top: 5px;
    outline: none;
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    width: 120px;

    &:disabled {
        cursor: initial;
        opacity: .4;
    }
`;

const CreditCard = styled.div``;

const CreditCardNumber = styled.span``;

const CreditCardName = styled.span``;

const CreditCardDateValidation = styled.span``;

const CreditCardSecurityCode = styled.span``;

export {
    FormSectionWrapper,
    Form,
    Fieldset,
    Label,
    Input,
    Button,
    CreditCard,
    CreditCardNumber,
    CreditCardName,
    CreditCardDateValidation,
    CreditCardSecurityCode
};