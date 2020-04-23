import React from 'react';

import CreditCardForm from '../../components/CreditCardForm/CreditCardForm';

import { FormSection, SectionTitle } from './HomeStyle';

const Home = () => {
  return (
      <FormSection>
		  <SectionTitle>Credit Card Validator</SectionTitle>

          <CreditCardForm />
      </FormSection>
  );
}

export default Home;
