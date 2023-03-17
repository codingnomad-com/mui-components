import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { ImageList as ImageListComponent } from './ImageList';
import { ImageListProps } from './interfaces/ImageListProps';

export default {
  title: 'Molecules/Data/Image List',
  component: ImageListComponent,
  argTypes: {},
} as Meta;

const ImageListTemplate: Story<ImageListProps> = (
  args: ImageListProps,
): ReactElement => {
  return <ImageListComponent {...args} />;
};

export const ImageList = ImageListTemplate.bind({});

ImageList.args = {
  cols: 3,
  rowHight: 123,
};
