import React, { FC, ReactElement, MouseEvent } from 'react';

import Fontawesome from '@basics/atoms/icons/fontawesome/Fontawesome';
import Label from '@basics/atoms/formElements/label/Label';
import { FavoriteStarProps } from '@/interfaces';
import { StyledFavoriteStar } from './FavoriteStar.styles';

const FavoriteStar: FC<FavoriteStarProps> = (props): ReactElement => {
  const {
    favoriteStarActiveColor = 'primary',
    favoriteStarColor = 'darkGray',
    favoriteStarLabelActiveColor,
    favoriteStarLabelColor,
    favoriteStarLabel,
    favoriteStarIcon,
    isFavorite = false,
    onClick,
  } = props;

  const iconStyle = isFavorite ? 'solid' : 'regular';
  const iconColor = isFavorite ? favoriteStarActiveColor : favoriteStarColor;
  const labelColor = isFavorite
    ? favoriteStarLabelActiveColor
    : favoriteStarLabelColor;

  const handleClick = (e: MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <StyledFavoriteStar {...props} onClick={handleClick}>
      <Fontawesome
        iconName={favoriteStarIcon || 'star'}
        iconColor={iconColor}
        iconStyle={iconStyle}
      />

      {favoriteStarLabel && (
        <Label label={favoriteStarLabel} labelColor={labelColor} />
      )}
    </StyledFavoriteStar>
  );
};

export default FavoriteStar;
