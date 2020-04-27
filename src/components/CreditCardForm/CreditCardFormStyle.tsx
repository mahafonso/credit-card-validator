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
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .2);
    height: 180px;
    position: relative;
    transform-style: preserve-3d;
    transition: background .3s ease-in-out, transform .4s linear;
    width: 290px;

    &.initial { background: linear-gradient(25deg,#999,#999); }

    &.mastercard { background: linear-gradient(25deg,#f37b26,#fdb731); }

    &.visa { background: linear-gradient(25deg,#0f509e,#1399cd); }

    &.americanExpress { background: linear-gradient(25deg,#308c67,#a3f2cf); }

    &.elo { background: linear-gradient(25deg,#211c18,#aaa7a2); }
    
    &.dinnersClub { background: #FFF; }

    &.discover { background: #0F0; }

    .credit-card__item { opacity: 0; }

    &.front {
        .credit-card__number,
        .credit-card__name,
        .credit-card__validate-date,
        .credit-card__brand,
        .credit-card__chip { opacity: 1; }
        
        .credit-card__security-code { opacity: 0; }
    }

    &.back {
        transform: rotateY(180deg);

        .credit-card__number,
        .credit-card__name,
        .credit-card__validate-date,
        .credit-card__chip { opacity: 0; }

        .credit-card__brand.bottom {
            bottom: 15%;
            left: 50%;
            right: initial;
            top: initial;
            transform: translateX(-50%);
        }

        .credit-card__brand.bottom,
        .credit-card__security-code {
            opacity: 1;
            transform: rotateY(-180deg);
        }

        .credit-card__brand.bottom { transform: translateX(-50%) rotateY(-180deg); }
    }
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