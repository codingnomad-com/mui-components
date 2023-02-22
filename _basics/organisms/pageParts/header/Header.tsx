import React, { FC, ReactElement } from 'react';

import Grid from '@basics/atoms/layout/grid/Grid';
import Container from '@basics/atoms/layout/container/Container';
import Item from '@basics/atoms/layout/item/Item';
import Image from '@basics/atoms/images/image/Image';
import Textlink from '@basics/atoms/typography/links/textlink/Textlink';
import SubNavigation from '@basics/molecules/navigation/subNavigation/SubNavigation';
import MainNavigation from '@basics/molecules/navigation/mainNavigation/MainNavigation';
import LoginButton from '@basics/molecules/userInteraction/loginButton/LoginButton';
import { NavigationItem } from '@/types';
import { HeaderProps } from '@/interfaces';

const Header: FC<HeaderProps> = (props): ReactElement => {
  const {
    headerGridBackgroundColor,
    headerLogo,
    isLoggedIn,
    mainNavigationItems,
    subNavigationGridBackgroundColor,
    loginButtonProps,
    fullWidth = true,
  } = props;

  let subNavigationItems: NavigationItem[] = [];

  if (mainNavigationItems) {
    const currentMainNavigationItem = mainNavigationItems.find(
      (mainNavigationItem) =>
        globalThis?.location?.pathname === mainNavigationItem.link,
    );

    subNavigationItems = currentMainNavigationItem?.children || [];
  }

  return (
    <>
      <Grid
        fullWidth={fullWidth}
        gridBackgroundColor={headerGridBackgroundColor || 'white'}
      >
        <Container>
          <Item>
            <Grid>
              <Container
                itemsPerRowXs="all"
                itemsPerRowSm="all"
                itemsPerRowMd="all"
                itemsPerRowLg="all"
                itemsPerRowXl="all"
                alignItems="center"
              >
                <Item xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                  {headerLogo?.url && (
                    <Textlink href="/">
                      <Image
                        imageHeight="auto"
                        imageWidth="auto"
                        imageObjectFit="contain"
                        imageAlt={headerLogo.alternativeText || 'Logo'}
                        imageUrl={headerLogo.url}
                      />
                    </Textlink>
                  )}
                </Item>

                <Item>
                  {mainNavigationItems && (
                    <MainNavigation
                      mainNavigationItems={mainNavigationItems}
                      isLoggedIn={isLoggedIn}
                    />
                  )}
                </Item>

                <Item xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                  <LoginButton {...loginButtonProps} isLoggedIn={isLoggedIn} />
                </Item>
              </Container>
            </Grid>
          </Item>
        </Container>
      </Grid>

      {subNavigationItems?.length > 0 && (
        <SubNavigation
          subNavigationItems={subNavigationItems}
          subNavigationGridBackgroundColor={
            subNavigationGridBackgroundColor || 'primary'
          }
        />
      )}
    </>
  );
};

export default Header;
