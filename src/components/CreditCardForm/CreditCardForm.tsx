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
    const [creditCardNumber, handleCreditCardNumber] = useState('');
    const [name, handleName] = useState('');
    const [creditCardValidationDate, handleCreditCardValidationDate] = useState('');
    const [creditCardSecurityCode, handleCreditCardSecurityCode] = useState('');

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
                <Input type="text" name="name" value={name} onChange={event => handleName(event.target.value)} />
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

        <CreditCard>
            <span className="">{creditCardNumber}</span>
            <span className="">{name}</span>
            <span className="">{creditCardValidationDate}</span>
            <span className="">{creditCardSecurityCode}</span>

            <img src="../../images/" alt="Credit Card" />
        </CreditCard>
    </FormSectionWrapper>
  );
}

export default CreditCardForm;
