import React, { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import Container from '@basics/atoms/layout/container/Container';
import Grid from '@basics/atoms/layout/grid/Grid';
import Item from '@basics/atoms/layout/item/Item';
import Backlink from '@basics/molecules/navigation/backlink/Backlink';
import Footer from '@basics/organisms/pageParts/footer/Footer';
import Header from '@basics/organisms/pageParts/header/Header';
import { PageProps } from '@/interfaces';

const Page: FC<PageProps> = (props): ReactElement => {
  const {
    children,
    metaPageDescription,
    metaPageTitle,
    onBacklinkClick,
    backlink,
    footerProps,
    fullWidth = true,
  } = props;

  return (
    <>
      <Helmet>
        {/* TODO: get title-format and fallbacks from project-config */}
        <title>{metaPageTitle || 'Title fehlt'}</title>

        <meta
          name="description"
          content={metaPageDescription || 'Description fehlt'}
        />
      </Helmet>

      <Header {...props} />

      {backlink && (
        <Backlink
          buttonBorderColor="transparent"
          buttonBorderRadius="0px"
          buttonColor="transparent"
          buttonSize="small"
          buttonSpacing="0"
          buttonTextColor="primary"
          iconName="angle-left"
          iconStyle="light"
          onClick={onBacklinkClick}
          buttonLabel={backlink.label}
          link={backlink.link}
        />
      )}

      <Grid itemAlignment="center" fullWidth={fullWidth}>
        <Container
          itemsPerRowXs="all"
          itemsPerRowSm="all"
          itemsPerRowMd="all"
          itemsPerRowLg="all"
          itemsPerRowXl="all"
          alignItems="center"
        >
          <Item>{children}</Item>
        </Container>
      </Grid>

      {footerProps && <Footer {...footerProps} />}

      {/* <SidebarDrawer /> */}
    </>
  );
};

export default Page;
