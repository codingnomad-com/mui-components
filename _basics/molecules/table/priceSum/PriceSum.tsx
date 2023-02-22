import React, { FC, ReactElement } from 'react';
import { Country, PriceSumProps } from '@/interfaces';
import {
  StyledPriceRow,
  StyledPriceSumWrapper,
  StyledSummaryRow,
} from './PriceSum.styles';

const getTaxInfoForCountry = (country: Country) =>
  ({
    DE: { full: 0.19, reduced: 0.07, sign: '€' },
    AT: { full: 0.2, reduced: 0.05, sign: '€' },
  }[country] || { full: 0.19, reduced: 0.07, sign: '€' });

const parsePriceSum = (amount: number, country: Country) => {
  const taxInfo = getTaxInfoForCountry(country);

  return `${amount} ${taxInfo.sign}`;
};

const getGrossAmount = (net: number, country: Country): string => {
  const taxInfo = getTaxInfoForCountry(country);

  return parsePriceSum(net * (1 + taxInfo.full), country);
};

const PriceSum: FC<PriceSumProps> = (props): ReactElement => {
  const { netAmount, country } = props;

  return (
    <StyledPriceSumWrapper>
      <StyledPriceRow>
        Netto: {parsePriceSum(netAmount, country)}
      </StyledPriceRow>
      <StyledSummaryRow>
        Gesamtsumme: {getGrossAmount(netAmount, country)}
      </StyledSummaryRow>
    </StyledPriceSumWrapper>
  );
};

export default PriceSum;
