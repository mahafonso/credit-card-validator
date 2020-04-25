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

const CreditCard = styled.div`
    border-radius: 14px;
    height: 180px;
    position: relative;
    transition: all .3s ease-in-out;
    width: 290px;

    &.initial { background: linear-gradient(25deg,#999,#999); }

    &.mastercard { background: linear-gradient(25deg,#f37b26,#fdb731); }

    &.visa { background: linear-gradient(25deg,#0f509e,#1399cd); }
`;

const ErrorMsg = styled.span`
    color: #F00;
    display: block;
    font-size: 12px;
    margin-top: 5px;
`;

export {
    FormSectionWrapper,
    Form,
    Fieldset,
    Label,
    Input,
    Button,
    CreditCard,
    ErrorMsg
};