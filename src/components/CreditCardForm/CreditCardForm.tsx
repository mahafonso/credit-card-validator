import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import {
    FormSectionWrapper,
    Form,
    Fieldset,
    Label,
    Input,
    Button,
    CreditCard,
    ErrorMsg
} from './CreditCardFormStyle';
import './style.scss';

const CreditCardForm = () => {
    const [isValid, handleValidate] = useState(false);
    const [showErrorMessage, handleErrorMessage] = useState(false);
    const [creditCardNumber, handleCreditCardNumber] = useState('•••• •••• •••• ••••');
    const [name, handleName] = useState('NAME');
    const [creditCardValidationDate, handleCreditCardValidationDate] = useState('••/••');
    const [creditCardSecurityCode, handleCreditCardSecurityCode] = useState('');
    const [creditCardType, handleCreditCardType] = useState('initial');

    const verifyCreditCardBand = number => {
        const regexMastercard = new RegExp(/^(5[1-5]\d{4}|677189)\d{10}$/),
            regexVisa = new RegExp(/^4\d{12}(\d{3})?$/),
            regexAmericanExpress = new RegExp(/^3[47]\d{13}$/),
            regexElo = new RegExp(/^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/),
            regexDinnersClub = new RegExp(/^3(0[0-5]|[68]\d)\d{11}$/),
            regexDiscover = new RegExp(/^6(?:011|5[0-9]{2})[0-9]{12}$/);

        if (regexMastercard.test(number)) return 'mastercard';
        if (regexVisa.test(number)) return 'visa';
        if (regexAmericanExpress.test(number)) return 'americanExpress';
        if (regexElo.test(number)) return 'elo';
        if (regexDinnersClub.test(number)) return 'dinnersClub';
        if (regexDiscover.test(number)) return 'discover'
        return 'initial';
    }

    const validateCreditCard = event => {
        const number = event.target.value.replace(/\s/g, '');

        handleCreditCardNumber(event.target.value);

        if (number.length >= 14) {
            if (validateCardNumber(number)) {
                handleValidate(true);
                handleErrorMessage(false);

                const creditCardBrand = verifyCreditCardBand(number);
                handleCreditCardType(creditCardBrand);
            } else {
                handleValidate(false);
                handleErrorMessage(true);

                handleCreditCardType('initial');
            }
        } else {
            handleValidate(false);
            handleErrorMessage(false);

            handleCreditCardType('initial');
        } 
        
        if (number.length === 0) {
            handleCreditCardNumber('•••• •••• •••• ••••');

            handleCreditCardType('initial');
        }
    }

    const validateCardNumber = number => {
        let numberSplit = number.split('');

        numberSplit = numberSplit.map((current, index) => {
            if (index % 2 === 0) return (parseInt(current) * 2);

            return parseInt(current);
        });

        numberSplit = numberSplit.map(current => {
            if (parseInt(current) > 9) return (parseInt(current) - 9);

            return parseInt(current);
        });

        let sum = numberSplit.reduce((a, b) => a + b, 0);

        return (sum % 10 === 0);
    }

    const changeCreditCardClass = (toRemove, toAdd) => {
        document.querySelector('.credit-card')?.classList.remove(toRemove);
        document.querySelector('.credit-card')?.classList.add(toAdd);
    }
  
    return (
      <FormSectionWrapper>
        <Form>
            <Fieldset>
                <Label>Card number</Label>
                <InputMask className="input" mask="9999 9999 9999 9999" maskChar="" type="text" name="cardNumber" value={creditCardNumber} onChange={validateCreditCard} />

                {(!isValid && showErrorMessage) && <ErrorMsg>The number is invalid!</ErrorMsg>}
            </Fieldset>

            <Fieldset>
                <Label>Name</Label>
                <InputMask className="input" mask="" maskChar="" type="text" name="name" value={name} onChange={event => handleName(event.target.value)} />
            </Fieldset>

            <Fieldset>
                <Label>Validation date</Label>
                <InputMask className="input" mask="99/99" maskChar="" type="text" name="cardValidationDate" value={creditCardValidationDate} onChange={event => handleCreditCardValidationDate(event.target.value)} />
            </Fieldset>

            <Fieldset>
                <Label>Security </Label>
                <InputMask className="input" mask="999" maskChar="" type="text" name="cardSecurityCode" value={creditCardSecurityCode} onChange={event => handleCreditCardSecurityCode(event.target.value)} onFocus={() => changeCreditCardClass('front', 'back')} onBlur={() => changeCreditCardClass('back', 'front')} />
            </Fieldset>

            <Fieldset>
                {!isValid && <Button type="submit" disabled>Confirm</Button>}
                {isValid && <Button type="submit">Confirm</Button>}
            </Fieldset>
        </Form>

        <CreditCard className={`credit-card front ${creditCardType}`}>
            <span className="credit-card__item credit-card__chip"></span>
            <span className={`credit-card__item credit-card__brand ${creditCardType}`}></span>
            
            <span className="credit-card__item credit-card__number">{creditCardNumber}</span>
            <span className="credit-card__item credit-card__name">{name}</span>
            <span className="credit-card__item credit-card__validate-date">
                <span className="validate-date__text">Valid</span> 
                {creditCardValidationDate}
            </span>
            <span className="credit-card__item credit-card__security-code"> {creditCardSecurityCode}</span>

            <span className={`credit-card__item credit-card__brand bottom ${creditCardType}`}></span>
        </CreditCard>
    </FormSectionWrapper>
  );
}

export default CreditCardForm;
