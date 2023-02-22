import React, { FC, ReactElement } from 'react';

import { TextlinkProps } from '@/interfaces';
import { StyledTextlink } from './Textlink.styles';

const Textlink: FC<TextlinkProps> = (props): ReactElement => {
  const { children, handleClick, target, href } = props;

  return (
    <StyledTextlink
      {...props}
      target={target}
      href={href}
      onClick={handleClick}
    >
      {children}
    </StyledTextlink>
  );
};

export default Textlink;
