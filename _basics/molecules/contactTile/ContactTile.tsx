import React, { FC, ReactElement } from 'react';

import { getDialCode } from '@mehrwerk/utilities';

import Fontawesome from '@basics/atoms/icons/fontawesome/Fontawesome';
import OpeningHours from '@basics/atoms/information/openingHours/OpeningHours';

import { ContactTileProps } from '@/interfaces';
import { PhoneNumber } from '@/types';
import {
  StyledContactTileWrapper,
  StyledEmailWrapper,
  StyledOpeningHoursWrapper,
  StyledPhoneWrapper,
} from './ContactTile.styles';

const EmailRender: FC<{ email: string }> = ({ email }) => (
  <StyledEmailWrapper>
    <a href={`mailto:${email}`}>{email}</a>
  </StyledEmailWrapper>
);

// TODO: Put in utilities
const getPhoneNumberFormatted = (phoneNumber: PhoneNumber) => `${getDialCode(
  phoneNumber.countryCode,
)} ${phoneNumber.areaCode}
${phoneNumber.number}`;

// TODO: put in atom
const PhoneNumberRender: FC<{ phoneNumber: PhoneNumber }> = ({
  phoneNumber,
}) => (
  <StyledPhoneWrapper>
    <a href={`tel:${getPhoneNumberFormatted(phoneNumber)}`}>
      {getPhoneNumberFormatted(phoneNumber)}
    </a>

    <Fontawesome iconName="phone" iconStyle="solid" iconColor="primary" />
  </StyledPhoneWrapper>
);

const ContactTile: FC<ContactTileProps> = (props): ReactElement => {
  const { phoneNumber, email, openingHours } = props;

  return (
    <StyledContactTileWrapper>
      {phoneNumber?.number && <PhoneNumberRender phoneNumber={phoneNumber} />}

      {email && <EmailRender email={email} />}

      {openingHours?.length && (
        <StyledOpeningHoursWrapper>
          <OpeningHours openingHours={openingHours} />
        </StyledOpeningHoursWrapper>
      )}
    </StyledContactTileWrapper>
  );
};

export default ContactTile;
