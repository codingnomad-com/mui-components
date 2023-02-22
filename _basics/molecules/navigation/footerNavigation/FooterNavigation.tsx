import React, { FC, ReactElement } from 'react';

import { FooterNavigationProps } from '@/interfaces';
import {
  StyledFooterNavigation,
  StyledFooterNavigationItem,
} from './FooterNavigation.styles';

const FooterNavigation: FC<FooterNavigationProps> = (props): ReactElement => {
  const { footerNavigationItems } = props;

  return (
    <StyledFooterNavigation {...props}>
      {footerNavigationItems.map(({ title, link }, key) => (
        <StyledFooterNavigationItem href={link} key={key} {...props}>
          {title}
        </StyledFooterNavigationItem>
      ))}
    </StyledFooterNavigation>
  );
};

export default FooterNavigation;
