import MuiSwitch from '@mui/material/Switch';
import { FC } from 'react';
import { SwitchProps } from './interfaces/SwitchProps';

export const Switch: FC<SwitchProps> = (props) => {
  const { ...rest } = props;

  return <MuiSwitch {...rest} />;
};

export default Switch;
