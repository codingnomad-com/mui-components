import React, { FC, ReactElement } from 'react';

import Image from '@basics/atoms/images/image/Image';
import Bulletlist from '@basics/atoms/typography/bulletlist/Bulletlist';
import FavoriteStar from '@basics/molecules/userInteraction/favoriteStar/FavoriteStar';
import Notification from '@basics/molecules/feedback/notification/Notification';
import Button from '@basics/atoms/formElements/button/Button';
import Box from '@/components/_basics/shared/layout/box/Box';
import { InfoLinkBoxProps } from '@/interfaces';
import { StyledInfoLinkBox } from './InfoLinkBox.styles';

const InfoLinkBox: FC<InfoLinkBoxProps> = (props): ReactElement => {
  const {
    handleClickFavStar,
    imageUrl = '',
    isFavorite,
    listItems = [],
    notificationDescription = '',
    notificationHeadline = '',
    boxProps,
    cta,
  } = props;

  return (
    <Box {...boxProps}>
      <StyledInfoLinkBox {...props}>
        {handleClickFavStar && (
          <div style={{ position: 'absolute', top: 10, right: 10 }}>
            <FavoriteStar
              onClick={handleClickFavStar}
              isFavorite={isFavorite}
            />
          </div>
        )}

        <Image imageUrl={imageUrl} />

        <Bulletlist
          bulletType="icons"
          bulletIconStyle="solid"
          items={listItems}
          iconMarginRight="25px"
        />

        {(notificationHeadline || notificationDescription) && (
          <div style={{ width: '100%' }}>
            <Notification
              headline={notificationHeadline}
              description={notificationDescription}
            />
          </div>
        )}

        {cta && (
          <Button
            buttonColor="primary"
            buttonTextColor="white"
            buttonTarget="_blank"
            buttonLabel={cta.label}
            buttonHref={cta.href}
          />
        )}
      </StyledInfoLinkBox>
    </Box>
  );
};

export default InfoLinkBox;
