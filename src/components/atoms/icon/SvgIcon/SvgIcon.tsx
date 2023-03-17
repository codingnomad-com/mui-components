import MuiSvgIcon from '@mui/material/SvgIcon';
import { FC } from 'react';
import { SvgIconProps } from './interfaces/SvgIconProps';

export const SvgIcon: FC<SvgIconProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiSvgIcon {...rest}>{children}</MuiSvgIcon>;
};

export default SvgIcon;
