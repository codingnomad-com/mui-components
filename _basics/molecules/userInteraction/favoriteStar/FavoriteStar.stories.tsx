import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import FavoriteStarComponent from './FavoriteStar';
import { FavoriteStarProps } from '@/interfaces';

export default {
  title: 'Basic Components/Molecules/User Interaction/Favorite Star',
  component: FavoriteStarComponent,
  argTypes: {},
} as Meta;

const FavoriteStarTemplate: Story<FavoriteStarProps> = (
  args: FavoriteStarProps
): ReactElement => <FavoriteStarComponent {...args} />;

export const FavoriteStar = FavoriteStarTemplate.bind({});

FavoriteStar.args = {
  favoriteStarLabel: '',
  favoriteStarColor: 'darkGray',
  favoriteStarActiveColor: 'primary',
  isFavorite: false,
  favoriteStarLabelColor: 'darkGray',
  favoriteStarLabelActiveColor: 'primary',
  favoriteStarLabelPosition: 'after',
  onClick: () =>
    window.open('https://lmgtfy.app/?q=was+ist+ein+Baum%3F', '_blank'),
};
