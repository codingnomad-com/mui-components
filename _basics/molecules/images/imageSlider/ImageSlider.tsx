import React, { FC, ReactElement, useEffect } from 'react';

import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Button from '@basics/atoms/formElements/button/Button';
import Headline from '@basics/atoms/typography/headline/Headline';
import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import { ImageSliderProps } from '@/interfaces';
import {
  StyledImageSlider,
  StyledImageSliderContent,
} from './ImageSlider.styles';

const ImageSlider: FC<ImageSliderProps> = (props): ReactElement => {
  const {
    imageSliderSlides,
    imageSliderHeight,
    autoplay,
    sliderOptions,
    wrapperStyles,
  } = props;

  useEffect(() => {
    if (imageSliderSlides.length > 1) {
      SwiperCore.use([Pagination]);
    }

    SwiperCore.use([Autoplay]);
  }, [imageSliderSlides]);

  return (
    <StyledImageSlider
      imageSliderHeight={imageSliderHeight}
      style={wrapperStyles}
    >
      <Swiper
        className="ImageSlider"
        pagination={{ clickable: true }}
        loop={imageSliderSlides.length > 1}
        allowTouchMove={imageSliderSlides.length > 1}
        autoplay={autoplay}
        autoHeight={false}
        height={parseInt(imageSliderHeight, 10)}
        {...sliderOptions}
      >
        {imageSliderSlides.map((imageSliderSlide, index) => {
          const {
            imageSliderImageUrl,
            imageSliderContentPosition,
            imageSliderContent,
            imageSliderContentBackgroundColor,
          } = imageSliderSlide;
          const {
            imageSliderContentIntro,
            imageSliderContentHeadline,
            imageSliderContentText,
            imageSliderContentButton,
          } = imageSliderContent || {};

          if (!imageSliderImageUrl) {
            return null;
          }

          return (
            <SwiperSlide
              className="slide"
              style={{
                backgroundImage: `url('${imageSliderImageUrl}')`,
              }}
              key={index}
            >
              {imageSliderContent && (
                <StyledImageSliderContent
                  imageSliderContentPosition={imageSliderContentPosition}
                  imageSliderContentBackgroundColor={
                    imageSliderContentBackgroundColor
                  }
                >
                  {imageSliderContentIntro && (
                    <Headline headlineLevel="h4" color="secondary">
                      {imageSliderContentIntro}
                    </Headline>
                  )}

                  {imageSliderContentHeadline && (
                    <Headline headlineLevel="h2" color="black">
                      {imageSliderContentHeadline}
                    </Headline>
                  )}

                  {imageSliderContentText && (
                    <Paragraph>{imageSliderContentText}</Paragraph>
                  )}

                  {imageSliderContentButton && (
                    <Button {...imageSliderContentButton} />
                  )}
                </StyledImageSliderContent>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledImageSlider>
  );
};

export default ImageSlider;
