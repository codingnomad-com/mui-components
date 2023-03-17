import MuiCaption from '@mui/material/Typography';
import { FC } from 'react';
import { CaptionProps } from './interfaces/CaptionProps';

export const Caption: FC<CaptionProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <MuiCaption {...rest} variant="caption">
      {children}
    </MuiCaption>
  );
};

export default Caption;
