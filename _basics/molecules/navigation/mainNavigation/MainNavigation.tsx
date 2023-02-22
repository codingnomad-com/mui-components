import React, { FC, ReactElement } from 'react';

import { MainNavigationProps } from '@/interfaces';
import {
  StyledMainNavigation,
  StyledMainNavigationItem,
} from './MainNavigation.styles';

const MainNavigation: FC<MainNavigationProps> = (props): ReactElement => {
  const { isLoggedIn, mainNavigationItems, highlightActiveItem } = props;

  return (
    <StyledMainNavigation {...props}>
      {mainNavigationItems.map(({ title, link, isPrivate, isSubNav }, key) => {
        if (isSubNav) {
          return null;
        }

        if (isPrivate && !isLoggedIn) {
          return (
            <StyledMainNavigationItem href="/login" key={key} {...props}>
              {title}
            </StyledMainNavigationItem>
          );
        }

        return (
          <StyledMainNavigationItem
            key={key}
            href={link}
            highlightActiveItem={highlightActiveItem}
          >
            {title}
          </StyledMainNavigationItem>
        );
      })}
    </StyledMainNavigation>
  );
};

export default MainNavigation;
