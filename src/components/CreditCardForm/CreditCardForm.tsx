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
    const [creditCardNumber, handleCreditCardNumber] = useState('XXXX XXXX XXXX XXXX');
    const [name, handleName] = useState('NAME');
    const [creditCardValidationDate, handleCreditCardValidationDate] = useState('XX/XX');
    const [creditCardSecurityCode, handleCreditCardSecurityCode] = useState('');
    const [creditCardType, handleCreditCardType] = useState('initial');

    const validateCreditCard = event => {
        const number = event.target.value.replace(/\s/g, '');

        handleCreditCardNumber(event.target.value);

        if (number.length === 16) {
            if (validateCardNumber(number)) {
                handleValidate(true);
                handleErrorMessage(false);
            } else {
                handleValidate(false);
                handleErrorMessage(true);
            }
        } else {
            handleValidate(false);
            handleErrorMessage(false);
        } 
        
        if (number.length === 0) {
            handleCreditCardNumber('XXXX XXXX XXXX XXXX');
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
                <InputMask className="input" mask="" type="text" name="name" value={name} onChange={event => handleName(event.target.value)} />
            </Fieldset>

            <Fieldset>
                <Label>Validation date</Label>
                <InputMask className="input" mask="99/99" maskChar="" type="text" name="cardValidationDate" value={creditCardValidationDate} onChange={event => handleCreditCardValidationDate(event.target.value)} />
            </Fieldset>

            <Fieldset>
                <Label>Security </Label>
                <InputMask className="input" mask="999" maskChar="" type="text" name="cardSecurityCode" value={creditCardSecurityCode} onChange={event => handleCreditCardSecurityCode(event.target.value)} />
            </Fieldset>

            <Fieldset>
                {!isValid && <Button type="submit" disabled>Confirm</Button>}
                {isValid && <Button type="submit">Confirm</Button>}
            </Fieldset>
        </Form>

        <CreditCard className={creditCardType}>
            <span className="credit-card__item credit-card__number">{creditCardNumber}</span>
            <span className="credit-card__item credit-card__name">{name}</span>
            <span className="credit-card__item credit-card__validate-date">
                <span className="validate-date__text">Valid</span> 
                {creditCardValidationDate}
            </span>
            <span className="credit-card__item credit-card__security-code"> {creditCardSecurityCode}</span>

            <span className="credit-card__item credit-card__chip"></span>
            <span className="credit-card__item credit-card__brand"></span>
        </CreditCard>
    </FormSectionWrapper>
  );
}

export default CreditCardForm;
