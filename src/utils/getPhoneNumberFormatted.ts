import { getDialCode, IsoCodeType } from '@codingnomad/ts-utilities';

export type PhoneNumber = {
  countryCode: IsoCodeType;
  areaCode: string;
  number: string;
};

export const getPhoneNumberFormatted = (
  phoneNumber: PhoneNumber,
): string => `${getDialCode(phoneNumber.countryCode)} ${phoneNumber.areaCode}
${phoneNumber.number}`;

export default getPhoneNumberFormatted;
