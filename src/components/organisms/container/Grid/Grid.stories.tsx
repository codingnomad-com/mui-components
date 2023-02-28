import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import { Grid as GridComponent } from './Grid';
import GridItem from './GridItem';
import { GridProps } from './interfaces/GridProps';

export default {
  title: 'Organisms/Container/Grid',
  component: GridComponent,
  argTypes: {},
} as Meta;

const GridTemplate: Story<GridProps> = (args: GridProps): ReactElement => {
  return (
    <GridComponent {...args}>
      <GridItem>Test</GridItem>

      <GridItem lg={3}>Test</GridItem>

      <GridItem>Test</GridItem>
    </GridComponent>
  );
};

export const Grid = GridTemplate.bind({});

Grid.args = {};
