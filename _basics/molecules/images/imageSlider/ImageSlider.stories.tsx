import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import ImageSliderComponent from './ImageSlider';
import { ImageSliderProps } from '@/interfaces';

export default {
  title: 'Basic Components/Molecules/Images/Image Slider',
  component: ImageSliderComponent,
  argTypes: {},
} as Meta;

const ImageSliderTemplate: Story<ImageSliderProps> = (
  args: ImageSliderProps
): ReactElement => <ImageSliderComponent {...args} />;

export const ImageSlider = ImageSliderTemplate.bind({});

ImageSlider.args = {
  imageSliderHeight: '400px',
  imageSliderSlides: [
    {
      imageSliderImageUrl:
        'https://via.placeholder.com/2600x4400.png?text=Bild+1',
      imageSliderContentPosition: 'left',
      imageSliderContent: {
        imageSliderContentIntro: 'Introzeile',
        imageSliderContentHeadline: 'Headline Bild 1',
        imageSliderContentText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imageSliderContentButton: {
          buttonLabel: 'Call to action',
          buttonSize: 'normal',
          buttonColor: 'primary',
          buttonBorderColor: 'primary',
          butonTarget: '_blank',
          buttonHref: 'https://www.google.de/',
          buttonTextColor: 'white',
          iconName: 'arrow-right',
          iconStyle: 'regular',
          iconPosition: 'right',
        },
      },
      imageSliderSlideContentPosition: 'left',
    },
    {
      imageSliderImageUrl:
        'https://via.placeholder.com/1600x1400.png?text=Bild+2',
      imageSliderContentPosition: 'right',
      imageSliderContent: {
        imageSliderContentIntro: 'Introzeile',
        imageSliderContentHeadline: 'Headline Bild 2',
        imageSliderContentText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imageSliderContentButton: {
          buttonLabel: 'Call to action',
          buttonSize: 'normal',
          buttonColor: 'primary',
          buttonBorderColor: 'primary',
          butonTarget: '_blank',
          buttonHref: 'https://www.google.de/',
          buttonTextColor: 'white',
          iconName: 'arrow-right',
          iconStyle: 'regular',
          iconPosition: 'right',
        },
      },
    },
    {
      imageSliderImageUrl:
        'https://via.placeholder.com/2100x3400.png?text=Bild+3',
      imageSliderContentPosition: 'center',
      imageSliderContent: {
        imageSliderContentIntro: ' 3 Introzeile',
        imageSliderContentHeadline: 'Headline Bild 3',
        imageSliderContentText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imageSliderContentButton: {
          buttonLabel: 'Call to action',
          buttonSize: 'normal',
          buttonColor: 'primary',
          buttonBorderColor: 'primary',
          butonTarget: '_blank',
          buttonHref: 'https://www.google.de/',
          buttonTextColor: 'white',
          iconName: 'arrow-right',
          iconStyle: 'regular',
          iconPosition: 'right',
        },
      },
    },
    {
      imageSliderImageUrl:
        'https://via.placeholder.com/1200x2400.png?text=Bild+4',
    },
  ],
};
