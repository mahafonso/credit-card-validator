import React from 'react';
import InputMask from 'react-input-mask';

import {
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
} from './CreditCardFormStyle';
import './style.scss';

const CreditCardForm = () => {
  return (
      <FormSectionWrapper>
        <Form>
            <Fieldset>
                <Label>Card number</Label>
                <InputMask className="input" mask="9999 9999 9999 9999" type="text" name="cardNumber" />
            </Fieldset>

            <Fieldset>
                <Label>Name</Label>
                <Input type="text" name="name" />
            </Fieldset>

            <Fieldset>
                <Label>Validation date</Label>
                <InputMask className="input" mask="99/99" type="text" name="cardValidationDate" />
            </Fieldset>

            <Fieldset>
                <Label>Security </Label>
                <InputMask className="input" mask="999" type="text" name="cardSecurityCode" />
            </Fieldset>

            <Fieldset>
                <Button type="submit">Confirm</Button>
            </Fieldset>
        </Form>

        <CreditCard>
            <CreditCardNumber></CreditCardNumber>
            <CreditCardName></CreditCardName>
            <CreditCardDateValidation></CreditCardDateValidation>
            <CreditCardSecurityCode></CreditCardSecurityCode>

            <img src="../../images/" alt="Credit Card" />
        </CreditCard>
    </FormSectionWrapper>
  );
}

export default CreditCardForm;
