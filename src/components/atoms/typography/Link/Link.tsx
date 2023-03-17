import MuiLink from '@mui/material/Link';
import { FC } from 'react';
import { LinkProps } from './interfaces/LinkProps';

export const Link: FC<LinkProps> = (props) => {
  const { text, ...rest } = props;

  return <MuiLink {...rest}>{text}</MuiLink>;
};

export default Link;
