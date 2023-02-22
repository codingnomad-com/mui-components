import React, { FC, ReactElement } from 'react';

import { getDaysWithHoursFormatted } from '@utils/getDaysWithHoursFormatted';
import { OpeningHoursProps } from '@/interfaces';
import {
  StyledOpeningHours,
  StyledOpeningHoursRow,
} from './OpeningHours.styles';

const OpeningHours: FC<OpeningHoursProps> = ({
  openingHours,
  ...rest
}): ReactElement => (
  <StyledOpeningHours {...rest}>
    {getDaysWithHoursFormatted(openingHours).map(({ left, right }, key) => (
      <StyledOpeningHoursRow key={key}>
        <div>{left}</div>
        <div>{right}</div>
      </StyledOpeningHoursRow>
    ))}
  </StyledOpeningHours>
);

export default OpeningHours;
