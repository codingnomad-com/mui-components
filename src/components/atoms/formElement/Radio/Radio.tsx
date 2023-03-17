import MuiRadio from '@mui/material/Radio';
import { FC } from 'react';
import { RadioProps } from './interfaces/RadioProps';

export const Radio: FC<RadioProps> = (props) => {
  const { ...rest } = props;

  return <MuiRadio {...rest} />;
};

export default Radio;
